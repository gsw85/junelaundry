import { PiMagnifyingGlassLight } from "react-icons/pi";
import { MdCallSplit } from "react-icons/md";
import { PiWashingMachine } from "react-icons/pi";
import { MdOutlineDryCleaning } from "react-icons/md";
import { RiShirtLine } from "react-icons/ri";
import { ShowContent } from "@/components/common";

const steps = [
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

export default function HowSteps({
  serviceSteps,
  gridCols = "lg:grid-cols-5",
  title = "How it works",
}) {
  let theSteps = serviceSteps || steps;

  return (
    <div className={`max-w-7xl w-full mx-auto mb-32 bg-white`}>
      <h2 className="text-2xl/7 font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight my-10">
        {title}
      </h2>
      <nav
        aria-label="Progress"
        className={`lg:px-0 px-4 flex items-center justify-center mt-5`}
      >
        <ol className={`grid ${gridCols} grid-cols-1 gap-2`}>
          {theSteps.map((step, index) => (
            <li
              key={step.name}
              className={`flex lg:flex-col flex-row min-h-32 lg:min-h-0`}
            >
              <div
                className={`shrink-0 flex items-center lg:flex-row flex-col h-full lg:h-auto`}
              >
                <div className={`rounded-full p-4 bg-gray-100`}>
                  <step.icon className={`size-5 text-gray-700 `} />
                </div>
                <ShowContent showContent={index < theSteps.length - 1}>
                  <div
                    className={`flex-grow border border-transparent border-r-gray-200 lg:border-t-gray-200  `}
                  />
                </ShowContent>
              </div>
              <div className={`lg:px-2 lg:py-4 py-1 px-4`}>
                <h3 className={`text-xl font-bold text-black`}>{step.name}</h3>
                <div className={`mt-2 text-gray-500 max-w-md`}>
                  {step.detail}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
