import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { stage3cFormSchema, Stage3cFormValues } from "./applyFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Stage3cProps {
  onNext?: (data: Stage3cFormValues) => void;
  onPrevious?: () => void;
  currentStep?: number;
}

export default function Stage3cWorkingCruise({
  onNext,
  onPrevious,
  currentStep = 3,
}: Stage3cProps) {
  const form = useForm<Stage3cFormValues>({
    resolver: zodResolver(stage3cFormSchema),
    defaultValues: {
      cruiseLines: "",
      lastPosition: "",
      cameraSystems: "",
      skillEval: undefined,
      jobSwitch: "",
      anythingElse: "",
    },
  });

  const onSubmit = (values: Stage3cFormValues) => {
    if (onNext) {
      onNext(values);
    } else {
      // Fallback submit logic here
      console.log("Stage 3c Data:", values);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 text-white/80"
      >
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white">
            Working Cruise Photographers
          </h2>
          <p className="mb-6 text-[#c7eafd]">
            For those currently working (or recently worked) as cruise
            photographers and want to explore better career options or upskill.
          </p>
        </div>
        <FormField
          control={form.control}
          name="cruiseLines"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="cruiseLines">
                Which cruise line(s) have you worked with? *
              </FormLabel>
              <FormControl>
                <Input
                  id="cruiseLines"
                  placeholder="e.g. Carnival, Royal Caribbean"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastPosition"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="lastPosition">
                What was your last position and contract end date? *
              </FormLabel>
              <FormControl>
                <Input
                  id="lastPosition"
                  placeholder="e.g. Lead Photographer, May 2024"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cameraSystems"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="cameraSystems">
                What camera systems and editing tools are you confident using? *
              </FormLabel>
              <FormControl>
                <Input
                  id="cameraSystems"
                  placeholder="e.g. Canon, Lightroom, Photoshop"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skillEval"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Would you be interested in a skill-based evaluation for
                interview opportunities with other cruise companies? *
              </FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-col space-y-1"
                >
                  {[
                    ["Yes", "Yes"],
                    ["No", "No"],
                    ["Maybe", "Maybe"],
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
          name="jobSwitch"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="jobSwitch">
                Are you looking for a job switch or growth in your current
                career? *
              </FormLabel>
              <FormControl>
                <Input
                  id="jobSwitch"
                  placeholder="e.g. Job switch, Career growth"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="anythingElse"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="anythingElse">
                Anything else we should know?
              </FormLabel>
              <FormControl>
                <Textarea
                  id="anythingElse"
                  placeholder="Share anything relevant..."
                  rows={3}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between items-center pt-6">
          {currentStep > 1 ? (
            <Button
              type="button"
              onClick={onPrevious}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
          ) : (
            <div></div>
          )}

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
