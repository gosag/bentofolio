import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Copy,
  Github,
  Linkedin,
  MessageCircle,
  MoveUpRight,
  Send,
  Star,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

const skills = [
  { name: "React", icon: "/skills/react-svgrepo-com.svg" },
  { name: "TypeScript", icon: "/skills/typescript-svgrepo-com (1).svg" },
  { name: "Tailwind", icon: "/skills/tailwind-css-svgrepo-com.svg" },
  { name: "Node.js", icon: "/skills/nodejs-icon-svgrepo-com.svg" },
  { name: "Express", icon: "/skills/expressjs-icon (1).svg" },
  { name: "JavaScript", icon: "/skills/javascript-logo-svgrepo-com.svg" },
  { name: "Git", icon: "/skills/git-icon-logo-svgrepo-com.svg" },
];

const experiences = [
  "Architected and deployed full-stack applications with React, Node.js, Express, and MongoDB.",
  "Designed and shipped type-safe APIs with TypeScript and schema validation.",
  "Built AI-assisted product features including summarization and adaptive quiz generation.",
  "Improved performance through cleaner state architecture and API/database optimization.",
  "Owned full lifecycle delivery from concept and UX to deployment and iteration.",
];

const hireMeFor = [
  "Full-Stack MERN + TypeScript",
  "Modern UI with Tailwind + Framer",
  "REST API Development",
  "Authentication & Security",
  "AI Features (LLM Integration)",
  "Performance Optimization",
  "Responsive Product Development",
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function BentoCard({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.45, delay }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="h-full"
    >
      <Card className={`rounded-3xl border border-white/50 bg-white/75 p-6 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.55)] backdrop-blur-xl transition-all hover:border-indigo-200 hover:shadow-[0_20px_45px_-26px_rgba(79,70,229,0.35)] ${className}`}>
        {children}
      </Card>
    </motion.div>
  );
}

function AboutCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BentoCard delay={0.1}>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">About me</p>
            <BadgeCheck className="text-indigo-600" size={18} />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Full-Stack Engineer focused on shipping polished, business-ready products.</h2>
          <p className="overflow-hidden text-sm leading-6 text-slate-600 [display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical]">
            I design and build scalable web experiences from architecture to deployment, with a strong focus on product outcomes, frontend excellence, and measurable performance improvements. My toolkit blends React, TypeScript, and Node.js with modern design systems and AI-powered user workflows.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700"
          >
            Read more <MoveUpRight size={14} />
          </button>
        </div>
      </BentoCard>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-slate-900/50 p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-slate-900">About Me</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Full-Stack Developer specializing in MERN + TypeScript, building scalable and AI-powered products. I focus on clean architecture, resilient APIs, modern UI systems, and measurable UX improvements. I have delivered production apps end-to-end: from discovery and UX framing to deployment, analytics, and iteration.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-5 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SkillsMarqueeCard() {
  const [x, setX] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemWidth = 144;
  const totalWidth = skills.length * itemWidth;

  useEffect(() => {
    const update = () => setWidth(containerRef.current?.offsetWidth ?? 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const centerIndex = useMemo(() => {
    if (!width) return 0;
    const normalized = ((-x % totalWidth) + totalWidth) % totalWidth;
    const index = Math.round((normalized + width / 2 - itemWidth / 2) / itemWidth) % skills.length;
    return index < 0 ? index + skills.length : index;
  }, [itemWidth, totalWidth, width, x]);

  return (
    <BentoCard delay={0.15}>
      <div className="space-y-4" ref={containerRef}>
        <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">My skills</p>
        <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white/90 py-3">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-px -translate-x-1/2 bg-indigo-300/80" />
          <motion.div
            className="flex"
            animate={{ x: [0, -totalWidth] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            onUpdate={(latest) => setX(Number(latest.x ?? 0))}
          >
            {[...skills, ...skills].map((skill, idx) => {
              const absoluteX = idx * itemWidth + x;
              const dist = Math.abs(absoluteX + itemWidth / 2 - width / 2);
              const reveal = Math.max(0, 1 - dist / 130);

              return (
                <div key={`${skill.name}-${idx}`} className="flex w-36 shrink-0 items-center justify-center gap-2 px-2">
                  <img src={skill.icon} alt={skill.name} className="h-8 w-8" />
                  <motion.span animate={{ opacity: reveal }} className="text-sm font-medium text-slate-700">
                    {skill.name}
                  </motion.span>
                </div>
              );
            })}
          </motion.div>
        </div>
        <p className="text-xs text-slate-500">Now in focus: <span className="font-semibold text-indigo-700">{skills[centerIndex].name}</span></p>
      </div>
    </BentoCard>
  );
}

function ReviewTickerCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % experiences.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <BentoCard delay={0.2}>
      <div className="space-y-4">
        <p className="flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
          <Star size={14} /> Reviews & Experience
        </p>
        <div className="relative min-h-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
            >
              {experiences[index]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </BentoCard>
  );
}

function HireMeCard() {
  return (
    <BentoCard delay={0.25}>
      <div className="space-y-4">
        <p className="flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
          <BriefcaseBusiness size={14} /> Hire me for
        </p>
        <div className="flex flex-wrap gap-2">
          {hireMeFor.map((item) => (
            <span
              key={item}
              className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function HeroCard() {
  return (
    <BentoCard delay={0}>
      <CardHeader className="p-0">
        <div className="flex items-start gap-4">
          <img src="/profile.jpg" alt="Profile" className="h-20 w-20 rounded-2xl object-cover" />
          <div className="space-y-2">
            <p className="w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">Welcome</p>
            <CardTitle className="text-2xl text-slate-900">Gosa Girma</CardTitle>
            <p className="text-sm text-slate-600">Full-Stack Developer · React · TypeScript · Node.js</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-0">
        <p className="text-sm leading-6 text-slate-600">
          I turn ideas into polished, production-ready software with strong UX, reliable architecture, and delivery speed hiring managers can trust.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
          <Copy size={15} /> gosagirma441@gmail.com
        </div>
      </CardContent>
    </BentoCard>
  );
}

function GithubCard() {
  return (
    <BentoCard delay={0.3} className="h-full">
      <div className="space-y-4">
        <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">GitHub activity</p>
        <p className="text-sm text-slate-600">600+ contributions in the last year</p>
        <img src="/github.png" alt="GitHub contribution graph" className="w-full rounded-2xl border border-slate-200" />
      </div>
    </BentoCard>
  );
}

function ProjectsCard() {
  const projects = [
    { name: "EchoStudy", description: "AI-powered learning platform", image: "/EchoStudy.png", url: "https://echostudy.gosagirma.me" },
    { name: "Movie App", description: "React movie app with live data", image: "/movieApp.png", url: "https://movie-app-theta-steel.vercel.app" },
  ];

  return (
    <BentoCard delay={0.35}>
      <div className="space-y-4">
        <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Selected projects</p>
        <div className="grid gap-3 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-3 transition hover:border-indigo-300"
            >
              <p className="font-semibold text-slate-900">{project.name}</p>
              <p className="mb-2 text-xs text-slate-600">{project.description}</p>
              <img src={project.image} alt={project.name} className="h-28 w-full rounded-xl object-cover" />
            </a>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function SocialCard() {
  const links = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Send, href: "#", label: "Telegram" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: X, href: "#", label: "X" },
  ];

  return (
    <BentoCard delay={0.4}>
      <div className="space-y-3">
        <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Connect</p>
        <div className="grid grid-cols-5 gap-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-indigo-300 hover:text-indigo-700"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-50 p-4 md:p-6">
      <motion.section
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        <div className="space-y-4 xl:col-span-2">
          <HeroCard />
          <ProjectsCard />
        </div>
        <div className="space-y-4">
          <AboutCard />
          <SkillsMarqueeCard />
          <HireMeCard />
        </div>
        <div className="space-y-4">
          <ReviewTickerCard />
          <SocialCard />
        </div>
        <div className="md:col-span-2 xl:col-span-4">
          <GithubCard />
        </div>
      </motion.section>
    </main>
  );
}
