export const siteConfig = {
  name: "OBaaC",
  fullName: "Open Banking as a Community",
  url: "https://obaac.org",
  redditUrl: "https://www.reddit.com/r/OBaaC/",
  docsUrl: "#",
  climateSaversUrl: "https://climatesavers.io",
};

export const communityCards = [
  {
    title: "Collective choice",
    description: "Each transaction signals demand for sustainable alternatives.",
    icon: "people" as const,
  },
  {
    title: "Growing momentum",
    description:
      "By switching demand we create consensus for greener policy for decarbonisation, and subsidies for adaptation & resilience.",
    icon: "trend" as const,
  },
  {
    title: "Shared values",
    description:
      "Join millions of people who understand that we are more powerful as a collective, than we are as individuals.",
    icon: "heart" as const,
  },
];

export const co2Comparison = [
  { mode: "European Sleeper", kg: 12, color: "bg-spark-green" },
  { mode: "Car", kg: 89, color: "bg-amber-400" },
  { mode: "Flight", kg: 142, color: "bg-red-400" },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSection = {
  title: string;
  items: FAQItem[];
};

export const faqSections: FAQSection[] = [
  {
    title: "The Vision & Philosophy",
    items: [
      {
        question: "What is OBaaC?",
        answer:
          "Open Banking as a Community (OBaaC) is a grassroots initiative to reclaim consumer financial data. Historically, financial institutions and corporations have used your transaction data to target you, build credit scores, and maximize their profits. OBaaC flips this on its head. By securely linking our bank accounts together, we aggregate our purchasing decisions to prove consumer demand, monetize sustainable choices, and force collective accountability on markets and politicians alike.",
      },
      {
        question: 'What is the "Out-In" model?',
        answer:
          'Currently, our political and environmental systems operate on an "In-Out" model. This is a top-down approach where a central authority (politicians, regulatory bodies) tries to push climate policies outward to the public. Because this central point is heavily influenced by corporate lobbyists, these policies are often watered down, scattered, and fail to deliver meaningful change. OBaaC proposes an "Out-In" model. Instead of waiting for top-down action, we start on the outside (individual citizens making sustainable choices). By aggregating our verified transactions, we drive a concentrated force of consensus inward to the center. When politicians see a massive, undeniable block of citizens shifting their actual wallets, it empowers them—and forces them—to pass bolder climate policy.',
      },
      {
        question: 'What do you mean by "Reclaiming Your Carbon Footprint"?',
        answer: "footprint-manifesto",
      },
    ],
  },
  {
    title: "Concrete Proof: The Climate Savers Pilot",
    items: [
      {
        question: "What does this look like in practice?",
        answer: "climate-savers-pilot",
      },
    ],
  },
  {
    title: "Privacy, Trust & Technology (Plaid)",
    items: [
      {
        question: "How does the financial tracking work? Is it safe?",
        answer:
          'The biggest hurdle to building a data-sharing community is trust. We address this proactively. OBaaC and its applications (like Climate Savers) use Plaid to connect to bank accounts. We Never See Your Password: When you link your account, you do not give your username or password to OBaaC. Instead, you log in directly to your bank through Plaid\'s secure, bank-grade portal. The "Valet Key" Analogy: When your bank verifies your login, it does not hand over a master key. Instead, it issues a scrambled digital "token." This acts exactly like a valet key: it allows read-only access to verify specific transactions (like buying a European Sleeper ticket), but it has absolutely no power to move money, change account settings, or view unauthorized data. Total User Control: You are in charge. You can instantly revoke this digital token directly from your bank\'s dashboard at any time, instantly severing the connection.',
      },
      {
        question: "Is my data anonymized?",
        answer:
          'Yes. Your individual banking data is strictly private and used only to verify your specific cashback claims. For public advocacy and the "Out-In" model, data is stripped of all personally identifiable information (PII) and aggregated into a single, unified community metric (e.g., "7,853 collective bookings") to show market demand.',
      },
    ],
  },
  {
    title: "How to Get Involved",
    items: [
      {
        question: "How do I join the movement?",
        answer: "get-involved",
      },
    ],
  },
];

export type SpecialFAQAnswer =
  | "footprint-manifesto"
  | "climate-savers-pilot"
  | "get-involved";

export function isSpecialFAQAnswer(
  answer: string
): answer is SpecialFAQAnswer {
  return (
    answer === "footprint-manifesto" ||
    answer === "climate-savers-pilot" ||
    answer === "get-involved"
  );
}
