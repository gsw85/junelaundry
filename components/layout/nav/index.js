"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { NavLeftSection } from "./nav-left-section";
import { NavRightSection } from "./nav-right-section";
import { menuItems } from "@/components/layout/menu-items";
import Link from "next/link";

export default function TopNav() {
  return (
    <Disclosure
      as="nav"
      className="bg-white/5 sm:bg-transparent fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <NavLeftSection />
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {menuItems.map((obj) => (
                  <Link
                    key={`desktop` + obj.name}
                    href={obj.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-yellow-500"
                  >
                    {obj.name}
                  </Link>
                ))}
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              </div>
            </div>
          </div>
          <NavRightSection />
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-gray-900/60">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          {menuItems.map((obj) => (
            <DisclosureButton
              as="a"
              href="#"
              key={obj.name}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {obj.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
