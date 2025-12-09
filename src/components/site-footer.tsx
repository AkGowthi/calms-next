import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-[#F2F8FF] text-[#282828]">
      <div className="mx-auto w-full px-4 md:px-28">
        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* 1️⃣ Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/images/logo.png"
              alt="CALMS International"
              width={160}
              height={48}
              className="h-16 w-auto"
              style={{ width: "auto" }}
            />
          </div>

          {/* 2️⃣ Our Solutions */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Our Solutions</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Visitor Management System (ViMS)", href: "/solutions/vims" },
                { label: "Time Attendance Management System (TAMS)", href: "/solutions/tams" },
                { label: "Incident Management System (IMS)", href: "/solutions/ims" },
                { label: "Guard Tour System (GTS)", href: "/solutions/gts" },
              ].map((item) => (
                <li key={item.href} className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-0.5 text-gray-500" />
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3️⃣ Resources */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-0.5 text-gray-500" />
                <Link href="https://www.youtube.com/@CALMSInternational" className="hover:underline">
                  Video Demo
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-0.5 text-gray-500" />
                  <span>Download App</span>
                </div>
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <Link href="https://apps.apple.com/in/app/calms-versa/id6446074637" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      iOS
                    </Link>
                  </li>
                  <li>
                    <Link href="https://play.google.com/store/apps/details?id=com.calms.vims" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Android
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* 4️⃣ Contact Us */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gray-600 mt-0.5" />
                <div className="flex flex-col">
                  <Link href="tel:+447778766356" className="hover:underline">
                    +44 777 876 6356
                  </Link>
                  <Link href="tel:+447897916481" className="hover:underline">
                    +44 789 791 6481
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-600 mt-0.5" />
                <div className="flex flex-col">
                  <Link href="mailto:chunwei@calms.com.my" className="hover:underline">
                    chunwei@calms.com.my
                  </Link>
                  <Link href="mailto:guy@calms.com.my" className="hover:underline">
                    guy@calms.com.my
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-600 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-semibold">CALMS International Ltd.</span>
                  <span>STEAMhouse,</span>
                  <span>Belmont Row,</span>
                  <span>Birmingham B4 7RQ,</span>
                  <span>United Kingdom.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white text-center text-xs py-4 text-gray-600 border-t border-gray-100">
        <div className="mx-auto w-full px-4 md:px-28">
          <p>
            2025 © CALMS International. All Rights Reserved.{" "}
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            .{" "}
            <Link href="/terms-and-conditions" className="hover:underline">
              Terms and Conditions
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
