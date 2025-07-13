"use client";
import React, { useState } from "react";
import ShipBackground from "../Background";

const ApplyPage: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-40 py-12 px-4 sm:px-6 lg:px-8">
      {/* <ShipBackground /> */}
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
        </div>

        <div className="bg-[#181824]/80 shadow-lg rounded-lg p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-6 w-6 text-green-600"
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
              <h3 className="text-lg font-medium text-white mb-2">
                Enqruiry Submitted!
              </h3>
              <p className="text-[#c7eafd]">We will reach out to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-[#c7eafd] mb-2"
                  htmlFor="name"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#232336] bg-[#232336]/60 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c7eafd] focus:border-[#c7eafd] transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-[#c7eafd] mb-2"
                  htmlFor="email"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#232336] bg-[#232336]/60 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c7eafd] focus:border-[#c7eafd] transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-[#c7eafd] mb-2"
                  htmlFor="phone"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#232336] bg-[#232336]/60 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c7eafd] focus:border-[#c7eafd] transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-[#c7eafd] mb-2"
                  htmlFor="message"
                >
                  Enter your query? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[#232336] bg-[#232336]/60 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c7eafd] focus:border-[#c7eafd] transition-colors resize-none"
                  placeholder="Enter your query..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cruise-gradient text-[#181824] py-3 px-6 rounded-md font-medium hover:from-[#b2d8f7] hover:to-[#f7b7c7] focus:outline-none focus:ring-2 focus:ring-[#c7eafd] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#181824]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
