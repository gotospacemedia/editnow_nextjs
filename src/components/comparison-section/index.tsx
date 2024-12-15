import { Check, X } from "lucide-react";
import Logo from "../logo";

export default function ComparisonSectionExact() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16">
          EditNow goes just that
          <br />
          one step further{" "}
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Other Agencies Column */}
          <div className="flex-1 bg-[#1c1c1c] rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Other agencies</h2>
            <ul className="space-y-4">
              {[
                "Limited to design or copy only",
                "Extremely long delivery times",
                "Pathways take a long time, little flexibility",
                "General best practices, little customization",
                "Little transparency and communication",
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-black/30 p-1 rounded-full">
                    <X className="h-5 w-5 text-white shrink-0" />
                  </div>
                  <span className="text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* EditFlow Column */}
          <div className="flex-1 bg-[#98f1e3] text-black rounded-2xl p-6">
            <div className="flex items-center gap-2 text-2xl font-semibold mb-6">
              <Logo variant="dark" />
            </div>

            <ul className="space-y-4">
              {[
                "Creatives that enable performance and scale up",
                "Fast delivery and adjustment based on data",
                "In-house team with extensive experience within e-com",
                "Creatives made specifically for your brand and target audience",
                "Proactive communication and clear reporting",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-[#119286] p-1 rounded-full">
                    <Check className="h-5 w-5 text-white shrink-0" />
                  </div>
                  <span className="">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
