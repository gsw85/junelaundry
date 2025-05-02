import HowSteps from "@/app/pricing/(comp)/how-steps";
import { PiMagnifyingGlassLight, PiWashingMachine } from "react-icons/pi";
import { MdCallSplit, MdOutlineDryCleaning } from "react-icons/md";
import { RiShirtLine } from "react-icons/ri";
import PriceList from "@/app/pricing/(comp)/price-list";
import { wetWashingList } from "@/app/pricing/(comp)/(wet-washing)/wash-list";
import { HeroTemplate } from "@/app/pricing/(comp)/template";

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
      <HeroTemplate
        title={`Wash, Dry and Fold`}
        subtitle={`Wash & Fold is the perfect service to use if you want to avoid doing laundry and save your time and your sanity.`}
        desc={`We offer professional wet wash using clean, fabric-safe water and high-performance commercial machines. Your clothes are washed with care — not just cleaned, but protected — using gentle cycles, quality detergents, and temperature control that preserves fabric life and color. It’s just like a premium hand wash, only better and faster.`}
        image={`https://imagedelivery.net/_rcIVT3taNSHudAfnOfnXg/eb0541c1-73f3-4ac4-475d-b4ea92183400/public`}
        imgCSS={`object-right lg:object-top-right`}
      />
      <HowSteps serviceSteps={weWashSteps} />
      <PriceList products={wetWashingList} />
    </>
  );
}
