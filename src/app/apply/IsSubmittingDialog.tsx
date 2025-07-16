export default function IsSubmittingDialog() {
  return (
    <div className="min-h-screen pt-40 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-16 w-16 text-blue-400 mb-6"
          viewBox="0 0 50 50"
        >
          <circle
            className="opacity-25"
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="5"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M25 5a20 20 0 0 1 0 40"
          />
        </svg>
        <span className="text-lg text-[#c7eafd] font-medium">
          Submitting your application...
        </span>
      </div>
    </div>
  );
}
