import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import Middle from "./Middle";
import BelowMiddle from "./BelowMiddle";

const Hero = () => {
  const animationPlayedRef = useRef(false);

  useEffect(() => {
    if (!animationPlayedRef.current) {
      const tl = gsap.timeline();

      // Animation for Navbar
      tl.from(".navbar", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out",
      });

      // Animation for Middle component
      tl.from(".middle", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      });

      // Animation for BelowMiddle component
      tl.from(".below-middle", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      });

      // Set animation played ref to true
      animationPlayedRef.current = true;
    }
  }, []);

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="middle">
        <Middle />
      </div>
      <div className="mt-8 below-middle">
        <BelowMiddle />
      </div>
    </>
  );
};

export default Hero;
