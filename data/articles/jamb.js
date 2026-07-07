export const jamb = [
  {
    slug: "how-to-register-for-jamb",
    section: "education",
    cluster: "jamb",
    title: "How to Register for JAMB UTME",
    description: "A complete walkthrough of registering for the JAMB Unified Tertiary Matriculation Examination.",
    updated: "2026-06-22",
    requirements: [
      "NIN (National Identification Number)",
      "A valid email address and active phone number",
      "Passport photograph meeting JAMB's specification (plain background, no glasses/cap)",
      "Registration fee (paid via the JAMB e-facility platform)",
    ],
    steps: [
      {
        title: "Get your NIN ready",
        body: "JAMB registration is tied to your NIN, and your biometric data must match what's on the NIMC database, so enrol for your NIN first if you haven't.",
      },
      {
        title: "Visit a JAMB-accredited CBT centre",
        body: "Unlike some other exams, UTME registration is done biometrically at an accredited centre, not purely online from home. Locate an accredited centre near you.",
      },
      {
        title: "Purchase your registration e-PIN/scratch card",
        body: "Pay for the UTME registration package at the centre or via the JAMB e-facility portal using your NIN.",
      },
      {
        title: "Complete your bio-data and choices online",
        body: "At the centre (or afterwards from any device), log in to the JAMB portal, fill in your bio-data, select your institution and course choices, and choose your preferred exam centre/town.",
      },
      {
        title: "Upload your passport photograph",
        body: "Upload a recent, plain-background passport photo that meets JAMB's guidelines — poor-quality photos are a common cause of admission delays later.",
      },
      {
        title: "Capture your biometrics",
        body: "Your fingerprints are captured at the centre and matched against your NIN record to confirm your identity.",
      },
      {
        title: "Print your registration slip",
        body: "Once registration is complete, print your slip, which contains your registration number — keep several copies.",
      },
    ],
    faq: [
      {
        q: "Can I register for JAMB from home?",
        a: "You can complete parts of the process (choices, bio-data) online, but biometric capture must be done in person at an accredited CBT centre.",
      },
      {
        q: "What if my name on JAMB doesn't match my NIN?",
        a: "JAMB validates your bio-data against NIMC records, so any mismatch (e.g., name spelling) should be corrected on your NIN record first, since JAMB pulls from there.",
      },
    ],
    relatedSlugs: [
      "how-to-correct-date-of-birth-on-jamb",
      "how-to-print-jamb-examination-slip",
      "how-to-check-jamb-admission-status",
      "how-to-print-jamb-result",
    ],
  },
  {
    slug: "how-to-correct-date-of-birth-on-jamb",
    section: "education",
    cluster: "jamb",
    title: "How to Correct Your Date of Birth on JAMB",
    description: "How to fix an incorrect date of birth on your JAMB profile through the official correction process.",
    updated: "2026-06-19",
    requirements: ["Your JAMB profile code", "Correct supporting ID (birth certificate or NIN slip)", "Correction fee"],
    steps: [
      {
        title: "Log in to your JAMB profile",
        body: "Use your registration number/profile code and password to access the JAMB e-facility portal.",
      },
      {
        title: "Go to the Data Correction section",
        body: "Locate the 'Change of Data' or correction option, which lists fields JAMB allows candidates to amend, including date of birth in some registration cycles.",
      },
      {
        title: "Pay the correction fee",
        body: "Corrections typically attract a fee payable directly through the portal.",
      },
      {
        title: "Submit correct details and supporting document",
        body: "Enter the correct date of birth and upload any requested supporting document, then submit for review.",
      },
      {
        title: "Wait for confirmation",
        body: "JAMB reviews correction requests and updates your profile; check back on the portal for confirmation of the change.",
      },
    ],
    faq: [
      {
        q: "Is there a limit to how many times I can correct my data?",
        a: "JAMB generally allows a limited number of corrections per candidate per registration cycle — deliberately entering wrong details to 'correct' later is discouraged and can flag your profile.",
      },
    ],
    relatedSlugs: [
      "how-to-register-for-jamb",
      "how-to-correct-name-on-jamb",
      "how-to-change-course-on-jamb",
    ],
  },
  {
    slug: "how-to-print-jamb-examination-slip",
    section: "education",
    cluster: "jamb",
    title: "How to Print Your JAMB Examination Slip",
    description: "Get and print your JAMB UTME exam slip showing your exam date, time and centre.",
    updated: "2026-06-11",
    requirements: ["JAMB registration number", "Access to the JAMB portal"],
    steps: [
      {
        title: "Wait for the exam slip release date",
        body: "JAMB announces a specific date when exam slips become available for printing — this is usually shortly before the exam window opens.",
      },
      {
        title: "Log in to the JAMB portal",
        body: "Enter your registration number and password/profile code.",
      },
      {
        title: "Navigate to 'Print Exam Slip'",
        body: "Select the option to view and print your slip, which shows your exam date, time, and CBT centre address.",
      },
      {
        title: "Print at least two copies",
        body: "Print in clear black and white or colour — you'll need to present it (often alongside your NIN slip) at the CBT centre on exam day.",
      },
    ],
    faq: [
      {
        q: "What if my exam centre shown is far from me?",
        a: "Centre allocation is automated based on your chosen town; contact JAMB support or your nearest JAMB office before the exam if there's a genuine error.",
      },
    ],
    relatedSlugs: ["how-to-register-for-jamb", "how-to-print-jamb-result"],
  },
  {
    slug: "how-to-print-jamb-result",
    section: "education",
    cluster: "jamb",
    title: "How to Check and Print Your JAMB Result",
    description: "How to check your UTME score and print an official result slip.",
    updated: "2026-06-25",
    requirements: ["JAMB registration number", "Registered phone number (for SMS result)"],
    steps: [
      {
        title: "Check via SMS",
        body: "Once results are released, JAMB typically sends your score by SMS to the phone number used at registration.",
      },
      {
        title: "Check online via the JAMB portal",
        body: "Log in to the JAMB e-facility portal with your registration number and password, then select 'Check UTME Result'.",
      },
      {
        title: "Check via USSD (alternative)",
        body: "Some result-checking cycles allow USSD access — dial the code JAMB publishes for that year if the portal is congested.",
      },
      {
        title: "Print your result slip",
        body: "From the portal, select the print/download option to get an official result slip for admission purposes.",
      },
    ],
    faq: [
      {
        q: "Why does the portal say my result is not available yet?",
        a: "Results are released in batches; if your centre's results haven't been uploaded yet, or there's a discrepancy under review, you may need to wait or contact JAMB.",
      },
    ],
    relatedSlugs: ["how-to-check-jamb-admission-status", "how-to-register-for-jamb"],
  },
  {
    slug: "how-to-check-jamb-admission-status",
    section: "education",
    cluster: "jamb",
    title: "How to Check Your JAMB Admission Status on CAPS",
    description: "How to view your admission status on the Central Admissions Processing System (CAPS).",
    updated: "2026-06-25",
    requirements: ["JAMB registration number", "JAMB portal login"],
    steps: [
      {
        title: "Log in to your JAMB profile",
        body: "Go to the JAMB e-facility portal and sign in.",
      },
      {
        title: "Open the CAPS dashboard",
        body: "Select 'Check Admission Status' to see whether your chosen institution has offered you admission for any of your listed courses.",
      },
      {
        title: "Read the offer details carefully",
        body: "CAPS shows the institution, course, and admission status (e.g., 'Admission in progress', 'Not Admitted' or a specific offer). It may differ from your first choice depending on your score and available slots.",
      },
    ],
    faq: [
      {
        q: "What does 'awaiting institution's decision' mean?",
        a: "It means JAMB has forwarded your data to the institution but the institution hasn't yet uploaded their decision on CAPS.",
      },
    ],
    relatedSlugs: ["how-to-accept-admission-on-caps", "how-to-reject-admission-on-caps"],
  },
  {
    slug: "how-to-accept-admission-on-caps",
    section: "education",
    cluster: "jamb",
    title: "How to Accept Admission on JAMB CAPS",
    description: "Confirm and accept an admission offer shown on your CAPS dashboard.",
    updated: "2026-06-25",
    requirements: ["An active admission offer visible on CAPS"],
    steps: [
      {
        title: "Log in and open CAPS",
        body: "Sign in to your JAMB profile and go to the CAPS section where your offer is displayed.",
      },
      {
        title: "Review the offer",
        body: "Confirm the institution and course match what you're expecting before proceeding, since acceptance is generally final for that admission cycle.",
      },
      {
        title: "Click 'Accept'",
        body: "Select the accept option on the dashboard to confirm you want the offered admission.",
      },
      {
        title: "Proceed to your institution's portal",
        body: "After accepting on CAPS, visit your school's own admission/acceptance portal to complete their specific requirements, such as paying an acceptance fee.",
      },
    ],
    faq: [
      {
        q: "Can I change my mind after accepting on CAPS?",
        a: "Once accepted, changing institutions typically requires going through JAMB's change-of-institution process, which has its own rules and windows.",
      },
    ],
    relatedSlugs: ["how-to-check-jamb-admission-status", "how-to-reject-admission-on-caps"],
  },
];
