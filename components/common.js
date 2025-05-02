import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import NotFound from "@/app/not-found";

export function ShowContent({ showContent = false, children }) {
  if (!showContent) return <></>;
  return children;
}

export function FormSubmitSuccess({
  children,
  submitted = false,
  Icon = CheckBadgeIcon,
  title = "Thank you!",
  desc = "Your submission has been sent! We will get in touch with you shortly.",
  containerCss = `mt-10 w-full py-16 sm:py-24 bg-green-900/5 rounded-lg border border-green-800/10 flex items-center flex-col justify-center`,
}) {
  const successEl = (
    <div className={containerCss}>
      <Icon className="size-28 text-green-500" />
      <div className="mt-2 text-2xl font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/75">{desc}</div>
    </div>
  );

  return submitted ? successEl : children;
}

export function IsPageExists({
  pageLoaded = false,
  isExists = true,
  loadingEl = null,
  children,
}) {
  if (!pageLoaded) return loadingEl ? loadingEl : children;
  return isExists ? children : <NotFound />;
}

export const inputCssOne = `block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-xs ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 px-4 focus:outline-0`;
export const inputCssDivOne = `block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-xs ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 px-4 focus:outline-0 text-white/50`;
