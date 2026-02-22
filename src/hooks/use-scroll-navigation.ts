import { useState, useEffect } from "react";

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight * 0.8, behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  return {
    scrollPosition,
    scrollToSection,
    scrollUp,
    scrollDown,
  };
};
