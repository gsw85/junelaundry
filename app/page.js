import { urlConvert } from "@/util/img-fire-convert";

export default function Home() {
  return (
    <main>
      <img
        src={urlConvert(
          `https://imagedelivery.net/_rcIVT3taNSHudAfnOfnXg/b9b7a2ff-e836-41c2-222e-cdf2571afe00/XL`,
        )}
        alt="June Laundry Hero"
        title={`June Laundry Hero`}
        className="mt-16 md:mt-0 w-full max-h-[calc(100vh)] object-cover object-top md:mask-t-from-70%"
      />
    </main>
  );
}
