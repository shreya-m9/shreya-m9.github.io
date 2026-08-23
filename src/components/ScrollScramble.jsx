import { useState } from "react";
import { motion, useTransform, useMotionValueEvent } from "framer-motion";

const LETTERS = ["A", "T", "C", "G"];

export default function ScrollScramble({ title, progress, length }) {
  const chars = [...title];
  const num = useTransform(progress, [0, 1], [0, length]);
  let mapped_chars = chars.map((item, index) => ({
    id: index,
    char: item,
    final_status: true,
  }));
  const [display, setDisplay] = useState(mapped_chars);

  // timer
  useMotionValueEvent(num, "change", (latest) => {
    const scrambled = mapped_chars.map((dict) => {
      if (latest < dict.id + 1) {
        return { ...dict, char: title[dict.id], final_status: true };
      }
      const randomLetterIdx = Math.floor(
        (latest * 3 + dict.id * 7) % LETTERS.length,
      );
      const randomLetter = LETTERS[randomLetterIdx];

      return { ...dict, char: randomLetter, final_status: false };
    });
    setDisplay(scrambled);
  });

  return (
    <span>
      {display.map((value) => (
        <motion.span
          key={value.id}
          animate={{
            color: value.final_status ? "var(--text)" : "var(--accent)",
          }}
        >
          {value.char}
        </motion.span>
      ))}
    </span>
  );
}
