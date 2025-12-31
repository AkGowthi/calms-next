import Link from "next/link";
import { PieChart, Lightbulb, Plus, Rocket } from "lucide-react";

export const metadata = {
  title: "Pricing",
};

const pricingData = [
  {
    title: "VISITOR MANAGEMENT SYSTEM (ViMS)",
    footerText: "Visitor Management System (ViMS)",
    plans: [
      {
        type: "BASIC",
        price: "FREE",
        period: "FOR STARTERS",
        icon: Lightbulb,
        desc: "Perfect for startups",
        features: [
          "Full Portal Access",
          "Create Pre-Appointment",
          "Create Different Visitor Type",
          "Blacklist Function",
          "Emergency Evacuation Report",
          "Configurable Self-Registration URL Based on Visitor Type",
          "1x Admin Login",
          "1x Host Login",
          "1x Guard App",
          "Limit 50 visitors per month",
        ],
        bgColor: "bg-white",
        borderColor: "border-gray-200",
      },
      {
        type: "STANDARD",
        price: "£1,100",
        period: "PER ANNUM",
        icon: PieChart,
        desc: "Get started with the essentials",
        features: [
          "Full Portal Access",
          "Create Pre-Appointment",
          "Create Different Visitor Type",
          "Blacklist Function",
          "Emergency Evacuation Report",
          "Configurable Self-Registration URL Based on Visitor Type",
          "Included:",
          "10x Admin Login",
          "200x Host Login",
          "1x Guard App/Web PC",
          "1x Self Service App",
          "200x Host App",
        ],
        bgColor: "bg-white",
        borderColor: "border-gray-200",
      },
      {
        type: "PREMIUM",
        price: "£2,200",
        period: "PER ANNUM",
        icon: Rocket,
        desc: "Power up your operations",
        features: [
          "Full Portal Access",
          "Create Pre-Appointment",
          "Generate Visitor QR",
          "Create Different Visitor Type",
          "Blacklist Function",
          "Emergency Evacuation Report",
          "Configurable Self-Registration URL Based on Visitor Type",
          "Facility & Hot Desk Booking",
          "Appointment Scheduling",
          "Permit to Work",
          "Dynamic QR",
          "Included:",
          "20x Admin Login",
          "1000x Host Login",
          "2x Guard App/Web PC",
          "2x Self Service App",
          "1000x Host App",
        ],
        bgColor: "bg-[#E0EEFF]",
        borderColor: "border-blue-100",
      },
    ],
    addons: [
      { name: "Receptionist License", price: "£360" },
      { name: "Self-service Kiosk", price: "£450" },
      { name: "Host App for 500 users", price: "£338" },
      { name: "Integration to Access Control", price: "£1500" },
      { name: "Remote Setup & Training", price: "£2500" },
    ],
  },
  {
    title: "TIME ATTENDANCE MANAGEMENT SYSTEM (TAMS)",
    footerText: "Time Attendance Management System (TAMS)",
    plans: [
      {
        type: "BASIC",
        price: "FREE",
        period: "FOR STARTERS",
        icon: Lightbulb,
        desc: "Perfect for startups",
        features: [
          "Basic Shift Report",
          "Mobile Attendance Module (on Android & iOS) for 10 Users",
          "1x Admin Login",
          "10x Host Login",
          "10x Host App",
          "Limit to 10 Users",
        ],
        bgColor: "bg-white",
        borderColor: "border-gray-200",
      },
      {
        type: "STANDARD",
        price: "£1,465",
        period: "PER ANNUM",
        icon: PieChart,
        desc: "Get started with the essentials",
        features: [
          "Basic Shift Report",
          "Mobile Attendance Module (on Android & iOS) for 200 Users.",
          "Included:",
          "1x Face Recognition Device",
          "10x Admin Login",
          "200x Host Login",
          "200x Host App",
        ],
        bgColor: "bg-white",
        borderColor: "border-gray-200",
      },
      {
        type: "PREMIUM",
        price: "£4,500",
        period: "PER ANNUM",
        icon: Rocket,
        desc: "Power up your operations",
        features: [
          "Complex Shift Management",
          "OT Logic Module",
          "Offence Management and Approval Module",
          "Leave Management Module",
          "Mobile Attendance Module (on Android & iOS) for 1000 Users",
          "Included:",
          "2x Face Recognition Device",
          "20x Admin Login",
          "1000x Host Login",
          "1000x Host App",
        ],
        bgColor: "bg-[#E0EEFF]",
        borderColor: "border-blue-100",
      },
    ],
    addons: [
      { name: "Host App for 500 users", price: "£338" },
      { name: "Integration to Access Control", price: "£1500" },
      { name: "Remote Setup & Training", price: "£2500" },
    ],
  },
  {
    title: "INCIDENT MANAGEMENT SYSTEM (IMS)",
    footerText: "Incident Management System (IMS)",
    plans: [
      {
        type: "BASIC",
        price: "FREE",
        period: "FOR STARTERS",
        icon: Lightbulb,
        desc: "Perfect for startups",
        features: [
          "Management Module",
          "Web Incident Module",
          "Workflow Automation Module included",
          "1x Admin Login",
          "1x Host Login",
          "1x Host App",
          "Limit to 50 incident per month",
        ],
        bgColor: "bg-white",
        borderColor: "border-gray-200",
      },
      {
        type: "STANDARD",
        price: "£1,100",
        period: "PER ANNUM",
        icon: PieChart,
        desc: "Get started with the essentials",
        features: [
          "Management Module",
          "Web Incident Module",
          "Workflow Automation Module included",
          "10x Admin Login",
          "200x Host Login",
          "200x Host App",
          "2 Guard Mobile App"
        ],
        bgColor: "bg-white",
        borderColor: "border-gray-200",
      },
      {
        type: "PREMIUM",
        price: "£2,250",
        period: "PER ANNUM",
        icon: Rocket,
        desc: "Get started with the essentials",
        features: [
          "Management Module",
          "Web Incident Module",
          "Workflow Automation Module included",
          "20x Admin Login",
          "1000x Host Login",
          "1000x Host App",
          "4 Guard Mobile App"
        ],
        bgColor: "bg-[#E0EEFF]",
        borderColor: "border-blue-100",
      },
    ],
    addons: [
      { name: "Mobile Apps (per unit)", price: "£115" },
      { name: "Integration to Access Control", price: "£1500" },
      { name: "Remote Setup & Training", price: "£2500" },
    ],
  },
  {
    title: "GUARD TOUR (GTS)",
    footerText: "Guard Tour System (GTS)",
    plans: [
      {
        type: "BASIC",
        price: "FREE",
        period: "FOR STARTERS",
        icon: Lightbulb,
        desc: "Perfect for startups",
        features: [
          "Guard Tour Portal",
          "1x Admin Login",
          "1x Guard Mobile Ap",
          "1 App with limit to 5 checkpoints (GPS/Tag)",
        ],
        bgColor: "bg-white",
        borderColor: "border-gray-200",
      },
      {
        type: "STANDARD",
        price: "£345",
        period: "PER ANNUM",
        icon: PieChart,
        desc: "Get started with the essentials",
        features: [
          "Android Mobile App. Minimum Purchase 3 units",
          "Guard Tour Portal",
          "3x Admin Login",
          "3x Guard Mobile Ap",
          "Unlimited Checkpoint",
        ],
        bgColor: "bg-[#E0EEFF]",
        borderColor: "border-blue-100",
      },
    ],
    addons: [
      { name: "Mobile Apps (per unit)", price: "£115" },
      { name: "Remote Setup & Training", price: "£2500" },
      { name: "NFC Tags(per 10 unit)", price: "£20/pack" },
    ],
  },
];

