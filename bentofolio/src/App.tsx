import ProfileCard from "./ProfileCard";
import DetailsPanel from "./DetailsPanel";
import SocialBar from "./SocialsBar";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
export default function App() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlightRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    spotlightRef.current.style.background = `radial-gradient(
      circle at ${x}px ${y}px,
      var(--spotlight-color),
      transparent 120px
    )`;
  };
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className=" relative overflow-hidden min-h-screen grid grid-cols-1 lg:grid-cols-[8fr_4fr_1fr] gap-2 p-3 dark:bg-black"
    >
      {/* spotlight */}
      <div
        ref={spotlightRef}
        className={`pointer-events-none absolute inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
      <ProfileCard />
      <DetailsPanel />
      <SocialBar />
    </motion.div>
  );
}

