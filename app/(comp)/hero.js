import { urlConvert } from "@/util/img-fire-convert";

export default function Hero() {
  return (
    <img
      src={urlConvert(
        `https://imagedelivery.net/_rcIVT3taNSHudAfnOfnXg/b9b7a2ff-e836-41c2-222e-cdf2571afe00/XL`,
      )}
      alt="June Laundry Services"
      title={`June Laundry Services`}
      className="mt-16 md:mt-0 w-full h-[calc(100vh)] object-cover object-top md:mask-t-from-50%"
    />
  );
}
