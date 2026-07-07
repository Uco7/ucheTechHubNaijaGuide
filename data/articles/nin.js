export const nin = [
  {
    slug: "how-to-enroll-for-nin",
    section: "government",
    cluster: "nin",
    title: "How to Enrol for NIN (National Identification Number)",
    description:
      "A step-by-step guide to registering for your National Identification Number (NIN) at an NIMC enrolment centre in Nigeria.",
    updated: "2026-06-18",
    requirements: [
      "Any valid means of ID (birth certificate, declaration of age, national/international passport, or existing voter's card)",
      "Proof of address (utility bill, tenancy agreement, or similar) — not always required but helpful",
      "A working phone number you can receive SMS on",
    ],
    steps: [
      {
        title: "Locate an enrolment centre near you",
        body: "NIN enrolment is done in person, not online. Visit the NIMC website or a nearby NIMC office, bank enrolment centre (several banks now offer NIN enrolment), or a licensed private enrolment centre to find the closest location. Some states also run mobile enrolment vans in busy areas.",
      },
      {
        title: "Carry your documents",
        body: "Bring one valid means of identification. If you don't have any formal ID, some centres accept an attestation letter from your local government or a declaration of age document.",
      },
      {
        title: "Fill the enrolment form or provide details verbally",
        body: "At the centre, an official will take your bio-data: full name, date of birth, address, and next of kin details. Double-check every detail before it's submitted — corrections later can take weeks.",
      },
      {
        title: "Give your biometrics",
        body: "You'll have your fingerprints (all ten), a facial photograph, and sometimes an iris scan captured at the centre.",
      },
      {
        title: "Collect your transaction ID slip",
        body: "You'll be given a slip with a tracking/transaction ID. Keep this safe — you'll need it to check your enrolment status and retrieve your NIN once it's ready.",
      },
      {
        title: "Check your NIN status",
        body: "NIN generation can take anywhere from a few days to a few weeks depending on centre volume. Use your tracking ID on the NIMC self-service portal or by dialling *346# to check if your NIN is ready.",
      },
    ],
    faq: [
      {
        q: "Is NIN enrolment free?",
        a: "Enrolment itself is free at government NIMC centres. Some private/licensed centres and banks may charge a small service fee for convenience — this is for the service, not the NIN itself.",
      },
      {
        q: "Can I enrol for NIN online?",
        a: "No. Because biometric capture is required, initial enrolment must be done physically at a recognised centre. Only actions like modification requests or verification can start online.",
      },
      {
        q: "How long does it take to get a NIN after enrolment?",
        a: "It varies by centre and season (it's slower around JAMB/WAEC registration periods), ranging from a couple of days to several weeks.",
      },
    ],
    relatedSlugs: [
      "how-to-retrieve-nin",
      "how-to-link-nin-to-mtn",
      "how-to-print-nin-slip",
      "how-to-check-nin-status",
    ],
  },
  {
    slug: "how-to-retrieve-nin",
    section: "government",
    cluster: "nin",
    title: "How to Retrieve Your NIN If You've Forgotten It",
    description:
      "Lost or forgotten your National Identification Number? Here's how to retrieve it using USSD, the NIMC app, or an enrolment centre.",
    updated: "2026-06-18",
    requirements: [
      "The phone number used during enrolment (for USSD retrieval)",
      "Your tracking ID slip (if retrieving in person)",
    ],
    steps: [
      {
        title: "Try USSD retrieval first",
        body: "Dial *346*3# from the phone number you registered with. If it's linked correctly, you'll receive your NIN by SMS almost immediately.",
      },
      {
        title: "Use the NIMC mobile app",
        body: "Download the NIMC app, log in or create an account, and use the 'Retrieve NIN' option. You may need to verify with an OTP sent to your registered phone number.",
      },
      {
        title: "Visit an enrolment centre as a last resort",
        body: "If USSD and the app don't work — for example, your number changed — bring your tracking ID slip or any valid ID to an NIMC centre. They can look up your record and reprint your details.",
      },
    ],
    faq: [
      {
        q: "What if I no longer have the phone number I registered with?",
        a: "You'll need to visit an NIMC centre in person with a valid ID to have your NIN retrieved and your phone number updated on the system.",
      },
      {
        q: "Is there a charge to retrieve my NIN?",
        a: "USSD retrieval carries a small network charge (usually under ₦20). In-person retrieval at government centres is generally free.",
      },
    ],
    relatedSlugs: [
      "how-to-enroll-for-nin",
      "how-to-check-nin-status",
      "how-to-change-phone-number-on-nin",
    ],
  },
  {
    slug: "how-to-link-nin-to-mtn",
    section: "government",
    cluster: "nin",
    title: "How to Link Your NIN to Your MTN Line",
    description:
      "Step-by-step instructions to link your National Identification Number to your MTN SIM to avoid a line block.",
    updated: "2026-06-20",
    requirements: ["Your NIN (or NIN slip)", "The MTN SIM you want to link"],
    steps: [
      {
        title: "Dial the MTN NIN-linking USSD code",
        body: "From your MTN line, dial *785# and follow the prompts to enter your 11-digit NIN.",
      },
      {
        title: "Verify with the OTP sent by NIMC",
        body: "You'll receive a one-time code from NIMC to confirm the NIN belongs to you. Enter it when prompted.",
      },
      {
        title: "Confirm the linking was successful",
        body: "You should get a confirmation SMS from MTN once the NIN is successfully linked to that line. If you don't receive one within a few hours, retry or visit an MTN Connect store.",
      },
      {
        title: "Alternative: visit an MTN store",
        body: "If USSD keeps failing (a common issue during high-traffic linking deadlines), visit any MTN Connect store with your NIN slip and the SIM for manual linking.",
      },
    ],
    faq: [
      {
        q: "What happens if I don't link my NIN?",
        a: "The Nigerian Communications Commission has directed telecom operators to bar lines not linked to a NIN. An unlinked line risks having outgoing calls and SMS restricted until it's linked.",
      },
      {
        q: "Can one NIN be linked to multiple SIMs?",
        a: "Yes, but each network typically caps the number of SIMs one NIN can be linked to (commonly up to a certain limit per network) to reduce SIM fraud.",
      },
    ],
    relatedSlugs: [
      "how-to-link-nin-to-airtel",
      "how-to-link-nin-to-glo",
      "how-to-check-nin-status",
    ],
  },
  {
    slug: "how-to-print-nin-slip",
    section: "government",
    cluster: "nin",
    title: "How to Print Your NIN Slip",
    description: "How to get a printable copy of your NIN slip online or at an NIMC centre.",
    updated: "2026-06-15",
    requirements: ["Your NIN or tracking ID", "Access to a printer or a nearby business centre"],
    steps: [
      {
        title: "Log in to the NIMC self-service portal",
        body: "Go to the NIMC portal and sign in with your NIN or tracking ID and the phone number linked to your record.",
      },
      {
        title: "Request your slip",
        body: "Select the option to generate or download your improved NIN slip (the one carrying a QR code and validation ID).",
      },
      {
        title: "Download and print",
        body: "Save the PDF and print it — either at home or at a nearby business/cyber café — in colour if possible, so the QR code scans clearly.",
      },
      {
        title: "No internet access? Visit a centre",
        body: "You can also request a printed slip directly at any NIMC enrolment centre if you're unable to print one yourself.",
      },
    ],
    faq: [
      {
        q: "Is the NIN slip the same as a national ID card?",
        a: "No. The slip is a temporary proof of your NIN while you wait for the physical National eID card, which is issued separately and much less frequently produced.",
      },
      {
        q: "Can I use the NIN slip for JAMB or bank verification?",
        a: "Yes, the improved NIN slip with a QR code is widely accepted for JAMB registration, bank account opening, and SIM linking.",
      },
    ],
    relatedSlugs: ["how-to-enroll-for-nin", "how-to-check-nin-status", "how-to-verify-nin"],
  },
  {
    slug: "how-to-check-nin-status",
    section: "government",
    cluster: "nin",
    title: "How to Check Your NIN Enrolment Status",
    description: "Check whether your NIN has been generated after enrolment, using USSD or the NIMC portal.",
    updated: "2026-06-10",
    requirements: ["Your tracking ID from enrolment"],
    steps: [
      {
        title: "Dial *346# to check status",
        body: "This USSD code works on most networks and lets you check whether your NIN has been generated using your tracking ID.",
      },
      {
        title: "Check via the NIMC portal",
        body: "Visit the NIMC self-service portal and enter your tracking ID under 'Check Enrolment Status'.",
      },
      {
        title: "Be patient during peak periods",
        body: "Status checks may show 'pending' for longer than usual during periods of high demand, such as just before JAMB registration deadlines.",
      },
    ],
    faq: [
      {
        q: "My status has said 'pending' for weeks — what should I do?",
        a: "Return to the enrolment centre with your tracking ID slip. Occasionally records need to be resent for processing due to network or biometric quality issues.",
      },
    ],
    relatedSlugs: ["how-to-enroll-for-nin", "how-to-retrieve-nin", "how-to-print-nin-slip"],
  },
  {
    slug: "how-to-change-phone-number-on-nin",
    section: "government",
    cluster: "nin",
    title: "How to Change the Phone Number Linked to Your NIN",
    description: "Update the mobile number tied to your National Identification Number record.",
    updated: "2026-06-05",
    requirements: ["Your NIN", "The new phone number you want to link", "A valid ID"],
    steps: [
      {
        title: "Visit the NIMC modification portal or a centre",
        body: "Phone number updates can sometimes be done via the NIMC self-service portal; where that option isn't available, visit any enrolment centre in person.",
      },
      {
        title: "Provide your NIN and current details",
        body: "You'll be asked for your NIN and existing bio-data to confirm identity before any change is made.",
      },
      {
        title: "Submit the new number and verify",
        body: "Provide the new phone number. You may receive an OTP on the new number to confirm you have access to it.",
      },
      {
        title: "Allow time for the update to reflect",
        body: "Changes can take a few days to reflect across NIMC's systems and any linked telecom or bank records.",
      },
    ],
    faq: [
      {
        q: "Why does my phone number need to be correct on my NIN?",
        a: "It's used for OTPs during SIM linking, retrieval, and verification — an outdated number can lock you out of these self-service options.",
      },
    ],
    relatedSlugs: ["how-to-retrieve-nin", "how-to-enroll-for-nin"],
  },
];
