"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
}

export default function HorizontalScroll({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Set up scrolling with Framer Motion
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Calculate the translation based on the content width
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-80%"] // Adjust the percentage based on your content width
  );

  // Set up wheel event handler to convert all scrolling to horizontal
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Handle all wheel events (both vertical and horizontal from trackpad)
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();

      // Use both deltaY (traditional wheel) and deltaX (trackpad horizontal)
      // Convert all scroll gestures to horizontal movement
      const delta =
        Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      container.scrollLeft += delta;
    };

    // Add event listener to container
    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      // Clean up event listener
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-hide relative"
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE and Edge
        overscrollBehaviorX: "none", // Prevent overscroll bounce
      }}
    >
      <motion.div ref={contentRef} className="flex py-20 h-full px-10 w-max">
        {children}
      </motion.div>
    </div>
  );
}
