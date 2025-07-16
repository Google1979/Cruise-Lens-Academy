import z from "zod";

export const stage1FormSchema = z.object({
  full_name: z.string().min(2, { error: "Please enter your full name" }),
  email: z.email({ error: "Please enter a valid email address" }),
  whatsapp_no: z.string().min(13, {
    error: "WhatsApp number must be 10 characters long",
  }),
  age: z.coerce
    .number()
    .min(16, { error: "You must be atleast 16 year to enroll" })
    .or(z.literal("")),
  city: z.string().min(1, { error: "Please enter your city" }),
  preferred_way_to_connect: z.array(z.string()).min(1, {
    error: "Please select at least one item",
  }),
  how_did_you_here_about_cruise_academy: z.string(),
});

export type Stage1FormValues = z.infer<typeof stage1FormSchema>;

export const stage2FormSchema = z.object({
  courseCategory: z.literal(["beginner", "stcw", "photographer"], {
    error: "Please select a course category.",
  }),
});

export type Stage2FormValues = z.infer<typeof stage2FormSchema>;

export const stage3aFormSchema = z.object({
  cameraExperience: z.string().min(1, {
    error: "Please describe your camera experience",
  }),
  hospitalityExperience: z.string().min(1, {
    error: "Please describe your hospitality experience",
  }),
  stcwOpen: z.string().min(1, {
    error: "Please specify if you have STCW open",
  }),
  trainingPreference: z.string().min(1, {
    error: "Please select your training preference",
  }),
  message: z.string().optional(),
});

export type Stage3aFormValues = z.infer<typeof stage3aFormSchema>;

export const stage3bFormSchema = z.object({
  stcwCourses: z
    .array(
      z.literal([
        "Personal Survival Techniques (PST)",
        "Fire Prevention and Fire Fighting (FPFF)",
        "Elementary First Aid (EFA)",
        "Personal Safety and Social Responsibilities (PSSR)",
        "Security Training for Seafarers with Designated Security Duties (STSDSD)",
        "Passenger Ship Familiarization",
      ])
    )
    .min(1, {
      error: "Please select at least one STCW course.",
    }),
  indianCdc: z.literal(["Yes", "No", "In Process"], {
    error: "Please specify your Indian CDC status.",
  }),
  shipExperience: z.string().min(1, {
    error: "Please describe your ship experience",
  }),
  photographyExperience: z.string().optional(),
  learningMethod: z.string().optional(),
});

export type Stage3bFormValues = z.infer<typeof stage3bFormSchema>;

export const stage3cFormSchema = z.object({
  cruiseLines: z.string().min(1, { error: "Please enter cruise lines" }),
  lastPosition: z.string().min(1, { error: "Please enter your last position" }),
  cameraSystems: z.string().min(1, { error: "Please specify camera systems" }),
  skillEval: z.literal(["Yes", "No", "Maybe"], {
    error: "Please provide skill evaluation",
  }),
  jobSwitch: z.string().min(1, { error: "Please explain job switch" }),
  anythingElse: z.string().optional(),
});

export type Stage3cFormValues = z.infer<typeof stage3cFormSchema>;

const MAX_FILES = 10;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const SUPPORTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/jpg",
];
export const stage4FormSchema = z.object({
  files: z
    .array(
      z
        .custom<File>((file) => file instanceof File)
        .refine((file) => SUPPORTED_TYPES.includes(file.type), {
          message: "Unsupported file type.",
        })
        .refine((file) => file.size <= MAX_FILE_SIZE, {
          message: "File size exceeds 10 MB.",
        })
    )
    .max(1, { message: `Maximum ${MAX_FILES} files allowed.` })
    .optional(),
});

export type Stage4FormValues = z.infer<typeof stage4FormSchema>;
