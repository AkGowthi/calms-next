import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Briefcase,
  ChevronRight,
  Cloud,
  Settings2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import BookFreeDemoButton from "@/components/book-free-demo-button";

export const metadata = { title: "CALMS International | Home" };

const arimoFont = `@import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap');`;

export default function Home() {
  const whyChoose = [
    {
      icon: Cloud,
      title: "Cloud-Based Platform & Scalable",
      text: "Deploy globally with ease and reliability. Scale effortlessly from single locations to multinational operations.",
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Security & Compliance",
      text: "Enterprise-grade data protection with full GDPR compliance. Designed with global standards in mind.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      text: "Empowering smarter decisions and measurable ROI through real-time analytics and comprehensive reporting.",
    },
    {
      icon: Briefcase,
      title: "Proven Industry Expertise",
      text: "Trusted by leading enterprises and institutions across diverse sectors worldwide.",
    },
    {
      icon: Settings2,
      title: "Multiple Security Integrations",
      text: "Compatible with different types of access control systems and CCTV for seamless monitoring and management.",
    },
    {
      icon: Zap,
      title: "Real-Time Performance",
      text: "Exceptional uptime and high availability with real-time data accessibility across global regions.",
    },
  ];

  const solutions = [
    {
      id: "vims",
      label: "ViMS",
      title: "Visitor Management System",
      desc: "Smart check-in/check-out with QR codes, digital forms, and automated badge printing for seamless visitor experiences.",
      href: "/solutions/vims",
    },
    {
      id: "tams",
      label: "TAMS",
      title: "Time Attendance Management System",
      desc: "Biometric verification, multi-shift support, and real-time attendance tracking integrated with payroll systems.",
      href: "/solutions/tams",
    },
    {
      id: "ims",
      label: "IMS",
      title: "Incident Management System",
      desc: "Centralized incident logging, real-time tracking, and automated notifications for comprehensive risk management.",
      href: "/solutions/ims",
    },
    {
      id: "gts",
      label: "GTS",
      title: "Guard Tour System",
      desc: "Checkpoint scanning, real-time monitoring, and performance analytics to ensure security patrol accountability.",
      href: "/solutions/gts",
    },
  ];

  const sectors = [
    { src: "/images/sectors/sector-corporate.jpg", label: "Corporate & Industrial" },
    { src: "/images/sectors/sector-schools.jpg", label: "Smart Schools & Universities" },
    { src: "/images/sectors/sector-hospitals.jpg", label: "Hospitals & Healthcares" },
    { src: "/images/sectors/sector-gated.jpg", label: "Gated Communities & Property" },
    { src: "/images/sectors/sector-construction.jpg", label: "Construction & Site Management" },
    { src: "/images/sectors/sector-events.jpg", label: "Events & Exhibitions" },
  ];

  return (
    <div className="flex flex-col text-[#333]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image Placeholder - using a dark overlay for now */}
        <div className="absolute inset-0 z-0">
           <video
             autoPlay
             loop
             muted
             playsInline
             className="absolute inset-0 w-full h-full object-cover"
           >
             <source src="/images/hero-video.mp4" type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-12 text-white">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl leading-tight">
              Driving Innovation in Smart ID, Security & Workforce Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl" style={{ fontFamily: "'Arimo', sans-serif" }}>
              Flexible Deployment. Scalable Performance. Trusted by Sectors Across Industries.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-2 rounded-lg font-normal bg-white text-[#0154D6] hover:bg-gray-100 transition-colors">
                Book Free Demo
              </button>
              <Link
                href="#solutions"
                className="px-8 py-2 rounded-lg font-normal border border-white text-white hover:bg-white hover:text-[#0154D6] transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT CALMS CLOUD */}
      <section className="py-20 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)]">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image with Video */}
            <div className="relative w-full aspect-[4/3]">
              {/* Video inside the tablet - positioned with proper padding to match tablet screen */}
              <div className="absolute inset-0 flex items-center justify-center z-40">
                <div className="relative w-full h-full flex items-center justify-center" style={{ padding: "5.5% 8.5%" }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-fit border-10 border-black rounded-xl"
                  >
                    <source src="/images/Video-Looping.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              {/* Tablet image overlay */}
              <Image
                src="/images/Tab.png"
                alt="CALMS Cloud Dashboard"
                fill
                className="object-contain relative z-20"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-normal text-[#333] mb-4">
                  About CALMS Cloud
                </h2>
                <div className="w-16 h-1 bg-[#0154D6]"></div>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  CALMS Cloud is a <span className="text-[#0154D6] font-normal">secure, scalable, and cloud solution</span> hosting platform that underpins CALMS International's core solutions, including the Visitor Management System (ViMS), Time Attendance Management System (TAMS), Guard Tour System (GTS), and Incident Management System (IMS), Facility Booking System (FaBS).
                </p>
                <p>
                  Built upon the robust and reliable <span className="text-[#0154D6] font-normal">AWS infrastructure</span>, CALMS Cloud delivers exceptional uptime, high availability, and real-time data accessibility across global regions.
                </p>
                <p>
                  Engineered with <span className="text-[#0154D6] font-normal">enterprise-grade data protection</span> and full GDPR compliance, CALMS Cloud empowers organisations to manage visitors, workforce attendance, patrol activities, and incident reporting seamlessly within a centralised, web-based platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE CALMS CLOUD */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-[#333] mb-4">
            Why Choose CALMS?
          </h2>
          <div className="w-16 h-1 bg-[#0154D6] mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
            A comprehensive cloud platform designed for operational excellence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow text-left border border-gray-100"
              >
                <div className="mb-6 text-[#0154D6]">
                  <item.icon size={42} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-normal text-[#333] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPLETE SOLUTION SUITE */}
      <section id="solutions" className="py-20 bg-[linear-gradient(180deg,#F8FBFF_0%,#FFFFFF_100%)]">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-[#333] mb-4">
              Complete Solution Suite
            </h2>
            <div className="w-16 h-1 bg-[#0154D6] mx-auto mb-8"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Four powerful systems working together to transform your security and workforce management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((sol) => (
              <div
                key={sol.id}
                className="bg-white rounded-xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-t-[6px] border-t-[#0154D6] border-x border-b border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <span className="bg-[#0154D6] text-white text-xl font-normal px-6 py-2 rounded-md inline-block">
                    {sol.label}
                  </span>
                </div>
                <h3 className="text-xl font-normal text-[#333] mb-4">
                  {sol.title}
                </h3>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                  {sol.desc}
                </p>
                <Link
                  href={sol.href}
                  className="inline-flex items-center text-[#0154D6] font-normal hover:gap-2 transition-all text-sm"
                >
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link
                href="/solutions"
                className="inline-block bg-[#0154D6] text-white px-10 py-3 rounded-md font-normal hover:bg-blue-700 transition-colors shadow-md"
              >
                View All Solutions
              </Link>
          </div>
        </div>
      </section>

      {/* 5. TRUSTED ACROSS INDUSTRIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-[#333] mb-4">
            Trusted Across Industries
          </h2>
          <div className="w-16 h-1 bg-[#0154D6] mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
            Trusted by diverse industries worldwide for smart security and workforce management solutions
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sectors.map((sector, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                <div className="relative aspect-square scale-110 w-full">
                  <Image
                    src={sector.src}
                    alt={sector.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2 flex items-center justify-center h-20">
                  <p className="pt-2 text-[#333] text-xs font-normal leading-tight">
                    {sector.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
