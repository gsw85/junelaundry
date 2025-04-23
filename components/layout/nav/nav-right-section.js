import { DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";

export const NavRightSection = () => (
  <>
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex items-center">
        <a
          href={`https://maps.app.goo.gl/5oBtafte3rqV8u376`}
          className={`flex items-center justify-center space-x-2 text-sm hover:text-yellow-500`}
          target={"_blank"}
        >
          <MapPinIcon className={`size-5`} />
          <span>Locate us</span>
        </a>
      </div>
    </div>
    <div className="-mr-2 flex sm:hidden">
      {/* Mobile menu button */}
      <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        <Bars3Icon
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
