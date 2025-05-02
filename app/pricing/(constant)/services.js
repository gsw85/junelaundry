import ZWetWash from "@/app/pricing/(comp)/(wet-washing)/z-wet-wash";
import ZDryClean from "@/app/pricing/(comp)/(dry-clean)/z-dry-clean";

export const servicesArr = [
  { name: `Wash & Fold`, param: `wet-wash`, el: <ZWetWash /> },
  { name: `Dry Cleaning`, param: `dry-cleaning`, el: <ZDryClean /> },
  { name: `Ironing`, param: `ironing`, el: <ZWetWash /> },
  { name: `Curtain Cleaning`, param: `curtain-cleaning`, el: <ZWetWash /> },
];
