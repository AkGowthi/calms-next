"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function PrivacyPolicyPage() {
  const toc = useMemo(
    () => [
      {
        header: "Privacy Policy",
        items: [
          { id: "information-we-collect", label: "Information We Collect" },
          { id: "how-we-use-your-information", label: "How We Use Your Information" },
          { id: "legal-basis-for-processing", label: "Legal Basis for Processing" },
          { id: "data-sharing-and-storage", label: "Data Sharing & Storage" },
          { id: "how-long-we-keep-it", label: "How long we keep it?", nested: true },
          { id: "how-we-protect-it", label: "How we protect it", nested: true },
          { id: "your-rights", label: "Your Rights" },
        ],
      },
      {
        header: "Cookies Policy",
        items: [
          { id: "what-are-cookies", label: "What Are Cookies?" },
          { id: "types-of-cookies-we-use", label: "Types of Cookies We Use" },
          { id: "strictly-necessary-cookies", label: "Strictly Necessary Cookies", nested: true },
          { id: "performance-and-analytics-cookies", label: "Performance & Analytics Cookies", nested: true },
          { id: "functional-cookies", label: "Functional Cookies", nested: true },
          { id: "marketing-cookies", label: "Marketing Cookies", nested: true },
          { id: "managing-cookies", label: "Managing Cookies" },
          { id: "third-party-cookies", label: "Third-Party Cookies" },
          { id: "updates-to-this-policy", label: "Updates to This Policy" },
        ],
      },
    ],
    []
  );

  const allIds = useMemo(() => toc.flatMap((g) => g.items.map((i) => i.id)), [toc]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const suppressSpyRef = useRef(false);
  

  // Scroll-spy using rAF with "closest to header" heuristic and optional suppression during programmatic scrolls
  useEffect(() => {
    const headerOffset = 110; // approx fixed header

    const getActiveClosest = () => {
      let current: string | null = null;
      let best = Number.POSITIVE_INFINITY;
      for (const id of allIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top - headerOffset;
        const score = Math.abs(top);
        if (score < best) {
          best = score;
          current = id;
        }
      }
      return current ?? allIds[0] ?? null;
    };

    let ticking = false;
    const onScroll = () => {
      if (suppressSpyRef.current) return; // ignore while animating to anchor
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        const id = getActiveClosest();
        if (id && id !== activeId) setActiveId(id);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initialize + handle deep link
    const hash = window.location.hash.replace(/^#/, "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        suppressSpyRef.current = true;
        setActiveId(hash);
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // allow spy after animation
          setTimeout(() => {
            suppressSpyRef.current = false;
          }, 500);
        }, 0);
      }
    } else {
      onScroll();
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [allIds, activeId]);

  // Left panel no longer scrolls independently; no auto-scroll needed

  const handleJump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    suppressSpyRef.current = true;
    setActiveId(id); // update immediately for visual feedback
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Update URL hash without default jump
    if (history.replaceState) {
      history.replaceState(null, "", `#${id}`);
    }
    // Re-enable spy after animation settles
    window.setTimeout(() => {
      suppressSpyRef.current = false;
    }, 500);
  };

  return (
    <div className="w-full mx-auto px-4 md:px-6 xl:px-[120px] py-10 md:py-14">
      {/* Top heading + subtitle */}
      <header className="text-center">
        <h1 className="text-[#0154d6] font-extrabold uppercase tracking-wide text-2xl md:text-3xl">
          Privacy & General Data Protection Regulation Compliance
        </h1>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          We take your privacy seriously. Your personal data is collected and processed in accordance with our Privacy Policy and UK GDPR.
        </p>
      </header>

      {/* Content layout */}
      <div className="mt-16 grid gap-10 md:grid-cols-[260px,1fr] items-start">
        {/* Left: static table of contents */}
        <aside className="hidden md:block sticky top-24 self-start">
          <div>
            {toc.map((group) => (
              <div key={group.header} className="not-prose">
                <h3 className="text-gray-900 font-semibold">{group.header}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.id} className={item.nested ? "pl-4" : undefined}>
                      <a
                        href={`#${item.id}`}
                        onClick={handleJump(item.id)}
                        data-toc-id={item.id}
                        className={`block text-base transition-colors duration-200 ${
                          activeId === item.id ? "text-[#0154d6] font-semibold" : "text-gray-800 hover:text-[#0154d6]"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="h-6" />
              </div>
            ))}
          </div>
        </aside>

        {/* Right: document body */}
        <section className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm px-6 md:px-10 py-8">
          {/* Privacy Policy block */}
          <article>
            <h2 className="text-[#0154d6] font-extrabold text-xl md:text-2xl">Privacy Policy</h2>
            <p className="italic text-gray-600 mt-1">Effective Date : October 2025</p>

            <p className="mt-5 text-gray-800 leading-relaxed">
              We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information in compliance with UK GDPR. Your privacy is important to CALMS International. This Privacy Policy explains the personal data we collect, how we process it, and why.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              CALMS International provides integrated cloud-based solutions to help organisations manage security, workforce operations, and compliance. References to CALMS International products in this statement include our services, software, websites, mobile applications, and related support.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              We encourage you to read this Privacy Policy carefully, as it outlines how we protect your information and your rights under applicable data protection laws. This statement applies to all interactions you have with CALMS International and its solutions that reference or link to this Privacy Policy.
            </p>

            <h3 id="information-we-collect" className="scroll-mt-28 md:scroll-mt-32 mt-8 text-[#0154d6] font-extrabold text-lg md:text-xl">Information We Collect</h3>
            <p className="mt-3 text-gray-800 leading-relaxed">
              CALMS International collects information from you through your interactions with our website, products, and services. Some of this data is provided directly by you—such as your login credentials, contact details, billing information, and communications with us. Other data is collected automatically, including usage patterns (e.g. pages visited, time spent on site) and technical information gathered through cookies and similar tracking technologies, as outlined in our Cookie Policy.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              The type of information we collect depends on how you interact with CALMS International, the services you choose to use, and the settings you select. This information enables us to provide secure, reliable, and personalised experiences across our cloud-based solutions.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              If you represent an organisation using CALMS solutions, we may also collect and process data relating to your company’s account and system usage to ensure compliance, security, and optimal performance of our services.
            </p>

            <h3 id="how-we-use-your-information" className="scroll-mt-28 md:scroll-mt-32 mt-8 text-[#0154d6] font-extrabold text-lg md:text-xl">How We Use Your Information</h3>
            <p className="mt-3 text-gray-800 leading-relaxed">
              We process your personal data solely for legitimate business purposes and in compliance with applicable data protection regulations. This includes using your information to:
            </p>
            <ul className="mt-2 list-disc ml-6 text-gray-800 space-y-1">
              <li>Deliver and improve our services.</li>
              <li>Process payments and issue invoices.</li>
              <li>Communicate with you regarding your account, respond to support requests, and deliver important service notices.</li>
            </ul>
            <p className="mt-4 text-gray-800 leading-relaxed">
              Where you have provided consent, we may also use your marketing preferences to keep you informed about new features, products, or promotions. In addition, we analyse usage data and customer feedback to improve our website, enhance our services, and develop new solutions.
            </p>

            <h3 id="legal-basis-for-processing" className="scroll-mt-28 md:scroll-mt-32 mt-8 text-[#0154d6] font-extrabold text-lg md:text-xl">Legal Basis for Processing</h3>
            <p className="mt-3 text-gray-800 leading-relaxed">
              CALMS International processes personal data in accordance with the UK GDPR and relies on specific lawful bases depending on the context of the processing. We process your data under contractual necessity where required to deliver and manage the services you have subscribed to. We also rely on legitimate interests, such as for receiving communications or the use of non-essential cookies, where lawful consent has been obtained.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              We may also process data to comply with our legal obligations, protect against fraudulent or unauthorised activities, and ensure compliance with applicable regulatory requirements.
            </p>

            <h3 id="data-sharing-and-storage" className="scroll-mt-28 md:scroll-mt-32 mt-8 text-[#0154d6] font-extrabold text-lg md:text-xl">Data Sharing & Storage</h3>
            <p className="mt-3 text-gray-800 leading-relaxed">
              CALMS International does not sell, rent, or trade your personal data. We may share your information only with trusted third-party service providers, such as payment processors, cloud hosting partners, and IT support vendors, strictly for the purpose of delivering our services. All such providers are bound by confidentiality and data protection obligations to handle your information securely and in compliance with applicable law.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              Your personal data is stored using secure systems and industry-standard safeguards. We only retain information for as long as it is necessary to fulfil the purposes described in this Privacy Policy, or as required by legal, regulatory, or contractual obligations. Once data is no longer needed, it will be securely deleted or anonymised.
            </p>

            <h4 id="how-long-we-keep-it" className="scroll-mt-28 md:scroll-mt-32 mt-6 text-[#0154d6] font-extrabold">How long we keep it?</h4>
            <p className="mt-2 text-gray-800 leading-relaxed">
              We only retain personal data for as long as is necessary to provide our services, fulfil contractual or legal obligations, and resolve disputes. The specific retention period depends on the type of data collected and the purposes for which it is processed. Once your information is no longer required, we will securely delete or anonymise it in accordance with applicable data protection regulations.
            </p>

            <h4 id="how-we-protect-it" className="scroll-mt-28 md:scroll-mt-32 mt-6 text-[#0154d6] font-extrabold">How we protect it</h4>
            <p className="mt-2 text-gray-800 leading-relaxed">
              To safeguard your personal data, CALMS International applies industry-standard security measures, including encryption, firewalls, secure server access, strict access controls, two-factor authentication, system updates, and data backups to prevent unauthorised access, misuse, loss, or disclosure.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              While no system can ever be guaranteed to be completely secure, we are committed to continuously enhancing our security practices to ensure your information is protected.
            </p>

            <h3 id="your-rights" className="scroll-mt-28 md:scroll-mt-32 mt-8 text-[#0154d6] font-extrabold text-lg md:text-xl">Your Rights</h3>
            <p className="mt-3 text-gray-800 leading-relaxed">
              Under UK GDPR, you have specific rights regarding your personal data. You may request access to the information we hold about you, and ask that any inaccuracies be corrected or incomplete data updated. You also have the right to request deletion of your data where it is no longer necessary for the purposes for which it was collected.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              Where we process your data based on consent, such as for marketing communications or non-essential cookies, you may withdraw that consent at any time without affecting the lawfulness of prior processing. You may also request the transfer of your data (data portability) to another service provider, where technically feasible.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              If you believe that your rights have been infringed, you have the right to lodge a complaint with the UK Information Commissioner’s Office (ICO). We encourage you to contact us first, so we can address your concerns directly.
            </p>
          </article>

          {/* Cookies Policy block */}
          <article className="mt-10">
            <h2 id="cookies-policy" className="scroll-mt-28 md:scroll-mt-32 text-[#0154d6] font-extrabold text-xl md:text-2xl">Cookies Policy</h2>
            <p className="italic text-gray-600 mt-1">Effective Date : October 2025</p>

            <p className="mt-5 text-gray-800 leading-relaxed">
              We use cookies to enhance your browsing experience and to ensure our services function correctly. This policy explains what cookies are, the types we use, and how you can manage your preferences. By understanding how we use cookies, you can make informed choices about your data and enjoy a more personalised experience with CALMS International.
            </p>

            <h3 id="what-are-cookies" className="scroll-mt-28 md:scroll-mt-32 mt-8 text-[#0154d6] font-extrabold text-lg md:text-xl">What Are Cookies?</h3>
            <p className="mt-3 text-gray-800 leading-relaxed">
              Cookies are small text files stored on your device when you visit our website. They allow us to remember your preferences, improve site functionality, and better understand how you interact with our content.
            </p>

            <h3 id="types-of-cookies-we-use" className="scroll-mt-28 md:scroll-mt-32 mt-8 text-[#0154d6] font-extrabold text-lg md:text-xl">Types of Cookies We Use</h3>
            <p className="mt-3 text-gray-800 leading-relaxed">
              We use different categories of cookies to enhance your browsing experience, ensure our services function properly, and provide insights that allow us to continuously improve our website. Below is a breakdown of the types of cookies we use and their purpose:
            </p>

            <h4 id="strictly-necessary-cookies" className="scroll-mt-28 md:scroll-mt-32 mt-5 text-[#0154d6] font-extrabold">Strictly Necessary Cookies</h4>
            <p className="mt-2 text-gray-800 leading-relaxed">
              These cookies are essential for the basic operation of our website and cannot be disabled within our systems. They enable core functions such as secure login, account authentication, session management, and checkout processes for subscriptions or service payments. Without these cookies, certain services, such as accessing secure areas of the site or completing transactions, would not be possible. Strictly necessary cookies do not collect information for marketing purposes and are used solely to deliver services that you have expressly requested.
            </p>

            <h4 id="performance-and-analytics-cookies" className="scroll-mt-28 md:scroll-mt-32 mt-5 text-[#0154d6] font-extrabold">Performance & Analytics Cookies</h4>
            <p className="mt-2 text-gray-800 leading-relaxed">
              These cookies help us to understand how visitors interact with our website by collecting information such as which pages are visited most frequently, how long users remain on each page, and how they navigate through the site. The data collected is aggregated and anonymised, meaning it does not identify individual users. The insights gained from these cookies enable us to optimise website performance, resolve errors, and enhance the overall user experience. For example, we use analytics tools such as Google Analytics to measure engagement and identify trends in how our services are used.
            </p>

            <h4 id="functional-cookies" className="scroll-mt-28 md:scroll-mt-32 mt-5 text-[#0154d6] font-extrabold">Functional Cookies</h4>
            <p className="mt-2 text-gray-800 leading-relaxed">
              These cookies allow us to remember your preferences and provide a more personalised experience when you return to our website. This includes storing language selections, remembering login details for convenience, and saving display or customisation settings. These cookies ensure that you do not need to reset your preferences each time you visit and help us to tailor the site to your specific needs. While not strictly necessary, these cookies significantly enhance usability and overall user satisfaction.
            </p>

            <h4 id="marketing-cookies" className="scroll-mt-28 md:scroll-mt-32 mt-5 text-[#0154d6] font-extrabold">Marketing Cookies</h4>
            <p className="mt-2 text-gray-800 leading-relaxed">
              These cookies are used to deliver content and advertisements that are relevant to your interests. They may be set by CALMS International or by our advertising partners. These cookies track your browsing activity across websites and may be used to build a profile of your preferences. With your consent, this information helps us to display targeted adverts and measure the effectiveness of our marketing campaigns. Marketing cookies are only activated if you explicitly opt in, and you may withdraw your consent at any time through the cookie banner or your browser settings.
            </p>

            <h3 id="managing-cookies" className="scroll-mt-28 md:scroll-mt-32 mt-8 text-[#0154d6] font-extrabold text-lg md:text-xl">Managing Cookies</h3>
            <p className="mt-3 text-gray-800 leading-relaxed">
              When you first visit our website, a cookie banner will appear, providing you with clear options for managing your preferences. This banner enables you to make an informed decision about whether to accept all cookies, reject non-essential cookies, or customise your settings. You may change your preferences at any time by reopening the cookie settings via the banner (if available) or by adjusting your browser configuration. Most browsers allow you to control cookies through their settings menu, where you can choose to block or delete cookies, receive notifications before cookies are stored, or manage exceptions for specific websites.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              Please note that rejecting or disabling certain categories of cookies, particularly strictly necessary cookies, may result in parts of this website not functioning as intended. For example, essential features such as logging in, completing secure transactions, or saving your personalised settings may be affected. We encourage you to review your choices carefully to ensure you can continue to access all the features and benefits of our services.
            </p>

            <h3 id="third-party-cookies" className="scroll-mt-28 md:scroll-mt-32 mt-8 text-[#0154d6] font-extrabold text-lg md:text-xl">Third-Party Cookies</h3>
            <p className="mt-3 text-gray-800 leading-relaxed">
              In addition to the cookies that CALMS International places directly, some cookies may be set by trusted third-party providers. These third parties support us in delivering enhanced functionality, analytics, and advertising services. For example, analytics cookies may be provided by platforms such as Google Analytics to help us understand how visitors interact with our site. Similarly, payment gateways may use cookies to ensure secure and reliable transactions, while advertising partners may deploy cookies to deliver content that is relevant to your interests.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              We carefully select and work only with third parties that comply with strict data protection and confidentiality standards. However, these providers maintain their own privacy and cookie policies, which govern how they use the data they collect. We recommend reviewing the policies of these third parties for further information on how they process your data and how you can manage your preferences across their services.
            </p>

            <h3 id="updates-to-this-policy" className="scroll-mt-28 md:scroll-mt-32 mt-8 text-[#0154d6] font-extrabold text-lg md:text-xl">Updates to This Policy</h3>
            <p className="mt-3 text-gray-800 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, industry practices, legal or regulatory requirements, or improvements to our services. Any updates will be published on this page with a revised ‘Last Updated’ date, so you can easily see when modifications have been made.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              In the event of significant changes that materially affect your rights or the way we use cookies, we will take reasonable steps to notify you in advance. This may include displaying a prominent notice on our website or, where appropriate, sending you direct communication. We encourage you to review this Cookie Policy periodically to remain informed about how we use cookies and how you can manage your preferences.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
