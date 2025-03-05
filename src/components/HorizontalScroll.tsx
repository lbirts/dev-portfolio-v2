"use client"

import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
}

export default function HorizontalScroll({ children }: Props) {
 const containerRef = useRef<HTMLDivElement>(null);

 // Set up wheel event handler to convert all scrolling to horizontal
 useEffect(() => {
   const container = containerRef.current;
   if (!container) return;
   
   // Handle all wheel events (both vertical and horizontal from trackpad)
   const handleScroll = (e: WheelEvent) => {
     e.preventDefault();
     
     // Use both deltaY (traditional wheel) and deltaX (trackpad horizontal)
     // Convert all scroll gestures to horizontal movement
     const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
     container.scrollLeft += delta;
   };
   
   // Add event listener to container
   container.addEventListener('wheel', handleScroll, { passive: false });
   
   return () => {
     // Clean up event listener
     container.removeEventListener('wheel', handleScroll);
   };
 }, []);
 
 // Handle touch events for mobile devices
 useEffect(() => {
   const container = containerRef.current;
   if (!container) return;
   
   let startX = 0;
   let startY = 0;
   let isDragging = false;
   
   const handleTouchStart = (e: TouchEvent) => {
     isDragging = true;
     startX = e.touches[0].clientX;
     startY = e.touches[0].clientY;
   };
   
   const handleTouchMove = (e: TouchEvent) => {
     if (!isDragging) return;
     
     const touchX = e.touches[0].clientX;
     const touchY = e.touches[0].clientY;
     
     // Calculate delta
     const deltaX = startX - touchX;
     const deltaY = startY - touchY;
     
     // If vertical movement is greater than horizontal, prevent default
     // to stop vertical scrolling
     if (Math.abs(deltaY) > Math.abs(deltaX)) {
       e.preventDefault();
       
       // Apply the vertical movement to horizontal scroll
       container.scrollLeft += deltaY * 1.5; // Adjust multiplier as needed
     }
     
     // Update start position
     startX = touchX;
     startY = touchY;
   };
   
   const handleTouchEnd = () => {
     isDragging = false;
   };
   
   // Add touch event listeners
   container.addEventListener('touchstart', handleTouchStart as EventListener, { passive: true });
   container.addEventListener('touchmove', handleTouchMove as EventListener, { passive: false });
   container.addEventListener('touchend', handleTouchEnd as EventListener, { passive: true });
   
   return () => {
     // Clean up event listeners
     container.removeEventListener('touchstart', handleTouchStart as EventListener);
     container.removeEventListener('touchmove', handleTouchMove as EventListener);
     container.removeEventListener('touchend', handleTouchEnd as EventListener);
   };
 }, []);
 
 // Set up body to prevent scrolling
 useEffect(() => {
   // Save original body styles
   const originalStyle = window.getComputedStyle(document.body);
   const originalOverflow = originalStyle.overflow;
   
   // Prevent body scrolling
   document.body.style.overflow = 'hidden';
   
   return () => {
     // Restore original body styles
     document.body.style.overflow = originalOverflow;
   };
 }, []);

  return (
    <div
    ref={containerRef}
    className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-hide touch-none relative"
    style={{ 
      scrollbarWidth: 'none', // Firefox
      msOverflowStyle: 'none', // IE and Edge
      overscrollBehaviorX: 'none', // Prevent overscroll bounce
      overscrollBehaviorY: 'none' // Prevent vertical overscroll
    }}
    >
      <motion.div className="flex pb-28 pt-20 h-full px-10 w-max">
        {children}
      </motion.div>
    </div>
  );
}
