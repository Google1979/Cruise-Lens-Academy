import CourseCard from "./CourseCard";
import { coursesData } from "./courseData";

export default function OurCourses() {
  return (
    <section id="courses" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
            Our Courses
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Tailored programs designed for every stage of your cruise
            photography journey.
          </p>
        </div>

        <div className="space-y-16">
          {coursesData.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
