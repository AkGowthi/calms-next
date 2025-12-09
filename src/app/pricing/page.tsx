"use client";

import { useState } from "react";
import {
  BadgePercent,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Gem,
  Leaf,
  Rocket,
  X,
} from "lucide-react";
import { RiVipCrownFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

export default function PricingPage() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="bg-white">
        <div className="w-full mx-auto px-4 md:px-6 xl:px-[120px] pt-10 md:pt-14">
          <div className="text-center space-y-2">
            <p className="text-[#2f86e6] font-semibold tracking-wide">
              Pricing
            </p>
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#1b2b55]">
              Start Now. Scale Anytime.
            </h1>
            <p className="italic text-[#2f86e6]/90 text-sm md:text-lg">
              Pick a plan, unlock access, and start streamlining operations
              today.
            </p>
          </div>

          {/* Plans */}
          <div className="mt-16 grid gap-6 md:grid-cols-3 items-center">
            {/* STARTER */}
            <article className="flex flex-col border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-b from-[#1a7be9] to-[#54c2ff] flex items-center justify-center text-white shadow-sm">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <div className="ml-auto flex flex-col items-end gap-2">
                    <span className="inline-block text-xs bg-[#e8f3ff] text-[#1a7be9] px-3 py-1 rounded-full font-medium">
                      Basic
                    </span>
                    <div className="text-[#1a56b6] text-2xl text-end font-bold">
                      £20 / Month
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-[#1a56b6] text-2xl font-extrabold">
                    STARTER
                  </h3>
                  <p className="text-gray-500 italic">
                    Get started with the essentials
                  </p>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    Perfect for individuals or small teams exploring our
                    platform for the first time.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/pricing/starter"
                  className="group inline-flex items-center justify-center gap-2 w-full rounded-md bg-gradient-to-r from-[#165fd6] to-[#66c5ff] text-white px-5 py-2"
                >
                  <span>Select Plan</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <div className="mt-4 flex justify-center items-center gap-2 text-gray-600">
                  <Image src="/icons/pricing/Starter.svg" alt="Starter icon" width={20} height={20} />
                  <span className="text-sm">Access to core modules</span>
                </div>
              </div>
            </article>

            {/* PROFESSIONAL (featured) */}
            <article className="relative">
              {/* Fancy gradient frame */}
              <div className="relative rounded-xl bg-gradient-to-b from-[#1e47d8] to-[#4cb4f5] p-1">
                <div className="rounded-xl bg-gradient-to-b from-[#1e47d8] to-[#4cb4f5] shadow-[inset_0_0_0_2px_white] p-3">
                  {/* Ribbon */}
                  <div className="mx-auto max-w-[420px]">
                    <div className="text-white pt-4 pb-6 flex items-center justify-center gap-2">
                      <RiVipCrownFill className="h-8 w-8" />
                      <span className="text-3xl font-semibold">Best Deal</span>
                    </div>
                  </div>
                  <div className="rounded-[14px] bg-white p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-b from-[#1a7be9] to-[#54c2ff] flex items-center justify-center text-white shadow-sm">
                        <Rocket className="h-8 w-8" />
                      </div>
                      <div className="ml-auto flex flex-col items-end gap-2">
                        <span className="inline-block text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                          Offer Now
                        </span>
                        <div className="text-[#1a56b6] text-2xl text-end font-bold">
                          £69 / Month
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h3 className="text-[#1a56b6] text-2xl font-extrabold">
                        PROFESSIONAL
                      </h3>
                      <p className="text-gray-500 italic">
                        Power up your operations
                      </p>
                      <p className="mt-2 text-gray-700 leading-relaxed">
                        Designed for growing businesses that need more
                        flexibility and control. Unlock advanced features to
                        scale your workflows and enhance productivity.
                      </p>
                    </div>

                    <div className="mt-6">
                      <button
                        className="w-full rounded-md bg-gray-200 text-gray-600 font-semibold py-2 cursor-not-allowed"
                        disabled
                      >
                        Selected
                      </button>
                      <div className="mt-4 flex justify-center items-center gap-2 text-gray-700">
                        <Image src="/icons/pricing/Professional.svg" alt="Professional icon" width={20} height={20} />
                        <span className="text-sm">Advanced analytics & reporting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* CUSTOM */}
            <article className="flex flex-col border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-b from-[#1a7be9] to-[#54c2ff] flex items-center justify-center text-white shadow-sm">
                    <Gem className="h-8 w-8" />
                  </div>
                  <div className="ml-auto flex flex-col items-end gap-2">
                    <span className="inline-flex items-center gap-1 text-xs bg-rose-100 text-rose-600 px-3 py-1 rounded-full font-semibold">
                      <BadgePercent className="h-4 w-4" /> 60% off
                    </span>
                    <span className="text-[#1a56b6] font-semibold">
                      Set an appointment
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-[#1a56b6] text-2xl font-extrabold">
                    CUSTOM
                  </h3>
                  <p className="text-gray-500 italic">
                    Tailored for your enterprise
                  </p>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    Perfect for enterprises with complex needs. We’ll design a
                    package that adapts to your requirements, ensuring security,
                    scalability, and dedicated support.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/book-free-demo"
                  className="group inline-flex items-center justify-center gap-2 w-full rounded-md bg-gradient-to-r from-[#165fd6] to-[#66c5ff] text-white px-5 py-2"
                >
                  <span>Book a call</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <div className="mt-4 flex justify-center items-center gap-2 text-gray-600">
                  <Image src="/icons/pricing/Custom.svg" alt="Custom icon" width={20} height={20} />
                  <span className="text-sm">Customizable modules</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BREAKDOWN */}
      <section className="mt-12">
        <div className="w-full mx-auto px-4 md:px-6 xl:px-[120px]">
          <div className="rounded-2xl bg-[#f6f7fb] ring-1 ring-gray-200 overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="w-full flex items-center justify-between px-6 md:px-8 py-4"
              aria-expanded={open}
            >
              <span className="text-[#1a56b6] font-extrabold tracking-wide">
                BREAKDOWN
              </span>
              {open ? (
                <ChevronUp className="h-6 w-6 text-[#1a56b6]" />
              ) : (
                <ChevronDown className="h-6 w-6 text-[#1a56b6]" />
              )}
            </button>

            {open && (
              <div className="mx-6 md:mx-8 mb-6 md:mb-8 p-6 md:p-10 rounded-2xl bg-white">
                <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-start">
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-b from-[#1a7be9] to-[#54c2ff] flex items-center justify-center text-white shadow-sm">
                        <Rocket className="h-7 w-7" />
                      </div>
                      <div>
                        <div className="text-[#1a56b6] font-extrabold text-xl">
                          Professional
                        </div>
                        <div className="text-gray-500">Monthly</div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-gray-800 font-semibold text-lg">
                        What is included?
                      </h4>
                      <div className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
                        {[
                          "All Starter features",
                          "Advanced analytics & reporting",
                          "Unlimited users",
                          "API access & integrations",
                          "Priority support",
                          "Role-based access control",
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[#1a56b6] font-extrabold text-2xl md:text-3xl">
                      Total = £69
                    </div>
                  </div>
                </div>

                <div className="mt-12 h-[2px] bg-gradient-to-r from-[#1e62d7] via-[#66c5ff] to-[#1e62d7]" />

                <div className="mt-4 md:mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <p className="text-gray-500 italic">
                    • All prices in UK Sterling • Taxes are not included
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-full bg-[#1558d2] text-white px-6 py-2 font-semibold shadow-sm"
                    >
                      Contact Sales
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-full bg-[#14c940] text-white px-6 py-2 font-semibold shadow-sm"
                    >
                      Proceed to payment
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-12 md:py-16">
        <div className="w-full mx-auto px-4 md:px-6 xl:px-[120px]">
          <h2 className="text-center text-[#1a56b6] text-xl md:text-2xl font-extrabold">
            PLAN COMPARISON
          </h2>

          <div className="mt-8 overflow-x-auto">
            <div className="min-w-[720px] rounded-2xl border bg-[#f6f7fb]">
              <div className="grid grid-cols-4 border-b">
                {/* Header row */}
                <div className="px-6 py-4 font-semibold text-[#1a56b6]">
                  Features
                </div>
                <div className="px-6 py-4 text-center font-semibold text-[#1a56b6] border-l">
                  Starter
                </div>
                <div className="px-6 py-4 text-center font-semibold text-[#1a56b6] border-l">
                  Pro
                </div>
                <div className="px-6 py-4 text-center font-semibold text-[#1a56b6] border-l">
                  Custom
                </div>
              </div>

              {[
                {
                  label: "Access to core modules",
                  vals: [true, true, true],
                },
                {
                  label: "Advanced analytics & reporting",
                  vals: [false, true, true],
                },
                { label: "Unlimited users", vals: [false, true, true] },
                {
                  label: "API access & integrations",
                  vals: [false, true, true],
                },
                {
                  label: "Role-based access control",
                  vals: [false, true, true],
                },
                {
                  label: "Dedicated account manager",
                  vals: [false, false, true],
                },
                {
                  label: "Enterprise-grade security",
                  vals: [false, false, true],
                },
                {
                  label: "24/7 SLA-backed support",
                  vals: [false, false, true],
                },
                { label: "Customizable modules", vals: [false, false, true] },
              ].map((row, idx) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-4 items-center border-b last:border-b-0 ${
                    idx % 2 === 0 ? "bg-white/50" : "bg-white/30"
                  }`}
                >
                  <div className="px-6 py-4 text-gray-800">{row.label}</div>
                  {row.vals.map((v, i) => (
                    <div
                      key={i}
                      className="px-6 py-3 flex items-center justify-center border-l"
                    >
                      {v ? (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-[#1e62d7] to-[#66c5ff] text-white shadow">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-300 text-white">
                          <X className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
