import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const LETTERS = ["A", "T", "C", "G"];
const CYCLES = 3;
const SHUFFLE_DURATION = 70;

export default function ScrambleText({ title }) {
  const shuffleRef = useRef(null);
  const chars = [...title];
  let mapped_chars = chars.map((item, index) => ({
    id: index,
    char: item,
    final_status: true,
  }));
  const [display, setDisplay] = useState(mapped_chars);

  useEffect(() => {
    return () => {
      clearInterval(shuffleRef.current);
    };
  }, []);

  // timer
  const countRef = useRef(0);
  const scrambling = () => {
    clearInterval(shuffleRef.current);
    countRef.current = 0;
    shuffleRef.current = setInterval(() => {
      const scrambled = mapped_chars.map((dict) => {
        if (countRef.current / CYCLES > dict.id) {
          return { ...dict, char: title[dict.id], final_status: true };
        }
        const randomLetterIdx = Math.floor(Math.random() * LETTERS.length);
        const randomLetter = LETTERS[randomLetterIdx];

        return { ...dict, char: randomLetter, final_status: false };
      });
      setDisplay(scrambled);
      countRef.current++;
      if (countRef.current >= chars.length * CYCLES) {
        stop();
      }
    }, SHUFFLE_DURATION);
  };

  const stop = () => {
    clearInterval(shuffleRef.current);
    setDisplay(mapped_chars);
  };

  return (
    <motion.div
      onHoverStart={scrambling}
      onHoverEnd={stop}
      onViewportEnter={scrambling}
      onViewportLeave={stop}
      className="scramble-wrapper w-fit"
    >
      {display.map((value) => (
        <motion.span
          animate={{
            color: value.final_status
              ? "var(--accent-body)"
              : "var(--accent-bg)",
          }}
        >
          {value.char}
        </motion.span>
      ))}
    </motion.div>
  );
}
