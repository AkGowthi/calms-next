"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Phone, X } from "lucide-react";

export default function ContactPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactAction, setContactAction] = useState<"whatsapp" | "call" | null>(null);

  const handleProductChange = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };

  const openContactModal = (action: "whatsapp" | "call") => {
    setContactAction(action);
    setShowContactModal(true);
  };

  const handleContactSelection = (contact: "chunwei" | "guy") => {
    const number = contact === "chunwei" ? "447778766356" : "447897916481";
    const phoneNumber = contact === "chunwei" ? "+447778766356" : "+447897916481";

    if (contactAction === "whatsapp") {
      window.open(`https://wa.me/${number}`, "_blank");
    } else if (contactAction === "call") {
      window.location.href = `tel:${phoneNumber}`;
    }
    setShowContactModal(false);
  };

  return (
    <div className="w-full min-h-screen bg-white pb-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 md:pt-14">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#282828] mb-12 uppercase tracking-wide">
          Contact Us
        </h1>

        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl bg-white">
          {/* Left Side - Image & Contact Cards */}
          <div className="relative w-full lg:w-1/2 bg-gray-200 min-h-[600px] lg:min-h-full">
            {/* Background Image Placeholder */}
            <Image
              src="/images/contact.jpg"
              alt="Contact Background"
              fill
              className="object-cover opacity-90"
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-center gap-4 md:gap-6 bg-black/10">
              {/* WhatsApp Card */}
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg max-w-md mx-auto w-full">
                <div className="flex gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 text-white">
                    <MessageCircle size={20} className="md:hidden" fill="white" />
                    <MessageCircle size={24} className="hidden md:block" fill="white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#282828] text-base md:text-lg">WhatsApp Our Sales Team</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      We will help you find the right products and pricing for your business.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gray-200 my-2 md:my-5"></div>
                <button 
                  onClick={() => openContactModal("whatsapp")}
                  className="block w-full text-center font-bold text-base md:text-lg text-[#282828] hover:text-[#25D366] transition-colors"
                >
                  Whatsapp Now!
                </button>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg max-w-md mx-auto w-full">
                <div className="flex gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0154D6] flex items-center justify-center flex-shrink-0 text-white">
                    <Phone size={20} className="md:hidden" fill="white" />
                    <Phone size={24} className="hidden md:block" fill="white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#282828] text-base md:text-lg">Product and Support</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      If you can&apos;t find the answer you&apos;re looking for, we&apos;re here to lend a hand.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gray-200 my-2 md:my-5"></div>
                <button 
                  onClick={() => openContactModal("call")}
                  className="block w-full text-center font-bold text-base md:text-lg text-[#282828] hover:text-[#0154D6] transition-colors"
                >
                  Call Now!
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-1/2 bg-[#E0EEFF] p-8 md:p-12 flex flex-col justify-center">
            <p className="text-[#555] mb-8 leading-relaxed">
              Your message matters. Fill out the form below and we&apos;ll be in touch as soon as possible.
            </p>

            <form 
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/thank-you";
              }}
            >
              <div>
                <label htmlFor="fullName" className="block text-sm text-gray-600 mb-1 pl-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name..."
                  className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1 pl-1">
                  Work Emails
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email..."
                  className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-3 pl-1">
                  Select the product you are interested :
                </label>
                <div className="space-y-2">
                  {[
                    { id: "vims", label: "Visitor Management System (ViMS)" },
                    { id: "tams", label: "Time Attendance Management System (TAMS)" },
                    { id: "ims", label: "Incident Management System (IMS)" },
                    { id: "gts", label: "Guard Tour System (GTS)" },
                  ].map((product) => (
                    <label key={product.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => handleProductChange(product.id)}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-600">{product.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-1 pl-1">
                  How we can help you?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message..."
                  className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-blue-500 outline-none text-sm resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 pl-1">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-xs text-gray-500">
                  I have read and agree to the
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0154D6] text-white font-bold py-3 rounded-lg uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md mt-4"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Selection Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#282828]">
                {contactAction === "whatsapp" ? "WhatsApp" : "Call"} With
              </h2>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <p className="text-gray-600 mb-6 text-sm">
              {contactAction === "whatsapp" 
                ? "Choose who you'd like to message on WhatsApp:"
                : "Choose who you'd like to call:"}
            </p>

            <div className="space-y-3">
              <button
                onClick={() => handleContactSelection("chunwei")}
                className="w-full p-4 bg-gradient-to-r from-[#25D366] to-[#20BA5C] text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Chun Wei
                <div className="text-xs mt-1 opacity-90">+44 777 876 6356</div>
              </button>

              <button
                onClick={() => handleContactSelection("guy")}
                className="w-full p-4 bg-gradient-to-r from-[#0154D6] to-[#0143B5] text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Guy
                <div className="text-xs mt-1 opacity-90">+44 789 791 6481</div>
              </button>
            </div>

            <button
              onClick={() => setShowContactModal(false)}
              className="w-full mt-4 py-3 text-gray-600 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
