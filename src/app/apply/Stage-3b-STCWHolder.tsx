import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { stage3bFormSchema, Stage3bFormValues } from "./applyFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STCW_COURSES: Stage3bFormValues["stcwCourses"] = [
  "Personal Survival Techniques (PST)",
  "Fire Prevention and Fire Fighting (FPFF)",
  "Elementary First Aid (EFA)",
  "Personal Safety and Social Responsibilities (PSSR)",
  "Security Training for Seafarers with Designated Security Duties (STSDSD)",
  "Passenger Ship Familiarization",
];

interface Stage3bProps {
  onNext?: (data: Stage3bFormValues) => void;
  onPrevious?: () => void;
}

export default function Stage3bSTCWHolder({
  onNext,
  onPrevious,
}: Stage3bProps) {
  const form = useForm<Stage3bFormValues>({
    resolver: zodResolver(stage3bFormSchema),
    defaultValues: {
      stcwCourses: [],
      indianCdc: undefined,
      shipExperience: "",
      photographyExperience: undefined,
      learningMethod: undefined,
    },
  });

  function onSubmit(data: Stage3bFormValues) {
    if (onNext) {
      onNext(data);
    } else {
      console.log(data);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 text-white/80"
      >
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">
            STCW Holders & Ex-Seafarers
          </h2>
          <p className="mb-6 text-[#c7eafd]">
            For those who already hold STCW certificates and may have seafaring
            experience (but not as photographers).
          </p>
        </div>
        <FormField
          control={form.control}
          name="stcwCourses"
          rules={{ required: "Please select at least one course." }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Which STCW courses have you completed? *</FormLabel>
              <FormDescription>Select all that apply.</FormDescription>
              <div className="grid gap-2">
                {STCW_COURSES.map((course, index) => (
                  <FormItem
                    className="flex items-center space-x-3 space-y-0"
                    key={index}
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(course)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...(field.value || []), course]);
                          } else {
                            field.onChange(
                              (field.value || []).filter((c) => c !== course)
                            );
                          }
                        }}
                        id={course}
                      />
                    </FormControl>
                    <FormLabel className="font-normal" htmlFor={course}>
                      {course}
                    </FormLabel>
                  </FormItem>
                ))}
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="indianCdc"
          rules={{ required: "Please select an option." }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you have an Indian CDC? *</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-col space-y-1"
                >
                  {[
                    ["Yes", "Yes"],
                    ["No", "No"],
                    ["In Process", "In Process"],
                  ].map((option, index) => (
                    <FormItem
                      className="flex items-center space-x-3 space-y-0"
                      key={index}
                    >
                      <FormControl>
                        <RadioGroupItem value={option[1]} />
                      </FormControl>
                      <FormLabel className="font-normal">{option[0]}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shipExperience"
          rules={{ required: "Please provide details." }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Have you ever worked on a ship before? If yes, which
                company/role? *
              </FormLabel>
              <FormControl>
                <Input placeholder="Company/Role" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="photographyExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Do you have experience in photography, even as a hobby?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-col space-y-1"
                >
                  {[
                    [
                      "Yes – I've done some shoots",
                      "Yes – I've done some shoots",
                    ],
                    [
                      "No – I've never held a DSLR",
                      "No – I've never held a DSLR",
                    ],
                    ["I'm self-taught", "I'm self-taught"],
                  ].map((option, index) => (
                    <FormItem
                      className="flex items-center space-x-3 space-y-0"
                      key={index}
                    >
                      <FormControl>
                        <RadioGroupItem value={option[1]} />
                      </FormControl>
                      <FormLabel className="font-normal">{option[0]}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="learningMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred learning method:</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-col space-y-1"
                >
                  {[
                    ["Online", "Online"],
                    ["Offline", "Offline"],
                    ["Hybrid", "Hybrid"],
                  ].map((option, index) => (
                    <FormItem
                      className="flex items-center space-x-3 space-y-0"
                      key={index}
                    >
                      <FormControl>
                        <RadioGroupItem value={option[1]} />
                      </FormControl>
                      <FormLabel className="font-normal">{option[0]}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between items-center pt-6">
          <Button
            type="button"
            onClick={onPrevious}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Button
            variant="outline"
            type="submit"
            className="flex items-center gap-2"
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