export default function NewPricingPage() {
  return (
    <div className="w-full mx-auto px-4 md:px-6 xl:px-[120px] py-10 md:py-14 font-sans text-[#333]">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#282828] mb-16 uppercase tracking-wide">
        PRICING
      </h1>

      <div className="space-y-24">
        {pricingData.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-center text-sm md:text-base font-bold text-[#282828] mb-8 uppercase tracking-wider">
              {section.title}
            </h2>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                section.title.includes("(NEW)") || section.title.includes("(GTS)")
                  ? "lg:grid-cols-3 mx-auto max-w-4xl"
                  : "lg:grid-cols-4"
              }`}
            >
              {/* Plans */}
              {section.plans.map((plan, pIdx) => (
                <div
                  key={pIdx}
                  className={`p-6 flex flex-col h-full border ${plan.borderColor} ${plan.bgColor} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#0154D6] flex items-center justify-center text-white">
                      <plan.icon size={20} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#0154D6]">{plan.price}</div>
                      {plan.period && (
                        <div className="text-[10px] font-bold text-[#555] uppercase">
                          {plan.period}
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#282828] mb-1">{plan.type}</h3>
                  <p className="text-xs text-gray-500 italic mb-6">{plan.desc}</p>

                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feat, fIdx) => {
                      const isLastFeature = fIdx === plan.features.length - 1;
                      const isBoldNeeded = plan.type === "BASIC" && isLastFeature;
                      return (
                        <li key={fIdx} className={`flex items-start gap-2 text-sm leading-tight ${isBoldNeeded ? "font-bold text-[#282828] mb-4" : "text-gray-600"}`}>
                          <span className={`mt-0.5 w-1 h-1 rounded-full flex-shrink-0 ${isBoldNeeded ? "bg-[#282828]" : "bg-gray-400"}`} />
                          {feat}
                        </li>
                      );
                    })}
                  </ul>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200/50 text-[10px] text-gray-400 text-center">
                     {section.footerText}
                  </div>
                </div>
              ))}

              {/* Add-ons */}
              <div className="p-6 flex flex-col h-full border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#0154D6] flex items-center justify-center text-white">
                    <Plus size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-[#555] uppercase tracking-wide">
                    ADD-ONS
                  </h3>
                </div>
                
                <p className="text-xs text-gray-400 italic mb-4">Enhance your plan with add-ons</p>

                <ul className="space-y-3">
                  {section.addons.map((addon, aIdx) => (
                    <li key={aIdx} className="flex justify-between items-start text-sm text-gray-600 leading-tight">
                      <div className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-bold text-[#555]">{addon.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Get a Quote Button */}
            <div className="flex justify-end mt-8">
              <Link
                href="/contact"
                className="bg-[#0154D6] text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-[#0143B5] transition-colors inline-flex items-center justify-center"
              >
                Get a Quote
              </Link>
            </div>
            
            {/* Divider line except for the last item */}
            {idx < pricingData.length - 1 && (
              <div className="w-full h-px bg-gray-200 mt-16 mx-auto max-w-4xl"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
