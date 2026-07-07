import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/site";

export const metadata = {
  title: "About",
  description: `Why ${SITE_NAME} exists and how we write our guides.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
      <h1 className="mt-4 font-display text-3xl font-bold text-forest">About {SITE_NAME}</h1>
      <div className="prose-howto mt-6 max-w-none">
        <p>
          Every day, millions of Nigerians run into the same small frustrations: a JAMB slip that won't
          print, an ATM card that's been swallowed, a NIN that refuses to link. The steps to fix these
          things exist, but they're scattered across forums, screenshots, and outdated blog posts.
        </p>
        <p>
          {SITE_NAME} exists to put the steps in one place, written plainly, updated when procedures
          change, and organised so you can actually find the exact thing you're stuck on.
        </p>
        <h2>How we write guides</h2>
        <p>
          Every guide follows the same shape: what you'll need before you start, numbered steps in the
          order you'll actually do them, and answers to the questions people commonly get stuck on
          afterward. We link to official portals rather than reproducing their forms, and we note when a
          fee or process is likely to change.
        </p>
        <h2>Something wrong or missing?</h2>
        <p>
          Procedures at government agencies, banks and telecoms change often. If you spot something
          outdated, or there's a guide you wish existed, let us know from the contact page.
        </p>
      </div>
    </div>
  );
}
