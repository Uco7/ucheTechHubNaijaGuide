import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: `Get in touch with the ${SITE_NAME} team.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:px-6">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
      <h1 className="mt-4 font-display text-3xl font-bold text-forest">Contact us</h1>
      <p className="mt-4 text-ink/70">
        Spotted an outdated step, a broken portal link, or want to suggest a guide? Email us and we'll take
        a look.
      </p>
      <a
        href="mailto:hello@howfar.ng"
        className="mt-6 inline-block rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper transition hover:bg-forest-light"
      >
        hello@howfar.ng
      </a>
      <p className="mt-8 text-xs text-ink/40">
        Tip: swap this for a real form (e.g. Formspree, or a serverless API route) once you're ready to
        collect submissions directly.
      </p>
    </div>
  );
}
