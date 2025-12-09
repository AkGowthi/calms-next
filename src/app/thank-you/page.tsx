import Link from "next/link";
import { Check, ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Thank You",
};

export default function ThankYouPage() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 text-center bg-white">
      {/* Green Checkmark Circle */}
      <div className="w-24 h-24 bg-[#66FF66] rounded-full flex items-center justify-center mb-8 shadow-sm">
        <Check size={48} className="text-white" strokeWidth={3} />
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#282828] uppercase tracking-wide mb-2">
        THANK YOU!
      </h1>
      
      {/* Subheading */}
      <p className="text-lg md:text-xl text-[#555] mb-8">
        for connecting with us
      </p>

      {/* Message */}
      <p className="text-gray-500 max-w-md mb-12 leading-relaxed">
        Cheers! You&apos;ve taken the first step, Our team will be in contact soon.
      </p>

      {/* Go Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#0154D6] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors shadow-md"
      >
        <ChevronLeft size={20} />
        Go Back
      </Link>
    </div>
  );
}
