import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useIsVisible(scaled = false) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [1, 1.75, 1.75, 1],
  );

  return scaled ? { ref, opacity, scale } : { ref, opacity };
}
