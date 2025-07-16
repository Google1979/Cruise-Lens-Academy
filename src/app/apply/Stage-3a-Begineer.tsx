import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
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
import { stage3aFormSchema, Stage3aFormValues } from "./applyFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Stage3aProps {
  onNext?: (data: Stage3aFormValues) => void;
  onPrevious?: () => void;
}

export default function Stage3aBeginner({ onNext, onPrevious }: Stage3aProps) {
  const form = useForm<Stage3aFormValues>({
    resolver: zodResolver(stage3aFormSchema),
    defaultValues: {
      cameraExperience: "",
      hospitalityExperience: "",
      stcwOpen: "",
      trainingPreference: "",
      message: "",
    },
  });

  function onSubmit(data: Stage3aFormValues) {
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
          <h2 className="text-2xl font-bold mb-2 text-white">
            Beginner & New to the Sea
          </h2>
          <p className="mb-6 text-[#c7eafd]">
            For applicants with no prior sea experience or photography
            background.
          </p>
        </div>
        <FormField
          control={form.control}
          name="cameraExperience"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Have you used a DSLR or any professional camera before? *
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1"
                >
                  {[
                    ["Yes", "yes"],
                    ["No", "no"],
                    ["Only basic use (phone photography)", "basic"],
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
          name="hospitalityExperience"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Have you ever worked in a hospitality, events, or
                customer-facing role? *
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1"
                >
                  {[
                    ["Yes", "yes"],
                    ["No", "no"],
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
          name="stcwOpen"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Are you open to joining STCW courses, Indian CDC, and applying
                for an INDOS number as part of our training process? *
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1"
                >
                  {[
                    ["Yes", "yes"],
                    ["No", "no"],
                    ["I don't know what this means", "unknown"],
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
          name="trainingPreference"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Do you prefer Online, Offline, or Hybrid training? *
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1"
                >
                  {[
                    ["Online", "online"],
                    ["Offline", "offline"],
                    ["Hybrid (Mix of both)", "hybrid"],
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Any questions or message for us?</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Type your message here..." />
              </FormControl>
              <FormDescription>Optional</FormDescription>

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
            variant={"outline"}
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
