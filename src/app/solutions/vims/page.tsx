import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import VerticalTag from "@/components/vertical-tag";
import {
  Files,
  MonitorCheck,
  Network,
  Recycle,
  Shield,
  Siren,
  Target,
  Users,
  Download,
  Youtube,
} from "lucide-react";

const topFeatures = [
  { icon: "/icons/vims/vims-1.svg", title: "Smart Pre‑Registration & QR Check‑In" },
  { icon: "/icons/vims/vims-2.svg", title: "Compliance & Safety Screening" },
  { icon: "/icons/vims/vims-3.svg", title: "Automated Notifications & Pass Management" },
  { icon: "/icons/vims/vims-4.svg", title: "Cloud Analytics & Reporting" },
];

const offeringLeft = [
  {
    icon: Shield,
    title: "Enhanced Security",
    text: "Identifies unauthorized individuals and ensures that only approved visitors gain access while tracking them throughout their visit",
  },
  {
    icon: Target,
    title: "Accurate Record Keeping",
    text: "Maintains digital records for entry and exit times. The data is easily accessible and can be used for audits, compliance, or emergency situations",
  },
  {
    icon: Users,
    title: "Enhanced Professional Image",
    text: "A modern, digital check‑in system gives visitors a positive first impression, reflecting a professional and organized environment",
  },
  {
    icon: Siren,
    title: "Emergency Management",
    text: "Provides a real‑time list of all visitors on‑site, ensuring everyone’s safety and enabling effective management of evacuation procedures",
  },
];

const offeringRight = [
  {
    icon: MonitorCheck,
    title: "Streamlined Check‑in Process",
    text: "Automates the check‑in process, reduces wait times, eliminates paperwork, and allows for a more efficient visitor experience",
  },
  {
    icon: Files,
    title: "Improved Compliance",
    text: "Helps organizations adhere to workflow & approval stringrent record‑keeping requirements by automatically storing & managing visitor data in accordance with PDPA standards",
  },
  {
    icon: Recycle,
    title: "Eco‑Friendly Operations",
    text: "Eliminates the need for paper logs, badges and printed instructions, contributing to sustainability efforts and reducing waste",
  },
  {
    icon: Network,
    title: "Multiple Access Control",
    text: "Integrates with access control systems to restrict entry to certain areas based on the visitor’s purpose, ensuring that sensitive areas are secure",
  },
];



export const metadata = { title: "VIMS" };

export default function VimsPage() {
  return (
    <div className="w-full mx-auto px-4 md:px-6 xl:px-[120px] py-10 md:py-14 font-sans text-[#333]">
      {/* Left vertical label */}
      <VerticalTag label="ViMS" top={140} />
      {/* Solutions tabs styled per reference */}
      <nav className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-base md:text-lg">
        {[
          { label: "Visitor Management System", href: "/solutions/vims", active: true },
          { label: "Time Attendance Management System", href: "/solutions/tams" },
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
          Visitor Management System
        </h1>
        {/* <p className="mt-2 text-black font-semibold">
          Redefine how your organization manages guests with a seamless and secure experience.
        </p>
        <p className="mt-2 text-[#0154d6] italic">
          Professionalize your front desk, strengthen compliance, and elevate visitor experience.
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
              <Image src={f.icon} alt="" fill sizes="64px" className="object-contain" />
            </div>
            <div className="text-sm md:text-base text-gray-700 font-semibold mt-4 md:mt-8">{f.title}</div>
          </div>
        ))}
      </section>

      {/* Placeholder area for two SVGs as requested */}
      {/* <div className="mt-8 space-y-8">
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9]">
          <Image
            src="/images/solutions/VIMS/VIMS1.svg"
            alt="VIMS diagram 1"
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-contain"
          />
        </div>
        <div className="relative w-full max-w-5xl mx-auto aspect-[3/4]">
          <Image
            src="/images/solutions/VIMS/VIMS2.svg"
            alt="VIMS diagram 2"
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-contain"
          />
        </div>
      </div> */}

      {/* ViMS Offering */}
      <div className="mt-24">
        <h2 className="text-center text-2xl font-bold text-[#282828] mb-16">
          ViMS Offering
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

      {/* ViMS Features */}
      <div className="mb-24">
        <h2 className="text-center text-2xl font-bold text-[#282828] mb-8">
          ViMS Features
        </h2>
          <div className="relative w-full max-w-full mx-auto aspect-[4/2]">
            <Image
              src="/images/solutions/VIMS/VIMS-Features.svg"
              alt="ViMS Features"
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
              href="https://drive.google.com/drive/folders/1BuyYcYvVo5aUqOJem2SfVdTzQyxcl1IR?usp=sharing"
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
              href="https://drive.google.com/file/d/1FuEPfNg87hKBZzPg2v1S1ut6TmpGHCU8/view"
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
