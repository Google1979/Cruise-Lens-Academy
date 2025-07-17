"use client";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import Stage1_PersonalDetailsForm from "./Stage-1-PersonalDetails";
import Stage2CourseSelection from "./Stage-2-CourseSelection";
import Stage3aBeginner from "./Stage-3a-Begineer";
import Stage3bSTCWHolder from "./Stage-3b-STCWHolder";
import Stage3cWorkingCruise from "./Stage-3c-WorkingCruise";
import Stage4ResumeUpload from "./Stage-4-ResumeUpload";
import {
  Stage1FormValues,
  Stage2FormValues,
  Stage3aFormValues,
  Stage3bFormValues,
  Stage3cFormValues,
  Stage4FormValues,
  StepData,
} from "./applyFormStore";
import IsSubmittingDialog from "./IsSubmittingDialog";
import IsSubmittedDialog from "./IsSubmittedDialog";
import { uploadData } from "./applyFormAction";
import { toast } from "sonner";

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepData, setStepData] = useState<StepData>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalSteps = 4;

  function handleStepData<K extends keyof StepData>(
    step: K,
    data: StepData[K]
  ) {
    setStepData((prev) => ({ ...prev, [step]: data }));
  }

  const handleCategorySelection = (
    category: Stage2FormValues["courseCategory"]
  ) => {
    setSelectedCategory(category);
    handleStepData("courseSelection", { courseCategory: category });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      setError(null); // Clear errors when moving to next step
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setError(null); // Clear errors when moving to previous step
    }
  };

  const handleFinalSubmit = async (resumeData: Stage4FormValues) => {
    setIsSubmitting(true);
    setError(null); // Clear any previous errors
    handleStepData("resumeUpload", resumeData);
    const finalStepData: StepData = {
      ...stepData,
      resumeUpload: resumeData,
    };

    const res = await uploadData(finalStepData);
    if (res.error) {
      console.error("Error uploading data:", res.error);
      setError(res.error);
      toast.error("Failed to submit application. Please try again.");
      setIsSubmitting(false);
      return;
    }

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Personal Details";
      case 2:
        return "Course Selection";
      case 3:
        return "Specific Questions";
      case 4:
        return "Resume Upload";
      default:
        return "";
    }
  };

  if (isSubmitting) {
    return <IsSubmittingDialog />;
  }

  if (submitted) {
    return <IsSubmittedDialog />;
  }

  return (
    <>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-[#c7eafd]">
            Step {currentStep} of {totalSteps}: {getStepTitle()}
          </span>
          <span className="text-sm text-[#c7eafd]">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <Progress
          value={(currentStep / totalSteps) * 100}
          className="h-2 bg-[#181824]/50"
        />
      </div>

      {/* Form Content */}
      <div className="bg-[#181824]/80 shadow-lg rounded-lg p-8">
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-md">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-red-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-red-400 text-sm font-medium">
                Application Submission Failed
              </p>
            </div>
            <p className="text-red-300 text-sm mt-1">{error}</p>
            <button
              onClick={() => setError(null)}
              className="mt-2 text-red-400 hover:text-red-300 text-sm underline"
            >
              Dismiss
            </button>
          </div>
        )}
        {currentStep === 1 && (
          <Stage1_PersonalDetailsForm
            onNext={(data: Stage1FormValues) => {
              handleStepData("personalDetails", data);
              nextStep();
            }}
          />
        )}
        {currentStep === 2 && (
          <Stage2CourseSelection
            onNext={(data: Stage2FormValues) => {
              handleCategorySelection(data.courseCategory);
              nextStep();
            }}
            onPrevious={prevStep}
          />
        )}
        {currentStep === 3 && selectedCategory === "beginner" && (
          <Stage3aBeginner
            onNext={(data: Stage3aFormValues) => {
              handleStepData("specificQuestions", data);
              nextStep();
            }}
            onPrevious={prevStep}
          />
        )}
        {currentStep === 3 && selectedCategory === "stcw" && (
          <Stage3bSTCWHolder
            onNext={(data: Stage3bFormValues) => {
              handleStepData("specificQuestions", data);
              nextStep();
            }}
            onPrevious={prevStep}
          />
        )}
        {currentStep === 3 && selectedCategory === "photographer" && (
          <Stage3cWorkingCruise
            onNext={(data: Stage3cFormValues) => {
              handleStepData("specificQuestions", data);
              nextStep();
            }}
            onPrevious={prevStep}
          />
        )}
        {currentStep === 4 && (
          <Stage4ResumeUpload
            onSubmit={handleFinalSubmit}
            onPrevious={prevStep}
          />
        )}
      </div>
    </>
  );
}
