import { urlConvert } from "@/util/img-fire-convert";

export default function PriceList({ products }) {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl mb-32 px-4">
      <div id={`pricing`} className={`sr-only -mt-42`} />
      <h2 className="text-2xl/7 font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight my-10">
        Pricing
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.name} className="relative">
            <img
              alt={product.name}
              title={product.name}
              src={urlConvert(product.imageSrc)}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h4 className="text-sm text-gray-700">{product.name}</h4>
                <p className="mt-1 text-sm text-gray-500">{product.others}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
