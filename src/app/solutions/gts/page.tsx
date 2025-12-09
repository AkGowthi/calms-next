import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import VerticalTag from "@/components/vertical-tag";
import {
  Activity,
  Clock,
  FileText,
  Nfc,
  Settings,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Download,
  Youtube,
} from "lucide-react";

const topFeatures = [
  { icon: "/icons/gts/gts-1.svg", title: "Real-Time Guard Tracking" },
  { icon: "/icons/gts/gts-2.svg", title: "Incident Reporting & Alerts" },
  { icon: "/icons/gts/gts-3.svg", title: "NFC & QR Checkpoints" },
  { icon: "/icons/gts/gts-4.svg", title: "Automated Scheduling & Reports" },
];

const offeringLeft = [
  {
    icon: ShieldCheck,
    title: "Enhanced Security & Compliance",
    text: "Ensure guards follow assigned patrol routes and schedules.",
  },
  {
    icon: Clock,
    title: "Improved Response Time",
    text: "Real-time alerts enable swift action against security breaches.",
  },
  {
    icon: FileText,
    title: "Increased Accountability",
    text: "Automated logging minimizes human error and enhances reporting accuracy.",
  },
  {
    icon: TrendingUp,
    title: "Cost-Effective Operations",
    text: "Optimize workforce efficiency with automated scheduling and tracking.",
  },
];

const offeringRight = [
  {
    icon: Settings,
    title: "Seamless Integration",
    text: "Compatible with existing security systems for effortless implementation and seamless integration with the Incident Management System.",
  },
  {
    icon: Smartphone,
    title: "Hardware-Independent Solution",
    text: "Supports multiple devices, allowing flexibility in deployment without reliance on proprietary hardware.",
  },
  {
    icon: Nfc,
    title: "NFC & Geo-Location Based Tracking",
    text: "Enhances accuracy and security by verifying checkpoint scans via NFC tags and geo-location data, matching them with GPS, and including a checklist at each location to ensure patrols follow designated routes.",
  },
  {
    icon: Activity,
    title: "Real-Time Tracking & Monitoring",
    text: "Enables live location tracking of guards, providing immediate visibility into patrol progress and ensuring security coverage at all times.",
  },
];



export const metadata = { title: "GTS" };

export default function GtsPage() {
  return (
    <div className="w-full mx-auto px-4 md:px-6 xl:px-[120px] py-10 md:py-14 font-sans text-[#333]">
      {/* Left vertical label */}
      <VerticalTag label="GTS" top={140} />
      {/* Solutions tabs styled per reference */}
      <nav className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-base md:text-lg">
        {[
          { label: "Visitor Management System", href: "/solutions/vims" },
          { label: "Time Attendance Management System", href: "/solutions/tams" },
          { label: "Incident Management System", href: "/solutions/ims" },
          { label: "Guard Tour System", href: "/solutions/gts", active: true },
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
          Guard Tour System
        </h1>
        {/* <p className="mt-2 text-black font-semibold">
          Optimize security patrols with real-time tracking and reporting.
        </p>
        <p className="mt-2 text-[#0154d6] italic">
          Ensure accountability, improve response times, and enhance overall security.
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
            src="/images/solutions/GTS/GTS1.svg"
            alt="GTS diagram 1"
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-contain"
          />
        </div>
        <div className="relative w-full max-w-5xl mx-auto aspect-[3/4]">
          <Image
            src="/images/solutions/GTS/GTS2.svg"
            alt="GTS diagram 2"
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-contain"
          />
        </div>
      </div> */}

      {/* GTS Offering */}
      <div className="mt-24">
        <h2 className="text-center text-2xl font-bold text-[#282828] mb-16">
          GTS Offering
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

      {/* GTS Features */}
      <div className="mb-24">
        <h2 className="text-center text-2xl font-bold text-[#282828] mb-16">
          GTS Features
        </h2>
          <div className="relative w-full max-w-full mx-auto aspect-[4/1]">
            <Image
              src="/images/solutions/GTS/GTS-Features.svg"
              alt="GTS Features"
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
              href="https://drive.google.com/drive/folders/145c183UnQ2jqYrLJ_JKtXXscVcw8o7QH?usp=sharing"
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
              href="https://drive.google.com/file/d/1J41RFnCt9-3sxHhH27x6Z64Bplln97E-/view"
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
