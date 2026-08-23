import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useIsVisible } from "../hooks/useIsVisible";
import { Cascade } from "./BackgroundCascade";
import ScrollScramble from "./ScrollScramble";

export default function Tagline() {
  const { ref, opacity, scale } = useIsVisible(true);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "start end"],
  });

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Cascade />
      </div>
      <div ref={ref} className="relative h-[150vh] pt-35">
        <motion.h2
          ref={scrollRef}
          style={{ opacity, scale }}
          className="text-[40px] text-center sticky top-0 h-screen flex flex-col items-center justify-center accent-font"
        >
          <ScrollScramble
            title={"PASSIONATE ABOUT THE CONVERGENCE OF"}
            progress={scrollYProgress}
            length={75}
          />
          <ScrollScramble
            title={"GENOMICS, DATA, AND DESIGN"}
            progress={scrollYProgress}
            length={75}
          />
        </motion.h2>
      </div>
    </div>
  );
}
