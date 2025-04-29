"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import NavLeftSection from "./nav-left-section";
import { NavRightSection } from "./nav-right-section";
import { ActivMenuLink, menuItems } from "./nav-menu-items";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();

  return (
    <Disclosure
      as="nav"
      className="bg-black md:bg-transparent fixed top-0 left-0 right-0 z-50"
    >
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <NavLeftSection close={close} />
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {menuItems.map((obj) => (
                      <ActivMenuLink key={`desktop` + obj.name} href={obj.href}>
                        {obj.name}
                      </ActivMenuLink>
                    ))}
                  </div>
                </div>
              </div>
              <NavRightSection />
            </div>
          </div>

          {/* Animated mobile panel */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden bg-black/50 border-t border-white/50 ${
              open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <DisclosurePanel static>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {menuItems.map((obj) => (
                  <DisclosureButton
                    as="div"
                    key={obj.name}
                    className="hover:bg-yellow-500/10 rounded-md py-1 group cursor-pointer"
                    onClick={async () => {
                      await router.push(obj.href);
                    }}
                  >
                    <ActivMenuLink
                      navCss={`font-medium p-2`}
                      isLink={false}
                      href={obj.href}
                    >
                      {obj.name}
                    </ActivMenuLink>
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
