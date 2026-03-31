import { motion } from "framer-motion";
import { Card } from "./components/ui/card";
import {
  Linkedin,
  Github,
  Send,
  MessageCircle,
  X,
  Mail
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
      <Card onClick={toggleTheme} className="w-12 h-12 lg:w-20 lg:h-20 shrink-0 rounded-2xl flex justify-center items-center border-zinc-200 bg-zinc-50 shadow-sm hover:shadow-md transition-shadow cursor-default dark:bg-zinc-900 dark:border-zinc-800 ">
        <motion.svg 
          animate={{ rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          width="36" height="36" viewBox="0 0 40 40" fill="none" 
          className="text-zinc-500 dark:text-zinc-400"
        >
          <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" fill="#f4f4f5"/>
          <path d="M20 30C25.5228 30 30 25.5228 30 20C30 19.5373 29.3065 19.4608 29.0672 19.8568C27.9289 21.7406 25.8615 23 23.5 23C19.9101 23 17 20.0899 17 16.5C17 14.1385 18.2594 12.0711 20.1432 10.9328C20.5392 10.6935 20.4627 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z" fill="#71717a"/>
        </motion.svg>
      </Card>

      {/* Main Social Links Bar */}
      <div className="flex flex-row flex-1 lg:flex-col lg:w-20 justify-around items-center p-2 lg:py-4 gap-4 bg-white/80 backdrop-blur-sm border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-2xl shadow-sm">
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
            <span className="absolute hidden group-hover:block lg:hidden bottom-full mb-3 px-2 py-1 bg-zinc-800 text-white text-[10px] rounded pointer-events-none whitespace-nowrap z-50">
              {social.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default SocialBar;