"use client";

import { useSearchParams } from "next/navigation";
import { servicesArr } from "../(constant)/services";
import { useEffect, useState } from "react";
import Header from "@/app/pricing/(comp)/header";
import Footer from "@/components/footer";
import { PageLoading } from "@/components/page-loading";

export default function Main() {
  const searchParam = useSearchParams();
  const getServices = searchParam.get("services");

  const [selectedService, setSelectedService] = useState(servicesArr[0]);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const searchServices =
      servicesArr.find((service) => service.param === getServices) ||
      servicesArr[0];

    setSelectedService(searchServices);
    setPageLoaded(true);
  }, [getServices]);

  const props = { selectedService, setSelectedService };

  return (
    <main className={`bg-white`}>
      <Header props={props} />
      <IsPageLoaded isLoaded={pageLoaded}>
        {selectedService.el}
        <Footer />
      </IsPageLoaded>
    </main>
  );
}

function IsPageLoaded({ isLoaded = false, children }) {
  if (isLoaded) return children;

  return (
    <div>
      <PageLoading />
    </div>
  );
}
