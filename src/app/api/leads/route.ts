import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import {
  sendAdminLeadEmail,
  sendCustomerConfirmationEmail,
} from "@/lib/email-service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const lead = {
      name: body.name?.trim(),
      phone: body.phone?.trim(),
      email: body.email?.trim() || "",
      configuration: body.configuration,
      budget: body.budget,
      purpose: body.purpose,
      timeline: body.timeline,
    };

    // Validation
    if (!lead.name || !lead.phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and phone are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Save Lead
    const { error } = await supabase.from("leads").insert([
      {
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        configuration: lead.configuration,
        budget: lead.budget,
        purpose: lead.purpose,
        timeline: lead.timeline,
      },
    ]);

    if (error) {
      console.error("SUPABASE ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Database error.",
        },
        {
          status: 500,
        }
      );
    }

    // ==========================
    // SEND ADMIN EMAIL
    // ==========================

    try {
      const adminEmail = await sendAdminLeadEmail(lead);

      console.log("ADMIN EMAIL RESPONSE:", adminEmail);

      if (adminEmail.error) {
        console.error("ADMIN EMAIL ERROR:", adminEmail.error);
      }
    } catch (err) {
      console.error("ADMIN EMAIL FAILED:", err);
    }

    // ==========================
    // SEND CUSTOMER EMAIL
    // ==========================

    if (lead.email) {
      try {
        const customerEmail =
          await sendCustomerConfirmationEmail(lead);

        console.log(
          "CUSTOMER EMAIL RESPONSE:",
          customerEmail
        );

        if (customerEmail?.error) {
          console.error(
            "CUSTOMER EMAIL ERROR:",
            customerEmail.error
          );
        }
      } catch (err) {
        console.error(
          "CUSTOMER EMAIL FAILED:",
          err
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully.",
    });

  } catch (error) {

    console.error("ROUTE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}