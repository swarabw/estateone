import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";
import NewLeadEmail from "@/emails/NewLeadEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const lead = {
      name: body.name,
      phone: body.phone,
      configuration: body.configuration,
      budget: body.budget,
      purpose: body.purpose,
      timeline: body.timeline,
    };

    // ============================
    // Save Lead in Supabase
    // ============================

    const { error: dbError } = await supabase
      .from("leads")
      .insert([lead]);

    if (dbError) {
      console.error("SUPABASE ERROR:");
      console.error(dbError);

      return NextResponse.json(
        {
          success: false,
          message: dbError.message,
        },
        {
          status: 500,
        }
      );
    }

    console.log("✅ Lead saved successfully.");

    // ============================
    // Send Email using Resend
    // ============================

    const { data, error: emailError } = await resend.emails.send({
      from: "EstateOne Realtors <onboarding@resend.dev>",

      to: [
        "estateonerealtors.pune@gmail.com",
      ],

      subject: "🏡 New EstateOne Property Enquiry",

      react: NewLeadEmail({
        ...lead,
      }),
    });

    console.log("EMAIL DATA:");
    console.log(data);

    console.log("EMAIL ERROR:");
    console.log(emailError);

    if (emailError) {
      return NextResponse.json(
        {
          success: false,
          message: emailError.message,
        },
        {
          status: 500,
        }
      );
    }

    console.log("✅ Email sent successfully.");

    return NextResponse.json({
      success: true,
      message: "Lead saved and email sent successfully.",
    });

  } catch (error) {

    console.error("=========== SERVER ERROR ===========");
    console.error(error);
    console.error("====================================");

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