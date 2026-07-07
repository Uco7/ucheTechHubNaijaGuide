export const mpesa = [
  {
    slug: "how-to-register-for-mpesa",
    section: "banking",
    cluster: "mpesa",
    title: "How to Register for M-Pesa",
    description: "How to sign up for M-Pesa, Kenya's mobile money service, with a Safaricom line.",
    updated: "2026-07-02",
    requirements: ["A Safaricom SIM registered in your name", "A national ID or passport"],
    steps: [
      {
        title: "Visit a Safaricom shop or M-Pesa agent",
        body: "Registration requires in-person identity verification, so bring your national ID or passport to any Safaricom shop or authorised M-Pesa agent.",
      },
      {
        title: "Provide your SIM and ID",
        body: "The agent will confirm your line is registered in your name and match it against your ID.",
      },
      {
        title: "Create your M-Pesa PIN",
        body: "Set a secure 4-digit PIN that you'll use to authorise all future M-Pesa transactions.",
      },
      {
        title: "Start using M-Pesa",
        body: "Once registered, dial *334# or open the M-Pesa menu on your phone to deposit cash, send money, pay bills, and more.",
      },
    ],
    faq: [
      {
        q: "Can I register for M-Pesa without a Kenyan ID?",
        a: "Foreign residents can generally register using a valid passport, though requirements can vary by agent — carrying valid, current identification is essential either way.",
      },
    ],
    relatedSlugs: ["how-to-send-money-on-mpesa", "how-to-check-mpesa-balance"],
  },
  {
    slug: "how-to-send-money-on-mpesa",
    section: "banking",
    cluster: "mpesa",
    title: "How to Send Money on M-Pesa",
    description: "How to transfer money to another M-Pesa user or a bank account.",
    updated: "2026-07-02",
    requirements: ["A registered M-Pesa line with sufficient balance", "Recipient's phone number"],
    steps: [
      {
        title: "Dial *334# or open the M-Pesa app",
        body: "Access the M-Pesa menu directly from your phone or through the Safaricom app.",
      },
      {
        title: "Select 'Send Money'",
        body: "Choose whether you're sending to a registered M-Pesa user or an unregistered number.",
      },
      {
        title: "Enter the recipient's number and amount",
        body: "Double-check the phone number carefully before proceeding, since M-Pesa transfers can't be reversed once completed.",
      },
      {
        title: "Confirm with your PIN",
        body: "Enter your M-Pesa PIN to authorise the transfer; you'll receive an SMS confirmation once it's complete.",
      },
    ],
    faq: [
      {
        q: "Can I send money to someone without Safaricom?",
        a: "Yes — M-Pesa allows sending to unregistered numbers, who can then withdraw the cash at any M-Pesa agent using a code sent to their phone.",
      },
    ],
    relatedSlugs: ["how-to-register-for-mpesa", "how-to-check-mpesa-balance"],
  },
  {
    slug: "how-to-check-mpesa-balance",
    section: "banking",
    cluster: "mpesa",
    title: "How to Check Your M-Pesa Balance",
    description: "How to check your M-Pesa account balance using USSD or the app.",
    updated: "2026-07-02",
    requirements: ["A registered M-Pesa line", "Your M-Pesa PIN"],
    steps: [
      {
        title: "Dial *334# and select 'My Account'",
        body: "Choose 'Show Balance' and enter your M-Pesa PIN when prompted to view your current balance.",
      },
      {
        title: "Check via the M-Pesa/Safaricom app",
        body: "Log in to the app with your PIN or biometric login to view your balance alongside recent transactions.",
      },
    ],
    faq: [
      {
        q: "Is checking my M-Pesa balance free?",
        a: "Balance checks typically carry no charge or a very minimal fee — this can vary, so confirm current rates in the app or with Safaricom customer care.",
      },
    ],
    relatedSlugs: ["how-to-send-money-on-mpesa", "how-to-register-for-mpesa"],
  },
];
