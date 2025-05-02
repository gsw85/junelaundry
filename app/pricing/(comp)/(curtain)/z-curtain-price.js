import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Home pickup and reinstallation included",
  "Professional cleaning with fabric-safe methods",
  "Handled by trained staff",
  "Hassle-free scheduling via WhatsApp",
  "Available on Penang Island only",
];

export default function CurtainPrice() {
  return (
    <div className="mx-auto max-w-7xl px-4 mb-32">
      <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
            Transparent Pricing for Curtain Cleaning
          </h3>
          <p className="mt-6 text-base/7 text-gray-600">
            We offer a flat rate with no hidden fees, so you always know what
            you’re paying for. You’re only charged based on the actual weight of
            the curtains we clean, making it simple and transparent.{" "}
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm/6 font-semibold text-black">
              What’s included
            </h4>
            <div className="h-px flex-auto bg-gray-100" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-black"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
          <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-gray-900/5 ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">
                Flat-rate pricing
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-semibold tracking-tight text-gray-900">
                  RM 15
                </span>
                <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                  / KG
                </span>
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B60176952350&text=Hello,%20I%20am%20interested%20in%20your%20Curtain%20Cleaning%20service.%20Can%20I%20schedule%20a%20pickup?&type=phone_number&app_absent=0"
                className="mt-10 block w-full rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book Now via WhatsApp
              </a>
              <p className="mt-6 text-xs/5 text-gray-600">
                Our rate is RM 18 per KG with ironing included. A minimum of 10
                KG per order applies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
