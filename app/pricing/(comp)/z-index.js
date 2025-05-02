"use client";

import { useSearchParams } from "next/navigation";
import { servicesArr } from "../(constant)/services";

export default function Main() {
  const searchParam = useSearchParams();
  const getServices = searchParam.get("services");

  const searchServices =
    servicesArr.find((service) => service.param === getServices) ||
    servicesArr[0];

  return searchServices?.el;
}
