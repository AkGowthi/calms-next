import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import VerticalTag from "@/components/vertical-tag";
import {
  BarChart,
  Calendar,
  Clock,
  Database,
  Download,
  FileText,
  Globe,
  ShieldCheck,
  TrendingUp,
  Youtube,
} from "lucide-react";

const topFeatures = [
  { icon: "/icons/tams/tams-1.svg", title: "Easy Clock In/ Clock Out" },
  { icon: "/icons/tams/tams-2.svg", title: "Real-Time Data & Tracking" },
  { icon: "/icons/tams/tams-3.svg", title: "Geofence & GPS Location" },
  { icon: "/icons/tams/tams-4.svg", title: "Comprehensive Reporting" },
];

const offeringLeft = [
  {
    icon: Clock,
    title: "Complex OT & Multi-Shift",
    text: "Handles complex overtime calculations and supports multiple shift patterns for accurate and automated attendance management.",
  },
  {
    icon: FileText,
    title: "Reporting & Analytics",
    text: "Generates detailed reports on attendance, absenteeism, and workforce productivity.",
  },
  {
    icon: Calendar,
    title: "Leave Management",
    text: "Clear visibility and simplifies leave request process, enhancing employee satisfaction and ensuring seamless operation data consistency.",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security",
    text: "Uses biometric methods to track attendance, reducing the risk of fraudulent time reporting.",
  },
];

const offeringRight = [
  {
    icon: TrendingUp,
    title: "Increase Productivity",
    text: "Automates tracking process and helps reducing the time spent on manual record-keeping.",
  },
  {
    icon: Database,
    title: "Data Integration",
    text: "Seamlessly integrates with HR and payroll systems, ensuring accurate and efficient data transfer for payroll processing.",
  },
  {
    icon: Globe,
    title: "Remote Workforce Management",
    text: "Tracking field-based employees providing real-time location data and attendance records.",
  },
  {
    icon: BarChart,
    title: "Productivity Report",
    text: "Tracks employee performance when working away from their designated location.",
  },
];



export const metadata = { title: "TAMS" };

