import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import ScrambleText from "./ScrambleText";
import { useIsVisible } from "../hooks/useIsVisible";
import headshotImg from "../assets/skills.jpg";

const LANGUAGES = [
  "python",
  "SQL",
  "javascript",
  "pandas",
  "react",
  "fast API",
  "tailwind css",
  "framer motion",
];

const CONCEPTS = ["git + github", "REST API", "machine learning"];

const LABORATORY = ["pipetting", "PCR", "mass spec"];
export default function Skills() {
  const { ref, opacity } = useIsVisible();
  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="flex pb-20 pt-30 gap-4 text-left"
    >
      <motion.img
        whileHover={{
          x: 10,
          y: -10,
          boxShadow: "-8px 8px 20px var(--text)",
        }}
        src={headshotImg}
        className="w-75 h-90 object-cover object-left"
      />
      <div className="flex flex-col pl-4 max-w-lg">
        <h2>
          {" "}
          <ScrambleText title={"SKILLS"} />
        </h2>
        <h3 className="pt-4 pb-2">languages/frameworks:</h3>
        <ul className="mt-2 grid grid-cols-3 pl-4 gap-x-4 gap-y-2">
          {LANGUAGES.map((skill) => (
            <motion.li
              whileHover={{ scale: 1.1, color: "var(--text)" }}
              className="flex items-center gap-1"
            >
              {" "}
              <FaStar className="w-2 h-2" /> {skill}
            </motion.li>
          ))}
        </ul>
        <h3 className="pt-6 pb-2">concepts/tools:</h3>
        <ul className="mt-2 grid grid-cols-3 pl-4 gap-x-4 gap-y-2">
          {CONCEPTS.map((skill) => (
            <motion.li
              whileHover={{ scale: 1.1, color: "var(--text)" }}
              className="flex items-center gap-1"
            >
              {" "}
              <FaStar className="w-2 h-2" /> {skill}
            </motion.li>
          ))}
        </ul>
        <h3 className="pt-6 pb-2">laboratory:</h3>
        <ul className="mt-2 grid grid-cols-3 pl-4 gap-x-4 gap-y-2">
          {LABORATORY.map((skill) => (
            <motion.li
              whileHover={{ scale: 1.1, color: "var(--text)" }}
              className="flex items-center gap-1"
            >
              {" "}
              <FaStar className="w-2 h-2" /> {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
