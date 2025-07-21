"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronRight } from "lucide-react";
import { stage1FormSchema, Stage1FormValues } from "./applyFormStore";

interface Stage1Props {
  onNext?: (data: Stage1FormValues) => void;
}

export default function Stage1_PersonalDetailsForm({ onNext }: Stage1Props) {
  const form = useForm({
    resolver: zodResolver(stage1FormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      whatsapp_no: "",
      age: 0,
      city: "",
      preferred_way_to_connect: [],
      how_did_you_here_about_cruise_academy: "",
      source_from: "",
    },
  });

  function onSubmit(values: z.infer<typeof stage1FormSchema>) {
    try {
      console.log(values);
      if (onNext) {
        onNext(values);
      }
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 text-white/80"
      >
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Full Name <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="" type="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsapp_no"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>
                Phone number (WhatsApp preferred){" "}
                <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl className="w-full">
                <PhoneInput placeholder="" {...field} defaultCountry="IN" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  type="number"
                  {...field}
                  value={field.value !== undefined ? String(field.value) : ""}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                City & State <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferred_way_to_connect"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Preferred Way To Connect <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <div className="flex flex-col gap-2">
                  {["Whatsapp", "Call", "Email"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={option}
                        checked={field.value?.includes(option)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          if (checked) {
                            field.onChange([...(field.value || []), option]);
                          } else {
                            field.onChange(
                              (field.value || []).filter((v) => v !== option)
                            );
                          }
                        }}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="how_did_you_here_about_cruise_academy"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>
                How did you hear about Cruise Lens Academy?{" "}
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  className="flex flex-col space-y-1"
                >
                  {[
                    ["Instagram", "instagram"],
                    ["Google", "google"],
                    ["Referral", "referral"],
                    ["Other", "other"],
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

        {/* Conditional "From" field that appears when any radio option is selected */}
        {form.watch("how_did_you_here_about_cruise_academy") && (
          <FormField
            control={form.control}
            name="source_from"
            render={({ field }) => (
              <FormItem>
                <FormLabel>From</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Please specify..."
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <div className="flex justify-end items-center pt-6">
          <Button
            variant="outline"
            type="submit"
            className="flex items-center gap-2"
          >
            Next <ChevronRight />
          </Button>
        </div>
      </form>
    </Form>
  );
}
