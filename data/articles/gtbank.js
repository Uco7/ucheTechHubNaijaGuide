export const gtbank = [
  {
    slug: "how-to-open-a-gtbank-account",
    section: "banking",
    cluster: "gtbank",
    title: "How to Open a GTBank Account",
    description: "How to open a savings or current account with Guaranty Trust Bank, online or in a branch.",
    updated: "2026-06-21",
    requirements: ["NIN or BVN", "Valid ID", "Passport photograph", "Proof of address (for some account tiers)"],
    steps: [
      {
        title: "Choose how you want to open the account",
        body: "You can open an account instantly via the GTWorld mobile app, through GTBank's online account opening portal, or by visiting a branch.",
      },
      {
        title: "Download GTWorld (for the app route)",
        body: "Install the GTWorld app, select 'Open an Account', and choose the account type that fits you (e.g., a tier-1 account needs just your BVN/NIN and phone number).",
      },
      {
        title: "Provide your BVN or NIN",
        body: "Enter your Bank Verification Number or NIN — the app pulls your bio-data automatically to speed up the process.",
      },
      {
        title: "Verify your identity",
        body: "Take a live selfie for facial verification and confirm your details match your BVN/NIN record.",
      },
      {
        title: "Set your transaction PIN and get your account number",
        body: "Once verified, you'll receive an account number instantly and can set your PIN to start transacting.",
      },
      {
        title: "Upgrade your account tier if needed",
        body: "For higher transaction limits, visit a branch with additional documents (proof of address, utility bill) to upgrade from a tier-1 to a tier-2 or tier-3 account.",
      },
    ],
    faq: [
      {
        q: "Can I open a GTBank account without visiting a branch?",
        a: "Yes, a basic tiered account can typically be opened entirely through the GTWorld app using your BVN or NIN, though higher tiers may require branch visits later.",
      },
    ],
    relatedSlugs: [
      "how-to-reset-gtbank-pin",
      "how-to-activate-gtbank-ussd",
      "how-to-block-a-gtbank-atm-card",
    ],
  },
  {
    slug: "how-to-reset-gtbank-pin",
    section: "banking",
    cluster: "gtbank",
    title: "How to Reset Your GTBank ATM/Transaction PIN",
    description: "How to reset a forgotten GTBank debit card or USSD transaction PIN.",
    updated: "2026-06-21",
    requirements: ["Registered phone number", "ATM card (for some methods) or account number"],
    steps: [
      {
        title: "Try USSD PIN reset",
        body: "Dial *737*5*5# (or the current published code) from your registered line and follow the prompts to reset your transaction PIN.",
      },
      {
        title: "Use the GTWorld app",
        body: "In the app, go to Card & PIN Management, select 'Reset PIN', and verify your identity via OTP or biometric login.",
      },
      {
        title: "Visit an ATM for a card PIN reset",
        body: "Some GTBank ATMs allow you to reset your card PIN directly by inserting your card and following the on-screen 'PIN change' option.",
      },
      {
        title: "Visit a branch as a fallback",
        body: "If self-service options fail, visit any branch with a valid ID for manual assistance.",
      },
    ],
    faq: [
      {
        q: "What if I no longer have access to my registered phone number?",
        a: "You'll need to visit a branch in person to update your phone number and reset your PIN, since OTP-based resets depend on that number.",
      },
    ],
    relatedSlugs: ["how-to-open-a-gtbank-account", "how-to-block-a-gtbank-atm-card"],
  },
  {
    slug: "how-to-block-a-gtbank-atm-card",
    section: "banking",
    cluster: "gtbank",
    title: "How to Block a Lost or Stolen GTBank ATM Card",
    description: "Quickly block your GTBank debit card if it's lost or stolen, using USSD, the app, or the call centre.",
    updated: "2026-06-13",
    requirements: ["Registered phone number or account number"],
    steps: [
      {
        title: "Act immediately",
        body: "The faster you block the card, the less risk of unauthorised transactions — do this the moment you notice it's missing.",
      },
      {
        title: "Dial the GTBank USSD code",
        body: "Dial *737*51*51# (or the current published code) and follow the prompt to block your card instantly.",
      },
      {
        title: "Use the GTWorld app",
        body: "Log in, go to Card Management, and select 'Block Card' for immediate deactivation.",
      },
      {
        title: "Call the GTBank contact centre",
        body: "If you can't access USSD or the app, call GTBank's customer care line to request an urgent card block.",
      },
      {
        title: "Order a replacement card",
        body: "Once blocked, request a new card through the app or at a branch.",
      },
    ],
    faq: [
      {
        q: "Will blocking my card affect my account or online banking?",
        a: "No — blocking a card only disables that physical card. Your account and other banking channels like USSD and internet banking remain active.",
      },
    ],
    relatedSlugs: ["how-to-reset-gtbank-pin", "how-to-open-a-gtbank-account"],
  },
  {
    slug: "how-to-activate-gtbank-ussd",
    section: "banking",
    cluster: "gtbank",
    title: "How to Activate GTBank USSD Banking (*737#)",
    description: "How to activate and start using GTBank's *737# USSD banking service.",
    updated: "2026-06-13",
    requirements: ["A GTBank account", "The phone number linked to your account"],
    steps: [
      {
        title: "Dial *737# from your registered number",
        body: "The service activates automatically the first time you dial it from the phone number linked to your account.",
      },
      {
        title: "Set a USSD transaction PIN",
        body: "Follow the prompts to create a 4-digit transaction PIN if you haven't set one before — you'll need this for transfers and other paid actions.",
      },
      {
        title: "Explore the menu",
        body: "Use options within *737# for balance checks, transfers, airtime purchase, and bill payments.",
      },
    ],
    faq: [
      {
        q: "What if *737# says my number isn't registered?",
        a: "Update your phone number on your account at a branch or via the app, since USSD banking only works with the number tied to your account.",
      },
    ],
    relatedSlugs: ["how-to-open-a-gtbank-account", "how-to-reset-gtbank-pin"],
  },
];
