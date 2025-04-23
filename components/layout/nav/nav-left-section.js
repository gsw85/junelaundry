import Link from "next/link";

export const NavLeftSection = () => (
  <div className="shrink-0">
    <Link href={"/"}>
      <img alt="June Laundry" src="/logo-white.svg" className="h-7 w-auto" />
    </Link>
  </div>
);
