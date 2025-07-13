import { Clock, Calendar, MapPin, IndianRupee, Users } from "lucide-react";

export const coursesData = [
  {
    title: "Course 1 – Beginner & New to the Sea",
    description:
      "Complete beginners, photography students, or creatives who want to start their cruise photography career but have no maritime background or documents.",
    gradientClass: "cruise-gradient",
    info: [
      {
        icon: <Clock className="w-5 h-5 text-blue-300" />,
        text: "Approx. 2 to 3 months",
      },
      {
        icon: <Calendar className="w-5 h-5 text-pink-300" />,
        text: "Every Monday & Thursday",
      },
      {
        icon: <MapPin className="w-5 h-5 text-purple-300" />,
        text: "In-person training facility",
      },
      {
        icon: <IndianRupee className="w-5 h-5 text-green-300" />,
        text: "1,50,000 (GST excluded)",
        highlight: true,
      },
      {
        icon: <Users className="w-5 h-5 text-yellow-300" />,
        text: "Soon available via Propelld, GrayQuest, Bajaj Finserv, IDFC Bank",
      },
    ],
    features: [
      {
        title: "Full documentation support",
        items: [
          "INDOS registration",
          "STCW Training (6 modules)",
          "SID (Seafarer ID)",
          "CDC (Continuous Discharge Certificate)",
          "Approved DG Shipping Medical assistance.",
        ],
      },
      {
        title: "Photography & Editing Training",
        items: [
          "Adobe Lightroom (full workflow)",
          "Adobe Photoshop (retouching & branding)",
          "Adobe Bridge (file handling for onboard workflow)",
        ],
      },
      {
        title: "Cruise Environment Exposure",
        items: [
          "Mock drills, safety awareness",
          "Grooming, discipline, time management onboard",
          "Case studies from real ships",
        ],
      },
      {
        title: "Placement Assistance",
        items: [
          "Internal skill evaluation",
          "Guidance on interviews with our hiring partners",
          "Access to verified placement pathways",
        ],
      },
    ],
  },
  {
    title: "Course 2 – For STCW Holders & Ex-Seafarers",
    description:
      "Photographers or ex-crew members who already hold valid STCW documentation and want to switch to cruise photography or upskill for better cruise roles.",
    gradientClass: "sunset-gradient",
    info: [
      {
        icon: <Clock className="w-5 h-5 text-blue-300" />,
        text: "10 Days",
      },
      {
        icon: <Calendar className="w-5 h-5 text-pink-300" />,
        text: "Mid-month batches every month",
      },
      {
        icon: <MapPin className="w-5 h-5 text-purple-300" />,
        text: "Hybrid (Mumbai)",
      },
      {
        icon: <IndianRupee className="w-5 h-5 text-green-300" />,
        text: "1,00,000 (GST excluded)",
        highlight: true,
      },
    ],
    features: [
      {
        title: "10-Day Skill Upgrade",
        items: [
          "Cruise photography-specific training",
          "Adobe editing, workflow efficiency",
          "Handling DSLR + onboard branding",
          "Case-based mock assignments",
        ],
      },
      {
        title: "Interview & Portfolio Support",
        items: [
          "CV + portfolio polish",
          "HR mock interviews",
          "Soft skills & communication",
        ],
      },
      {
        title: "Evaluation Pathway",
        items: [
          "Internal assessment (scoring out of 100)",
          "If score ≥ 80% → direct job interview support",
          "If score < 80% → free evaluation after 1 week with details of guidance to improve.",
        ],
      },
    ],
  },
  {
    title: "Course 3 – For Working Cruise Photographers",
    description:
      "You're already working onboard but want to grow. Whether it's for switching to a better cruise line, upskilling, or preparing for higher positions — this is your route.",
    gradientClass: "mint-gradient",
    info: [
      {
        icon: <MapPin className="w-5 h-5 text-purple-300" />,
        text: "Online",
      },
      {
        icon: <IndianRupee className="w-5 h-5 text-green-300" />,
        text: "499 (GST excluded)",
        highlight: true,
      },
    ],
    features: [
      {
        title: "Internal Skill Evaluation",
        items: [
          "Upload portfolio",
          "Practical & theoretical assessment",
          "Scoring shared within 3 days",
        ],
      },
      {
        title: "Job Switch Support (if score ≥ 80%)",
        items: [
          "Mock HR interview",
          "CV improvement",
          "Direct job openings via our hiring network",
        ],
      },
      {
        title: "Upskill Offer (if score < 80%)",
        items: [
          "Enroll into Course 2 at a discounted rate",
          "Get re-evaluated later for free",
        ],
      },
    ],
  },
];
