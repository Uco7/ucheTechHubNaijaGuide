export const mtnGhana = [
  {
    slug: "how-to-register-for-mtn-momo",
    section: "telecom",
    cluster: "mtn-ghana",
    title: "How to Register for MTN Mobile Money (MoMo) in Ghana",
    description: "How to sign up for an MTN MoMo wallet using your MTN Ghana line.",
    updated: "2026-07-03",
    requirements: ["An active MTN Ghana SIM", "A valid Ghana Card or other accepted ID"],
    steps: [
      {
        title: "Dial the MoMo registration code",
        body: "Dial *170# from your MTN line and select the option to register for Mobile Money.",
      },
      {
        title: "Provide your ID details",
        body: "Enter your Ghana Card number when prompted; some registrations may also need in-person verification at an MTN partner shop.",
      },
      {
        title: "Set your MoMo PIN",
        body: "Choose a secure 4-digit PIN — you'll need it to authorise every transaction going forward.",
      },
      {
        title: "Start using MoMo",
        body: "Once active, use *170# to send money, buy airtime and data, pay bills, and cash out at an agent.",
      },
    ],
    faq: [
      {
        q: "Can I register for MoMo without a Ghana Card?",
        a: "The Ghana Card is the standard requirement for MoMo registration; other forms of ID may be accepted at an MTN office in specific cases.",
      },
    ],
    relatedSlugs: ["how-to-check-mtn-ghana-balance", "how-to-buy-mtn-ghana-data"],
  },
  {
    slug: "how-to-check-mtn-ghana-balance",
    section: "telecom",
    cluster: "mtn-ghana",
    title: "How to Check Your MTN Ghana Airtime and Data Balance",
    description: "USSD codes to check your MTN Ghana credit and data balance.",
    updated: "2026-07-03",
    requirements: ["An active MTN Ghana line"],
    steps: [
      {
        title: "Check airtime balance",
        body: "Dial *124# to see your current airtime credit.",
      },
      {
        title: "Check data balance",
        body: "Dial *138# and follow the prompt to view your remaining data bundle.",
      },
      {
        title: "Check via the MyMTN Ghana app",
        body: "Open the app to see both your airtime and data balances on a single dashboard.",
      },
    ],
    faq: [
      {
        q: "Why does my data balance not update immediately after buying a bundle?",
        a: "There's often a short activation delay; restart your phone's data connection and check again after a few minutes.",
      },
    ],
    relatedSlugs: ["how-to-buy-mtn-ghana-data", "how-to-register-for-mtn-momo"],
  },
  {
    slug: "how-to-buy-mtn-ghana-data",
    section: "telecom",
    cluster: "mtn-ghana",
    title: "How to Buy an MTN Ghana Data Bundle",
    description: "How to purchase a data bundle on MTN Ghana using USSD or MoMo.",
    updated: "2026-07-03",
    requirements: ["Airtime or MoMo balance"],
    steps: [
      {
        title: "Dial the data bundle code",
        body: "Dial *138# and select from the available daily, weekly, or monthly data plans.",
      },
      {
        title: "Pay with airtime or MoMo",
        body: "Choose your preferred payment method when prompted to complete the purchase.",
      },
      {
        title: "Confirm activation",
        body: "You'll get an SMS confirming your new bundle is active; check your balance with *138# to verify.",
      },
    ],
    faq: [
      {
        q: "Can I gift a data bundle to someone else on MTN Ghana?",
        a: "Yes, MTN Ghana allows data gifting to another MTN number through the same *138# menu or the MyMTN app.",
      },
    ],
    relatedSlugs: ["how-to-check-mtn-ghana-balance", "how-to-register-for-mtn-momo"],
  },
];
