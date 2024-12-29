import React, { useEffect } from "react";
import gsap from "gsap";
import "../index.css";

const Cursor = () => {
    useEffect(() => {
    function CursorAnimation() {
    //   Initial cursor scaling
      gsap.set('.cursor', { scale: 0.1, xPercent: -50, yPercent: -50 });
      gsap.set('.cursor-outline', { scale: 0.5, xPercent: -50, yPercent: -50 });

      // Handle mouse movement
      document.addEventListener("mousemove", mouseMove);

      // Create quick access GSAP "quickTo" functions for smoother cursor movement
      let xCTo = gsap.quickTo(".cursor-outline", "x", {
        duration: 0.2,
        ease: "power3"
      });
      let yCTo = gsap.quickTo(".cursor-outline", "y", {
        duration: 0.2,
        ease: "power3"
      });

      let xDTo = gsap.quickTo(".cursor", "x", {
        duration: 0.6,
        ease: "power3"
      });
      let yDTo = gsap.quickTo(".cursor", "y", {
        duration: 0.6,
        ease: "power3"
      });

      let isVisible = false;

      // Function to track mouse movement
      function mouseMove(e) {
        if (!isVisible) {
          gsap.set(".cursor-outline, .cursor", { opacity: 1 });
          isVisible = true;
        }

        // Update cursor position using quickTo
        xCTo(e.clientX);
        yCTo(e.clientY);
        xDTo(e.clientX);
        yDTo(e.clientY);
      }

      // Scale animation timeline for hover effects
      let scaleAnim = gsap.timeline({ paused: true });

      scaleAnim
        .to(".cursor-outline", {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
        .to(
          ".cursor",
          {
            scale: 1,
            duration: 0.35,
            ease: "power2.out"
          },
          0 // Sync with the outline scale animation
        );

      // Apply hover effect on target elements
      let targets = document.querySelectorAll("#root");

      targets.forEach((target) => {
        target.addEventListener("mouseenter", () => {
          scaleAnim.play();
        });

        target.addEventListener("mouseleave", () => {
          scaleAnim.reverse();
        });
      });
    }

    CursorAnimation();
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-outline"></div>
      {/* <div id="main"></div> */}
    </>
  );
};

export default Cursor;