import { Leaf, Plus, Rocket } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = { title: "Starter" };

export default function StarterPricingDetailsPage() {
  return (
    <div className="bg-white">
      <div className="w-full mx-auto px-4 md:px-6 xl:px-[120px] pt-10 md:pt-14 pb-14">
        {/* Page header */}
        <div className="text-center space-y-2 mb-8">
          <p className="text-[#2f86e6] font-semibold tracking-wide uppercase">Pricing</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1b2b55]">Starter</h1>
          <p className="italic text-[#2f86e6]/90 text-base md:text-lg">
            Pick a plan, unlock access, and start streamlining operations today.
          </p>
        </div>

        {/* Section helper */}
        <Section
          title="VIMS"
          subtitle="Visitor Management System"
          cards={[
            {
              type: "standard",
              price: "£1,100",
              title: "STANDARD",
              bullets: [
                "Perfect for individuals or small teams exploring our platform for the first time.",
              ],
              badge: "Basic",
              cta: true,
              footer: "Access to core modules",
            },
            {
              type: "premium",
              price: "£2,200",
              title: "PREMIUM",
              bullets: [
                "Perfect for individuals or small teams exploring our platform for the first time.",
              ],
              badge: "Premium",
              cta: true,
              footer: "Advanced Modules",
            },
            {
              type: "addons",
              title: "ADD-ONS",
              addons: [
                { label: "Receptionist License", price: "£360" },
                { label: "Self‑service Kiosk", price: "£450" },
                {
                  label: (
                    <>
                      Host App for <Link className="text-[#1a56b6] underline" href="#">500 users</Link>
                    </>
                  ),
                  price: "£338",
                },
              ],
            },
          ]}
        />

        <Divider />

        <Section
          title="TAMS"
          subtitle="Time Attendance Management System"
          cards={[
            {
              type: "standard",
              price: "£1,465",
              title: "STANDARD",
              bullets: [
                "Perfect for individuals or small teams exploring our platform for the first time.",
                (
                  <>
                    Basic App <Link href="#" className="text-[#1a56b6] underline">200 users</Link> Attendance
                  </>
                ),
              ],
              badge: "Basic",
              cta: true,
              footer: "Access to core modules",
            },
            {
              type: "premium",
              price: "£5,625",
              title: "PREMIUM",
              bullets: [
                "Complex Shift Management",
                "Overtime Logic Module",
                "Office Management & Approval",
                (
                  <>
                    Mobile Attendance App for <Link href="#" className="text-[#1a56b6] underline">1000 users</Link>
                  </>
                ),
              ],
              badge: "Premium",
              cta: true,
              footer: "Advanced Modules",
            },
            {
              type: "addons",
              title: "ADD-ONS",
              addons: [
                {
                  label: (
                    <>
                      Mobile App for <Link href="#" className="text-[#1a56b6] underline">500 users</Link>
                    </>
                  ),
                  price: "£338",
                },
              ],
            },
          ]}
        />

        <Divider />

        <Section
          title="IMS"
          subtitle="Incident Management System"
          cards={[
            {
              type: "standard",
              price: "£2,250",
              title: "STANDARD",
              bullets: [
                "Server Management Module",
                (
                  <>
                    Web Incident Module
                    <ul className="list-disc ml-6 mt-1 text-gray-600">
                      <li>Workflow automation</li>
                      <li>Dedicated URL guest submission</li>
                    </ul>
                  </>
                ),
              ],
              badge: "Basic",
              cta: true,
              footer: "Access to core modules",
            },
            {
              type: "addons",
              title: "ADD-ONS",
              addons: [{ label: "Mobile App", price: "£115" }],
            },
          ]}
        />

        <Divider />

        <Section
          title="GTS"
          subtitle="Guard Tour System"
          cards={[
            {
              type: "standard",
              price: "£XXX",
              title: "Mobile App",
              bullets: ["Server Management", "GTS Server Module", "Mobile App"],
              badge: "Basic",
              cta: true,
              footer: "Access to core modules",
              trailingPrice: "£115",
            },
            {
              type: "addons",
              title: "ADD-ONS",
              addons: [{ label: "Mobile App", price: "£115" }],
            },
          ]}
        />
      </div>
    </div>
  );
}

function Divider() {
  return <div className="my-10 h-[3px] bg-gradient-to-r from-[#1e62d7] via-[#66c5ff] to-[#1e62d7] rounded-full" />;
}

type SectionCard =
  | {
      type: "standard" | "premium";
      title: string;
      price: string;
      bullets: (string | ReactNode)[];
      badge: string;
      cta?: boolean;
      footer?: string;
      trailingPrice?: string;
    }
  | {
      type: "addons";
      title: string;
      addons: { label: string | ReactNode; price?: string }[];
    };

function Section({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle: string;
  cards: SectionCard[];
}) {
  return (
    <section className="mt-6">
      <div className="text-center space-y-1 mb-6">
        <h2 className="text-[#1a56b6] text-xl md:text-2xl font-extrabold uppercase">{title}</h2>
        <p className="text-[#1a56b6] text-lg md:text-xl">{subtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c, idx) => (
          <div key={idx} className="">
            {c.type === "addons" ? (
              <div className="rounded-2xl bg-[#f6fbff] ring-1 ring-gray-200 shadow-sm p-6 min-h-[320px] flex">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-b from-[#1a7be9] to-[#54c2ff] flex items-center justify-center text-white shadow">
                      <Plus className="h-8 w-8" />
                    </div>
                    <div className="text-[#1a56b6] text-2xl font-extrabold">{c.title}</div>
                  </div>
                  <ul className="space-y-4 text-gray-800">
                    {c.addons.map((a, i) => (
                      <li key={i} className="flex items-center justify-between pr-2">
                        <div className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500" />
                          <div>{a.label}</div>
                        </div>
                        {a.price ? <div className="text-gray-800">{a.price}</div> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl bg-[#f6fbff] ring-1 ring-gray-200 shadow-md p-6 relative overflow-hidden">
                <div className="absolute right-4 top-4">
                  <span className="inline-block text-xs bg-[#e8f3ff] text-[#1a7be9] px-3 py-1 rounded-full font-semibold">
                    {c.badge}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-b from-[#1a7be9] to-[#54c2ff] flex items-center justify-center text-white shadow">
                    {c.type === "premium" ? <Rocket className="h-7 w-7" /> : <Leaf className="h-7 w-7" />}
                  </div>
                  <div className="ml-auto text-[#1b2b55] text-2xl font-bold">{c.price}</div>
                </div>
                <div className="mt-4">
                  <h3 className="text-[#1a56b6] text-2xl font-extrabold">{c.title}</h3>
                  <p className="text-gray-500 italic">Get started with the essentials</p>
                  <ul className="mt-3 space-y-2 text-gray-800">
                    {c.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500" />
                        <div className="flex-1">{b}</div>
                        {i === c.bullets.length - 1 && c.trailingPrice ? (
                          <div className="text-gray-800 ml-2 whitespace-nowrap">{c.trailingPrice}</div>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <button className="w-full rounded-md bg-gradient-to-r from-[#165fd6] to-[#66c5ff] text-white px-5 py-2 font-semibold shadow-sm">
                    Select Plan
                  </button>
                  {c.footer ? (
                    <div className="mt-4 flex items-center gap-2 text-gray-600">
                      <div className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded bg-gray-400" />
                      </div>
                      <span className="text-sm">{c.footer}</span>
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
