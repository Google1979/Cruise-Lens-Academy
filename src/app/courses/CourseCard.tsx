import { Card } from "@/components/ui/card";
import CourseInfo from "./CourseInfo";
import FeatureList from "./FeatureList";
import ApplyNowBtn from "../ApplyNowBtn";

interface CourseData {
  title: string;
  description: string;
  gradientClass: string;
  info: Array<{
    icon: React.ReactNode;
    text: string;
    highlight?: boolean;
  }>;
  features: Array<{
    title: string;
    items: string[];
  }>;
}

interface SingleCourseProps {
  course: CourseData;
}

export default function SingleCourse({ course }: SingleCourseProps) {
  return (
    <Card className="glass-effect rounded-3xl p-8 lg:p-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h3
            className={`text-3xl font-normal text-white mb-4 bg-clip-text text-transparent`}
            data-edit-disabled="true"
          >
            {course.title}
          </h3>
          <p className="text-white/80 mb-6" data-edit-disabled="true">
            {course.description}
          </p>
          <CourseInfo items={course.info} />

          {/* Apply Now Button */}
          <div className="mt-8">
            <ApplyNowBtn className="inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cruise-gradient h-11 rounded-md text-black font-bold text-lg px-8 py-4 shadow-lg hover:scale-105 transform transition-all duration-200 group" />
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-2xl font-normal text-white mb-6">
            What You Get:
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            {course.features.map((feature, index) => (
              <FeatureList
                key={index}
                title={feature.title}
                features={feature.items}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
