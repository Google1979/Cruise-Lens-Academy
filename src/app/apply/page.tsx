import ApplyForm from "./ApplyForm";
export default function ApplyPage() {
  return (
    <div className="min-h-screen pt-40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-normal text-white mb-4">
            Apply to CruiseLens Academy
          </h1>
          <p className="text-lg text-[#c7eafd]">
            Join our community of learners and start your journey today
          </p>
        </div>
        <ApplyForm />
      </div>
    </div>
  );
}
