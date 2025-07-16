"use server";
import {
  StepData,
  Stage3aFormValues,
  Stage3bFormValues,
  Stage3cFormValues,
} from "./applyFormStore";
import { createClient } from "@/utils/supabase/server";

export async function uploadData(stepData: StepData) {
  try {
    const supabase = await createClient();

    const courseCategory = stepData.courseSelection?.courseCategory;

    if (!courseCategory) {
      throw new Error("Course category is required");
    }

    // Base application data common to all categories
    const baseApplicationData = {
      // Personal Details
      full_name: stepData.personalDetails?.full_name,
      email: stepData.personalDetails?.email,
      whatsapp_no: stepData.personalDetails?.whatsapp_no,
      age: parseInt(String(stepData.personalDetails?.age ?? "")),
      city: stepData.personalDetails?.city,
      preferred_way_to_connect:
        stepData.personalDetails?.preferred_way_to_connect,
      how_did_you_here_about_cruise_academy:
        stepData.personalDetails?.how_did_you_here_about_cruise_academy,

      // Resume Upload (file names if any)
      resume_files: stepData.resumeUpload?.files?.map((file) => file.name),

      // Metadata
      submitted_at: new Date().toISOString(),
      status: "pending",
    };

    // Determine table name and specific data based on course category
    let tableName: string;
    // eslint-disable-next-line
    let specificData: any = {};

    switch (courseCategory) {
      case "beginner":
        tableName = "beginner_applications";
        const beginnerData = stepData.specificQuestions as Stage3aFormValues;
        specificData = {
          camera_experience: beginnerData?.cameraExperience,
          hospitality_experience: beginnerData?.hospitalityExperience,
          stcw_open: beginnerData?.stcwOpen,
          training_preference: beginnerData?.trainingPreference,
          message: beginnerData?.message,
        };
        break;

      case "stcw":
        tableName = "stcw_applications";
        const stcwData = stepData.specificQuestions as Stage3bFormValues;
        specificData = {
          stcw_courses: stcwData?.stcwCourses,
          indian_cdc: stcwData?.indianCdc,
          ship_experience: stcwData?.shipExperience,
          photography_experience: stcwData?.photographyExperience,
          learning_method: stcwData?.learningMethod,
        };
        break;

      case "photographer":
        tableName = "photographer_applications";
        const photographerData =
          stepData.specificQuestions as Stage3cFormValues;
        specificData = {
          cruise_lines: photographerData?.cruiseLines,
          last_position: photographerData?.lastPosition,
          camera_systems: photographerData?.cameraSystems,
          skill_eval: photographerData?.skillEval,
          job_switch: photographerData?.jobSwitch,
          anything_else: photographerData?.anythingElse,
        };
        break;

      default:
        throw new Error(`Unknown course category: ${courseCategory}`);
    }

    // Combine base data with specific data
    function randomNumber(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const application_id =
      (stepData.personalDetails?.full_name
        ?.replace(/\s+/g, "_")
        .toLowerCase() || "application") +
      `_application_${Date.now()}_${randomNumber(1000, 9999)}`;

    const applicationData = {
      application_id,
      ...baseApplicationData,
      ...specificData,
    };

    const { data, error } = await supabase
      .from(tableName)
      .insert([applicationData]);

    if (error) {
      console.error(
        `Error uploading ${courseCategory} application data:`,
        error
      );
      throw new Error(
        `Failed to submit ${courseCategory} application: ${error.message}`
      );
    }

    // If files are present, handle file uploads to Supabase Storage
    if (
      stepData.resumeUpload?.files &&
      stepData.resumeUpload.files.length > 0
    ) {
      const fileUploadPromises = stepData.resumeUpload.files.map(
        async (file) => {
          const fileName = `${courseCategory}/${application_id}/${file.name}`;
          const { error: uploadError } = await supabase.storage
            .from("resumes-32984738957984")
            .upload(fileName, file);

          if (uploadError) {
            console.error("Error uploading file:", uploadError);
            throw new Error(
              `Failed to upload file ${file.name}: ${uploadError.message}`
            );
          }

          return fileName;
        }
      );

      const uploadedFiles = await Promise.all(fileUploadPromises);

      // Update the application record with the uploaded file paths
      const { error: updateError } = await supabase
        .from(tableName)
        .update({ resume_file_paths: uploadedFiles })
        .eq("id", application_id);

      if (updateError) {
        console.error("Error updating file paths:", updateError);
        throw new Error(`Failed to update file paths: ${updateError.message}`);
      }
    }

    return { success: true, data, category: courseCategory, table: tableName };
  } catch (error) {
    console.error("Error in uploadData:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
