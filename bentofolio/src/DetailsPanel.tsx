import { Card } from "./components/ui/card";
import { motion } from "framer-motion";

const today = new Date();
const ExperiencesArray = [
  "Architected and deployed full-stack web applications using React, Node.js, Express, and MongoDB",
  "Designed and implemented type-safe APIs using TypeScript and schema validation (Zod)",
  "Built AI-powered features including intelligent summarization, quiz generation",
  "Developed responsive, high-performance UIs using Tailwind CSS",
  "Implemented authentication & security protocols",
  "Managed full product lifecycle: idea → system design → development → deployment → iteration",
  "Optimized application performance through efficient state management, API design, and database queries",
  "Deployed and maintained applications on modern platforms (e.g., Vercel, Render)"
];

const duplicatedExperiences = [...ExperiencesArray, ...ExperiencesArray];

function Experiences() {
  return (
    <Card className="h-[432px] w-full p-6 flex flex-col relative overflow-hidden bg-white border border-zinc-200 shadow-sm rounded-3xl">
      <div className="z-10 mb-4 shrink-0">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold border border-zinc-200">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          Experience
        </div>
        <h1 className="text-zinc-900 text-lg font-bold leading-snug tracking-tight">
          Professional Milestones up to {`${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`}
        </h1>
      </div>

      {/* Scrolling Area with Gradient Fade Mask */}
      <div 
        className="relative flex-1 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <motion.div
          className="flex flex-col gap-3 pb-3"
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {duplicatedExperiences.map((exp, index) => (
            <div 
              key={index} 
              className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-sm font-medium text-zinc-700 leading-relaxed shadow-sm"
            >
              {exp}
            </div>
          ))}
        </motion.div>
      </div>
      
    </Card>
  );
}
 function CVBentoCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 h-[440px] overflow-y-auto"
    >
      <div className="flex justify-between items-center p-5 border-b border-slate-100 bg-white/80 backdrop-blur-sm z-10 sticky top-0">
        <div className="flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-sm font-medium tracking-wide">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Curriculum Vitae
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
          title="Download CV"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </motion.button>
      </div>

      <div className="p-6 overflow-y-auto flex-1 custom-scrollbar text-slate-600">
        
        <section className="mb-6">
          <h3 className="text-slate-900 font-semibold flex items-center gap-2 mb-2 text-lg">
            <span>🧑‍💻</span> Product-Minded Engineer
          </h3>
          <p className="text-sm leading-relaxed">
            Results-driven Developer focused on building scalable, AI-powered applications. I bridge the gap between clean backend architecture and intuitive, pixel-perfect frontend experiences.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-slate-900 font-semibold flex items-center gap-2 mb-3 text-lg">
            <span>⚡️</span> Core Competencies
          </h3>
          <ul className="grid grid-cols-1 gap-2 text-sm">
            {[
              "End-to-end full-stack development & deployment",
              "Architecting robust, type-safe APIs",
              "Crafting responsive UIs with React & Tailwind",
              "Integrating modern AI/LLM capabilities"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-slate-900 font-semibold flex items-center gap-2 mb-3 text-lg">
            <span>🚀</span> Recent Highlights
          </h3>
          <div className="relative border-l-2 border-slate-100 pl-4 ml-2 space-y-4">
            
            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 border-[3px] border-white shadow-sm"></span>
              <h4 className="text-slate-900 text-sm font-medium">Architected EchoStudy</h4>
              <p className="text-xs mt-1 leading-relaxed">
                Spearheaded the development of an AI-powered study hub. Engineered a seamless full-stack architecture utilizing MongoDB, Express, React, Node.js, and natively integrated Gemini AI to enhance learning workflows.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 border-[3px] border-white shadow-sm"></span>
              <h4 className="text-slate-900 text-sm font-medium">Scalable Systems</h4>
              <p className="text-xs mt-1 leading-relaxed">
                Implemented secure JWT authentication, optimized RESTful APIs, and designed efficient database schemas to ensure high performance and seamless user experience across multiple applications.
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
        <div className="min-w-[135px] h-max flex flex-col sm:flex-row lg:flex-col gap-4">
            <Experiences /> 
            <CVBentoCard/>  
        </div>
    )
}
export default DetailsPanel