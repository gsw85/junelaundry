import Link from "next/link";
import { urlConvert } from "@/util/img-fire-convert";
import HowSteps from "@/app/pricing/(comp)/how-steps";
import { PiMagnifyingGlassLight, PiWashingMachine } from "react-icons/pi";
import PriceList from "@/app/pricing/(comp)/price-list";
import { ironList } from "./iron-list";
import { MdCallSplit, MdOutlineIron } from "react-icons/md";
import { RiShirtLine } from "react-icons/ri";
import { FaListCheck } from "react-icons/fa6";

const ironPressSteps = [
  {
    icon: PiMagnifyingGlassLight, // From phosphor icons
    name: "Inspect",
    detail:
      "Each garment is checked for fabric type, special care labels, and pressing needs before we begin.",
  },
  {
    icon: MdCallSplit, // From Material Design
    name: "Sort & Prep",
    detail:
      "Items are sorted by fabric and prepared using light misting or pre-steam if needed to loosen wrinkles gently.",
  },
  {
    icon: MdOutlineIron, // From Material Design
    name: "Steam Iron",
    detail:
      "We use commercial steam irons with built-in boilers to apply the right heat and pressure for each fabric, restoring shape and removing wrinkles.",
  },
  {
    icon: RiShirtLine, // From Tabler Icons
    name: "Shape & Finish",
    detail:
      "Shirts are shaped with crisp collars, pants are creased sharply, and delicate fabrics are gently smoothed for a neat finish.",
  },
  {
    icon: FaListCheck, // From Remix Icons
    name: "Final Touch",
    detail:
      "After pressing, every piece is inspected again and returned on a hanger, looking polished and ready to wear.",
  },
];

export default function ZIroning() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-32">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
            <h2 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
              Iron and Press
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              For garments that need a smooth, polished finish — freshly pressed
              and ready to wear.
            </p>
            <p className={`mt-3 text-gray-500 font-normal`}>
              We use commercial steam irons with built-in boilers to deliver
              consistent heat and steam, ensuring every garment is pressed with
              care. Each item is inspected and handled according to its fabric
              type — whether it’s creating sharp creases for trousers or
              smoothing out delicate materials. The result is a crisp, polished
              look that’s safe on all fabrics and ready to wear.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="#pricing"
                className="rounded-md bg-gray-50 px-3.5 py-2.5 text-sm font-semibold  hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-black border border-black shadow"
              >
                View Pricing
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  alt="June Laundry Ironing and Press"
                  title={`June Laundry Ironing and Press`}
                  src={urlConvert(
                    "https://imagedelivery.net/_rcIVT3taNSHudAfnOfnXg/6418b05e-2855-4aa2-f3da-c28995d21a00/public",
                  )}
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 h-[600px] object-right lg:object-bottom-right object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HowSteps serviceSteps={ironPressSteps} />
      <PriceList products={ironList} />
    </>
  );
}
