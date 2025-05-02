import HowSteps from "@/app/pricing/(comp)/how-steps";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import PriceList from "@/app/pricing/(comp)/price-list";
import { ironList } from "./iron-list";
import { MdCallSplit, MdOutlineIron } from "react-icons/md";
import { RiShirtLine } from "react-icons/ri";
import { FaListCheck } from "react-icons/fa6";
import { HeroTemplate } from "@/app/pricing/(comp)/template";

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
      <HeroTemplate
        title={`Iron and Press`}
        subtitle={`For garments that need a smooth, polished finish — freshly pressed and ready to wear.`}
        desc={`We use commercial steam irons with built-in boilers to deliver consistent heat and steam, ensuring every garment is pressed with care. Each item is inspected and handled according to its fabric type — whether it’s creating sharp creases for trousers or smoothing out delicate materials. The result is a crisp, polished look that’s safe on all fabrics and ready to wear.`}
        image={`https://imagedelivery.net/_rcIVT3taNSHudAfnOfnXg/6418b05e-2855-4aa2-f3da-c28995d21a00/public`}
      />
      <HowSteps serviceSteps={ironPressSteps} />
      <PriceList products={ironList} />
    </>
  );
}
