import { Card } from "@/components/ui/card";
import CourseInfo from "./CourseInfo";
import FeatureList from "./FeatureList";

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
            className={`text-3xl font-bold text-white mb-4 bg-clip-text text-transparent`}
            data-edit-disabled="true"
          >
            {course.title}
          </h3>
          <p className="text-white/80 mb-6" data-edit-disabled="true">
            {course.description}
          </p>
          <CourseInfo items={course.info} />
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-2xl font-semibold text-white mb-6">
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
