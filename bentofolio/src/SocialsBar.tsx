import { motion } from "framer-motion";
import { Card } from "./components/ui/card";
import {
  Linkedin,
  Github,
  Send,
  MessageCircle,
  X,
  Mail,
  Sun,
  Moon
} from "lucide-react";
import { useEffect, useState } from "react";
const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/gosa-girma-b7b256326", label: "LinkedIn", color: "hover:text-blue-600 dark:hover:text-blue-600 z-50" },
  { icon: Mail, href: "mailto:gosagirma441@gmail.com", label: "Email", color: "hover:text-red-500 dark:hover:text-red-500 z-50" },
  { icon: X, href: "https://x.com/GosaGirma110026", label: "X", color: "hover:text-black dark:hover:text-white z-50" },
  { icon: Github, href: "https://github.com/gosag", label: "Github", color: "hover:text-zinc-900 dark:hover:text-zinc-300 z-50" },
  { icon: Send, href: "https://t.me/gosa_1", label: "Telegram", color: "hover:text-sky-500 dark:hover:text-sky-400 z-50" },
  { icon: MessageCircle, href: "#", label: "WhatsApp", color: "hover:text-green-500 hidden sm:block dark:hover:text-green-400 z-50" }
  
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.1 }
  }
}; 

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

function SocialBar() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    }
    return "dark"; // default to dark if no preference
  });
  useEffect(() => { 
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-row lg:flex-col gap-3 w-full lg:w-20 items-center transition-all duration-300 "
    >
      {/* The Anchor/Status Card */}
      <Card onClick={toggleTheme} className="w-12 h-12 lg:w-20 lg:h-20 shrink-0 rounded-2xl flex justify-center items-center border-zinc-200 bg-zinc-50 shadow-sm hover:shadow-md transition cursor-default dark:bg-zinc-900 dark:border-zinc-800 hover:scale-105">
        <motion.div 
        initial={{rotate:theme==="light"?180:180}}
        animate={{ rotate: theme === "light" ? 0 : 360 }}
        transition={{duration:0.5}}
        className="z-50 "
        >{theme !== "light" ? <Sun size={26} strokeWidth={2.25} className="text-yellow-500 z-50" /> : <Moon size={26} strokeWidth={2.25} className="text-gray-400 z-50" />}
       </motion.div>
      </Card>

      {/* Main Social Links Bar */}
      <div className="flex flex-row flex-1 lg:flex-col lg:w-20 justify-around items-center p-2 lg:py-4 gap-4 bg-[radial-gradient(ellipse_at_top_right,_theme(colors.zinc.50),_theme(colors.zinc.100),_theme(colors.blue.50))] dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black dark:border-zinc-800 rounded-2xl shadow-sm">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`relative group p-2 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-500 transition-all duration-200 ${social.color} hover:bg-white hover:shadow-sm hover:border-zinc-300 dark:bg-zinc-800 dark:border-zinc-900 dark:text-zinc-100`}
          >
            <social.icon size={20} strokeWidth={2.25} />
            <span className="absolute hidden group-hover:block lg:hidden bottom-full mb-3 px-2 py-1 bg-zinc-800 text-white text-[10px] rounded pointer-events-none whitespace-nowrap z-50 ">
              {social.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default SocialBar;