import logoImg from "../assets/logo.png";
import { motion } from "framer-motion";

const TABS = ["home", "about", "skills", "experience", "projects", "art"];

export default function NavBar() {
  return (
    <motion.nav className="navbar flex sticky top-0 text-[var(--accent-text)]">
      <ul className="flex gap-4 list-none p-6 items-center">
        <a href={`#home`}>
          <img className="object-cover w-14 h-12" src={logoImg} />
        </a>
      </ul>
      <motion.ul
        className="flex ml-auto gap-4 list-none p-6 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        {TABS.map((tab, index) => (
          <li key={index}>
            <motion.a whileHover={{ color: "var(--text)" }} href={`#${tab}`}>
              {" "}
              / {tab}
            </motion.a>
          </li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
