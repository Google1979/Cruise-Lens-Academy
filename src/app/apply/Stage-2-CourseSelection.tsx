import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { stage2FormSchema, Stage2FormValues } from "./applyFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight } from "lucide-react";

const COURSE_CATEGORIES = [
  {
    value: "beginner",
    label: "Beginner & New to the Sea",
  },
  {
    value: "stcw",
    label: "STCW Holders / Ex-Seafarers",
  },
  {
    value: "photographer",
    label: "Working Cruise Photographers",
  },
];

interface Stage2Props {
  onNext?: (data: Stage2FormValues) => void;
  onPrevious?: () => void;
}

export default function Stage2CourseSelection({
  onNext,
  onPrevious,
}: Stage2Props) {
  const form = useForm<Stage2FormValues>({
    resolver: zodResolver(stage2FormSchema),
    defaultValues: {
      courseCategory: undefined,
    },
  });

  const onSubmit = (data: Stage2FormValues) => {
    if (onNext) {
      onNext(data);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 text-white/80"
      >
        <div>
          <h2 className="text-2xl font-normal mb-2 text-white">
            Select Your Path
          </h2>
        </div>
        <FormField
          control={form.control}
          name="courseCategory"
          rules={{ required: "Please select a course category." }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Which course category best describes you? *</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1"
                >
                  {COURSE_CATEGORIES.map((option, index) => (
                    <FormItem
                      className="flex items-center space-x-3 space-y-0"
                      key={index}
                    >
                      <FormControl>
                        <RadioGroupItem value={option.value} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {option.label}
                      </FormLabel>
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
            Continue
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
