import Script from "next/script";

const GHL_SURVEY_ID = "vSS0mUGLFAs0M4Zfi6fZ";

// The survey has no data-height — unlike a single-page GHL form, each slide
// has a different height, and the official embed script (loaded below)
// resizes the iframe live via postMessage as the visitor moves between
// slides. This is only a reasonable starting height for the first slide
// before that script takes over; it isn't meant to fit every slide.
const INITIAL_HEIGHT = 500;

export default function ProviderNetworkSurveyEmbed() {
  return (
    <div className="rounded-3xl border border-gray-200/70 bg-white p-4 shadow-[0_12px_32px_-16px_rgba(15,27,45,0.18)] sm:p-6">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/survey/${GHL_SURVEY_ID}`}
        id={GHL_SURVEY_ID}
        title="Join the Free Provider Network"
        scrolling="no"
        style={{
          border: "none",
          width: "100%",
          height: `${INITIAL_HEIGHT}px`,
        }}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
