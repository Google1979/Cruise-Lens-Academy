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
} from "./applyFormStore";
import IsSubmittingDialog from "./IsSubmittingDialog";
import IsSubmittedDialog from "./IsSubmittedDialog";

type StepData = {
  personalDetails?: Stage1FormValues;
  courseSelection?: Stage2FormValues;
  specificQuestions?:
    | (StepData["courseSelection"] extends { courseCategory: "beginner" }
        ? Stage3aFormValues
        : never)
    | (StepData["courseSelection"] extends { courseCategory: "stcw" }
        ? Stage3bFormValues
        : never)
    | (StepData["courseSelection"] extends { courseCategory: "photographer" }
        ? Stage3cFormValues
        : never);
  resumeUpload?: Stage4FormValues;
};

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepData, setStepData] = useState<StepData>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;

  const handleStepData = (step: keyof StepData, data: any) => {
    setStepData((prev) => ({ ...prev, [step]: data }));
  };

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
    handleStepData("courseSelection", { category });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFinalSubmit = async (resumeData: Stage4FormValues) => {
    setIsSubmitting(true);
    handleStepData("resumeUpload", resumeData);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Final Submission Data:", stepData);

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
