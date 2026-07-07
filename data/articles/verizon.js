export const verizon = [
  {
    slug: "how-to-activate-a-verizon-esim",
    section: "telecom",
    cluster: "verizon",
    title: "How to Activate a Verizon eSIM",
    description: "Steps to activate an eSIM on a new or existing Verizon plan.",
    updated: "2026-07-04",
    requirements: ["An eSIM-compatible phone", "A Verizon account", "Wi-Fi connection for setup"],
    steps: [
      {
        title: "Order or confirm your eSIM",
        body: "If you're switching to Verizon or adding a device, request an eSIM through the My Verizon app, online, or in-store instead of a physical SIM.",
      },
      {
        title: "Scan the activation QR code",
        body: "You'll receive a QR code by email or in-app — go to your phone's cellular settings and select 'Add eSIM' to scan it.",
      },
      {
        title: "Follow the on-screen setup",
        body: "Your phone will download the eSIM profile automatically; this can take a few minutes over Wi-Fi.",
      },
      {
        title: "Set your eSIM as your primary or secondary line",
        body: "Choose whether the new eSIM is your main line or a secondary line for data/international use, then restart your phone if prompted.",
      },
      {
        title: "Confirm service is active",
        body: "Make a test call or check for a signal to confirm activation completed successfully.",
      },
    ],
    faq: [
      {
        q: "What if my eSIM QR code doesn't scan?",
        a: "Ensure you're connected to Wi-Fi and try entering the activation details manually if your phone offers that option, or contact Verizon support to resend the code.",
      },
    ],
    relatedSlugs: ["how-to-check-verizon-data-usage", "how-to-set-up-verizon-international-roaming"],
  },
  {
    slug: "how-to-check-verizon-data-usage",
    section: "telecom",
    cluster: "verizon",
    title: "How to Check Your Verizon Data Usage",
    description: "How to monitor your data usage on a Verizon plan to avoid overage charges.",
    updated: "2026-07-04",
    requirements: ["A Verizon account", "The My Verizon app or online account access"],
    steps: [
      {
        title: "Open the My Verizon app",
        body: "Log in and view the usage summary on the home dashboard, which shows data used against your plan's allowance.",
      },
      {
        title: "Check via text",
        body: "Text 'USAGE' to 4041 (Alltel/legacy) or check the equivalent current short code Verizon publishes for a quick usage summary by SMS.",
      },
      {
        title: "Set usage alerts",
        body: "In the app, enable notifications for when you're approaching your data limit to avoid unexpected overage charges.",
      },
    ],
    faq: [
      {
        q: "Does Verizon slow my speed after I use all my data?",
        a: "On many unlimited plans, speeds may be reduced (deprioritized) after a certain threshold during network congestion, rather than charging overage fees — check your specific plan's terms.",
      },
    ],
    relatedSlugs: ["how-to-activate-a-verizon-esim", "how-to-pay-your-verizon-bill"],
  },
  {
    slug: "how-to-pay-your-verizon-bill",
    section: "telecom",
    cluster: "verizon",
    title: "How to Pay Your Verizon Bill",
    description: "Several ways to pay your Verizon Wireless bill, and how to set up AutoPay.",
    updated: "2026-07-04",
    requirements: ["A Verizon account", "A payment method (card or bank account)"],
    steps: [
      {
        title: "Pay through the My Verizon app or website",
        body: "Log in, go to 'Billing', and choose to make a one-time payment with a saved or new payment method.",
      },
      {
        title: "Set up AutoPay",
        body: "In the billing section, enable AutoPay and link a card or bank account so your bill is paid automatically each month — often with a small discount applied.",
      },
      {
        title: "Pay by phone or in-store",
        body: "Call Verizon's automated payment line, or visit a Verizon store to pay in person if you prefer not to use the app.",
      },
    ],
    faq: [
      {
        q: "What happens if I miss a payment?",
        a: "A missed payment can lead to a late fee and, if unresolved, service interruption — contact Verizon promptly if you're unable to pay on time to discuss options.",
      },
    ],
    relatedSlugs: ["how-to-check-verizon-data-usage"],
  },
  {
    slug: "how-to-set-up-verizon-international-roaming",
    section: "telecom",
    cluster: "verizon",
    title: "How to Set Up International Roaming on Verizon",
    description: "How to enable and use your Verizon plan while travelling outside the US.",
    updated: "2026-07-04",
    requirements: ["An active Verizon plan", "A roaming-capable device"],
    steps: [
      {
        title: "Check your plan's international coverage",
        body: "Some Verizon plans include basic international data/talk/text (like TravelPass-style features); check what's included before you travel.",
      },
      {
        title: "Add a travel plan if needed",
        body: "In the My Verizon app, add a short-term international travel plan for the specific countries you're visiting.",
      },
      {
        title: "Enable roaming on your device",
        body: "Turn on data roaming under your phone's cellular settings so it can connect to a partner network abroad.",
      },
      {
        title: "Monitor usage while travelling",
        body: "Check the app periodically to track international usage and avoid unexpected charges when the travel plan expires.",
      },
    ],
    faq: [
      {
        q: "Is it cheaper to buy a local SIM instead of roaming?",
        a: "For longer trips, a local prepaid SIM is often cheaper than roaming; for short trips, a Verizon travel pass can be more convenient since you keep your existing number.",
      },
    ],
    relatedSlugs: ["how-to-activate-a-verizon-esim", "how-to-check-verizon-data-usage"],
  },
];
