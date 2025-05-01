"use client";

import { urlConvert } from "@/util/img-fire-convert";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={`mt-16 md:mt-0 w-full h-[calc(100vh)] `}>
      <img
        src={urlConvert(
          `https://imagedelivery.net/_rcIVT3taNSHudAfnOfnXg/b9b7a2ff-e836-41c2-222e-cdf2571afe00/XL`,
        )}
        alt="June Laundry Services"
        title={`June Laundry Services`}
        className="w-full h-full object-cover object-top md:mask-t-from-70%"
      />

      {/* Text */}
      <div className="absolute inset-0 w-full flex items-center bg-black/50">
        <div className={`max-w-7xl px-4 md:px-6 lg:px-8 mx-auto w-full`}>
          <h2 className="text-white text-5xl md:text-7xl font-extrabold leading-snug animate-fade-in-up drop-shadow-md">
            <span>Drop It Off.</span>
            <br className="hidden md:block" />
            We’ll Handle the Rest.
          </h2>
          <p className="mt-4 text-white text-base md:text-lg max-w-xl animate-fade-in-up delay-150">
            We handle the laundry. You handle life. Reliable dry cleaning and
            laundry services.
          </p>
          <div className={`mt-8`}>
            <Link
              href={`/pricing`}
              className="px-6 py-3 bg-yellow-500 text-black font-medium rounded-full shadow hover:bg-yellow-600 cursor-pointer"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
