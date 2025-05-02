import ZWetWash from "@/app/pricing/(comp)/(wet-washing)/z-wet-wash";
import ZDryClean from "@/app/pricing/(comp)/(dry-clean)/z-dry-clean";
import ZIroning from "@/app/pricing/(comp)/(iron)/z-ironing";

export const servicesArr = [
  { name: `Wash & Fold`, param: `wet-wash`, el: <ZWetWash /> },
  { name: `Dry Cleaning`, param: `dry-cleaning`, el: <ZDryClean /> },
  { name: `Ironing`, param: `ironing`, el: <ZIroning /> },
  { name: `Curtain Cleaning`, param: `curtain-cleaning`, el: <ZWetWash /> },
];
