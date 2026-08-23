import { useState } from "react";
import ArtContainer from "./ArtContainer.jsx";
import { motion } from "framer-motion";
import { useIsVisible } from "../hooks/useIsVisible.js";
import ScrambleText from "./ScrambleText.jsx";
import soaked from "../assets/soaked.jpg";
import mnm2 from "../assets/mnm2.jpg";
import mnm from "../assets/mnm.jpg";
import clouds from "../assets/clouds.jpg";
import beauty from "../assets/beauty.jpg";
import play from "../assets/play.jpg";

const ARTWORK = {
  1: {
    img: clouds,
    title: "head in the clouds",
  },
  2: {
    img: mnm,
    title: "mom & me",
  },
  3: {
    img: mnm2,
    title: "mom & me",
  },
  4: {
    img: soaked,
    title: "soaked",
  },
  5: {
    img: beauty,
    title: "beauty is pain",
  },
  6: {
    img: play,
    title: "come out and play!",
  },
};

export default function Art() {
  const [flipped, setFlipped] = useState(null);

  function handleSelect(key) {
    setFlipped(flipped === key ? null : key);
  }
  const { ref, opacity } = useIsVisible();

  return (
    <motion.div className="pr-24 pt-100" ref={ref} style={{ opacity }}>
      <h2 className="pb-2">
        <ScrambleText title={"ARTWORK"} />
      </h2>
      <p className="pb-7">
        {" "}
        when approaching any task, i fall back on the principals of
        decomposition, prioritization, and experimentation in design.
      </p>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {Object.entries(ARTWORK).map(([key, value]) => (
          <div key={key} className="pb-3">
            <ArtContainer
              onSelect={() => handleSelect(key)}
              image={value.img}
              flipped={flipped === key}
              title={value.title}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
