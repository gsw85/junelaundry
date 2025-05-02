import HowSteps from "@/app/pricing/(comp)/how-steps";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { TbWashDry1 } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";
import { FcInspection } from "react-icons/fc";
import { GiHanger } from "react-icons/gi";
import PriceList from "@/app/pricing/(comp)/price-list";
import { dryCleanList } from "./dry-clean-list";
import { HeroTemplate } from "@/app/pricing/(comp)/template";

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
      <HeroTemplate
        title={`Dry Cleaning and Special Care`}
        subtitle={`For delicate or specialty garments that need expert care — cleaned and returned pressed on a hanger.`}
        desc={
          "Unlike conventional wet washing that uses water and detergent, dry cleaning uses a special solvent to gently clean fabrics without water. This method is ideal for delicate, structured, or sensitive materials like wool, silk, suits, or embellished garments that may shrink, fade, or lose shape in regular washing. Dry cleaning offers a deeper clean with less stress on the fabric — ensuring your items stay looking newer, longer."
        }
        image={`https://imagedelivery.net/_rcIVT3taNSHudAfnOfnXg/b1a2cfb9-abae-4317-268c-86d6458b5a00/public`}
        imgCSS={`object-center lg:object-center`}
      />
      <HowSteps serviceSteps={dryCleanSteps} />
      <PriceList products={dryCleanList} />
    </>
  );
}
