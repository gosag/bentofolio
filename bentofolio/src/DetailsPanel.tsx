import { Card } from "./components/ui/card";
import { motion } from "framer-motion";

const today = new Date();
const experienceData = [
  {
    id: 1,
    role: "Full-Stack Native Apps",
    type: "Full-Stack Development",
    period: "1 Year Experience",
    description: "Architected and deployed highly scalable, type-safe robust applications. Managed full product lifecycle from system design to deployment.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AI Integration", "Express"]
  },
  {
    id: 2,
    role: "Frontend UIs & Architectures",
    type: "Frontend Development",
    period: "2 Years Experience",
    description: "Designed responsive, high-performance user interfaces and integrated complex logic like AI-powered features with seamless state management.",
    skills: ["Tailwind CSS", "Framer Motion", "Zod", "React", "State Management"]
  }
];

function Experiences() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="min-h-[45%] border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm rounded-3xl"
    >
      <Card className="h-[440px] w-full p-6 flex flex-col relative border border-transparent bg-transparent overflow-hidden">
        <div className="z-10 mb-4 shrink-0 flex items-center justify-between">
          <div>
            <div className="inline-flex z-50 items-center gap-1.5 px-2.5 py-1 mb-2 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              Experience
            </div>
            <h1 className="text-zinc-900 text-lg font-bold leading-snug tracking-tight dark:text-zinc-50">
              Career Milestones
            </h1>
          </div>
          <a href="/Gosa_Girma_Resume.pdf" download className="relative z-50">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20 rounded-full text-xs font-bold transition-colors border border-blue-100 dark:border-blue-500/20"
              title="Download CV"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Resume
            </motion.button>
          </a>
        </div>

        <div className="relative flex-1 overflow-y-auto custom-scrollbar pr-2 mb-2">
          {/* Timeline Line */}
          <div className="absolute left-[15px] top-3 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800/70"></div>
          
          <div className="flex flex-col gap-5 pt-1">
            {experienceData.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
                className="relative pl-10 group"
              >
                {/* Timeline node */}
                <div className="absolute left-[11px] top-1.5 w-[10px] h-[10px] rounded-full bg-blue-500 border-2 border-white dark:border-zinc-900 shadow-sm group-hover:scale-150 transition-transform duration-300 ease-out"></div>
                
                <div className="flex flex-col gap-1 hover:bg-zinc-100 dark:hover:bg-zinc-800/40 p-3 -mt-3 cursor-default rounded-xl transition-all duration-300 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/50">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-zinc-900 dark:text-zinc-100 font-bold text-sm tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-900/50 px-2 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-800 whitespace-nowrap shadow-sm">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {exp.type}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mt-1">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-zinc-200/50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
 function EducationAndAchievementsCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", staggerChildren: 0.1 , when:"beforeChildren" }}
      className="group min-h-[48%] pb-3 dark:bg-zinc-900 relative flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 h-[440px] overflow-y-auto dark:border-zinc-800"
    >
      <div className="flex justify-between items-center p-5 border-b border-transparent bg-white/80 sticky top-0 dark:bg-zinc-900 z-10">
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-semibold tracking-wide dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          Education & Achievements
        </div>
      </div>

      <div className="p-6 overflow-y-auto flex-1 custom-scrollbar text-slate-600 dark:bg-zinc-900 dark:text-zinc-200">
        
        {/* Education Item */}
        <section className="mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 flex items-center justify-center shrink-0 border border-slate-100 dark:border-zinc-700/50 shadow-sm mt-1">
              <span className="text-lg">📚</span>
            </div>
            <div>
              <h3 className="text-zinc-900 dark:text-zinc-100 font-bold text-base hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-default">Self-Taught Developer</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Lifelong Learner</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
                Built my foundation through hands-on projects, deep diving into documentation, and consistent independent study. Always exploring new tools, reading code, and expanding my skill set.
              </p>
            </div>
          </div>
        </section>

        {/* Certification / Achievement Item */}
        <section className="mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 flex items-center justify-center shrink-0 border border-slate-100 dark:border-zinc-700/50 shadow-sm mt-1">
              <span className="text-lg">🏆</span>
            </div>
            <div>
              <h3 className="text-zinc-900 dark:text-zinc-100 font-bold text-base hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-default">Top Contributor</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Open Source Initiatives</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
                Actively contributed to multiple high-profile open-source repositories fixing bugs, improving documentation, and adding new features.
              </p>
            </div>
          </div>
        </section>

        {/* Core Metric / Success Item */}
        <section>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 flex items-center justify-center shrink-0 border border-slate-100 dark:border-zinc-700/50 shadow-sm mt-1">
              <span className="text-lg">⚡</span>
            </div>
            <div>
              <h3 className="text-zinc-900 dark:text-zinc-100 font-bold text-base hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-default">Performance Optimization</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">System Architecture</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
                Successfully reduced load times by 40% in previous projects through strategic code splitting, caching strategies, and robust API design.
              </p>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}

function DetailsPanel() {
    return(
        <div className="min-w-[135px] min-h-screen sm:min-h-fit flex flex-col sm:flex-row lg:flex-col gap-4 mt-0 sm:mt-16 md:mt-0">
            <Experiences /> 
            <EducationAndAchievementsCard/>  
        </div>
    )
}
export default DetailsPanel