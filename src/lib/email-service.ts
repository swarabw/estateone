import { resend } from "@/lib/resend";
import NewLeadEmail from "@/emails/NewLeadEmail";
import CustomerConfirmationEmail from "@/emails/CustomerConfirmationEmail";

interface Lead {
  name: string;
  phone: string;
  email?: string;
  configuration: string;
  budget: string;
  purpose: string;
  timeline: string;
}

const FROM_EMAIL =
  "EstateOne Realtors <leads@estateonerealtors.in>";

const ADMIN_EMAIL =
  "estateonerealtors.pune@gmail.com";

export async function sendAdminLeadEmail(lead: Lead) {
  try {
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: "🏡 New Kolte Patil Vyana Lead",
      react: NewLeadEmail({
        ...lead,
      }),
    });

    console.log("========== ADMIN EMAIL ==========");
    console.log(response);

    return response;

  } catch (error) {

    console.error("ADMIN EMAIL FAILED");
    console.error(error);

    return {
      data: null,
      error,
    };
  }
}

export async function sendCustomerConfirmationEmail(
  lead: Lead
) {
  if (!lead.email) {
    console.log("Customer email not provided.");
    return null;
  }

  try {
    console.log(
      "Sending confirmation email to:",
      lead.email
    );

    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: [lead.email],
      subject:
        "Thank You for Your Enquiry | Kolte Patil Vyana",
      react: CustomerConfirmationEmail({
        name: lead.name,
      }),
    });

    console.log("========== CUSTOMER EMAIL ==========");
    console.log(response);

    return response;

  } catch (error) {

    console.error("CUSTOMER EMAIL FAILED");
    console.error(error);

    return {
      data: null,
      error,
    };
  }
}