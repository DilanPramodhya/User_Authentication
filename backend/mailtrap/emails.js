import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error("Error sending verification", error);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "a3303a08-0a7d-4e87-a6e6-476f17242b2b",
      template_variables: {
        company_info_name: "Company",
        name: name,
      },
    });
    console.log("Welcome Email Sent Successfully", response);
  } catch (error) {
    console.error("Error sending verification", error);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};
