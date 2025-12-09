import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Book FREE Demo" };

export default function BookFreeDemoPage() {
  return (
    <div className="w-full mx-auto px-4 md:px-6 xl:px-[120px] py-10 md:py-14">
      {/* Split card: left form + right image with heading */}
      <section className="rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm bg-white grid md:grid-cols-2">
        {/* Left: form and helper text */}
        <div className="bg-gray-100/70 p-6 md:p-8">
          <p className="text-sm md:text-base text-gray-700">
            Submit your details and our representatives will be in touch to schedule a demo tailored to your
            organization’s needs.
          </p>

          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md bg-white border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#2f86e6] focus:ring-2 focus:ring-[#a8caff]"
              />
            </div>
            <div>
              <label htmlFor="company" className="sr-only">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company Name"
                className="w-full rounded-md bg-white border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#2f86e6] focus:ring-2 focus:ring-[#a8caff]"
              />
            </div>
            <div>
              <label htmlFor="workEmail" className="sr-only">
                Work Email
              </label>
              <input
                id="workEmail"
                name="workEmail"
                type="email"
                placeholder="Work Email"
                className="w-full rounded-md bg-white border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#2f86e6] focus:ring-2 focus:ring-[#a8caff]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-md bg-white border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#2f86e6] focus:ring-2 focus:ring-[#a8caff]"
              />
            </div>

            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
              <span>
                I have read and agree to the {""}
                <Link href="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>
              </span>
            </label>

            <button type="submit" className="w-full bg-[#0154d6] text-white py-2 rounded-full font-semibold">
              Submit
            </button>

            <p className="text-center text-sm text-gray-600">
              Not ready yet? {""}
              <Link href="/" className="font-medium underline">
                Go Back
              </Link>
            </p>
          </form>
        </div>

        {/* Right: image with heading */}
        <div className="relative min-h-[360px] md:min-h-[460px]">
          <Image
            src="/images/solutions/IMS.png"
            alt="Analytics dashboard on laptop"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 p-6 md:p-10 flex items-start">
            <h1 className="text-white font-regular tracking-wide uppercase text-2xl md:text-4xl">
              Book FREE Demo
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
