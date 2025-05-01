"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { servicesArr } from "../(constant)/services";
import Link from "next/link";

export default function Header() {
  const searchParam = useSearchParams();
  const getServices = searchParam.get("services");

  const [selectedService, setSelectedService] = useState(servicesArr[0]);

  useEffect(() => {
    const searchServices =
      servicesArr.find((service) => service.param === getServices) ||
      servicesArr[0];

    setSelectedService(searchServices);
  }, [getServices]);

  return (
    <div className={`mt-16 bg-gray-100 sticky top-16 z-10`}>
      <div
        className={`w-full mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-black`}
      >
        <nav className={`flex space-x-4 sm:space-x-6 font-semibold sm:text-lg`}>
          {servicesArr.map((service) => (
            <Link
              key={service.name}
              onClick={() => setSelectedService(service)}
              href={`/pricing?services=${service.param}`}
              className={`flex items-center py-4 cursor-pointer outline-0 border-2 border-transparent ${selectedService.name === service.name ? "border-b-black" : "hover:text-gray-700"}`}
            >
              {service.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
