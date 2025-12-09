import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = { title: "CALMS International | Solutions" };

const solutions = [
  {
    id: "vims",
    title: "Visitor Management System (ViMS)",
    image: "/images/solutions/VIMS.png",
    href: "/solutions/vims",
  },
  {
    id: "tams",
    title: "Time Attendance Management System (TAMS)",
    image: "/images/solutions/TAMS.png",
    href: "/solutions/tams",
  },
  {
    id: "ims",
    title: "Incident Management System (IMS)",
    image: "/images/solutions/IMS.png",
    href: "/solutions/ims",
  },
  {
    id: "gts",
    title: "Guard Tour System (GTS)",
    image: "/images/solutions/GTS.png",
    href: "/solutions/gts",
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white min-h-screen py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#282828] uppercase mb-16">
          OUR SOLUTION
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <h2 className="text-lg font-bold text-[#282828] mb-8 leading-tight min-h-[3rem] flex items-center justify-center">
                  {solution.title}
                </h2>

                <div className="mt-auto">
                  <Link
                    href={solution.href}
                    className="inline-flex items-center gap-2 bg-[#0154D6] text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-blue-700 transition-colors"
                  >
                    Learn More <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
