import { Briefcase, Check } from "lucide-react";
import {Card, CardContent} from "./components/ui/card"
import {motion} from "framer-motion"
const row1 = [
  { name: "React", icon: "/skills/react-svgrepo-com.svg" },
  { name: "Tailwind", icon: "/skills/tailwind-css-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/skills/javascript-logo-svgrepo-com.svg" },
  { name: "HTML", icon: "/skills/html-svgrepo-com.svg" },
];

const row2 = [
  { name: "TypeScript", icon: "/skills/typescript-svgrepo-com (1).svg" },
  { name: "Node.js", icon: "/skills/nodejs-icon-svgrepo-com.svg" },
  { name: "Express", icon: "/skills/expressjs-icon (1).svg" },
  {name: "MongoDB", icon: "/skills/mongo-svgrepo-com.svg"},
  { name: "Git", icon: "/skills/git-icon-logo-svgrepo-com.svg" },
  
];
const getDuplicatedItems = (arr:any, duplications = 4) => {
  return Array(duplications).fill(arr).flat();
};

function MySkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="min-h-[27%] relative flex flex-col justify-center px-4 overflow-hidden bg-white border border-neutral-200 rounded-3xl
      shadow-[0_8px_30px_rgb(0,0,0,0.04)]
      hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1  transition-all duration-300 ease-out 
      bg-[radial-gradient(ellipse_at_center,_theme(colors.zinc.50),_theme(colors.zinc.100),_theme(colors.blue.50))]
      dark:bg-[radial-gradient(ellipse,_theme(colors.zinc.800),_theme(colors.zinc.900),_theme(colors.black))]
      dark:border dark:border-zinc-900 "
    >
      <h3 className="mb-6 text-xs font-bold tracking-widest text-zinc-700 uppercase dark:text-zinc-50">
        My Arsenal
      </h3>

      {/* Marquee Wrapper
        The mask-image creates the beautiful fade-out effect on the left and right edges.
      */}
      <div className="flex flex-col gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] w-full">
        <motion.div
          className="flex gap-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {getDuplicatedItems(row1).map((skill, idx) => (
            <SkillBadge key={`r1-${idx}`} skill={skill} />
          ))}
        </motion.div>

        <motion.div
          className="flex gap-3 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {getDuplicatedItems(row2).map((skill, idx) => (
            <SkillBadge key={`r2-${idx}`} skill={skill} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function SkillBadge({ skill }: { skill: { name: string; icon: string } }) {
  return (
    <div className="flex items-center gap-2 z-50 px-4 py-2 bg-neutral-50 border border-neutral-100 rounded-2xl shadow-sm min-w-max dark:bg-zinc-800 dark:border-white/5">
      <img
        src={skill.icon}
        alt={`${skill.name} logo`}
        className="w-6 h-6 object-contain"
      />
      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
        {skill.name}
      </span>
    </div>
  );
}
const HireMeForCard = () => {
  return (
    <motion.div
      className="relative min-h-[67%] flex flex-row justify-evenly lg:justify-between flex-wrap h-fit md:h-[455px] border-zinc-200 dark:border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2
        w-80 h-80
        text-sm font-bold
        text-zinc-900 dark:text-zinc-50
        bg-[radial-gradient(circle,_rgba(82,177,255,0.1)_0%,_transparent_70%)]
        dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_0%,_transparent_70%)]
        pointer-events-none z-10
        transition-opacity duration-300
        rounded-lg px-3 py-1">
      </div>
      {/* Left Section: Hire Me For Tags */}
      <Card className="max-w-[60%] h-full py-3 px-6  rounded-3xl shadow-xl  hover:shadow-2xl transition-shadow duration-300 dark:bg-zinc-900 dark:border dark:border-white/5 bg-zinc-100 ">
        <p className="text-md bg-slate-200 w-fit mx-auto text-blue-800 rounded-md px-2 flex items-center gap-1 dark:bg-zinc-800 dark:text-zinc-50">
          <Briefcase size={16} /> Hire me For
        </p>
        <div className="flex flex-wrap pl-0.5 gap-2 md:gap-3 lg:gap-1.5">
          {/* Skill Tags */}
          {[
            "Full-Stack MERN + TypeScript",
            "Modern UI with Tailwind",
            "REST API Development",
            "Auth",
            "AI Features (LLMs)",
            "MongoDB Database Design",
            "Responsive Web Apps",
            "Performance Optimization",
          ].map((skill, index) => (
            <motion.span
              key={index}
              className="p-1 text-sm  rounded-md transition min-w-[100%] sm:w-auto cursor-pointer flex items-center gap-1 sm:gap-1.5 hover:text-zinc-950  dark:text-zinc-300 dark:hover:text-zinc-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Check size={14} className="text-blue-600 dark:text-blue-400" />
              {skill}
            </motion.span>
          ))}
        </div>
      </Card>
        <motion.div
        className="max-w-[36%] h-full flex flex-col justify-evenly items-stretch gap-2 sm:gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {/* Shipped */}
        <motion.div
          className="flex-1 h-[30%]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <Card className="group relative h-full rounded-2xl border border-zinc-200/80 bg-white dark:bg-zinc-900 dark:border-white/[0.06] overflow-hidden transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg dark:hover:border-blue-500/20">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_right,_theme(colors.blue.500/10),_transparent_65%)]" />
            <CardContent className="flex flex-col justify-center h-full px-4  gap-1">
              <span className="inline-flex items-center gap-1.5 w-fit rounded-full bg-blue-50 dark:bg-blue-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400">
                <span className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
                Shipped
              </span>
              <p className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-none mt-2">4+</p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500">projects delivered</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="flex-1 h-[30%]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Card className="group relative h-full rounded-2xl border border-zinc-200/80 bg-white dark:bg-zinc-900 dark:border-white/[0.06] overflow-hidden transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg dark:hover:border-emerald-500/20">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_right,_theme(colors.emerald.500/10),_transparent_65%)]" />
            <CardContent className="flex flex-col justify-center h-full px-4 gap-1">
              <span className="inline-flex items-center gap-1.5 w-fit rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Projects
              </span>
              <p className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-none mt-2">10+</p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500">projects completed</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Years */}
        <motion.div
          className="flex-1 h-[30%]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <Card className="group relative h-full rounded-2xl border border-zinc-200/80 bg-white dark:bg-zinc-900 dark:border-white/[0.06] overflow-hidden transition-all duration-300 hover:border-orange-500/40 hover:shadow-lg dark:hover:border-orange-500/20">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_right,_theme(colors.orange.500/10),_transparent_65%)]" />
            <CardContent className="flex flex-col justify-center h-full px-4  gap-1">
              <span className="inline-flex items-center gap-1.5 w-fit rounded-full bg-orange-50 dark:bg-orange-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-400">
                <span className="size-1.5 rounded-full bg-orange-500 animate-pulse" />
                Experience
              </span>
              <p className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-none mt-2">2+</p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500">years of experience</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

function InfoGrid() {
  return (
    <div className="flex flex-col gap-3 min-w-[337px] h-full">
        <MySkills />
        <HireMeForCard/>
    </div>
  );
}
export default InfoGrid;
