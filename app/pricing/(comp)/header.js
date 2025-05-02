"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { servicesArr } from "../(constant)/services";
import { motion, AnimatePresence } from "framer-motion";
import { ShowContent } from "@/components/common";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import debounce from "lodash.debounce";
import Link from "next/link";

export default function Header() {
  const searchParam = useSearchParams();
  const getServices = searchParam.get("services");

  const [selectedService, setSelectedService] = useState(servicesArr[0]);
  const scrollRef = useRef(null); // Reference to the ul element

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1); // Subtract 1 to account for rounding
    }
  };

  useEffect(() => {
    const searchServices =
      servicesArr.find((service) => service.param === getServices) ||
      servicesArr[0];

    setSelectedService(searchServices);
  }, [getServices]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollContainer = scrollRef.current;
    const debouncedCheckScroll = debounce(checkScroll, 500); // Adjust delay as needed

    const handleScroll = (e) => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += e.deltaY * 0.5; // Horizontal scroll using vertical scroll
        debouncedCheckScroll();
      }
    };

    // Define handleResize to update scroll button visibility on window resize
    const handleResize = () => {
      debouncedCheckScroll();
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll);
      scrollContainer.addEventListener("scroll", checkScroll);
    }
    // Attach handleResize to window resize event
    window.addEventListener("resize", handleResize);

    // Initial check to set button visibility on component mount
    checkScroll();

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleScroll);
        scrollContainer.removeEventListener("scroll", checkScroll);
      }
      // Clean up the resize event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
      debouncedCheckScroll.cancel();
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -100, // Scroll left by 200 pixels
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 100, // Scroll right by 200 pixels
        behavior: "smooth",
      });
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 }, // Start invisible and slightly shifted
    visible: { opacity: 1, x: 0 }, // Fully visible and in place
    exit: { opacity: 0, x: 20 }, // Fade out and shift
  };

  return (
    <div className={`mt-16 bg-gray-50 sticky top-16 z-10`}>
      <div
        className={`w-full mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-black`}
      >
        <nav
          ref={scrollRef}
          className={`flex gap-x-4 sm:gap-x-6 font-semibold sm:text-lg overflow-x-auto whitespace-nowrap`}
        >
          {servicesArr.map((service) => (
            <Link
              key={service.name}
              onClick={() => setSelectedService(service)}
              href={`/pricing?services=${service.param}`}
              className={`flex items-center py-4 cursor-pointer outline-0 border-2 px-2 border-transparent ${selectedService.name === service.name ? "border-b-black" : "hover:bg-gray-100"}`}
            >
              {service.name}
            </Link>
          ))}
          <AnimatePresence>
            <ShowContent showContent={canScrollLeft}>
              <div
                className={`absolute bottom-0.5 left-0 top-0.5 flex w-20 items-center bg-linear-to-r from-gray-50 via-gray-50 to-transparent`}
              >
                <motion.button
                  key="left-button"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={buttonVariants}
                  transition={{ duration: 1 }}
                  onClick={scrollLeft}
                  aria-label="Scroll Left"
                  className={`ml-4 flex rounded-full border border-gray-400  bg-gray-300 p-1 text-gray-500`}
                >
                  <ChevronLeftIcon className={`size-5`} />
                </motion.button>
              </div>
            </ShowContent>
          </AnimatePresence>
          <AnimatePresence>
            <ShowContent showContent={canScrollRight}>
              <div
                className={`absolute bottom-0.5 right-0 top-0.5 flex w-20 items-center justify-end bg-linear-to-l from-gray-50 via-gray-50 to-transparent`}
              >
                <motion.button
                  key="right-button"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={buttonVariants}
                  transition={{ duration: 1 }}
                  onClick={scrollRight}
                  aria-label="Scroll Right"
                  className={`mr-4 flex rounded-full border border-gray-400  bg-gray-300 p-1 text-gray-500`}
                >
                  <ChevronRightIcon className={`size-5`} />
                </motion.button>
              </div>
            </ShowContent>
          </AnimatePresence>
        </nav>
      </div>
    </div>
  );
}
