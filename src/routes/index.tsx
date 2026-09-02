import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import {
  About,
  Advisory,
  Contact,
  Footer,
  Hero,
  Process,
  Services,
  TrustStrip,
  WhatsAppFab,
  WhyRegister,
} from "@/components/site/sections";

const title = "PRUBEN Business Consultants | Register Your Business in Malawi";
const description =
  "Register your company, NGO or sole proprietorship in Malawi within 7 working days. TPIN, TCC, PPDA, funding proposals and business consultancy in Blantyre.";

const siteUrl = "https://pruben-consultants.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "PRUBEN Business Consultants",
          description,
          url: siteUrl,
          telephone: "+265999379547",
          email: "prubenconsult@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Galaxy House, 2nd Floor, Room #3 (Opp. Kandodo Cornershop)",
            addressLocality: "Blantyre",
            addressCountry: "MW",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Advisory />
        <Process />
        <WhyRegister />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
