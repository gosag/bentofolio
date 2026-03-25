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
    <Card className="h-[430px] w-full p-6 flex flex-col relative overflow-hidden bg-white border border-zinc-200 shadow-sm rounded-3xl">
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
              duration: 25, // Adjust this value to make it scroll faster or slower
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
function CV(){
    return(
        <Card className="p-3 h-[430px] overflow-y-auto">
            <div className="flex justify-between px-4 items-center gap-2  ">
                <p className="flex items-center bg-[#EEEEF1] rounded-2xl px-3 gap-1 text-slate-600 text-lg w-fit"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.59187 1.02081C2.39356 1.07263 2.26583 1.14589 2.16654 1.24316C2.02657 1.3803 1.93531 1.57283 1.88542 1.93642C1.83406 2.31069 1.83325 2.80673 1.83325 3.51798V7.44524C2.01139 7.32326 2.21217 7.23045 2.42862 7.17363C2.48086 7.15992 2.53497 7.14917 2.59187 7.14074V1.02081Z" fill="#71717A"/>
                <path d="M3.35049 7.1103C3.35586 7.1103 3.36125 7.11031 3.36667 7.11031L9.16658 7.11032V3.51798C9.16658 2.80673 9.16578 2.31069 9.11442 1.93642C9.06452 1.57283 8.97326 1.3803 8.83329 1.24316C8.69332 1.10603 8.4968 1.01662 8.1257 0.967735C7.74368 0.917415 7.23737 0.916626 6.51141 0.916626H4.48842C4.0293 0.916626 3.65803 0.916942 3.35049 0.929903V7.1103Z" fill="#71717A"/>
                <path d="M3.98273 7.85356H3.42528C2.93053 7.85356 2.75756 7.85675 2.62502 7.89155C2.26122 7.98705 1.97121 8.25199 1.84683 8.59636C1.85452 8.77165 1.86657 8.92582 1.88547 9.0635C1.93536 9.42708 2.02662 9.61962 2.16659 9.75676C2.30657 9.89389 2.50309 9.9833 2.87419 10.0322C3.25621 10.0825 3.76252 10.0833 4.48847 10.0833H6.51146C7.23742 10.0833 7.74373 10.0825 8.12575 10.0322C8.49685 9.9833 8.69337 9.89389 8.83334 9.75676C8.97331 9.61962 9.06457 9.42708 9.11447 9.0635C9.15637 8.75815 9.16462 8.37175 9.16624 7.85356H6.00572V9.23159C6.00572 9.36814 6.00572 9.43641 5.95774 9.46401C5.90977 9.4916 5.84416 9.46107 5.71295 9.40001L5.08469 9.10763C5.0403 9.08697 5.0181 9.07664 4.99422 9.07664C4.97034 9.07664 4.94815 9.08697 4.90375 9.10763L4.2755 9.40001C4.14428 9.46107 4.07867 9.4916 4.0307 9.46401C3.98273 9.43641 3.98273 9.36814 3.98273 9.23159V7.85356Z" fill="#71717A"/>
                </svg>
                CV</p>
                <p>
                    <svg width="25" height="26" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C9.58579 0 9.25 0.335786 9.25 0.75V11.7226L7.56944 9.76191C7.29988 9.44741 6.8264 9.41099 6.51191 9.68056C6.19741 9.95012 6.16099 10.4236 6.43056 10.7381L9.43056 14.2381C9.57304 14.4043 9.78106 14.5 10 14.5C10.2189 14.5 10.427 14.4043 10.5694 14.2381L13.5694 10.7381C13.839 10.4236 13.8026 9.95012 13.4881 9.68056C13.1736 9.41099 12.7001 9.44741 12.4306 9.76191L10.75 11.7226L10.75 0.75C10.75 0.335786 10.4142 0 10 0Z" fill="#BEBECD"/>
                    <path d="M12.25 7.75V8.12828C12.9836 7.86973 13.8312 7.9991 14.4642 8.54167C15.4077 9.35037 15.517 10.7708 14.7083 11.7143L11.7083 15.2143C11.2808 15.713 10.6568 16 9.99996 16C9.34313 16 8.71909 15.713 8.29163 15.2143L5.29163 11.7143C4.48293 10.7708 4.5922 9.35037 5.53568 8.54167C6.16868 7.9991 7.01637 7.86973 7.74996 8.12828V7.75H6C3.17157 7.75 1.75736 7.75 0.878679 8.62868C0 9.50736 0 10.9216 0 13.75V14.75C0 17.5784 0 18.9926 0.878679 19.8713C1.75736 20.75 3.17157 20.75 5.99999 20.75H14C16.8284 20.75 18.2426 20.75 19.1213 19.8713C20 18.9926 20 17.5784 20 14.75V13.75C20 10.9216 20 9.50736 19.1213 8.62868C18.2426 7.75 16.8284 7.75 14 7.75H12.25Z" fill="#BEBECD"/>
                    </svg>
                </p>

            </div>
            <Card className="p-3 overflow-y-auto">
                <p>🧑‍💻 About Me</p>
                Full-Stack Developer specializing in MERN + TypeScript, building scalable and AI-powered web applications.
                I focus on clean architecture, performance, and creating products that solve real problems.

                <p>⚡ What I Do</p>
                Build full-stack apps from idea → deployment
                Design type-safe APIs and scalable backends
                Create modern, responsive UIs with React + Tailwind
                Integrate AI features (summaries, quizzes, tutors)
                <p>🚀 Experience Snapshot</p>
                Developed and deployed multiple full-stack applications
                Built an AI-powered learning platform (EchoStudy)
                Implemented authentication, APIs, and database systems
                Optimized performance and user experience
            </Card>
        </Card>
    )
}
function DetailsPanel() {
    return(
        <div className="min-w-[135px] min-h-screen flex flex-col sm:flex-row lg:flex-col gap-4">
            <Experiences /> 
            <CV />  
        </div>
    )
}
export default DetailsPanel