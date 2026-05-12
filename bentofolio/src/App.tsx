import ProfileCard from "./ProfileCard";
import DetailsPanel from "./DetailsPanel";
import SocialBar from "./SocialsBar";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

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
      className=" relative overflow-hidden min-h-screen grid grid-cols-1 lg:grid-cols-[8fr_4fr_1fr] gap-3 p-3 text-slate-900 dark:text-slate-100"
    >
      {/* Background Color & Grid Pattern */}
      <div className="fixed inset-0 z-[-1] bg-[#f8fafc] dark:bg-black">
        <div className="absolute inset-0 blur-[1px] opacity-80 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]">
          {/* Light Mode Grid (Black lightly transparent) */}
          <div 
            className="absolute inset-0 dark:hidden" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm39 39H1V1h38v38z' fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
          />
          {/* Dark Mode Grid (White with higher opacity for contrast) */}
          <div 
            className="absolute inset-0 hidden dark:block" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm39 39H1V1h38v38z' fill='%23ffffff' fill-opacity='0.12' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
          />
        </div>
      </div>

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
      <Analytics />
    </motion.div>
  );
}

