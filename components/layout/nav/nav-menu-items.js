"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const menuItems = [
  { name: "Services and Pricing", href: "/pricing" },
  { name: "Subscription", href: "/subscription" },
  { name: "Corporate", href: "/corporate" },
];

export function ActivMenuLink({
  href,
  navCss = "px-3 py-2 font-medium",
  activeCss = `text-yellow-500`,
  inActiveCss = `text-gray-300 group-hover:text-yellow-500 hover:text-yellow-500`,
  children,
  isLink = true,
}) {
  const pathname = usePathname();

  let classNames =
    href === "/"
      ? pathname === href
        ? activeCss
        : inActiveCss
      : pathname.startsWith(href)
        ? activeCss
        : inActiveCss;

  classNames = `${navCss} ${classNames}`;

  if (!isLink) return <div className={classNames}>{children}</div>;

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
