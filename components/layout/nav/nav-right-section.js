import { DisclosureButton } from "@headlessui/react";
import { XMarkIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { IoLogoWhatsapp } from "react-icons/io";

export const NavRightSection = () => (
  <>
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex items-center justify-center space-x-2 lg:space-x-4">
        <a
          href={`https://maps.app.goo.gl/5oBtafte3rqV8u376`}
          className={`flex items-center justify-center space-x-1 text-sm hover:text-yellow-500`}
          target={"_blank"}
        >
          <MapPinIcon className={`size-5`} />
          <span className={`lg:block hidden`}>Locate us</span>
        </a>
        <a
          href={`https://api.whatsapp.com/send/?phone=%2B60176952350&text=Hello,%20I%20am%20looking%20for%20Dry%20Cleaning%20or%20Laundry%20Services&type=phone_number&app_absent=0`}
          className={`flex items-center justify-center space-x-1 text-sm hover:text-green-500`}
          target={"_blank"}
        >
          <IoLogoWhatsapp className={`size-5 text-green-500`} />
          <span className={"lg:block hidden"}>WhatsApp</span>
        </a>
      </div>
    </div>
    <div className="-mr-2 flex sm:hidden">
      {/* Mobile menu button */}
      <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-transparent focus:outline-hidden focus:ring-inset">
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        <EllipsisVerticalIcon
          aria-hidden="true"
          className="block size-6 group-data-open:hidden"
        />
        <XMarkIcon
          aria-hidden="true"
          className="hidden size-6 group-data-open:block"
        />
      </DisclosureButton>
    </div>
  </>
);
