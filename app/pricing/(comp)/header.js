"use client";

import { useState } from "react";

export default function Header() {
  const services = [`Wash & Fold`, `Dry Cleaning`, `Ironing`];

  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className={`mt-16 bg-gray-100 sticky top-16 z-50`}>
      <div
        className={`w-full mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-black`}
      >
        <nav className={`flex space-x-4 sm:space-x-6 font-semibold sm:text-lg`}>
          {services.map((service) => (
            <button
              onClick={() => setSelectedService(service)}
              className={`flex items-center py-4 cursor-pointer border-2 border-transparent ${selectedService === service ? "border-b-black" : "hover:text-gray-700"}`}
            >
              {service}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
