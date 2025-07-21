export default function IsSubmittedDialog() {
  return (
    <div className="min-h-screen pt-40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#181824]/80 shadow-lg rounded-lg p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl font-normal text-white mb-4">
            Application Submitted Successfully!
          </h3>
          <p className="text-[#c7eafd] text-lg">
            Thank you! Our team will review your application and reach out
            shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
