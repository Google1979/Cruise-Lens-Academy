import About from "./About";
import Hero from "./Hero";
import OurCourses from "./courses/OurCourses";
import WhyChooseUs from "./WhyChooseUs";
import OurStory from "./OurStory";
// import SuccessStory from "./SuccessStory";
import DocumentationPartner from "./DocumentationPartner";
import RecruitmentPartner from "./RecruitementPartner";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <About />
        <WhyChooseUs />
        <OurCourses />
        <OurStory />
        {/* <SuccessStory /> */}
        <DocumentationPartner />
        <RecruitmentPartner />
      </div>
    </div>
  );
}
