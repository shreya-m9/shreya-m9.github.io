import { useState } from "react";
import resume from "../assets/Shreya_Mookherjee_Resume.pdf";
import { useIsVisible } from "../hooks/useIsVisible";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

const EXPERIENCES = [
  {
    link: "https://github.com/GenerateNU/StrideTrack",
    title: "data scientist @ generate",
    year: "jan 2026 - present",
    technologies: ["supabase", "SQL", "python", "react.js"],
    description:
      "worked across the data pipeline for stridetrack, a startup that helps coaches extract and visualize relevant metrics of their track athletes runs from an in-sole sensor.",
  },
  {
    link: "https://www.instagram.com/nu.rover/",
    title: "life detection researcher @ nurover",
    year: "sept 2025 - present",
    technologies: [
      "mass spectrometer",
      "calibration curve creation",
      "pipetting",
    ],
    description:
      "executed bioassays to develop benchmarks of life for our rover to successfully complete the URC life detection challenge",
  },
  {
    title: "teaching assistant @ northeastern",
    year: "sept 2026 - dec 2026",
    description:
      "incoming TA for introduction to databases class at northeastern university",
  },
];

export default function Experience() {
  const [numClicks, setNumClicks] = useState(0);
  const { ref, opacity } = useIsVisible();

  function clickFwd() {
    setNumClicks((numClicks + 1) % EXPERIENCES.length);
  }

  function clickBwd() {
    setNumClicks(Math.abs(numClicks - 1) % EXPERIENCES.length);
  }

  function ifLink() {
    if (EXPERIENCES[numClicks].link) {
      return (
        <a
          className="header-text text-[25px]"
          href={EXPERIENCES[numClicks].link}
        >
          {" "}
          {EXPERIENCES[numClicks].title}
        </a>
      );
    } else {
      return (
        <a className="header-text text-[25px]">
          {" "}
          {EXPERIENCES[numClicks].title}
        </a>
      );
    }
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="flex flex-col pb-20 items-center justify-center pt-40"
    >
      <h2>
        <ScrambleText title={"EXPERIENCE"} />
      </h2>
      <p className="pb-8">take a look at some of the things i've been up to!</p>
      <motion.div
        whileHover={{ boxShadow: "0px 0px 20px var(--accent-text)" }}
        className="experience flex px-4 py-10 rounded-lg"
      >
        <motion.button
          whileHover={{ scale: 1.1, color: "var(--text)" }}
          className="self-center px-3 py-1 text-lg"
          onClick={clickBwd}
        >
          ◀
        </motion.button>
        <div className="self-center flex-1 max-w-160 px-7">
          <motion.h3
            whileHover={{ scale: 1.05, originX: 0, color: "var(--text)" }}
          >
            {ifLink()}
          </motion.h3>
          <p className="pt-1 text-[18px]">
            {" "}
            {EXPERIENCES[numClicks].year && EXPERIENCES[numClicks].year}{" "}
          </p>
          <p className="pt-4"> {EXPERIENCES[numClicks].description}</p>
          <div className="flex pt-4">
            {EXPERIENCES[numClicks].technologies &&
              EXPERIENCES[numClicks].technologies.map((tech) => (
                <p className="pr-3">
                  <motion.p
                    className="px-2 py-1 border rounded text-[18px]"
                    whileHover={{
                      scale: 1.1,
                    }}
                  >
                    {" "}
                    {tech}
                  </motion.p>
                </p>
              ))}
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1, color: "var(--text)" }}
          className="self-center text-lg"
          onClick={clickFwd}
        >
          ▶
        </motion.button>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px var(--text)",
          backgroundColor: "var(--accent-bg)",
          color: "var(--text)",
        }}
        className="self-center border rounded-3xl px-5 py-3 mt-5"
      >
        <a href={resume} className="header-text text-[25px]" target="_blank">
          {" "}
          resume{" "}
        </a>
      </motion.div>
    </motion.div>
  );
}
