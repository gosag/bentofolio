import {Card,CardContent,CardFooter} from "./components/ui/card";
import { Copy } from "lucide-react";
import InfoGrid from "./InfoGrid";
import {motion} from "framer-motion"
import { useState } from "react";
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
      className="max-full bg-zinc-100 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Card className="bg-white shadow-lg rounded-3xl p-6">
        <div className="flex flex-row items-center gap-4">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="rounded-full w-20 h-20 object-cover"
          />
          <div>
            <p className="text-md w-fit px-2 bg-zinc-300 text-[#71717A] rounded-lg">
              ✌️ Welcome
            </p>
            <h1 className="mt-4 text-2xl font-semibold">Gosa Girma</h1>
            <h4 className="text-lg">I'm a Full stack Web Developer</h4>
          </div>
        </div>

        <CardContent>
          <p className="text-[#71717A]">
            I turn ideas into production-ready web applications, managing the
            entire journey from concept to deployment and iteration.
          </p>
        </CardContent>

        <CardFooter className="border-t-0 flex items-center justify-center p-0">
          <div onClick={handleCopyEmail} className="text-center flex justify-center items-center bg-zinc-300 w-full py-2 rounded-md text-[#303038] cursor-pointer">
            <Copy size={20} />
            <p className="ml-2">{isCopied ? "Email Copied!" : email}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
function GithubDisplay(){

    return(
        <motion.div
          className="flex flex-col gap-3 shadow-xl p-6 bg-zinc-100 rounded-3xl hover:shadow-2xl transition-shadow duration-300 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
        <div className="w-full border-zinc-200 border rounded-lg px-4 flex flex-col justify-center items-center bg-white">
            <p className="text-center font-semibold text-zinc-900">600+ contributions in the last year</p>
           <img src="/github.png" alt="Github" className="w-[391px] mb-4"/>
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
    className="w-full h-[230px] rounded-3xl border border-zinc-200 bg-white backdrop-blur-md shadow-xl flex flex-col p-5 overflow-hidden transition-shadow hover:shadow-sm ">
      <div className="flex items-center gap-3 mb-4 shrink-0">
        <span className="bg-zinc-100 text-zinc-600  text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-zinc-200 dark:border-zinc-800">
          <svg width="10" height="10" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.28192 4.43904C1.37173 4.07496 0.916626 3.89292 0.916626 3.66671C0.916626 3.4405 1.37173 3.25846 2.28192 2.89438L3.56914 2.37949C4.47934 2.01541 4.93443 1.83337 5.49996 1.83337C6.06548 1.83337 6.52058 2.01541 7.43078 2.37949L8.718 2.89438C9.62819 3.25846 10.0833 3.4405 10.0833 3.66671C10.0833 3.89292 9.62819 4.07496 8.718 4.43904L7.43078 4.95392C6.52058 5.318 6.06548 5.50004 5.49996 5.50004C4.93443 5.50004 4.47934 5.318 3.56914 4.95392L2.28192 4.43904Z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.916626 3.66671C0.916626 3.89292 1.37173 4.07496 2.28192 4.43904L3.56914 4.95392C4.47934 5.318 4.93443 5.50004 5.49996 5.50004C6.06548 5.50004 6.52058 5.318 7.43078 4.95392L8.718 4.43904C9.62819 4.07496 10.0833 3.89292 10.0833 3.66671C10.0833 3.4405 9.62819 3.25846 8.718 2.89438L7.43078 2.37949C6.52058 2.01541 6.06548 1.83337 5.49996 1.83337C4.93443 1.83337 4.47934 2.01541 3.56914 2.37949L2.28192 2.89438C1.37173 3.25846 0.916626 3.4405 0.916626 3.66671Z" fill="currentColor" className="opacity-50"/>
          </svg>
          My Work
        </span>
        <h1 className="text-sm md:text-base font-bold tracking-tight text-zinc-900 ">
          Selected Projects
        </h1>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-full">
        <a 
          href="https://echostudy.gosagirma.me" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative min-w-[240px] md:min-w-[260px] flex-1 flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:bg-zinc-100 snap-start overflow-hidden"
        >
          <div className="z-10">
            <h2 className="text-sm font-bold text-zinc-900  mb-1 flex items-center gap-2">
              EchoStudy
            </h2>
            <p className="text-xs text-zinc-500  line-clamp-2 leading-relaxed">
              An AI-powered study hub designed to optimize learning and manage educational resources efficiently.
            </p>
          </div>
          
          <div className="flex items-end justify-between z-10 mt-2">
            <div className="w-16 h-10 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm relative">
              <img src="/EchoStudy.png" alt="EchoStudy Preview" className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110" />
            </div>
            
            <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-full p-2 shadow-sm transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 group-hover:-translate-y-1">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </div>
        </a>
        <a 
          href="https://movie-app-theta-steel.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative min-w-[240px] md:min-w-[260px] flex-1 flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:bg-zinc-100 snap-start overflow-hidden"
        >
          <div className="z-10">
            <h2 className="text-sm font-bold text-zinc-900 mb-1">
              Movie App
            </h2>
            <p className="text-xs text-zinc-500  line-clamp-2 leading-relaxed">
              A responsive cinematic explorer built with React, leveraging the IMDB API for real-time data fetching.
            </p>
          </div>
          
          <div className="flex items-end justify-between z-10 mt-2">
            <div className="w-16 h-10 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm relative">
              <img src="/movieApp.png" alt="Movie App Preview" className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110" />
            </div>
            
            <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-full p-2 shadow-sm transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 group-hover:-translate-y-1">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </div>
        </a>

      </div>
    </motion.div>
  );
}
export default function ProfileCard() {
    return(
        <div className="flex flex-col gap-3 ">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-3">
            <div className="flex flex-col gap-8 min-w-[337px]">
            <IdentityCard />
            <GithubDisplay />
            </div>
            <InfoGrid/>
        </div>
        <ProjectsCard/>
        </div>
    )
}