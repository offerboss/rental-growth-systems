// Legal page copy, reproduced verbatim from the existing RGS checkout-site
// policies (https://checkout.rentalgrowthsystems.com/privacy-policy and
// .../terms-of-service) so the main site has its own /privacy-policy and
// /terms-of-service routes with the same legal language. Do not edit the
// wording here without updating the source policy first — this file exists
// to mirror it, not to author new legal terms.
//
// Rendered by app/components/legal/LegalDocument.tsx.

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] };

export const PRIVACY_POLICY_EFFECTIVE_DATE = "May 26th 2026";
export const TERMS_OF_SERVICE_EFFECTIVE_DATE = "May 26th 2026";

export const privacyPolicyBlocks: LegalBlock[] = [
  {
    type: "paragraph",
    text: "Rental Growth Systems respects your privacy. This Privacy Policy explains how we collect, use, share, and protect information when you visit our website, submit a form, schedule a call, purchase a service, communicate with our team, receive notifications, or use any Rental Growth Systems services.",
  },
  {
    type: "paragraph",
    text: "By using our website, forms, landing pages, checkout pages, scheduling pages, communication tools, or services, or by providing your information to Rental Growth Systems, you agree to the terms of this Privacy Policy.",
  },
  { type: "subheading", text: "1. Information We Collect" },
  {
    type: "paragraph",
    text: "We may collect personal and business information that you voluntarily provide to us, including:",
  },
  {
    type: "list",
    items: [
      "Name",
      "Business name",
      "Phone number",
      "Email address",
      "Business address",
      "Website URL",
      "Service area",
      "Service category",
      "Service preferences",
      "Company information",
      "Billing information",
      "Appointment or scheduling details",
      "Marketing goals or business needs",
      "Messages or inquiries submitted through our website, forms, chat widget, landing pages, checkout pages, scheduling pages, or other communication channels",
    ],
  },
  {
    type: "paragraph",
    text: "We may also collect basic website usage information, such as browser type, device information, pages visited, traffic source, general analytics data, and interactions with our website, forms, checkout pages, scheduling pages, or marketing campaigns.",
  },
  { type: "subheading", text: "2. How We Use Your Information" },
  { type: "paragraph", text: "We may use your information to:" },
  {
    type: "list",
    items: [
      "Respond to questions, inquiries, or service requests",
      "Provide Rental Growth Systems services",
      "Schedule, confirm, or remind you about appointments, calls, onboarding sessions, or service-related activities",
      "Create or manage customer accounts",
      "Deliver leads, inquiries, or customer information related to your services",
      "Set up or manage CRM, automation, website, directory, advertising, review, AI chat, AI voice, or lead capture systems",
      "Communicate with you about your account, services, billing, support, or updates",
      "Send customer support messages, service updates, and business-related notifications",
      "Send occasional promotions, updates, or special offers",
      "Track campaign performance and provide reporting",
      "Improve our website, services, systems, reporting, and customer experience",
      "Maintain business records and comply with applicable laws",
    ],
  },
  {
    type: "paragraph",
    text: "We only collect information that is reasonably necessary to operate our business, provide our services, communicate with customers and prospects, and improve our systems.",
  },
  { type: "subheading", text: "3. Text Messages, Emails, and Service Communications" },
  {
    type: "paragraph",
    text: "By providing your phone number or email address, you agree that Rental Growth Systems may contact you regarding your inquiry, account, service request, appointment, purchase, onboarding, customer support, billing, promotions, or other business-related communications.",
  },
  {
    type: "paragraph",
    text: "Message and data rates may apply for SMS messages. Message frequency may vary.",
  },
  {
    type: "paragraph",
    text: "You may opt out of promotional text messages at any time by replying STOP. For help, reply HELP or contact us directly.",
  },
  {
    type: "paragraph",
    text: "Please note that even if you opt out of promotional messages, we may still contact you regarding active accounts, transactions, purchases, appointments, service requests, billing, customer support, or important service-related matters.",
  },
  { type: "subheading", text: "4. How We Share Information" },
  { type: "paragraph", text: "We do not sell your personal information." },
  {
    type: "paragraph",
    text: "We may share limited information with trusted service providers only when necessary to operate our business and provide services to you. This may include CRM platforms, SMS and email communication providers, website hosting providers, analytics tools, advertising platforms, payment processors, appointment scheduling tools, AI chat or AI voice providers, customer service tools, reporting tools, or other software providers.",
  },
  {
    type: "paragraph",
    text: "These providers may only use your information as needed to provide services on our behalf.",
  },
  {
    type: "paragraph",
    text: "We may also share relevant business, lead, customer inquiry, service area, campaign, or account information when needed to deliver the services you purchase from Rental Growth Systems. This may include information related to directory placement, website setup, lead capture, CRM setup, automation, advertising, review generation, customer communication, appointment scheduling, or reporting.",
  },
  {
    type: "paragraph",
    text: "We do not share mobile opt-in information, SMS consent, or text messaging data with third parties or affiliates for marketing or promotional purposes.",
  },
  {
    type: "paragraph",
    text: "We may disclose information if required by law, to protect our legal rights, to prevent fraud, to protect users, or to address abuse, security issues, or unlawful activity.",
  },
  { type: "subheading", text: "SMS/Text Messaging Privacy" },
  {
    type: "paragraph",
    text: "Rental Growth Systems does not sell, rent, or share mobile information for marketing or promotional purposes.",
  },
  {
    type: "paragraph",
    text: "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing with subcontractors or service providers in support services, such as customer service, appointment scheduling, website hosting, payment processing, CRM services, service coordination, AI chat, AI voice, reporting, or SMS delivery, is permitted when necessary to operate our business.",
  },
  {
    type: "paragraph",
    text: "All other use case categories exclude text messaging originator opt-in data and consent. Text messaging opt-in data and consent will not be shared with any third parties.",
  },
  { type: "subheading", text: "5. Payments" },
  {
    type: "paragraph",
    text: "If you make a payment through our website, checkout page, invoice, subscription platform, or a third-party payment processor, your payment information is handled by the payment provider.",
  },
  {
    type: "paragraph",
    text: "Rental Growth Systems does not store full credit card numbers or sensitive payment details unless otherwise stated by the payment processor.",
  },
  { type: "subheading", text: "6. Cookies and Website Tracking" },
  {
    type: "paragraph",
    text: "Our website may use cookies or similar technologies to improve user experience, understand website traffic, support analytics, and improve advertising performance.",
  },
  {
    type: "paragraph",
    text: "Cookies are small files stored on your device. You can adjust your browser settings to refuse cookies or notify you when cookies are being used. Some website features may not function properly if cookies are disabled.",
  },
  { type: "subheading", text: "7. Advertising and Analytics" },
  {
    type: "paragraph",
    text: "We may use third-party tools such as Google, Meta/Facebook, analytics platforms, CRM tools, tracking pixels, or other software providers to understand website performance, improve marketing, measure campaign results, and show relevant ads.",
  },
  {
    type: "paragraph",
    text: "These platforms may collect information through cookies, pixels, tracking scripts, or similar technologies. Their use of your information is governed by their own privacy policies.",
  },
  { type: "subheading", text: "8. Lead Generation, Directory, Website, and Marketing Services" },
  {
    type: "paragraph",
    text: "Rental Growth Systems may collect information from rental companies, business owners, prospects, customers, or users who submit inquiries through our website, forms, ads, chat widgets, scheduling pages, checkout pages, directory pages, or other marketing channels.",
  },
  {
    type: "paragraph",
    text: "This information may be used to respond to inquiries, schedule calls, provide quotes, deliver services, manage accounts, create customer profiles, build directory listings, set up websites, run advertising campaigns, manage CRM systems, provide AI chat or AI voice support, deliver lead information, or follow up on service requests.",
  },
  {
    type: "paragraph",
    text: "Information collected may include name, phone number, email address, business name, website URL, service area, rental services offered, company details, customer inquiry details, appointment information, marketing needs, and other information voluntarily submitted.",
  },
  {
    type: "paragraph",
    text: "We do not sell or share SMS opt-in consent or text messaging consent data for unrelated marketing purposes.",
  },
  { type: "subheading", text: "9. Data Security" },
  {
    type: "paragraph",
    text: "We take reasonable steps to protect the personal and business information we collect from unauthorized access, loss, misuse, alteration, or disclosure.",
  },
  {
    type: "paragraph",
    text: "However, no method of online transmission or digital storage is completely secure. We cannot guarantee absolute security of your information.",
  },
  { type: "subheading", text: "10. Data Retention" },
  {
    type: "paragraph",
    text: "We may retain your information for as long as necessary to provide services, manage accounts, fulfill purchases, maintain business records, comply with legal obligations, resolve disputes, improve our systems, and support legitimate business purposes.",
  },
  {
    type: "paragraph",
    text: "When information is no longer needed, we may delete, anonymize, or securely store it according to our business practices.",
  },
  { type: "subheading", text: "11. Your Privacy Choices" },
  { type: "paragraph", text: "You may contact us to:" },
  {
    type: "list",
    items: [
      "Request access to the personal information we have about you",
      "Ask us to update or correct your information",
      "Request that we delete your information, where applicable",
      "Opt out of promotional communications",
      "Ask questions about how your information is used",
    ],
  },
  {
    type: "paragraph",
    text: "To make a privacy request, please contact us using the information listed below.",
  },
  { type: "subheading", text: "12. Children’s Privacy" },
  {
    type: "paragraph",
    text: "Our website and services are not intended to collect personal information from children under 13.",
  },
  {
    type: "paragraph",
    text: "If a parent or guardian believes a child has provided personal information to us without consent, they may contact us and request that the information be removed.",
  },
  { type: "subheading", text: "13. Third-Party Links" },
  {
    type: "paragraph",
    text: "Our website may contain links to third-party websites, CRM platforms, payment processors, scheduling tools, social media pages, map services, advertising platforms, directory pages, AI tools, or other online services.",
  },
  {
    type: "paragraph",
    text: "We are not responsible for the privacy practices, content, or policies of third-party websites. We encourage you to review their privacy policies before providing personal information.",
  },
  { type: "subheading", text: "14. Changes to This Privacy Policy" },
  {
    type: "paragraph",
    text: "We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised effective date.",
  },
  {
    type: "paragraph",
    text: "Your continued use of our website or services after changes are posted means you accept the updated Privacy Policy.",
  },
  { type: "subheading", text: "15. Contact Us" },
  {
    type: "paragraph",
    text: "For questions about this Privacy Policy or how your information is handled, please contact us:",
  },
  {
    type: "paragraph",
    text: "Rental Growth Systems\n775 Yampa Ave.\nCraig, CO 81625",
  },
  {
    type: "paragraph",
    text: "Phone: 970-620-9540\nEmail: Adam@RentalGrowthSystems.com",
  },
];

