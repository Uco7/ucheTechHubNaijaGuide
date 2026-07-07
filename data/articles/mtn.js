export const mtn = [
  {
    slug: "how-to-borrow-airtime-on-mtn",
    section: "telecom",
    cluster: "mtn",
    title: "How to Borrow Airtime on MTN (MTN Xtratime)",
    description: "How to borrow emergency airtime from MTN using the Xtratime service.",
    updated: "2026-06-24",
    requirements: ["An active MTN line with a history of recharges"],
    steps: [
      {
        title: "Dial the Xtratime USSD code",
        body: "Dial *606# from your MTN line to check your eligibility and available borrowing options.",
      },
      {
        title: "Select an amount",
        body: "Choose from the airtime amounts offered — eligibility and amounts depend on your usage history on the network.",
      },
      {
        title: "Confirm the loan",
        body: "Confirm your selection; the airtime is credited instantly, along with a small service fee deducted on your next recharge.",
      },
      {
        title: "Repay by recharging",
        body: "The borrowed amount plus fee is automatically deducted the next time you top up your line.",
      },
    ],
    faq: [
      {
        q: "Why am I not eligible for Xtratime?",
        a: "Eligibility is based on your usage and recharge pattern; new lines or lines with irregular top-up history are less likely to qualify.",
      },
    ],
    relatedSlugs: ["how-to-borrow-data-on-mtn", "how-to-check-mtn-balance"],
  },
  {
    slug: "how-to-borrow-data-on-mtn",
    section: "telecom",
    cluster: "mtn",
    title: "How to Borrow Data on MTN",
    description: "How to get emergency data on credit when you run out on MTN.",
    updated: "2026-06-24",
    requirements: ["An active MTN line eligible for data borrowing"],
    steps: [
      {
        title: "Dial the data borrowing code",
        body: "Dial *606# and look for the data borrowing option, or check the MyMTN app for a 'Borrow Data' banner when your bundle runs out.",
      },
      {
        title: "Choose your preferred data plan",
        body: "Select from the available borrowed data sizes shown for your line.",
      },
      {
        title: "Confirm to receive data instantly",
        body: "Once confirmed, the data is added to your line immediately, with the cost deducted on your next recharge.",
      },
    ],
    faq: [
      {
        q: "Can I borrow data if I already owe MTN from a previous loan?",
        a: "Generally no — you'll need to clear any outstanding borrowed airtime or data before you can borrow again.",
      },
    ],
    relatedSlugs: ["how-to-borrow-airtime-on-mtn", "how-to-buy-data-on-mtn"],
  },
  {
    slug: "how-to-check-mtn-balance",
    section: "telecom",
    cluster: "mtn",
    title: "How to Check Your MTN Airtime and Data Balance",
    description: "USSD codes to quickly check your MTN airtime and data balance.",
    updated: "2026-06-24",
    requirements: ["An active MTN line"],
    steps: [
      {
        title: "Check airtime balance",
        body: "Dial *556# to see your current airtime balance instantly.",
      },
      {
        title: "Check data balance",
        body: "Dial *323# to view your remaining data across active bundles.",
      },
      {
        title: "Check via the MyMTN app",
        body: "Open the MyMTN app and view both balances on the home dashboard without dialling any code.",
      },
    ],
    faq: [
      {
        q: "Why does my data balance show 0 even though I just bought a bundle?",
        a: "There can be a short delay in activation after purchase; wait a few minutes and check again, or restart your phone's network connection.",
      },
    ],
    relatedSlugs: ["how-to-buy-data-on-mtn", "how-to-borrow-data-on-mtn"],
  },
  {
    slug: "how-to-buy-data-on-mtn",
    section: "telecom",
    cluster: "mtn",
    title: "How to Buy a Data Bundle on MTN",
    description: "Several ways to purchase an MTN data plan — USSD, app, or online.",
    updated: "2026-06-24",
    requirements: ["Airtime or a linked payment card"],
    steps: [
      {
        title: "Dial the data bundle USSD code",
        body: "Dial *131# and follow the prompts to browse and select a data plan that fits your budget and needs.",
      },
      {
        title: "Buy through the MyMTN app",
        body: "Open the app, go to 'Data', choose a bundle, and pay from your airtime balance or a linked card.",
      },
      {
        title: "Buy online via the MTN website",
        body: "Visit the MTN self-service website, log in with your number, and purchase a bundle using a debit card.",
      },
      {
        title: "Confirm activation",
        body: "You'll receive a confirmation SMS once your new bundle is active; check your balance with *323#.",
      },
    ],
    faq: [
      {
        q: "Do unused data bundles roll over?",
        a: "It depends on the specific plan — some MTN bundles allow rollover of unused data on renewal, others don't; check the plan's terms before buying.",
      },
    ],
    relatedSlugs: ["how-to-check-mtn-balance", "how-to-borrow-data-on-mtn"],
  },
  {
    slug: "how-to-link-nin-to-mtn-line",
    section: "telecom",
    cluster: "mtn",
    title: "How to Link Your NIN to an MTN Line (Telecom Guide)",
    description: "A telecom-side walkthrough for linking your NIN to MTN, including troubleshooting failed attempts.",
    updated: "2026-06-24",
    requirements: ["Your 11-digit NIN", "The MTN SIM to link"],
    steps: [
      {
        title: "Dial *785# from the MTN line",
        body: "Follow the prompts and enter your NIN when requested.",
      },
      {
        title: "Enter the OTP from NIMC",
        body: "A verification code will be sent to confirm the NIN belongs to you — enter it promptly as it expires quickly.",
      },
      {
        title: "Troubleshoot a failed attempt",
        body: "If linking fails repeatedly, it's often due to a mismatch between your NIN details and SIM registration details; visit an MTN Connect store with your NIN slip for manual linking.",
      },
    ],
    faq: [
      {
        q: "How do I know if my line is already linked?",
        a: "Dial *996# (or the current published verification code) to check your NIN-SIM linking status on MTN.",
      },
    ],
    relatedSlugs: ["how-to-borrow-airtime-on-mtn", "how-to-check-mtn-balance"],
  },
];
