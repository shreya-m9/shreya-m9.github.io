import { useState } from "react";
import ProjectTab from "./ProjectTab";
import cancer_pic from "../assets/cancer_db_2.png";
import song_pic from "../assets/song_pred.png";
import shifting_pic from "../assets/shifting_seasons.png";
import { motion } from "framer-motion";
import { useIsVisible } from "../hooks/useIsVisible";
import { FaRightToBracket, FaCode } from "react-icons/fa6";
import ScrambleText from "./ScrambleText";

const PROJECTS = {
  proj1: {
    shortTitle: "cancer database",
    title: "cancer integration and analysis database framework",
    description:
      "designed a 9-table relational database structure integrating patient, genomic, environmental, and occupational data to model multi-factor cancer risk, sourcing real and mock data. the goal of this project was to address the need for centralized information on cancer-patient relationships, making it easier for patients or doctors to find trends in specific types of cancer patients, furthering the practice of personalized medicine.",
    site: "https://docs.google.com/document/d/1t2WaH8FWm4MOjCwD3B3XYDDdbS66B6O-7XOLx0hO9EM/edit?tab=t.0",
    github: "https://github.com/shreya-m9/cancer_db",
    img: cancer_pic,
  },
  proj2: {
    shortTitle: "climate change dashboard",
    title: "climate change dashboard",
    description:
      "worked with a team of 3 to create a dashboard that visualizes CO2 emission, temperature, and extreme weather trends over the past 40+ years in various countries. through this, we aimed to show not only expected trends in recent years, but also expose unexpected trends, such as which countries seem to be more effected by climate change versus which ones seem to produce the most emissions.",
    github:
      "https://github.khoury.northeastern.edu/shreyamookherjee/Shifting-Seasons#",
    img: shifting_pic,
  },
  proj3: {
    shortTitle: "song populatrity predictor",
    title: "song popularity predictor",
    description:
      "created and compared linear regression and KNN models' ability to predict song popularity based on quantitative and qualitative factors. this project aimed to reduce the uncertainty about a song's sucess before release, giving another opinion on a song's popularity to industry professionals or small artists before release.",
    github:
      "https://colab.research.google.com/drive/1xobpSBF8r4eIWGKg0mwbR9nHrtaUTzVc?usp=sharing",
    site: "https://docs.google.com/presentation/d/1BUNxJcSXh3Vr0ZB_Yu-ZdkD_sf1VN--W4efHELdzz3g/edit?usp=sharing",
    img: song_pic,
  },
  proj4: {
    shortTitle: "healthy huskies",
    title: "healthy huskies",
    description:
      "created a budgeting website with a team of 4 within 24 hours to help students manage their dining plans, balancing their weekly spending of dining dollars and meal swipes inspired by our own meal plan budgeting difficulties. won the business/finance track at northeastern's acm hackathon.",
    github: "https://github.com/yalk2007/ACM-Hackathon",
  },
};

export default function Projects() {
  const [content, setContent] = useState("proj1");

  function handleSelect(selectedButton) {
    setContent(selectedButton);
  }

  const { ref, opacity } = useIsVisible();
  return (
    <motion.div ref={ref} style={{ opacity }} className="pb-10 pt-10">
      <h2 className="flex justify-center pb-4">
        <ScrambleText title={"PROJECTS"} />
      </h2>
      <motion.div className="flex w-full min-w-200 min-h-70 max-w-4xl mb-20">
        <div className="flex flex-col">
          {Object.entries(PROJECTS).map(([key, value]) => (
            <div key={key}>
              <ProjectTab
                onSelect={() => handleSelect(key)}
                title={value.shortTitle}
                isSelected={content === key}
              />
            </div>
          ))}
        </div>
        <motion.div
          whileHover={{ boxShadow: "0px 0px 20px var(--border)" }}
          className="relative flex-1 rounded-r-lg"
        >
          <div className="absolute bottom-4 right-4 flex gap-3">
            {PROJECTS[content].github && (
              <motion.a
                whileHover={{ scale: 1.1, color: "var(--text)" }}
                href={PROJECTS[content].github}
              >
                <FaCode className="w-5.5 h-5.5" />
              </motion.a>
            )}
            {PROJECTS[content].site && (
              <motion.a
                whileHover={{ scale: 1.1, color: "var(--text)" }}
                href={PROJECTS[content].site}
              >
                <FaRightToBracket className="w-5 h-5" />
              </motion.a>
            )}
          </div>
          <div className="mt-4 px-4 pl-6 pb-4 mb-4">
            <motion.h3
              className="header-text text-[23px] pt-3 pb-1"
              whileHover={{ scale: 1.05, originX: 0, color: "var(--text)" }}
            >
              {PROJECTS[content].title}
            </motion.h3>
            <p className="pt-4">{PROJECTS[content].description}</p>
            <div className="flex justify-center px-4 pt-5">
              {PROJECTS[content].img && (
                <motion.img
                  whileHover={{
                    y: 10,
                    boxShadow: "-8px 8px 20px var(--text)",
                  }}
                  className="w-100 h-60 object-cover object-left rounded inline"
                  src={PROJECTS[content].img}
                />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
