export const opay = [
  {
    slug: "how-to-open-an-opay-account",
    section: "banking",
    cluster: "opay",
    title: "How to Open an OPay Account",
    description: "How to sign up for an OPay wallet and complete verification.",
    updated: "2026-06-19",
    requirements: ["A smartphone", "Phone number", "BVN or NIN for verification"],
    steps: [
      {
        title: "Download the OPay app",
        body: "Install OPay from the Google Play Store or Apple App Store and open it.",
      },
      {
        title: "Sign up with your phone number",
        body: "Enter your phone number and verify it with the OTP sent via SMS.",
      },
      {
        title: "Create your login PIN",
        body: "Set a secure PIN that you'll use to log in and authorise transactions.",
      },
      {
        title: "Complete BVN or NIN verification",
        body: "Provide your BVN or NIN within the app to unlock full wallet features and higher transaction limits.",
      },
      {
        title: "Start using your OPay wallet",
        body: "Once verified, you can fund your wallet, transfer money, buy airtime/data, and pay bills.",
      },
    ],
    faq: [
      {
        q: "Is OPay a bank?",
        a: "OPay operates as a licensed mobile money/fintech platform rather than a conventional commercial bank, but it offers many similar services like transfers, savings, and a debit card.",
      },
    ],
    relatedSlugs: ["how-to-reset-opay-pin", "how-to-transfer-money-on-opay"],
  },
  {
    slug: "how-to-reset-opay-pin",
    section: "banking",
    cluster: "opay",
    title: "How to Reset Your OPay PIN",
    description: "Steps to reset a forgotten OPay login or transaction PIN.",
    updated: "2026-06-19",
    requirements: ["Registered phone number", "Access to the OPay app"],
    steps: [
      {
        title: "Open the OPay app and tap 'Forgot PIN'",
        body: "On the login screen, select the option for a forgotten PIN.",
      },
      {
        title: "Verify your identity",
        body: "Confirm via an OTP sent to your registered phone number, and additional verification such as your BVN if requested.",
      },
      {
        title: "Set a new PIN",
        body: "Choose a new secure PIN, avoiding easily guessed combinations like birthdays or repeated digits.",
      },
      {
        title: "Log in with your new PIN",
        body: "Confirm the reset worked by logging in and checking your balance.",
      },
    ],
    faq: [
      {
        q: "What if I no longer have my registered phone number?",
        a: "Contact OPay customer support through the in-app help centre to verify your identity through alternative means and update your number.",
      },
    ],
    relatedSlugs: ["how-to-open-an-opay-account"],
  },
  {
    slug: "how-to-transfer-money-on-opay",
    section: "banking",
    cluster: "opay",
    title: "How to Transfer Money on OPay",
    description: "How to send money to other OPay users or to bank accounts using the OPay app.",
    updated: "2026-06-19",
    requirements: ["Funded OPay wallet", "Recipient's account details"],
    steps: [
      {
        title: "Open the app and select 'Transfer'",
        body: "From the OPay home screen, tap the transfer/send money option.",
      },
      {
        title: "Choose the destination",
        body: "Select whether you're sending to another OPay user or to a bank account, then enter the account number and select the correct bank.",
      },
      {
        title: "Enter the amount and confirm the recipient's name",
        body: "Double-check the auto-displayed account name before proceeding to avoid sending money to the wrong person.",
      },
      {
        title: "Authorise with your PIN",
        body: "Enter your transaction PIN to complete the transfer, and save a screenshot of the receipt if needed.",
      },
    ],
    faq: [
      {
        q: "Are OPay-to-OPay transfers free?",
        a: "OPay-to-OPay transfers are commonly free or have minimal fees, while transfers to other banks may attract a small standard fee — check the app for current rates.",
      },
    ],
    relatedSlugs: ["how-to-open-an-opay-account", "how-to-reset-opay-pin"],
  },
];
