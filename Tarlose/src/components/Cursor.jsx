import React, { useEffect } from "react";
import gsap from "gsap";
import "../index.css";

const Cursor = () => {
  useEffect(() => {
    // Initial cursor setup
    const cursorSettings = {
      scale: 0.1,
      xPercent: -50,
      yPercent: -50,
      opacity: 0
    };
    
    const cursorOutlineSettings = {
      ...cursorSettings,
      scale: 0.5
    };

    gsap.set('.cursor', cursorSettings);
    gsap.set('.cursor-outline', cursorOutlineSettings);

    // Create GSAP quickTo functions for smooth cursor movement
    const cursorQuickTo = {
      outline: {
        x: gsap.quickTo(".cursor-outline", "x", { duration: 0.2, ease: "power3" }),
        y: gsap.quickTo(".cursor-outline", "y", { duration: 0.2, ease: "power3" })
      },
      dot: {
        x: gsap.quickTo(".cursor", "x", { duration: 0.6, ease: "power3" }),
        y: gsap.quickTo(".cursor", "y", { duration: 0.6, ease: "power3" })
      }
    };

    // Handle cursor visibility and movement
    const handleMouseMove = (e) => {
      // Show cursor on first move
      if (!cursorVisible) {
        gsap.to([".cursor-outline", ".cursor"], { opacity: 1, duration: 0.3 });
        cursorVisible = true;
      }

      // Update cursor positions
      cursorQuickTo.outline.x(e.clientX);
      cursorQuickTo.outline.y(e.clientY);
      cursorQuickTo.dot.x(e.clientX);
      cursorQuickTo.dot.y(e.clientY);
    };

    let cursorVisible = false;
    document.addEventListener("mousemove", handleMouseMove);

    // Create hover animation timeline
    const hoverAnimation = gsap.timeline({ paused: true })
      .to(".cursor-outline", {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(".cursor", {
        scale: 1,
        duration: 0.35,
        ease: "power2.out"
      }, 0);

    // Add hover effects to root element
    const root = document.querySelector("#root");
    if (root) {
      root.addEventListener("mouseenter", () => hoverAnimation.play());
      root.addEventListener("mouseleave", () => hoverAnimation.reverse());
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (root) {
        root.removeEventListener("mouseenter", () => hoverAnimation.play());
        root.removeEventListener("mouseleave", () => hoverAnimation.reverse());
      }
    };
  }, []);

  return (
    <>
      <div className="cursor" />
      <div className="cursor-outline" />
    </>
  );
};

export default Cursor;