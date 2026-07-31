import { useState, useEffect } from "react";
import { SECTION_ORDER } from "@/lib/sections";

export const useScrollNavigation = () => {
  const [scrollPosition, setScrollPosition] = useState<
    "top" | "middle" | "bottom"
  >("top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop < 100) {
        setScrollPosition("top");
      } else if (scrollTop + windowHeight >= docHeight - 100) {
        setScrollPosition("bottom");
      } else {
        setScrollPosition("middle");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Current section = last section whose top sits above the probe line
  // (scroll position plus a header-sized bias).
  const getAdjacentSectionId = (direction: "up" | "down"): string | null => {
    const probe = window.scrollY + 160;
    let currentIndex = 0;
    SECTION_ORDER.forEach((id, index) => {
      const element = document.getElementById(id);
      if (element && element.offsetTop <= probe) {
        currentIndex = index;
      }
    });

    const nextIndex = direction === "down" ? currentIndex + 1 : currentIndex - 1;
    return SECTION_ORDER[nextIndex] ?? null;
  };

  return {
    scrollPosition,
    getAdjacentSectionId,
  };
};
