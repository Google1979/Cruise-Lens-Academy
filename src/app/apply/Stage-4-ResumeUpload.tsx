import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { ChevronLeft } from "lucide-react";
import { stage4FormSchema, Stage4FormValues } from "./applyFormStore";

const SUPPORTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/jpg",
];

interface Stage4Props {
  onSubmit?: (data: Stage4FormValues) => void;
  onPrevious?: () => void;
}

export default function Stage4ResumeUpload({
  onSubmit,
  onPrevious,
}: Stage4Props) {
  const form = useForm<Stage4FormValues>({
    resolver: zodResolver(stage4FormSchema),
    defaultValues: { files: [] },
  });

  const handleSubmit = (data: Stage4FormValues) => {
    if (onSubmit) {
      onSubmit(data);
    } else {
      // Handle file upload logic here
      console.log(data.files);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 text-white/80"
      >
        <div>
          <h2 className="text-xl font-semibold mb-2 text-white">
            Upload Your Resume or Documents
          </h2>
          <p className="mb-4 text-[#c7eafd]">
            Please upload your latest resume, CDC (if any), or any certification
            you&apos;d like us to review.
            <br />
            Upload up to 10 supported files: PDF, document, or image. Max 10 MB
            per file.
          </p>
        </div>
        <FormField
          control={form.control}
          name="files"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Resume / Documents</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  accept={SUPPORTED_TYPES.join(",")}
                  onChange={(e) => {
                    const files = Array.from(e.target.files ?? []);
                    field.onChange(files);
                  }}
                />
              </FormControl>

              <FormMessage>{fieldState.error?.message}</FormMessage>
              {field.value && field.value.length > 0 && (
                <ul className="mt-2 text-sm">
                  {field.value.map((file: File, idx: number) => (
                    <li key={idx}>{file.name}</li>
                  ))}
                </ul>
              )}
            </FormItem>
          )}
        />

        <div className="flex justify-between items-center pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={onPrevious}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Button
            variant={"outline"}
            type="submit"
            className="flex items-center gap-2"
          >
            Submit Application
          </Button>
        </div>
      </form>
    </Form>
  );
}
