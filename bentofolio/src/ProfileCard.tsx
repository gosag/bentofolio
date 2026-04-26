import {Card,CardContent,CardFooter} from "./components/ui/card";
import { Copy, MailCheck, Sparkles } from "lucide-react";
import InfoGrid from "./InfoGrid";
import {motion} from "framer-motion"
import { useState } from "react";
import Tilt from 'react-parallax-tilt';

const IdentityCard = () => {
  const email="gosagirma441@gmail.com"
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }
 
  return (
    <motion.div
      className="min-h-[50%] flex justify-center" 
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <Tilt 
        tiltMaxAngleX={8} 
        tiltMaxAngleY={8} 
        perspective={1000} 
        scale={1.02} 
        transitionSpeed={1500}
        gyroscope={true}
        className="w-full h-full rounded-3xl"
      >
        <div className="h-full w-full relative rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
          <Card className="h-full bg-[radial-gradient(ellipse_at_top_right,_theme(colors.zinc.100),_theme(colors.zinc.200),_theme(colors.blue.50))] border border-zinc-200/80 rounded-3xl p-6 dark:bg-[radial-gradient(ellipse_at_top_right,_theme(colors.zinc.800),_theme(colors.zinc.900),_theme(colors.black))] dark:border-zinc-800/80 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm">
            
            {/* Background 3D Glow effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen pointer-events-none transition-all duration-700 group-hover:bg-blue-400/30"></div>

            <div className="flex flex-row items-center justify-between gap-4 group">
              <div className="relative z-50">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="relative rounded-full w-20 h-20 object-cover border-4 border-white/60 dark:border-zinc-800/60 shadow-lg group-hover:scale-[1.03] transition-transform duration-500 z-50 dark:z-40"
                />
                <div className="absolute -bottom-1 -right-1 bg-white dark:bg-zinc-800 rounded-full p-1.5 shadow-md border border-zinc-100 dark:border-zinc-700">
                  <Sparkles className="w-3 h-3 text-blue-500" />
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 text-[10px] font-bold rounded-full shadow-sm dark:from-orange-900/40 dark:to-amber-900/40 dark:text-orange-300 border border-orange-200/50 dark:border-orange-800/50 backdrop-blur-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                  </span>
                  Available for work
                </span>
              </div>
            </div>

            <div className="mt-2 mb-1.5">
              <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white bg-clip-text">
                Gosa Girma
              </h1>
              <h4 className="text-base font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                self-taught developer.
              </h4>
            </div>

            <CardContent className="p-0 mb-3">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                I turn complex ideas into scalable, production-ready web applications.
              </p>
            </CardContent>

            <CardFooter className="border-t-0 p-0 mt-auto ">
              <button 
                onClick={handleCopyEmail} 
                className="group relative w-full flex justify-center items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-2.5 px-4 rounded-xl font-bold text-sm cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-zinc-900/20 dark:shadow-white/10"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                {isCopied ? (
                  <>
                    <MailCheck size={18} className="text-emerald-400 dark:text-emerald-600" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span>{email}</span>
                  </>
                )}
              </button>
            </CardFooter>
          </Card>
        </div>
      </Tilt>
    </motion.div>
  );
};
function GithubDisplay(){
    return(
        <motion.div
          className="flex min-h-[40%] flex-col items-center justify-center gap-3  shadow-xl p-6 bg-[radial-gradient(ellipse_at_top_right,_theme(colors.zinc.50),_theme(colors.zinc.100),_theme(colors.blue.50))] rounded-3xl hover:shadow-2xl dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-800 to-zinc-950 dark:border-zinc-800 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{  duration: 0.5 }}
        >
        <div className="w-full z-50 border-zinc-200 border rounded-lg px-4 flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top_right,_theme(colors.zinc.100),_theme(colors.zinc.200),_theme(colors.blue.100))] dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-800 to-zinc-950 dark:border dark:border-zinc-800">
            <p className="text-center font-semibold text-zinc-900 dark:text-zinc-200">700+ contributions in the last year</p>
           <img src="/github.png" alt="Github" className="w-[391px] mb-4 z-50 rounded-md"/>
        </div>
        </motion.div>
    )
}
import { ArrowUpRight } from 'lucide-react'; 

function ProjectsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }} 
     className="w-full min-h-[25%] my-3 rounded-3xl border border-zinc-200 bg-[radial-gradient(ellipse_at_top_right,_theme(colors.zinc.100),_theme(colors.zinc.200),_theme(colors.blue.100))] backdrop-blur-md shadow-xl flex flex-col justify-center p-5 overflow-hidden transition-shadow hover:shadow-sm dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black dark:border dark:border-zinc-800 ">
      <div className="flex items-center gap-3 mb-4 shrink-0">
        <span className="bg-zinc-100  text-zinc-600 dark:bg-zinc-800 dark:text-zinc-100  text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-zinc-200 dark:border-zinc-800">
          <svg width="10" height="10" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.28192 4.43904C1.37173 4.07496 0.916626 3.89292 0.916626 3.66671C0.916626 3.4405 1.37173 3.25846 2.28192 2.89438L3.56914 2.37949C4.47934 2.01541 4.93443 1.83337 5.49996 1.83337C6.06548 1.83337 6.52058 2.01541 7.43078 2.37949L8.718 2.89438C9.62819 3.25846 10.0833 3.4405 10.0833 3.66671C10.0833 3.89292 9.62819 4.07496 8.718 4.43904L7.43078 4.95392C6.52058 5.318 6.06548 5.50004 5.49996 5.50004C4.93443 5.50004 4.47934 5.318 3.56914 4.95392L2.28192 4.43904Z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.916626 3.66671C0.916626 3.89292 1.37173 4.07496 2.28192 4.43904L3.56914 4.95392C4.47934 5.318 4.93443 5.50004 5.49996 5.50004C6.06548 5.50004 6.52058 5.318 7.43078 4.95392L8.718 4.43904C9.62819 4.07496 10.0833 3.89292 10.0833 3.66671C10.0833 3.4405 9.62819 3.25846 8.718 2.89438L7.43078 2.37949C6.52058 2.01541 6.06548 1.83337 5.49996 1.83337C4.93443 1.83337 4.47934 2.01541 3.56914 2.37949L2.28192 2.89438C1.37173 3.25846 0.916626 3.4405 0.916626 3.66671Z" fill="currentColor" className="opacity-50"/>
          </svg>
          My Work
        </span>
        <h1 className="text-sm md:text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-50 ">
          Selected Projects
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row  gap-4 overflow-x-auto pb-2 snap-x snap-mandatory  h-full">
        <a 
          href="https://echostudy.gosagirma.me" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group min-h-fit md:h-fit   relative min-w-[240px] md:min-w-[260px] flex-1 flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:bg-zinc-100 snap-start overflow-hidden 
          dark:bg-[radial-gradient(ellipse_at_bottom_left,_theme(colors.zinc.600),_theme(colors.zinc.900),_theme(colors.black))] dark:border dark:border-zinc-800"
        >
          <div className="z-10">
            <h2 className="text-sm font-bold text-zinc-900  mb-1 flex items-center gap-2 dark:text-zinc-50">
              EchoStudy
            </h2>
            <p className="text-sm text-zinc-500  line-clamp-2 leading-relaxed dark:text-zinc-200 ">
                AI-powered study system with summarization, quizzes, and spaced repetition . . .            
            </p>
          </div>
          
          <div className="flex items-end justify-between z-50 mt-2">
            <div className="w-16 h-10 sm:w-[160px] sm:h-[100px] md:w-16 md:h-10 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm relative">
              <img src="/EchoStudy.png" alt="EchoStudy Preview" className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110 z-50" />
            </div>
            
            <div className="bg-white z-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-full p-2 shadow-sm transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 group-hover:-translate-y-1 ">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </div>
        </a>
        <a 
          href="https://movies.gosagirma.me" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group min-h-fit relative min-w-[240px] md:min-w-[260px] flex-1 flex flex-col justify-between rounded-2xl border  border-zinc-200 bg-zinc-50 p-4 transition-colors hover:bg-zinc-100 snap-start overflow-hidden dark:bg-zinc-800 dark:border dark:border-zinc-800"
        >
          <div className="z-10">
            <h2 className="text-sm font-bold text-zinc-900 mb-1 dark:text-zinc-50">
              Movie App
            </h2>
            <p className="text-xs text-zinc-500  line-clamp-2 leading-relaxed dark:text-zinc-200">
              A responsive cinematic explorer built with React, leveraging the TMDB API for real-time data fetching.
            </p>
          </div>
          
          <div className="flex items-end justify-between z-10 mt-2">
            <div className="w-16 h-10 sm:w-[160px] sm:h-[100px] md:w-16 md:h-10 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm relative">
              <img src="/movieApp.png" alt="Movie App Preview" className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110 z-50" />
            </div>
            
            <div className="bg-white z-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 rounded-full p-2 shadow-sm transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 group-hover:-translate-y-1 ark:bg-zinc-700 dark:text-zinc-200 ">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </div>
        </a>

      </div>
    </motion.div>
  );
}
export default function ProfileCard() {
   const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
    return(
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className=" md:min-h-fit lg:min-h-screen"
        >
            <div className=" md:min-h-[71%] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-3">
                <div className="flex h-full flex-col gap-8 min-w-[337px]">
                  <IdentityCard />
                  <GithubDisplay />
                </div>
                <InfoGrid/>
            </div>
            <ProjectsCard/>
        </motion.div>
    )
}