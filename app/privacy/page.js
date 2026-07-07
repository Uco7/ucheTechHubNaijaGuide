import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy" }]} />
      <h1 className="mt-4 font-display text-3xl font-bold text-forest">Privacy Policy</h1>
      <div className="prose-howto mt-6 max-w-none">
        <p>
          This is a starter privacy policy. Replace it with a policy reviewed for your jurisdiction before
          launch — AdSense approval requires a clear, accurate privacy policy that discloses cookie and ad
          personalisation use.
        </p>
        <h2>Information we collect</h2>
        <p>
          {SITE_NAME} does not require an account to read guides. We may collect standard technical data
          (pages visited, approximate location from IP, device/browser type) through analytics tools.
        </p>
        <h2>Advertising</h2>
        <p>
          We show ads through Google AdSense. Google and its partners may use cookies to serve ads based on
          your visits to this and other sites. You can opt out of personalised advertising through Google's
          Ads Settings, or manage cookie preferences through your browser.
        </p>
        <h2>Third-party links</h2>
        <p>
          Our guides link to official government, banking and telecom websites. We are not responsible for
          the content or privacy practices of those third-party sites.
        </p>
        <h2>Contact</h2>
        <p>Questions about this policy can be sent to hello@howfar.ng.</p>
      </div>
    </div>
  );
}
