import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | brevnovevents.cz",
  description:
    "Privacy policy of IN CATERING s.r.o. for visitors of brevnovevents.cz.",
  alternates: {
    canonical: "https://brevnovevents.cz/en/privacy-policy",
    languages: {
      "cs": "https://brevnovevents.cz/gdpr",
      "en": "https://brevnovevents.cz/en/privacy-policy",
      "x-default": "https://brevnovevents.cz/en/privacy-policy",
    },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-center text-sm text-brand-white/50">
          IN CATERING s.r.o. · Last updated: 31 July 2024
        </p>

        <div className="prose-gdpr mt-16 space-y-10 text-sm leading-relaxed text-brand-white/70">
          {/* Data Controller */}
          <div>
            <p>
              The data controller is{" "}
              <strong className="text-brand-white">IN CATERING s.r.o.</strong>
            </p>
            <p className="mt-2">
              All inquiries regarding the processing of personal data can be
              sent to:
            </p>
            <address className="mt-2 not-italic">
              <p>Libocká 10/64, 162 00 Prague 6, Czech Republic</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@incatering.cz"
                  className="text-brand-white underline hover:text-brand-red"
                >
                  info@incatering.cz
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+420220560494"
                  className="text-brand-white underline hover:text-brand-red"
                >
                  +420 220 560 494
                </a>
              </p>
            </address>
          </div>

          {/* 1. Introduction */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">1. Introduction</h2>
            <p className="mt-3">
              This Privacy Statement applies to the processing of all personal
              data of consumers, customers, suppliers and business partners
              (&ldquo;business partners&rdquo;) by IN CATERING s.r.o., with
              registered office at Libocká 10/64, 162 00 Prague 6, Company ID:
              630 725 72, registered with the Municipal Court in Prague, Section
              C, Insert 35898 (hereinafter referred to as &ldquo;Our
              Company&rdquo; or &ldquo;we&rdquo;).
            </p>
            <p className="mt-3">
              This Privacy Statement does not apply to data related to business
              activities or data about companies.
            </p>
            <p className="mt-3">
              Our Company is the controller of the personal data of business
              partners. This statement explains who we are and for what purposes
              we process your personal data and other information about you. If
              you have any questions, you can use the contact details at the end
              of this statement.
            </p>
            <p className="mt-3">
              This privacy statement has been prepared in accordance with Act No.
              101/2000 Coll., on Personal Data Protection, as amended, and
              Regulation (EU) 2016/679 of the European Parliament and of the
              Council (GDPR), effective from 25 May 2018. This statement may
              change over time and its current version is always published on our
              website. If significant changes are made, we will inform you.
            </p>
          </div>

          {/* 2. Purposes of processing */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              2. For what purposes do we process your personal data?
            </h2>
            <p className="mt-3">
              Our Company will process your personal data when conducting
              business transactions between you and Our Company, when you visit
              our websites, social networks or applications, or in the context of
              other contact with us.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              A. Responding to your inquiries
            </h3>
            <p className="mt-2">
              If you contact us, we will use your personal data to respond to
              your inquiries, requests and other cases of contact. For this
              purpose, we process your personal data based on your consent. We
              process your name, contact details, correspondence with us, your
              inquiries and all other personal data necessary to answer your
              questions.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              B. Product and service development and improvement
            </h3>
            <p className="mt-2">
              We process your personal data for the purpose of evaluating,
              analysing and improving our products and services. We use your
              personal data for customer behaviour analysis and making
              corresponding adjustments to our products and services.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              C. Customer, supplier or business partner evaluation and acceptance
            </h3>
            <p className="mt-2">
              If you contact us, we will process your personal data for the
              purpose of confirming and verifying your identity and for the
              purpose of evaluating and verifying the possibility of further
              cooperation. We process personal data because it is necessary for
              the conclusion of a contract between you and Our Company.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              D. Contract conclusion and performance
            </h3>
            <p className="mt-2">
              If you have purchased a product or service from us as customers or
              if you cooperate with us as suppliers or business partners, we
              process your personal data for administrative purposes, such as
              sending invoices and making payments.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              E. Relationship management and marketing
            </h3>
            <p className="mt-2">
              We use information stored in our customer database to send you
              appropriate offers and newsletters, as well as for the purpose of
              providing customer service and sending news, updates and offers.
              When sending newsletters and marketing communications, we process
              your personal data based on your consent.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              F. Business activities and internal management
            </h3>
            <p className="mt-2">
              We process your personal data in the course of conducting and
              organising our business activities. This includes general
              management, order management and management of our assets.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              G. Organisational analysis and development
            </h3>
            <p className="mt-2">
              We process your personal data so that we are able to prepare and
              submit reports and analyses using aggregated/anonymised personal
              data.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              H. Use of our websites or applications
            </h3>
            <p className="mt-2">
              When you use our websites, we process technical data so that you
              can use the functions of our websites and so that we can manage and
              improve them. We process technical data from your device, such as
              its IP address, internet browser, pages you visited on our website,
              and the length of your visit — in accordance with our Cookie
              Policy.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              I. Contact via social media
            </h3>
            <p className="mt-2">
              Our Company is active on social media platforms such as LinkedIn,
              Instagram, Facebook, YouTube and TikTok. If you contact Our
              Company through social media, we process your personal data for the
              purpose of responding to your inquiries and messages.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              J. Monitoring and control
            </h3>
            <p className="mt-2">
              We monitor our processes to verify compliance with our policies,
              regulations and code of ethics. During monitoring activities, we
              may gain access to your personal data.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              K. Health protection, safety and integrity assurance
            </h3>
            <p className="mt-2">
              We process your personal data for the purpose of protecting our
              employees, customers, suppliers and business partners. We verify
              your authorisation to access our premises.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              L. Regulatory compliance
            </h3>
            <p className="mt-2">
              In some cases, we process your personal data for the purpose of
              complying with laws and other legal regulations, e.g. for the
              purpose of fulfilling tax obligations. In cases stipulated by
              applicable laws, we may be obliged to disclose your personal data
              to administrative or supervisory authorities.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              M. Participation in promotional and other events
            </h3>
            <p className="mt-2">
              We send you information about promotional events and invitations to
              participate in various activities. If you decide to participate, we
              need your personal data to organise these activities. We process
              your personal data based on your consent, which you can withdraw at
              any time.
            </p>
          </div>

          {/* 3. Retention */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              3. How long do we retain personal data?
            </h2>
            <p className="mt-3">
              Our Company will generally retain business partner data only for
              the period required for the relevant business purpose, to the
              extent reasonably necessary to comply with applicable legal
              requirements. Immediately after the expiry of the relevant
              retention period, the data will be:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Securely deleted or destroyed</li>
              <li>Anonymised</li>
              <li>
                Transferred to the archive (unless prohibited by law or the
                applicable retention schedule)
              </li>
            </ul>
          </div>

          {/* 4. Sharing */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              4. Sharing of personal data
            </h2>

            <h3 className="mt-4 font-bold text-brand-white">
              A) Access within Our Company
            </h3>
            <p className="mt-2">
              Your personal data may be transferred between the owners of Our
              Company for administrative purposes. Employees of Our Company are
              authorised to access personal data exclusively to the extent
              necessary for the stated purposes and the performance of their
              duties.
            </p>

            <h3 className="mt-4 font-bold text-brand-white">
              B) Third-party access
            </h3>
            <p className="mt-2">
              Where necessary for the provision of products and services by Our
              Company, the following third parties may also have access to your
              personal data: banks, insurance companies, auditing firms, IT
              suppliers, accountants, consultants and other entities. Our Company
              will take contractual, technical and organisational measures to
              ensure that your personal data is processed only to the necessary
              extent.
            </p>
          </div>

          {/* 5. Security */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              5. How is your personal data secured?
            </h2>
            <p className="mt-3">
              We have implemented appropriate security measures to ensure the
              confidentiality and security of your personal data. We have
              implemented appropriate technical, physical and organisational
              measures to protect personal data against accidental and unlawful
              destruction or accidental loss, damage, alteration, unauthorised
              disclosure or access, as well as all other forms of unlawful
              processing.
            </p>
          </div>

          {/* 6. Rights */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              6. How can you exercise your privacy rights?
            </h2>
            <p className="mt-3">
              You have the right to request access to or an overview of your
              personal data and, under certain conditions, the right to
              rectification and/or erasure of personal data. In addition, you
              have the right to request restriction of processing concerning your
              personal data, the right to object to processing, and the right to
              data portability. To exercise your rights, please contact us using
              the contact details provided in this statement.
            </p>
          </div>

          {/* 7. Withdrawal of consent */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              7. Can you withdraw your consent?
            </h2>
            <p className="mt-3">
              You can always withdraw the consent you have given. Please note
              that this withdrawal will not have a retrospective effect. To
              withdraw your consent, please contact us using the contact details
              provided in this statement.
            </p>
          </div>

          {/* 8. Complaint */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              8. How to file a complaint?
            </h2>
            <p className="mt-3">
              If you have a complaint regarding the use of your personal data by
              Our Company, you can file this complaint through the contact person
              indicated in this statement. In addition to filing a complaint with
              Our Company, you can also address your complaint to the supervisory
              authority — the Office for Personal Data Protection (Úřad pro
              ochranu osobních údajů), Pplk. Sochora 727/27, 170 00 Prague
              7-Holešovice,{" "}
              <a
                href="https://www.uoou.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-white underline hover:text-brand-red"
              >
                www.uoou.cz
              </a>
              .
            </p>
          </div>

          {/* 9. Contact */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              9. How can you contact us?
            </h2>
            <p className="mt-3">
              If you have questions about how we process personal data, please
              read this statement first. For additional questions, please contact
              us at:
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:info@incatering.cz"
                className="text-brand-white underline hover:text-brand-red"
              >
                info@incatering.cz
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+420220560494"
                className="text-brand-white underline hover:text-brand-red"
              >
                +420 220 560 494
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
