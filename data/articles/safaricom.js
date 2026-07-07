export const safaricom = [
  {
    slug: "how-to-check-safaricom-balance",
    section: "telecom",
    cluster: "safaricom",
    title: "How to Check Your Safaricom Airtime and Data Balance",
    description: "USSD codes to check your Safaricom airtime and bundle balance in Kenya.",
    updated: "2026-07-02",
    requirements: ["An active Safaricom line"],
    steps: [
      {
        title: "Check airtime balance",
        body: "Dial *144# and follow the prompt, or dial *100# to see your airtime balance instantly.",
      },
      {
        title: "Check data bundle balance",
        body: "Dial *544# or check via the My Safaricom app to see your remaining data across active bundles.",
      },
      {
        title: "Check via the My Safaricom app",
        body: "Open the app and view airtime, data, and M-Pesa balances together on one dashboard.",
      },
    ],
    faq: [
      {
        q: "Why does *144# sometimes not respond?",
        a: "This is usually due to network congestion; wait a moment and retry, or use the My Safaricom app instead.",
      },
    ],
    relatedSlugs: ["how-to-buy-safaricom-data-bundles", "how-to-borrow-airtime-safaricom-okoa"],
  },
  {
    slug: "how-to-buy-safaricom-data-bundles",
    section: "telecom",
    cluster: "safaricom",
    title: "How to Buy a Safaricom Data Bundle",
    description: "How to purchase a Safaricom data bundle using USSD, the app, or M-Pesa.",
    updated: "2026-07-02",
    requirements: ["Airtime or M-Pesa balance"],
    steps: [
      {
        title: "Dial the bundle USSD code",
        body: "Dial *544# and select 'Data Bundles' to browse daily, weekly, and monthly options.",
      },
      {
        title: "Pay from airtime or M-Pesa",
        body: "Choose your preferred payment source when prompted to complete the purchase.",
      },
      {
        title: "Buy through the My Safaricom app",
        body: "Open the app, select 'Data', choose a bundle, and confirm payment for a faster, menu-based experience.",
      },
      {
        title: "Confirm activation by SMS",
        body: "You'll receive a confirmation text once the bundle is active; check your balance with *544# if needed.",
      },
    ],
    faq: [
      {
        q: "Do Safaricom data bundles roll over?",
        a: "Some bundle types allow rollover of unused data when you renew before expiry — check the specific bundle's terms when purchasing.",
      },
    ],
    relatedSlugs: ["how-to-check-safaricom-balance"],
  },
  {
    slug: "how-to-borrow-airtime-safaricom-okoa",
    section: "telecom",
    cluster: "safaricom",
    title: "How to Borrow Airtime on Safaricom (Okoa Jahazi)",
    description: "How to get emergency airtime on credit using Safaricom's Okoa Jahazi service.",
    updated: "2026-07-02",
    requirements: ["An active Safaricom line with sufficient usage history"],
    steps: [
      {
        title: "Dial the Okoa Jahazi code",
        body: "Dial *144# and select the Okoa Jahazi option to check your eligibility.",
      },
      {
        title: "Select an amount",
        body: "Choose from the amounts offered; available options depend on your line's usage history.",
      },
      {
        title: "Confirm to receive airtime instantly",
        body: "The airtime is credited immediately, with the loan amount plus a small fee deducted from your next top-up.",
      },
    ],
    faq: [
      {
        q: "What happens if I don't top up to repay?",
        a: "The owed amount stays pending and is automatically deducted whenever you next recharge; it can also affect future borrowing eligibility.",
      },
    ],
    relatedSlugs: ["how-to-check-safaricom-balance", "how-to-buy-safaricom-data-bundles"],
  },
];
