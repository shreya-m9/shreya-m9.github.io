import headshotImg from "../assets/headshot.JPG";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { useIsVisible } from "../hooks/useIsVisible";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

const SOCIALS = [
  {
    image: FaGithub,
    link: "https://github.com/shreya-m9",
  },
  {
    image: FaLinkedin,
    link: "https://www.linkedin.com/in/shreya-mookherjee-131013389/",
  },
  {
    image: Mail,
    link: "mailto:shreyamookherjee(@gmail.com",
  },
];

export default function About() {
  const { ref, opacity } = useIsVisible();

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="flex pb-20 gap-4 text-right"
    >
      <div className="flex flex-col pl-4 max-w-lg">
        <h2 className="pl-87">
          {" "}
          <ScrambleText title={"ABOUT ME"} />
        </h2>
        <p>
          {" "}
          hi! i'm shreya, a data science and biochemistry sophomore at
          northeastern university. <br />
          <br />
          i am deeply interested in the use of technology in the field of
          genetics to improve human health. my design background also has me
          hooked on 3D modeling and visual innovation.
          <br /> <br />
          i've mostly worked in traditional data science roles so far, but{' '}
          <motion.a 
            href="https://sites.research.google/gr/neural-mapping/" 
            target="_blank" 
            whileHover={{ color: "var(--text)" }}
            transition={{ duration: 0.2 }}
          >
            google research's neural mapping
          </motion.a>{' '}
          and{' '}
          <a 
            href="https://www.illumina.com/areas-of-interest/genomics-in-drug-development/cell-atlas.html" 
            target="_blank" 
            whileHover={{ color: "var(--text)" }}
            transition={{ duration: 0.2 }}
          >
            illumina's billion cell atlas program
          </a>{' '}
          are some projects that currently inspire me. in my free time, you can find me drawing, 
          taking photos, or camping out at one of boston's many cafes.
        </p>
        <ul className="border-t border-[var(--border)] w-fit ml-auto pt-2 flex flex-row list-none mt-4 gap-4 justify-end">
          {SOCIALS.map((social, index) => {
            const Icon = social.image;
            return (
              <li key={index}>
                <a href={social.link}>
                  <motion.div
                    whileHover={{ scale: 1.1, color: "var(--text)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <motion.img
        whileHover={{
          x: 10,
          y: -10,
          boxShadow: "8px 8px 20px var(--text)",
        }}
        src={headshotImg}
        className="w-75 h-90 object-cover"
      />
    </motion.div>
  );
}
