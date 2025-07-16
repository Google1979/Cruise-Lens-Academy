"use server";
import { createClient } from "@/utils/supabase/server";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function submitContactForm(contactData: ContactFormData) {
  try {
    const supabase = await createClient();

    // Validate required fields
    if (
      !contactData.name ||
      !contactData.email ||
      !contactData.phone ||
      !contactData.message
    ) {
      throw new Error("All fields are required");
    }

    // Prepare the contact submission data
    const submissionData = {
      full_name: contactData.name,
      email: contactData.email,
      phone_number: contactData.phone,
      message: contactData.message,
      submitted_at: new Date().toISOString(),
      status: "new",
    };

    // Insert the contact form data into the database
    const { data, error } = await supabase
      .from("contact")
      .insert([submissionData]);

    if (error) {
      console.error("Error submitting contact form:", error);
      throw new Error(`Failed to submit contact form: ${error.message}`);
    }

    return {
      success: true,
      data,
      message: "Contact form submitted successfully",
    };
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
