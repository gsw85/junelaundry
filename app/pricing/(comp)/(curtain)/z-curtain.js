import HowSteps from "@/app/pricing/(comp)/how-steps";
import {
  PiHouseLight,
  PiTruckLight,
  PiWashingMachineLight,
} from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiTheaterCurtains } from "react-icons/gi";
import { HeroTemplate } from "@/app/pricing/(comp)/template";
import CurtainPrice from "@/app/pricing/(comp)/(curtain)/z-curtain-price";

const curtainPressSteps = [
  {
    icon: PiHouseLight, // Suggesting a home-related icon
    name: "Home Visit",
    detail:
      "Our team visits your home at the scheduled time to inspect and carefully remove the curtains.",
  },
  {
    icon: PiTruckLight, // For transport
    name: "Pickup & Transport",
    detail:
      "We safely pack and bring your curtains to our facility for cleaning.",
  },
  {
    icon: PiWashingMachineLight, // For cleaning process
    name: "Professional Cleaning",
    detail:
      "Curtains are cleaned using the right method for the fabric, ensuring they are dust-free and refreshed.",
  },
  {
    icon: FaRegCalendarAlt, // For reappointment or schedule
    name: "Schedule Return",
    detail:
      "Once cleaning is done, we’ll arrange a convenient time to return for installation.",
  },
  {
    icon: GiTheaterCurtains, // Or curtain icon if available
    name: "Reinstallation",
    detail:
      "Our team reinstalls the clean curtains in your home, exactly as they were.",
  },
];

export default function ZCurtain() {
  return (
    <>
      <HeroTemplate
        title={`Curtain Cleaning with Pickup and Reinstall`}
        subtitle={`We remove, clean, and reinstall your curtains so you don’t have to lift a finger.`}
        desc={`We take care of everything from start to finish. Our team visits your home to carefully remove the curtains, then brings them back for a professional wash using fabric-safe cleaning methods. Once cleaned and dried, we return to reinstall the curtains exactly as they were. You do not need to lift a finger. Just enjoy freshly cleaned curtains without any hassle.`}
        image={`https://imagedelivery.net/_rcIVT3taNSHudAfnOfnXg/681e0014-9b90-43fa-0ed5-cbf73e0c6700/public`}
        imgCSS={`object-left lg:object-top-left`}
        topTitle={`Service available exclusively in Penang Island`}
        mainCTABtn={
          <a
            className={
              "rounded-md bg-gray-50 px-3.5 py-2.5 text-sm font-semibold  hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 text-black border border-black shadow"
            }
            href={`https://api.whatsapp.com/send/?phone=%2B60176952350&text=Hello,%20I%20am%20interested%20in%20your%20Curtain%20Cleaning%20service.%20Can%20I%20schedule%20a%20pickup?&type=phone_number&app_absent=0`}
          >
            Book a Pickup
          </a>
        }
      />
      <HowSteps serviceSteps={curtainPressSteps} />
      <CurtainPrice />
    </>
  );
}