export default function TamsPage() {
  return (
    <div className="w-full mx-auto px-4 md:px-6 xl:px-[120px] py-10 md:py-14 font-sans text-[#333]">
      {/* Left vertical label */}
      <VerticalTag label="TAMS" top={140} />
      {/* Solutions tabs styled per reference */}
      <nav className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-base md:text-lg">
        {[
          { label: "Visitor Management System", href: "/solutions/vims" },
          { label: "Time Attendance Management System", href: "/solutions/tams", active: true },
          { label: "Incident Management System", href: "/solutions/ims" },
          { label: "Guard Tour System", href: "/solutions/gts" },
        ].map((t, idx, arr) => (
          <Fragment key={t.href}>
            <Link
              href={t.href}
              className={
                (t.active
                  ? "text-[#0154d6] md:text-white bg-white underline md:no-underline md:bg-[#0154d6] px-5"
                  : "text-gray-500") +
                " inline-flex items-center rounded-md py-2"
              }
              aria-current={t.active ? "page" : undefined}
            >
              {t.label}
            </Link>
            {idx < arr.length - 1 && (
              <span className="hidden md:inline-block h-8 w-0.5 bg-[#2f86e6] rounded" />
            )}
          </Fragment>
        ))}
      </nav>

      {/* Title + subtitle */}
      <header className="text-center mt-12 md:mt-24">
        <h1 className="text-[#282828] font-extrabold uppercase tracking-wide text-2xl md:text-4xl">
          Time Attendance Management System
        </h1>
        {/* <p className="mt-2 text-black font-semibold">
          Simplify workforce management with automated time tracking and scheduling.
        </p>
        <p className="mt-2 text-[#0154d6] italic">
          Boost productivity, ensure compliance, and streamline payroll processes.
        </p> */}
      </header>

      {/* Top feature cards */}
      <section className="mt-12 md:mt-24 grid gap-5 grid-cols-2 lg:grid-cols-4">
        {topFeatures.map((f) => (
          <div
            key={f.title}
            className="rounded-xl bg-gray-100 aspect-square shadow-sm ring-1 ring-gray-200 p-6 flex flex-col justify-center items-center text-center"
          >
            <div className="relative w-20 h-20 md:w-32 md:h-32">
              {/* Using a placeholder if the specific icon doesn't exist, but assuming structure holds */}
              <Image src={f.icon} alt="" fill sizes="64px" className="object-contain" />
            </div>
            <div className="text-sm md:text-base text-gray-700 font-semibold mt-4 md:mt-8">{f.title}</div>
          </div>
        ))}
      </section>

      {/* Placeholder area for SVGs */}
      {/* <div className="mt-8 space-y-8">
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9]">
          <Image
            src="/images/solutions/TAMS/TAMS1.svg"
            alt="TAMS diagram 1"
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-contain"
          />
        </div>
        <div className="relative w-full max-w-5xl mx-auto aspect-[3/4]">
          <Image
            src="/images/solutions/TAMS/TAMS2.svg"
            alt="TAMS diagram 2"
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-contain"
          />
        </div>
      </div> */}

      {/* TAMS Offering */}
      <div className="mt-24">
        <h2 className="text-center text-2xl font-bold text-[#282828] mb-16">
          TAMS Offering
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          <div className="space-y-12">
            {offeringLeft.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-blue-100 shadow-sm flex items-center justify-center text-[#0154D6]">
                    <item.icon size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#282828] text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-12">
            {offeringRight.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-blue-100 shadow-sm flex items-center justify-center text-[#0154D6]">
                    <item.icon size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#282828] text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-24"></div>

      {/* TAMS Features */}
      <div className="mb-24">
        <h2 className="text-center text-2xl font-bold text-[#282828] mb-16">
          TAMS Features
        </h2>
          <div className="relative w-full max-w-full mx-auto aspect-[4/1]">
            <Image
              src="/images/solutions/TAMS/TAMS-Features.svg"
              alt="TAMS Features"
              fill
              className="object-contain"
            />
          </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-24"></div>

      {/* Resources */}
      <div className="mb-12">
        <h2 className="text-center text-xl font-bold text-[#555] mb-12 uppercase tracking-wider">
          RESOURCES
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          {/* Case Study */}
          <div className="flex flex-col items-center gap-6">
            <span className="text-base font-semibold text-[#282828]">Case Study</span>
            <Link
              href="https://drive.google.com/drive/folders/13M2E5c2HNSnvVTaO9xSVv4pqd1-hyhG4?usp=sharing"
              target="_blank"
              className="flex items-center gap-3 bg-[#0154D6] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors w-full max-w-[240px] justify-center shadow-md"
            >
              <Download size={22} /> Download
            </Link>
          </div>

          {/* Video Demo */}
          <div className="flex flex-col items-center gap-6">
            <span className="text-base font-semibold text-[#282828]">Video Demo</span>
            <Link
              href="https://www.youtube.com/@calmstechnologiessdnbhd7689"
              target="_blank"
              className="flex items-center gap-3 bg-[#FF0000] text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors w-full max-w-[240px] justify-center shadow-md"
            >
              <Youtube size={22} /> Watch on Youtube
            </Link>
          </div>

          {/* eBrochure */}
          <div className="flex flex-col items-center gap-6">
            <span className="text-base font-semibold text-[#282828]">eBrochure</span>
            <Link
              href="https://drive.google.com/file/d/1V0w6-40Wy0gd3UXBtZ7uCVS6EC48CIH8/view"
              target="_blank"
              className="flex items-center gap-3 bg-[#0154D6] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors w-full max-w-[240px] justify-center shadow-md"
            >
              <Download size={22} /> Download
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
