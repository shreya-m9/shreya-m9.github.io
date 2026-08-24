import { useIsVisible } from "../hooks/useIsVisible";
import { motion, useScroll } from "framer-motion";
import { Cascade } from "./BackgroundCascade";
import ScrollScramble from "./ScrollScramble";
import { useRef } from "react";

export default function Home() {
  const { ref, opacity } = useIsVisible();
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute -inset-1 z-0">
        <Cascade />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2.5 }}
        ref={ref}
        className="relative flex pl-10 pt-90 justify-end h-screen shrink-0"
      >
        <motion.div
          style={{
            opacity,
          }}
        >
          <div className="flex items-center gap-10">
            <h1 className="pl-50 pb-12">
              <ScrollScramble
                title={"SHREYA"}
                progress={scrollYProgress}
                length={15}
              />
            </h1>
          </div>
          <h1 className="pl-100 pb-5">
            <ScrollScramble
              title={"MOOKHERJEE"}
              progress={scrollYProgress}
              length={15}
            />
          </h1>
        </motion.div>
      </motion.div>
      <div ref={scrollRef} className="h-[10vh]" />
    </div>
  );
}
