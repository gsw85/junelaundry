"use client";

import { useSearchParams } from "next/navigation";
import { servicesArr } from "../(constant)/services";
import { useEffect, useState } from "react";
import Header from "@/app/pricing/(comp)/header";
import Footer from "@/components/footer";

export default function Main() {
  const searchParam = useSearchParams();
  const getServices = searchParam.get("services");

  const [selectedService, setSelectedService] = useState(servicesArr[0]);

  useEffect(() => {
    const searchServices =
      servicesArr.find((service) => service.param === getServices) ||
      servicesArr[0];

    setSelectedService(searchServices);
  }, [getServices]);

  const props = { selectedService, setSelectedService };

  return (
    <main className={`bg-white`}>
      <Header props={props} />
      {selectedService.el}
      <Footer />
    </main>
  );
}