export const termsOfServiceBlocks: LegalBlock[] = [
  {
    type: "paragraph",
    text: "Welcome to Rental Growth Systems. By using our website, forms, landing pages, checkout pages, scheduling pages, communication tools, submitting an inquiry, purchasing a service, booking a call, receiving notifications, or communicating with our team, you agree to the following Terms of Service. Please read them carefully.",
  },
  { type: "subheading", text: "1. About Rental Growth Systems" },
  {
    type: "paragraph",
    text: "Rental Growth Systems provides marketing, lead generation, website, CRM, automation, directory placement, advertising, AI communication, and related business growth services for portable toilet rental companies, restroom trailer rental companies, roll-off dumpster rental companies, and related local rental businesses.",
  },
  {
    type: "paragraph",
    text: "Our services may include directory placement, featured business listings, city page placement, blog placement, website setup, landing pages, CRM setup, lead capture systems, missed-call text-back, review request systems, AI chat, AI voice, Google Ads setup and management, reporting, appointment scheduling, onboarding support, and related business support services.",
  },
  {
    type: "paragraph",
    text: "These Terms apply to all visitors, customers, clients, subscribers, prospects, and users of our website, forms, checkout pages, scheduling pages, communication systems, and services.",
  },
  { type: "subheading", text: "2. Rental Growth Systems Services" },
  {
    type: "paragraph",
    text: "Rental Growth Systems helps local rental companies improve online visibility, build trust with customers, capture more inquiries, respond faster, and book more jobs.",
  },
  { type: "paragraph", text: "Services may include, but are not limited to:" },
  {
    type: "list",
    items: [
      "Directory placement on relevant rental directory websites",
      "Featured business listings",
      "Featured placement on city pages or blog content",
      "Smart website setup or website support",
      "CRM setup and account access",
      "Lead capture forms and landing pages",
      "Missed-call text-back systems",
      "Review generation support",
      "AI chat systems",
      "AI voice systems",
      "Google Ads setup and management",
      "Campaign tracking and reporting",
      "Lead delivery and customer inquiry support",
      "Automation and follow-up workflows",
      "Onboarding and implementation support",
    ],
  },
  {
    type: "paragraph",
    text: "Specific deliverables may vary depending on the selected package, subscription, checkout page, written agreement, or custom arrangement.",
  },
  { type: "subheading", text: "3. Founding Partner Offers and Service Levels" },
  {
    type: "paragraph",
    text: "Rental Growth Systems may offer founding partner pricing, early-market access, promotional offers, quarterly pricing, monthly renewal options, priority placement, or limited-market opportunities.",
  },
  {
    type: "paragraph",
    text: "Founding Partner service levels may include Preferred Partner, Premium Partner, Growth Partner, or other service packages made available by Rental Growth Systems.",
  },
  {
    type: "paragraph",
    text: "Package details, pricing, billing terms, service inclusions, renewal options, and availability may vary by market, service category, checkout page, subscription, or written agreement.",
  },
  {
    type: "paragraph",
    text: "Founding Partner opportunities may be limited by geography, service area, industry category, directory availability, lead routing structure, advertising capacity, or business discretion.",
  },
  {
    type: "paragraph",
    text: "Rental Growth Systems reserves the right to approve, deny, pause, modify, or discontinue Founding Partner availability in any market at any time.",
  },
  { type: "subheading", text: "4. Client Responsibilities" },
  {
    type: "paragraph",
    text: "By using Rental Growth Systems services, clients agree to provide accurate and up-to-date information when submitting forms, purchasing services, completing onboarding, booking calls, or communicating with our team.",
  },
  {
    type: "paragraph",
    text: "This may include business name, contact name, phone number, email address, website URL, service area, rental services offered, company details, pricing details, photos, logos, business descriptions, customer communication preferences, calendar availability, advertising goals, billing information, and any other information needed to provide services.",
  },
  {
    type: "paragraph",
    text: "Clients are responsible for ensuring that any information, images, logos, service descriptions, claims, pricing, offers, testimonials, reviews, or business materials provided to Rental Growth Systems are accurate, lawful, and authorized for use.",
  },
  {
    type: "paragraph",
    text: "Clients are responsible for fulfilling their own rental services, responding to customers, providing quotes, scheduling jobs, delivering equipment, servicing equipment, collecting payments, handling customer disputes, maintaining insurance, following applicable laws, and operating their business responsibly.",
  },
  {
    type: "paragraph",
    text: "Rental Growth Systems is not responsible for a client’s service quality, availability, fulfillment, pricing, customer communication, delivery timing, equipment condition, billing practices, or customer disputes.",
  },
  { type: "subheading", text: "5. Lead Delivery and Customer Inquiries" },
  {
    type: "paragraph",
    text: "Rental Growth Systems may help generate, capture, route, or deliver customer inquiries to clients through websites, directory pages, forms, ads, phone calls, chat widgets, CRM systems, or other marketing channels.",
  },
  {
    type: "paragraph",
    text: "While we work to provide relevant inquiries and improve lead flow, Rental Growth Systems does not guarantee that every inquiry will become a booked job, paying customer, completed rental, repeat customer, or profitable opportunity.",
  },
  {
    type: "paragraph",
    text: "Clients are responsible for responding to inquiries promptly, following up with prospects, providing accurate quotes, confirming availability, and managing the customer relationship.",
  },
  {
    type: "paragraph",
    text: "Lead volume and lead quality may vary based on market conditions, seasonality, competition, pricing, service area, response time, offer strength, advertising budget, search demand, website performance, and other factors outside of our control.",
  },
  { type: "subheading", text: "6. Website, Directory, CRM, AI, and Automation Services" },
  {
    type: "paragraph",
    text: "Rental Growth Systems may create or manage websites, landing pages, directory profiles, city pages, blog placements, CRM accounts, automation workflows, AI chat systems, AI voice systems, missed-call text-back systems, review systems, lead forms, and related digital assets.",
  },
  {
    type: "paragraph",
    text: "Clients understand that some services may rely on third-party platforms, including but not limited to website builders, CRM systems, hosting providers, AI providers, phone providers, SMS providers, email providers, analytics tools, advertising platforms, scheduling tools, payment processors, or other software tools.",
  },
  {
    type: "paragraph",
    text: "Rental Growth Systems is not responsible for outages, delays, errors, changes, limitations, pricing changes, account restrictions, data issues, or service interruptions caused by third-party platforms.",
  },
  {
    type: "paragraph",
    text: "Client access to certain systems may depend on active payment, package level, platform permissions, account status, third-party requirements, and continued participation in Rental Growth Systems services.",
  },
  { type: "subheading", text: "7. Advertising Services" },
  {
    type: "paragraph",
    text: "If a client purchases advertising services, Rental Growth Systems may provide Google Ads setup, campaign management, keyword targeting, location targeting, conversion tracking, landing page alignment, reporting, optimization, and related advertising support.",
  },
  {
    type: "paragraph",
    text: "Advertising results are not guaranteed. Performance may vary based on budget, market demand, competition, keywords, ad quality, landing page performance, tracking accuracy, client response time, seasonality, account history, and platform changes.",
  },
  {
    type: "paragraph",
    text: "Advertising spend is separate from management fees unless otherwise stated in writing.",
  },
  {
    type: "paragraph",
    text: "Clients are responsible for funding ad spend directly or through the agreed billing method. If advertising spend is paused, declined, rejected, limited, or unavailable, campaign performance may be affected.",
  },
  {
    type: "paragraph",
    text: "Rental Growth Systems is not responsible for account suspensions, policy reviews, disapproved ads, billing issues, platform restrictions, or performance changes caused by advertising platforms.",
  },
  { type: "subheading", text: "8. Payments, Subscriptions, and Billing" },
  {
    type: "paragraph",
    text: "Payment terms may vary based on the selected service, package, checkout page, subscription, invoice, founding partner offer, market arrangement, or custom agreement.",
  },
  {
    type: "paragraph",
    text: "Rental Growth Systems may charge setup fees, quarterly fees, monthly fees, subscription fees, advertising management fees, website fees, CRM fees, AI system fees, lead generation fees, or other service-related fees.",
  },
  {
    type: "paragraph",
    text: "Payment is due according to the terms presented at the time of checkout, agreement, invoice, subscription signup, or service confirmation.",
  },
  {
    type: "paragraph",
    text: "Prices, service fees, package details, and renewal terms are subject to change at any time. Any pricing changes for active clients will be communicated when applicable.",
  },
  {
    type: "paragraph",
    text: "Failure to pay outstanding invoices, subscription fees, renewal fees, checkout balances, or service fees may result in paused services, suspended account access, paused lead delivery, removal from featured placement, disabled CRM or automation tools, paused advertising management, or termination of services.",
  },
  { type: "subheading", text: "9. Cancellations and Service Changes" },
  {
    type: "paragraph",
    text: "Some services may require an initial commitment period, minimum term, setup fee, advance payment, quarterly payment, subscription period, or written cancellation notice.",
  },
  {
    type: "paragraph",
    text: "If a client cancels before the end of a commitment period, billing period, quarterly period, setup period, or agreed service term, any amounts already paid may be non-refundable unless otherwise stated in writing.",
  },
  {
    type: "paragraph",
    text: "Clients may request service changes, package upgrades, downgrades, cancellations, or account modifications by contacting Rental Growth Systems directly.",
  },
  {
    type: "paragraph",
    text: "Rental Growth Systems reserves the right to cancel, pause, or modify services if a user violates these Terms, fails to pay, misuses our systems, provides inaccurate information, repeatedly fails to respond to required onboarding requests, engages in unlawful activity, or engages in conduct that could harm Rental Growth Systems, customers, partners, platforms, or other users.",
  },
  { type: "subheading", text: "10. Refunds" },
  {
    type: "paragraph",
    text: "Because Rental Growth Systems provides marketing services, setup work, directory placement, website work, CRM configuration, AI system setup, advertising support, automation work, reporting, consulting, software access, and other business services involving time, labor, data, and third-party costs, all payments are generally non-refundable unless otherwise stated in writing.",
  },
  {
    type: "paragraph",
    text: "If there is an issue with a service, subscription, package, checkout purchase, campaign, setup, or account, please contact us as soon as possible so we can review the situation and determine whether an account adjustment, replacement service, credit, or other resolution may be appropriate.",
  },
  { type: "subheading", text: "11. No Guarantee of Results" },
  {
    type: "paragraph",
    text: "Rental Growth Systems works to help rental companies improve online visibility, capture more inquiries, respond faster, and book more jobs. However, we do not guarantee specific results, revenue, profits, return on investment, lead volume, booking volume, search rankings, ad performance, customer acquisition outcomes, or business growth.",
  },
  {
    type: "paragraph",
    text: "Results may vary based on market conditions, service area, pricing, competition, seasonality, advertising budget, search demand, website performance, client responsiveness, sales process, fulfillment quality, availability, customer reviews, and other factors outside of our control.",
  },
  {
    type: "paragraph",
    text: "Any examples, projections, case studies, testimonials, or marketing statements are for illustrative purposes only and do not guarantee future performance.",
  },
  { type: "subheading", text: "12. Website and System Use" },
  {
    type: "paragraph",
    text: "You agree to use our website, forms, checkout pages, scheduling pages, chat widgets, communication systems, and services only for lawful purposes.",
  },
  {
    type: "paragraph",
    text: "You may not attempt to interfere with our website or systems, misuse forms or chat widgets, submit false information, scrape data, reverse engineer our systems, copy our workflows, abuse communication tools, impersonate another person or business, or use Rental Growth Systems systems in a way that could harm Rental Growth Systems or other users.",
  },
  { type: "subheading", text: "13. Website Content and Intellectual Property" },
  {
    type: "paragraph",
    text: "The content on our website, including text, images, logos, graphics, service descriptions, directory content, landing page content, blog content, website layouts, forms, workflows, software descriptions, marketing materials, and branding, is owned by or licensed to Rental Growth Systems unless otherwise stated.",
  },
  {
    type: "paragraph",
    text: "You may not copy, reproduce, distribute, modify, sell, scrape, republish, or use our website content, branding, workflows, systems, or materials for commercial purposes without written permission.",
  },
  {
    type: "paragraph",
    text: "Any client-provided materials remain the property of the client or their respective owners. By providing materials to Rental Growth Systems, clients grant us permission to use those materials for the purpose of providing services, building assets, creating listings, running campaigns, managing websites, or supporting the client’s account.",
  },
  { type: "subheading", text: "14. Third-Party Links and Services" },
  {
    type: "paragraph",
    text: "Our website and services may include links to or integrations with third-party platforms, including CRM systems, payment processors, communication tools, advertising platforms, analytics tools, maps, social media platforms, scheduling tools, AI platforms, hosting providers, review sites, or directory platforms.",
  },
  {
    type: "paragraph",
    text: "We are not responsible for the content, policies, availability, performance, or practices of third-party websites, software, or services.",
  },
  {
    type: "paragraph",
    text: "Third-party services may have their own terms, privacy policies, costs, limitations, and requirements.",
  },
  { type: "subheading", text: "15. Text Messages, Emails, and Communication" },
  {
    type: "paragraph",
    text: "By submitting your contact information through our website, chat widget, forms, checkout pages, booking tools, scheduling pages, landing pages, ads, or other communication channels, you agree that Rental Growth Systems may contact you regarding your inquiry, account, purchase, appointment, onboarding, service updates, customer support, billing, promotions, or related services.",
  },
  {
    type: "paragraph",
    text: "Message and data rates may apply for SMS messages. You may opt out of promotional text messages at any time by replying STOP, where applicable.",
  },
  { type: "subheading", text: "SMS Terms and Conditions" },
  {
    type: "paragraph",
    text: "Rental Growth Systems provides marketing, lead generation, website, CRM, automation, directory placement, advertising, AI communication, and related business growth services for portable toilet rental companies, restroom trailer rental companies, roll-off dumpster rental companies, and related local rental businesses.",
  },
  {
    type: "paragraph",
    text: "By providing your phone number and opting in to receive text messages, you agree to receive SMS messages from Rental Growth Systems. These messages may include customer service messages, inquiry follow-ups, appointment reminders, account updates, onboarding reminders, service updates, billing reminders, lead notifications, CRM notifications, campaign updates, review request notifications, AI system notifications, and occasional promotional messages related to our services.",
  },
  {
    type: "paragraph",
    text: "You can cancel the SMS service at any time. Just text STOP to 970-568-6136. After you send the SMS message STOP to us, we may send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive promotional SMS messages from us.",
  },
  {
    type: "paragraph",
    text: "If you want to join again, you may sign up again through our website, forms, booking pages, checkout pages, or other opt-in methods, and we may begin sending SMS messages to you again.",
  },
  {
    type: "paragraph",
    text: "If you are experiencing issues with the messaging program, you can reply with the keyword HELP for more assistance, or you can get help directly by contacting us at adam@rentalgrowthsystems.com or 970-568-6136.",
  },
  { type: "paragraph", text: "Carriers are not liable for delayed or undelivered messages." },
  {
    type: "paragraph",
    text: "Message and data rates may apply for any messages sent to you from us and to us from you. Message frequency may vary based on your inquiries, account activity, purchases, appointments, onboarding, service updates, lead notifications, subscriptions, and communication preferences.",
  },
  {
    type: "paragraph",
    text: "If you have questions about your text plan or data plan, please contact your wireless provider.",
  },
  {
    type: "paragraph",
    text: "If you have any questions regarding privacy, please read our Privacy Policy: [https://rentalgrowthsystems.com/privacy-policy](/privacy-policy)",
  },
  { type: "subheading", text: "16. Limitation of Liability" },
  {
    type: "paragraph",
    text: "To the fullest extent permitted by law, Rental Growth Systems is not liable for indirect, incidental, special, consequential, punitive, or lost-profit damages related to your use of our website, services, systems, software, marketing campaigns, communications, CRM tools, AI tools, directory placements, advertising platforms, third-party tools, or customer inquiries.",
  },
  {
    type: "paragraph",
    text: "Rental Growth Systems is not responsible for damages, delays, disputes, losses, missed opportunities, lost revenue, customer complaints, fulfillment issues, property damage, billing disputes, advertising platform changes, third-party outages, or business losses arising from client operations, third-party platforms, customer behavior, market conditions, or services performed by the client or other third parties.",
  },
  {
    type: "paragraph",
    text: "Our total liability for any claim related to a service will not exceed the amount paid by the client to Rental Growth Systems for the specific service giving rise to the claim.",
  },
  { type: "subheading", text: "17. Indemnification" },
  {
    type: "paragraph",
    text: "You agree to indemnify and hold harmless Rental Growth Systems, its owners, team members, contractors, partners, vendors, and service providers from any claims, damages, losses, liabilities, costs, or expenses arising from your use of our services, your business operations, your customer communications, your advertising claims, your fulfillment activity, your violation of these Terms, your violation of applicable laws, or your misuse of our website, systems, or services.",
  },
  { type: "subheading", text: "18. Service Availability" },
  {
    type: "paragraph",
    text: "We strive to keep our website, systems, communication tools, and services available and functioning properly. However, we do not guarantee uninterrupted access.",
  },
  {
    type: "paragraph",
    text: "Services may occasionally be delayed, unavailable, interrupted, or affected by maintenance, technical issues, third-party outages, carrier issues, software updates, platform changes, advertising platform reviews, payment issues, market conditions, or circumstances outside of our control.",
  },
  { type: "subheading", text: "19. Changes to These Terms" },
  {
    type: "paragraph",
    text: "We may update these Terms of Service from time to time. Any changes will be posted on this page with an updated effective date.",
  },
  {
    type: "paragraph",
    text: "Your continued use of our website, services, forms, checkout pages, scheduling pages, or communication systems after changes are posted means you accept the updated Terms.",
  },
  { type: "subheading", text: "20. Contact Us" },
  {
    type: "paragraph",
    text: "For questions about these Terms of Service, please contact us:",
  },
  {
    type: "paragraph",
    text: "Rental Growth Systems\n775 Yampa Ave.\nCraig, CO 81625",
  },
  {
    type: "paragraph",
    text: "Phone: 970-620-9540\nEmail: adam@rentalgrowthsystems.com",
  },
];
