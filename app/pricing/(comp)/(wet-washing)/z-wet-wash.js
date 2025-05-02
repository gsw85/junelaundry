import Link from "next/link";
import { urlConvert } from "@/util/img-fire-convert";
import HowSteps from "@/app/pricing/(comp)/how-steps";
import { PiMagnifyingGlassLight, PiWashingMachine } from "react-icons/pi";
import { MdCallSplit, MdOutlineDryCleaning } from "react-icons/md";
import { RiShirtLine } from "react-icons/ri";

const weWashSteps = [
  {
    icon: PiMagnifyingGlassLight,
    name: "Inspect",
    detail:
      "We do pocket inspections for you, ensuring nothing ends up in the wash that shouldn’t. Every pocket and garment is checked before washing.",
  },
  {
    icon: MdCallSplit,
    name: "Sort",
    detail:
      "Lights and darks are separated, and all clothes are washed in cold water to protect colors and fabric quality.",
  },
  {
    icon: PiWashingMachine,
    name: "Wash",
    detail:
      "We use high-performance machines and the right detergent for your clothes. Every load is washed with care based on fabric type and soil level.",
  },
  {
    icon: MdOutlineDryCleaning,
    name: "Dry",
    detail:
      "Big items like comforters and curtains are hang-dried to avoid heat damage. Others are tumble-dried at the right temperature to ensure they're fully dry and safe.",
  },
  {
    icon: RiShirtLine,
    name: "Fold",
    detail:
      "Every piece is neatly folded and packed, ready for your closet. Shirts, pants, and even socks are folded with care to keep your laundry looking fresh.",
  },
];

export default function ZWetWash() {
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
              Wash, Dry and Fold
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Wash & Fold is the perfect service to use if you want to avoid
              doing laundry and save your time and your sanity.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="#"
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
                    "https://imagedelivery.net/_rcIVT3taNSHudAfnOfnXg/eb0541c1-73f3-4ac4-475d-b4ea92183400/public",
                  )}
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 h-[600px] object-right lg:object-top object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HowSteps serviceSteps={weWashSteps} />
    </>
  );
}
