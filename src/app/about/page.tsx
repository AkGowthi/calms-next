import type { Metadata } from "next";
import { Lightbulb, Shield, Award, Leaf } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | CALMS International",
  description: "Learn about CALMS International, a trusted Smart ID Solutions provider.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* HEADER */}
      <div className="w-full py-14 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1b2b55] uppercase tracking-wide">
          About Us
        </h1>
      </div>

      {/* WHO WE ARE */}
      <section className="relative w-full py-10 md:py-16">
        <Image
          src="/images/about-hero.jpeg"
          alt="Who We Are"
          fill
          className="object-cover"
        />
        <div className="relative z-10 w-full mx-auto px-4 md:px-6 xl:px-[120px]">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-stretch bg-[#eff6ff] rounded-r-full overflow-hidden mb-8">
              <div className="w-3 bg-[#0154D6]"></div>
              <h2 className="text-2xl font-bold text-[#1b2b55] py-4 px-10">WHO WE ARE?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              CALMS International represents the United Kingdom presence of CALMS Technologies, a trusted Smart ID Solutions provider with over 23 years of proven experience across the ASEAN region. Founded in Malaysia, we continue to expand globally, delivering secure, scalable, and innovative solutions for schools, offices, healthcare facilities, commercial buildings, and manufacturers.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Our expertise lies in empowering organisations to streamline identity management, access control, and operational efficiency through intelligent automation and integrated systems. As part of our ongoing global expansion, CALMS International embodies our commitment to bringing this proven excellence to the United Kingdom and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="w-full mx-auto px-4 md:px-6 xl:px-[120px] py-10 md:py-16 bg-gray-50/50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
           <div className="relative h-[400px] md:h-[500px] overflow-hidden order-2 md:order-1">
             <Image
                src="/images/about-1.png"
                alt="Vision & Mission"
                fill
                className="object-contain"
              />
          </div>
          <div className="space-y-8 order-1 md:order-2">
            {/* Vision */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-8 bg-[#0154D6]"></div>
                  <h2 className="text-2xl font-bold text-[#1b2b55]">OUR VISION</h2>
                </div>
                <div className="bg-gradient-to-r from-[#efefef] to-white p-6 rounded-r-lg shadow-md border-l-4 border-[#0154D6] ml-4">
                    <p className="text-gray-700">
                        To be the global leader in Smart ID solutions, shaping smarter, safer and greener environments worldwide.
                    </p>
                </div>
            </div>

            {/* Mission */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-8 bg-[#0154D6]"></div>
                  <h2 className="text-2xl font-bold text-[#1b2b55]">OUR MISSION</h2>
                </div>
                <div className="bg-gradient-to-r from-[#efefef] to-white p-6 rounded-r-lg shadow-md border-l-4 border-[#0154D6] ml-4">
                    <p className="text-gray-700">
                        To empower organisations with intelligent identity and access management solutions that enhance security, efficiency and sustainability.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="w-full mx-auto px-4 md:px-6 xl:px-[120px] py-10 md:py-16">
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b2b55] inline-flex items-center gap-4">
                <span className="h-0.5 w-8 bg-[#0154D6]"></span>
                OUR CORE VALUES
                <span className="h-0.5 w-8 bg-[#0154D6]"></span>
            </h2>
            <p className="text-gray-500 mt-2">The principles that guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Constantly evolving through technology and creativity.",
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "Building trust through transparency and reliability.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "Delivering solutions that exceed expectations.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                desc: "Supporting ESG goals for a better future.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden bg-[#eff6ff] p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {/* Decorative Circle */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#dbeafe] rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500 ease-out"></div>

                {/* Icon */}
                <div className="relative w-14 h-14 bg-[#0154D6] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                  <item.icon size={26} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="relative text-2xl font-bold text-[#1b2b55] mb-3">
                  {item.title}
                </h3>
                <p className="relative text-gray-500 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* OUR STORY */}
      {/* OUR STORY */}
      <section className="relative w-full py-10 md:py-16">
        <Image
          src="/images/about-2.png"
          alt="Our Story"
          fill
          className="object-cover"
        />
        <div className="relative z-10 w-full mx-auto px-4 md:px-6 xl:px-[120px]">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-stretch bg-[#eff6ff] rounded-r-full overflow-hidden mb-8">
              <div className="w-3 bg-[#0154D6]"></div>
              <h2 className="text-2xl font-bold text-[#1b2b55] py-4 px-10">OUR STORY</h2>
            </div>
            <div className="space-y-4 text-gray-700 text-justify text-sm md:text-base leading-relaxed">
              <p>
                Building upon our success in Southeast Asia, CALMS Technologies has embarked on an exciting new chapter with the establishment of CALMS International, headquartered at <span className="font-bold">STEAMhouse, Belmont Row, Birmingham B4 7RQ</span>. This strategic expansion marks a significant milestone in our journey under the West Midlands Growth Programme, reinforcing our vision to deliver global-standard solutions tailored to local needs.
              </p>
              <p>
                Our systems operate on UK-based servers with <span className="font-bold">our solutions hosted on AWS in Ireland</span>, ensuring full compliance with UK data protection and GDPR regulations, while upholding the highest standards of reliability, scalability, and trust. Over the years, we have collaborated with industry leaders and strategic partners to deliver impactful digital transformation projects across multiple sectors. These success stories continue to inspire our growth as we extend our footprint into the UK market.
              </p>
              <p>
                Looking ahead, CALMS International remains dedicated to advancing innovation, security, and sustainability across Europe. Our vision is to become a trusted partner in shaping smarter, safer, and greener environments, enabling organisations to achieve operational excellence while supporting global ESG objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
