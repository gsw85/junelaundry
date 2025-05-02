import Link from "next/link";
import { urlConvert } from "@/util/img-fire-convert";
import { ShowContent } from "@/components/common";

export function HeroTemplate({
  title,
  subtitle,
  desc,
  image,
  imgCSS = `object-right lg:object-bottom-right`,
  mainCTABtn = (
    <Link
      href="#pricing"
      className="rounded-md bg-gray-50 px-3.5 py-2.5 text-sm font-semibold  hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 text-black border border-black shadow"
    >
      View Pricing
    </Link>
  ),
  ctaBtn = null,
  topTitle = "",
  topCTA = null,
}) {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <ShowContent showContent={Boolean(topTitle)}>
            <div>
              <button className="inline-flex space-x-6 cursor-pointer">
                <span className="rounded-full bg-yellow-600/10 px-3 py-1 text-sm/6 font-semibold text-yellow-600 ring-1 ring-yellow-600/10 ring-inset">
                  {topTitle}
                </span>
                {topCTA}
              </button>
            </div>
          </ShowContent>
          <h2 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
            {title}
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {subtitle}
          </p>
          <p className={`mt-3 text-gray-500 font-normal`}>{desc}</p>
          <div className="mt-10 flex items-center gap-x-6">
            {mainCTABtn}
            {ctaBtn}
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt={`June Laundry ${title}`}
                title={`June Laundry ${title}`}
                src={urlConvert(image)}
                className={`w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 h-[600px] object-cover ${imgCSS}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
