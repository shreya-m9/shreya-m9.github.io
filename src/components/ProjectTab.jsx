import { motion } from "framer-motion";
export default function ProjectTab({ title, onSelect, isSelected }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        originX: 1,
        backgroundColor: "var(--accent-bg)",
        color: "var(--text)",
      }}
      onClick={onSelect}
      animate={{
        borderColor: isSelected ? "var(--text)" : "var(--border)",
        borderRightWidth: isSelected ? "3px" : "1px",
      }}
      className="rounded-l flex w-20 h-fit py-2 justify-center items-center"
    >
      <p className=" text-[14px] pb-1 py-1">{title}</p>
    </motion.button>
  );
}
