import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const LETTERS = ["A", "T", "C", "G"];
const SHUFFLE_DURATION = 70;

function ScrambleCol({ title }) {
  const chars = [...title];
  const [display, setDisplay] = useState(chars);
  const shuffleRef = useRef(null);

  useEffect(() => {
    shuffleRef.current = setInterval(() => {
      const scrambled = chars.map(() => {
        const randomLetterIdx = Math.floor(Math.random() * LETTERS.length);
        const randomLetter = LETTERS[randomLetterIdx];
        return randomLetter;
      });
      setDisplay(scrambled);
    }, SHUFFLE_DURATION);

    return () => {
      clearInterval(shuffleRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      {display.map((letter, index) => (
        <span className="pixel-text text-[16px]" key={index}>
          {letter}
        </span>
      ))}
    </div>
  );
}

function randomLetterString(length) {
  return Array.from(
    { length },
    () => LETTERS[Math.floor(Math.random() * LETTERS.length)],
  ).join("");
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export function Cascade() {
  const vars = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    fallDuration: randomBetween(4, 7),
    fallDelay: randomBetween(0, 5),
    left: randomBetween(0, 100),
    length: randomBetween(7, 15),
  }));
  return (
    <div className="relative w-full h-screen">
      {vars.map((col) => (
        <motion.div
          style={{ left: `${col.left}%` }}
          animate={{ y: ["-10vh", "50vh"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: col.fallDuration,
            delay: col.fallDelay,
            repeat: Infinity,
            ease: "linear",
            opacity: {
              duration: col.fallDuration,
              repeat: Infinity,
              times: [0, 0.15, 0.85, 1], // fades in over first 15%, fades out over last 15%
            },
          }}
          className="absolute text-sm text-[var(--accent-text)]"
          key={col.id}
        >
          <ScrambleCol title={randomLetterString(col.length)} />
        </motion.div>
      ))}
    </div>
  );
}
