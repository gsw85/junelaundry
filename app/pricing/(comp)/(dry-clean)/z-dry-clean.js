import Link from "next/link";
import { urlConvert } from "@/util/img-fire-convert";
import HowSteps from "@/app/pricing/(comp)/how-steps";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { TbWashDry1 } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";
import { FcInspection } from "react-icons/fc";
import { GiHanger } from "react-icons/gi";
import PriceList from "@/app/pricing/(comp)/price-list";
import { dryCleanList } from "./z-dry-clean-list";

const dryCleanSteps = [
  {
    icon: PiMagnifyingGlassLight,
    name: "Inspect",
    detail:
      "Each garment is carefully checked for stains, fabric type, and special care instructions before cleaning begins.",
  },
  {
    icon: IoPricetagsOutline,
    name: "Tag & Sort",
    detail:
      "Items are tagged and sorted by material and cleaning method to ensure the right treatment for every piece.",
  },
  {
    icon: TbWashDry1,
    name: "Dry Clean",
    detail:
      "We use gentle, water-free solvents that remove dirt and stains without damaging delicate fabrics or altering their shape.",
  },
  {
    icon: GiHanger,
    name: "Press & Finish",
    detail:
      "After cleaning, garments are professionally pressed or steamed to restore their crisp, polished look.",
  },
  {
    icon: FcInspection,
    name: "Final Check",
    detail:
      "Every item goes through a final quality check before being returned to you neatly pressed and on a hanger.",
  },
];

export default function ZDryClean() {
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
              Dry Cleaning and Special Care
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              For delicate or specialty garments that need expert care — cleaned
              and returned pressed on a hanger.
            </p>
            <p className={`mt-3 text-gray-500 font-normal`}>
              Unlike conventional wet washing that uses water and detergent, dry
              cleaning uses a special solvent to gently clean fabrics without
              water. This method is ideal for delicate, structured, or sensitive
              materials like wool, silk, suits, or embellished garments that may
              shrink, fade, or lose shape in regular washing. Dry cleaning
              offers a deeper clean with less stress on the fabric — ensuring
              your items stay looking newer, longer.
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
                  alt="App screenshot"
                  src={urlConvert(
                    "https://imagedelivery.net/_rcIVT3taNSHudAfnOfnXg/b1a2cfb9-abae-4317-268c-86d6458b5a00/public",
                  )}
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 h-[600px] object-right lg:object-bottom-right object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HowSteps serviceSteps={dryCleanSteps} />
      <PriceList products={dryCleanList} />
    </>
  );
}
