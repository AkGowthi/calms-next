import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white">
      <div className="w-full mx-auto px-4 md:px-6 xl:px-[120px] py-10 md:py-14">
        {/* Header */}
        <header className="text-center max-w-4xl mx-auto space-y-2">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide text-[#1a56b6] uppercase">
            Terms and Conditions
          </h1>
          <p className="text-gray-500 italic">Effective Date: October 2025</p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Please read these Terms and Conditions carefully before signing up for the
            services or proceeding further in using this Website or the services provided hereunder
            (as described in this Website). If you do not accept these Terms and Conditions, please do not
            use this Website or the services provided hereunder.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            By using this Website or signing up for the services offered in this Website, you accept all the
            Terms and Conditions below.
          </p>
        </header>

        {/* 1. Definitions */}
        <section className="mt-10 md:mt-14">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a56b6]">
            1. Definitions
          </h2>
          <div className="mt-4 grid md:grid-cols-2">
            {[
              {
                term: "Account",
                text:
                  "means the Account created for the purpose of the User accessing and using the Services offered by the Licensor.",
              },
              {
                term: "Service",
                text:
                  "means software and related hardware that the Licensee has agreed to subscribe and use from this website;",
              },
              {
                term: "Agreement",
                text: "means these Terms and Conditions;",
              },
              {
                term: "Software",
                text:
                  "means the computer and/or mobile applications, including Updates (if any), created by the Licensor and made available from this website;",
              },
              {
                term: "Data",
                text:
                  "means data, information or material provided or submitted by the Licensee or any User in the course of utilizing the Software and Hardware; including Limited Data Set generated;",
              },
              {
                term: "Term",
                text:
                  "means either the period commencing on the date of activation of Account and which period expires on the first anniversary of this date of activation or the period fixed under Clause 3;",
              },
              {
                term: "Hardware",
                text:
                  "means the hardware equipment and devices supplied by the Licensor to Licensee which are to be used together with the Software as listed in the website;",
              },
              {
                term: "Third Party Technology Supplier",
                text:
                  "means the owner or licensor of Third Party Software and Hardware;",
              },
              {
                term: "Intellectual Property Rights",
                text:
                  "means all present and future rights conferred by statute, common law or equity in or in relation to any copyright, trade mark, trade name, logos, trade mark, service mark, other proprietary identifying symbols, get-up or trade dress, industrial design, registered and unregistered design, patent, layout design of integrated circuit, business method, domain name, know how, confidential information, trade secret, circuit layout, computer programs (including source code and executable codes), database, inventions, processes and any other intellectual property right in any field or industry;",
              },
              {
                term: "Third Party Software and Hardware",
                text:
                  "means software or hardware owned by third parties and which are used in Software or Hardware;",
              },
              {
                term: "Unacceptable Use",
                text:
                  "means use of the Software and Hardware or permitting of activities that occur and transactions that are effected under the Licensee’s user accounts for any purpose which is illegal, misleading, defamatory, indecent, obscene, threatening, infringing of any third party proprietary rights, and invasive of personal privacy;",
              },
              {
                term: "Updates",
                text:
                  "means new versions and releases of Software which may include enhancements, new features (extensions to existing functionality) and bug fixes;",
              },
              {
                term: "Licence",
                text:
                  "means a non-exclusive, non-transferable, non‑sub‑licensable licence to use the Software and Hardware granted to the Licensee under this Agreement;",
              },
              {
                term: "Limited Data Set",
                text:
                  "means the data that we generate based on data collected but without identifying actual individual information;",
              },
              {
                term: "Licensee",
                text:
                  "means the party whose name, particulars and address are as stated in the registration for Account activation on the CALMS International Website;",
              },
              {
                term: "Licensor",
                text:
                  "means CALMS International Ltd. (Company No. 5740402-U) having its business address at Unit 101, China House,395, Edgware Road, London, United Kingdom, NW2 6LN;",
              },
            ].map((d) => (
              <div key={d.term} className="bg-[#f6f7fb] ring-1 ring-gray-200 p-4">
                <div className="font-semibold text-[#1a56b6]">{d.term}</div>
                <p className="text-gray-700 mt-1 text-sm leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Grant of Licence */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a56b6]">
            2. Grant of Licence
          </h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>The Licensor warrants that it has the authority to grant the Licence.</li>
            <li>The Licensor grants to the Licensee a Licence to use the Software and Hardware for a Term.</li>
            <li>
              The Licence granted under this Agreement does not in any way whatsoever authorize or grant the Licensee to distribute,
              rent, loan, sell, lease, license, sub‑licence or otherwise deal in the Software and/or its related documentation.
            </li>
            <li>
              The Licensee prior to permitting User in using Software or Hardware shall obtain an undertaking from User that the User will
              comply with the Licensee’s obligations under this Agreement and that the User will not permit others to use Software or Hardware.
            </li>
          </ol>
        </section>

        {/* 3. Renewal */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a56b6]">3. Renewal</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              Save for either party prior to one (1) month before the expiry of the prevailing Term gives written notice that it will not
              be extending the duration of this Agreement, then the Term of this Agreement shall be automatically extended upon the
              expiry of the prevailing Term for a successive year at the applicable revised prices (if any) notified to the Licensee
              three (3) months before the expiry of the prevailing Term failing which the prevailing prices in the prevailing Term shall apply.
            </li>
          </ol>
        </section>

        {/* 4. Upgrade, Support and Maintenance */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a56b6]">4. Upgrade, Support and Maintenance</h2>
          <h3 className="mt-4 font-semibold text-[#1a56b6]">Upgrade</h3>
          <ol className="list-decimal pl-6 mt-2 space-y-2 text-gray-800">
            <li>
              As and when deemed appropriate by the Licensor in its absolute discretion, the Licensor may provide Updates.
            </li>
            <li>Such Updates under Clause 4.1 will be provided by the Licensor via electronic download or physical media.</li>
            <li>
              Any Updates provided shall not entitle the Licensee to any release, option, module, or future product, which the Licensor, in its sole
              discretion, licenses separately or offers for an additional license fee.
            </li>
            <li>The Licensor is under no obligation to develop any future modules or functionality to Software or Hardware.</li>
          </ol>
          <h3 className="mt-6 font-semibold text-[#1a56b6]">Support and Maintenance</h3>
          <ol className="list-decimal pl-6 mt-2 space-y-2 text-gray-800">
            <li>
              The Licensor will provide email, telephone and online technical support. On site support (if any) may be provided at the
              discretion of the Licensor. The Licensor may at its absolute discretion change its support policies in this Agreement from time to time.
            </li>
            <li>
              Technical support will be provided between 8:00am to 5:00pm, Monday to Friday, excluding public holidays gazetted for Kuala Lumpur; Response time to problems
              identified by the Licensee in using the Software or Hardware will be within four (4) hours, subject to Clause (a) above, and the
              Licensor will take all reasonable steps to resolve such problems within one (1) to three (3) working days after the response time depending on severity of problem;
              Any support services required outside the times identified in Clause (a) will be chargeable on an hourly rate basis at the rate to be made available on request.
            </li>
            <li>
              Technical support is provided only for the current version and the immediately preceding version of the Software, provided Software and
              Hardware were not altered or modified by the Licensee.
            </li>
            <li>
              Technical support is limited to reasonable assistance of the following:
              <ul className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>Assisting the Licensee to install and configure the Software and Hardware;</li>
                <li>
                  Assisting the Licensee to determine whether the Software can be installed and operated on the Licensee’s computer hardware platform and
                  identify any prerequisite solutions required to run the Software on the Licensee’s computer hardware;
                </li>
                <li>
                  Assisting the Licensee to better understand the intended and proper use of the Software’s and Hardware’s functionality;
                </li>
                <li>
                  Assisting (directly or with the aid of other appointed contractors) in resolving Software and Hardware defects and errors. The Licensor may provide workarounds to the Licensee,
                  including service packs to the Software to resolve suspected Software errors. The service packs may be issued between Updates in cases where the Licensee deems the defect(s)
                  is severe enough to prevent the Licensee from using the Software.
                </li>
              </ul>
            </li>
            <li>
              Support services do not include:
              <ul className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>Training the Licensee;</li>
                <li>
                  Parts replacement of any faulty components on Hardware due to wear and tear, mishandling and act of God;
                </li>
                <li>Providing advices unrelated to the technical support above;</li>
                <li>Diagnosing problems unrelated to defects in the Software and Hardware;</li>
                <li>
                  Configuration and custom interface or integration with Third Party Software and Hardware not provided by CALMS;
                </li>
                <li>
                  Provision of technical support in situations the Licensee does not employ required and recommended combination of hardware, operating
                  system and prerequisite software;
                </li>
                <li>Any systems administration; and</li>
                <li>
                  Any other support not stated in Clause 4.7 or support that the Licensor deems not to be included in support and maintenance.
                </li>
              </ul>
            </li>
            <li>
              The Licensee shall only be entitled to the Licensor’s technical support upon settlement of ALL accrued fees due to the Licensor.
            </li>
            <li>
              The Licensee shall provide Licensor access to the Software and Hardware to enable effective support and maintenance. Such access includes
              remote access capabilities to the Software and Hardware including but not limited to Teamviewer, Open VPN, LogMeIn etc.
            </li>
          </ol>
        </section>

        {/* 5. Fees */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a56b6]">5. Fees</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              In consideration of the Licence, the Licensee shall within fourteen (14) days after the receipt of invoice pay Licensor (i) all fees (ii) the additional
              government service tax which applies over such fees, and (iii) any other taxes, levies, duties, stamp duty and/or surcharges payable by the Licensor
              under this Agreement in the mode and manner agreed by the parties.
            </li>
            <li>All payments shall be made in the currency denominated by the Licensor.</li>
            <li>
              The Licensee shall pay all taxes, levies, duties, stamp duty and/or surcharges payable in respect of the Licence or this Agreement.
            </li>
            <li>
              If payment is not made within fourteen (14) days of the due date, interest will be payable by the Licensee at the rate of ten per cent (10%) per annum on the overdue amount from the due date until the date payment is made and, if any payment remains due after thirty (30) days from the due date, the Licensor shall be entitled to suspend or terminate this Agreement and revoke the Licence granted under this Agreement.
            </li>
            <li>
              If the Licensee disputes any part of the amount claimed in an invoice submitted by the Licensor pursuant to this Agreement, then the Licensee shall pay the undisputed portion of the amount claimed under the invoice before the due date for such payment. The disputed amount may be resolved by reference to the dispute resolution procedures prescribed under this Agreement. If it is subsequently determined that the Licensee should pay the Licensor part or whole of the disputed amount, then the Licensee will within 14 days of such determination pay the Licensor the aggregate of (i) such amount determined as payable and (ii) the interest at the rate of ten per cent (10%) per annum from the date the invoiced amount was due until the date of full settlement of the amount determined as payable.
            </li>
          </ol>
          <div className="mt-4 bg-[#f6f7fb] ring-1 ring-gray-200 p-4">
            <h3 className="font-semibold text-[#1a56b6]">Licence Fees</h3>
            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
              <li>The Licensee shall pay an annual Licence fee for the Service.</li>
              <li>One time special waiver of Licence Fee for 3 year, applicable only once for condominium & gated residential.</li>
            </ol>
          </div>
        </section>

        {/* 6-12 */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a56b6]">6. No Refund</h2>
          <p className="mt-2 text-gray-800">All fees paid by Licensee are non‑refundable.</p>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">7. Passwords and Access</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>The Licensor shall provide the Licensee a username and password to use the subscribed Services.</li>
            <li>The Licensee shall be responsible for maintaining the security and confidentiality of the said username and password.</li>
            <li>
              The Licensee shall be responsible for all activities that occur and transactions that are effected under the Licensee’s user accounts.
            </li>
            <li>
              The Licensee shall immediately take all appropriate measures to stop or restrain such unauthorized use of (i) any subscribed Services, (ii) its username and password, (iii) its account or (iv) any other known or suspected breach of security if the Licensee becomes aware of the same.
            </li>
            <li>
              The Licensee hereby agrees to notify the Licensor immediately of any unauthorized use referred under Clause 7.4 above.
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">8. Use of Software and Hardware</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>The Licensee and its User(s) shall not engage in Unacceptable Use.</li>
            <li>The Licensor may, but is not obliged to, remove any Data which is Unacceptable Use.</li>
            <li>The Licensor reserves the right to immediately suspend or terminate the Licensee’s account(s) for any Unacceptable Use.</li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">9. Data</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              Upon the expiry or termination of this Agreement, the Licensee will not be allowed to retrieve any Data provided or submitted by the Licensee to the Licensor’s account or any output reports from the Website.
            </li>
            <li>
              Licensee can download any Data provided or submitted by the Licensee to the Licensor’s Software and all output reports from the Website prior to the expiry or termination of the Agreement.
            </li>
            <li>
              The Licensor will use commercially reasonable security measures to protect the Data against unauthorized disclosure or use.
            </li>
            <li>
              Licensor shall be allowed to use and/or to extract any information generated from the Limited Data Set for the purpose of research and data analytics activity(s) without revealing and/or exposure of its customer’s personal information or data for the duration of the enforcement of this Agreement until and/or unless such Agreement expire or being terminated for whatsoever reason(s).
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">10. Third Party Technology Supplier’s Software</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              The Licensee shall not do anything that infringes and/or breaches the licensing rights of the Licensor or the proprietary rights, title and/or interest of the owner of the Third Party Software.
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">11. Intellectual Property Rights</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              All rights, title and interest in the Software (including without limitation all Intellectual Property Rights) vest in and remain with the Licensor at all times and the Licensee acquires no rights whatsoever therein save and except as granted under the Licence.
            </li>
            <li>
              All rights, title and interest in the Hardware (including without limitation all Intellectual Property Rights) vest in and remain with the Licensor at all times save for such rights, title and interest in the Hardware as may be transferred by the Licensor to Licensee upon the Licensee meeting certain terms and conditions set by the Licensor, as described under official quotation issued by Licensor and confirmed by Licensee or through Purchase Order issued by Licensee to Licensor based on the quotation issued.
            </li>
            <li>
              The Licensor reserves the right to immediately suspend or terminate the License for any breach of this Clause.
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">12. Warranty</h2>
          <p className="mt-2 text-gray-800">
            The Licensor warrants that the Software provided is fit and suitable for its purpose.
          </p>
        </section>

        {/* 13-17 */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a56b6]">13. Implied Terms</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              In the event the Software or Hardware does not function properly (in accordance to the Licensor’s representations), then the liability of the Licensor shall be limited, at the sole option of the Licensor, to one or more of the following:-
              <div className="mt-2">
                <div className="font-semibold">In relation to the Software:-</div>
                <ul className="list-[lower-roman] pl-6 space-y-1">
                  <li>
                    the replacement of the Software, Hardware or the supply of software and hardware of equivalent quality, standard, application and functionality as the Software in all material respects;
                  </li>
                  <li>the rectification of any defects or errors in the Software; or</li>
                  <li>
                    the payment of the cost of replacing the Software and the Hardware which is of equivalent quality, standard, application and functionality as the Software in all material respects;
                  </li>
                </ul>
              </div>
              <div className="mt-2">
                <div className="font-semibold">In relation to services provided by the Licensor to the Licensee by the use of the Software;</div>
                <ul className="list-[lower-roman] pl-6 space-y-1">
                  <li>the supplying of the services again by the Licensor.</li>
                </ul>
              </div>
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">14. Termination</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              For the purpose of this Agreement, the following shall be deemed to be events of termination:-
              <ul className="list-[lower-alpha] pl-6 mt-1 space-y-1">
                <li>
                  any breach or threatened breach by either party of any of its material obligations under this Agreement which is incapable of remedy, or which is capable or remedy, is not remedied within thirty (30) days of receipt of a written notice from the non‑defaulting party specifying the nature of the breach and requiring its remedy;
                </li>
                <li>
                  the appointment of a receiver or manager over the whole or any part of the property or undertaking of a party or the commencement of any winding‑up or liquidation proceedings against the party;
                </li>
                <li>the entry or proposed entry by a party into any scheme, composition or arrangement with any of its creditors; or</li>
                <li>
                  any other event described in this Agreement as being an event which would entitle either party to terminate this Agreement.
                </li>
              </ul>
            </li>
            <li>
              The Licence may be terminated immediately on the occurrence of a terminating event at the option of either party.
            </li>
            <li>
              Either party at its sole discretion shall be entitled to terminate this Agreement, in whole or in part, at any time by giving a three (3) months’ notice to that effect.
            </li>
            <li>
              Neither party shall be liable for the consequences of an occurrence of any force majeure events defined in Clause 23 of this Agreement.
            </li>
            <li>
              Any termination of the Licence shall not affect any accrued rights or liabilities of either parties who shall be liable for any antecedent breaches of this Agreement. Nor shall any termination of the Licence affect any provision of this Agreement which is expressly or by implication intended to continue in force after such termination.
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">15. Limitation of Liability</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              The Licensor shall not be liable to the Licensee of a third party’s claim of infringement of any Intellectual Property Rights (“Third Party Claim”) if:-
              <ul className="list-[lower-alpha] pl-6 mt-1 space-y-1">
                <li>
                  the Licensee does not notify the Licensor of a Third Party Claim within seven (7) days after becoming aware of the Third Party Claim; or
                </li>
                <li>
                  the Licensor’s ability to defend against any Third Party Claim has been prejudiced by the Licensee’s non‑compliance with any of its obligations under this Agreement; or
                </li>
                <li>
                  the Licensee does not give the Licensor reasonable assistance in defending against the Third Party Claim; or
                </li>
                <li>
                  the Third Party Claim has arisen because of the use of the Software in combination with equipment, materials or computer programmes, software or applications not supplied or approved by the Licensor; or
                </li>
                <li>
                  the Licensee does not permit the Licensor to have control of the defence of the Third Party Claim and all related settlement negotiations with the third party.
                </li>
              </ul>
            </li>
            <li>
              The Licensor shall not be liable to the Licensee for any special, indirect or consequential loss or damage (including without limitation to loss of revenue, loss of profits, loss of business opportunity or loss of Data) arising out of or in connection with any breach of this Agreement by the Licensor or any act or omission of the Licensor, even if the Licensor is aware of or has been advised by the Licensee as to the possibility of such losses being incurred.
            </li>
            <li>
              To the extent permitted by law, (i) if the Licensor is held by any court of competent jurisdiction to be liable to the Licensee for any loss or damages arising out of any breach of this Agreement by the Licensor or any act or omission of the Licensor, the liability of the Licensor shall not exceed the amount of (pro‑rata) paid by Licensee for the prevailing Term. The parties hereby agree that the amount paid by the Licensee for the current Term represents a reasonable pre‑estimate of loss or damage which the Licensor may suffer in the event of any breach by the Licensee of this Agreement or arising from any act or omission of the Licensor in respect of its obligations under this Agreement.
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">16. Indemnity for Software Usage</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              The Licensee agrees to indemnify and hold harmless the Licensor and its Third Party Technology Suppliers from any claims, damages, liabilities, costs, and fees arising from the use of the Software as well as from the Licensee’s failure to comply with any term of this Agreement.
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">17. Assignment</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              This Agreement may not be assigned by the Licensee without the prior written approval of the Licensor but may be assigned by the Licensor to:
              <ul className="list-[lower-alpha] pl-6 mt-1 space-y-1">
                <li>an acquirer of all or substantially all of the Licensor’s assets involved in the operations relevant to this Agreement; or</li>
                <li>a successor by merger or other combination.</li>
              </ul>
            </li>
            <li>Any purported assignment or transfer in violation of this section is void.</li>
            <li>Subject to the foregoing, this Agreement shall bind and inure to the benefit of the parties, their successors and permitted assigns.</li>
          </ol>
        </section>

        {/* 18-23 */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a56b6]">18. Notice</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              The Licensor may give notice to the Licensee by means of electronic mail to the Licensee’s email address on record in the Licensee’s account or by written communication sent by hand, by registered post or by facsimile to the person and address of the Licensee or such other person and address in the Licensee’s account.
            </li>
            <li>
              The Licensee may give notice to the Licensor by means of electronic mail to such email address as provided by the Licensor at any material time.
            </li>
            <li>
              A party may, by giving notice, change its applicable address, email, or other contact information.
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">19. Entire Agreement</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              This Agreement supersedes all prior agreements, arrangements, understandings and undertakings between the parties and constitutes the entire agreement between the parties relating to the use of the Software and Hardware and the Licence granted hereunder.
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">20. Governing Law and Jurisdiction</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              This Agreement shall be governed by and construed in accordance with the laws of Malaysia and the parties hereto hereby submit to the jurisdiction of the courts of Malaysia in all matters connected with the obligation and liabilities of the parties under this Agreement.
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">21. Severability</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              Should any part of this Agreement be or become invalid, that part shall be severed from this Agreement. Such invalidity shall not affect the validity of the remaining provisions of this Agreement which shall continue in full force and effect and be valid and binding on the parties.
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">22. Dispute Resolution and Arbitration</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              Any dispute or difference arising out of or in connection with this Agreement (including without limitation as to its validity) shall be first resolved by the parties through discussions in good faith. Any dispute which is not resolved by the parties as aforesaid within sixty (60) days of the dispute arising shall be submitted to arbitration in accordance with, and subject to, the arbitration rules of the Asian International Arbitration Centre (formerly known as the Kuala Lumpur Regional Centre for Arbitration) (&quot;AIAC&quot;). The seat of arbitration shall be the AIAC.
            </li>
            <li>
              The parties shall appoint an arbitrator who is acceptable to both parties to arbitrate the dispute. In the event the parties are unable to agree on an arbitrator within sixty (60) days of the dispute being referred to arbitration, the Director of the KLRCA shall appoint the arbitrator, and the decision of the Director as aforesaid shall be binding on the parties.
            </li>
            <li>The arbitration proceedings shall be held in Malaysia and shall be conducted in the English language.</li>
            <li>
              The reference of any dispute to arbitration in accordance with this Clause 22 shall not excuse the parties from continuing with the performance of any other obligations under this Agreement which are not affected by the dispute.
            </li>
          </ol>

          <h2 className="mt-8 text-xl md:text-2xl font-bold text-[#1a56b6]">23. Force Majeure</h2>
          <ol className="list-decimal pl-6 mt-3 space-y-2 text-gray-800">
            <li>
              If by any reason of any event of force majeure, any of the parties to this Agreement is delayed in or prevented from or hampered in performing any of its obligations under this Agreement, then such delay or non‑performance shall not be deemed to be a breach of this Agreement. In such an event, the obligations of the party so affected by the force majeure event shall be suspended during the period of such force majeure event, and the affected party shall use all reasonable endeavours to minimize and reduce any period of suspension occasioned as aforesaid.
            </li>
            <li>
              For the avoidance of doubt, a force majeure event is anything regarded as being beyond the control of the party in question and shall include, but shall not be limited to acts of God, acts or omissions of any governmental authority or material change of any rules, regulations or orders of any governmental authority or any officer, department, agency or instrument thereof made after the execution of this Agreement; fire, storm, flood, earthquake, accident, acts of public enemy, war, rebellion, insurrection, riot, invasion, strikes, or lockouts.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
