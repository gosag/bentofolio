import { Briefcase } from "lucide-react";
import {Card, CardContent, CardHeader} from "./components/ui/card"
import {motion} from "framer-motion"

function MySkills(){
    return(
      <div>
        <Card className="p-2 overflow-hidden rounded-3xl 
          backdrop-blur-xl
          shadow-[0_10px_40px_rgba(0,0,0,0.2)]
          hover:scale-[1.02] 
          hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]
          transition-all duration-300 ">
          <p className="bg-[#EEEEF1] w-fit px-2 rounded-md">my skills</p>  
          <motion.div className="flex flex-col gap-3" >
            <motion.div
            animate={{ x: [0, "-300%"] }}
            transition={{ repeat: Infinity, duration: 25 }}
            className="flex gap-3">
              <div className="flex items-center justify-center gap-1 min-w-28  text-lg rounded-xl"><img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>React</div>
              <div className="flex items-center min-w-32 text-lg rounded-xl"><img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>Tailwind</div>
              <div className="flex items-center min-w-fit text-lg rounded-xl border-r-0 pr-0 "><img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" title="JavaScript" className="w-10 h-10"/>JavaScript</div>
              <div className="flex items-center justify-center gap-1 min-w-32 text-lg rounded-xl"><img src="/skills/html-svgrepo-com.svg" alt="HTML logo" title="HTML" className="w-10 h-10"/>HTML</div>

              <div className="flex min-w-28 text-lg"><img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>React</div>
              <div className="flex min-w-32  text-lg rounded-xl"><img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>Tailwind</div>
              <div className="flex min-w-fit  text-lg rounded-xl border-r-0 pr-0 "><img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" title="JavaScript" className="w-10 h-10"/>JavaScript</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/html-svgrepo-com.svg" alt="HTML logo" title="HTML" className="w-10 h-10"/>HTML</div>

              <div className="flex min-w-28 text-lg rounded-xl"><img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>React</div>
              <div className="flex min-w-32  text-lg rounded-xl"><img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>Tailwind</div>
              <div className="flex min-w-fit text-lg rounded-xl border-r-0 pr-0 "><img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" title="JavaScript" className="w-10 h-10"/>JavaScript</div>
              <div className="flex min-w-32  text-lg rounded-xl"><img src="/skills/html-svgrepo-com.svg" alt="HTML logo" title="HTML" className="w-10 h-10"/>HTML</div>

              <div className="flex min-w-28 text-lg rounded-xl"><img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>React</div>
              <div className="flex min-w-32 bg-zinc-200 border border-zinc-300 text-lg rounded-xl"><img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>Tailwind</div>
              <div className="flex min-w-fit text-lg rounded-xl border-r-0 pr-0 "><img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" title="JavaScript" className="w-10 h-10"/>JavaScript</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/html-svgrepo-com.svg" alt="HTML logo" title="HTML" className="w-10 h-10"/>HTML</div>

              <div className="flex min-w-28 text-lg rounded-xl"><img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>React</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>Tailwind</div>
              <div className="flex min-w-fit text-lg rounded-xl border-r-0 pr-0 "><img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" title="JavaScript" className="w-10 h-10"/>JavaScript</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/html-svgrepo-com.svg" alt="HTML logo" title="HTML" className="w-10 h-10"/>HTML</div>

              <div className="flex min-w-28 text-lg rounded-xl"><img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>React</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>Tailwind</div>
              <div className="flex min-w-fit text-lg rounded-xl border-r-0 pr-0 "><img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" title="JavaScript" className="w-10 h-10"/>JavaScript</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/html-svgrepo-com.svg" alt="HTML logo" title="HTML" className="w-10 h-10"/>HTML</div>
            </motion.div>
            <motion.div 
            initial={{ x: "-250%" }}
            animate={{ x: 0 }}
            
            transition={{ repeat: Infinity, duration: 25 }}
            className="flex gap-3">
              <div className="flex min-w-fit pr-1 text-lg rounded-xl"><img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>TypeScript</div> 
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>Node.js</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/expressjs-icon (1).svg" alt="Expess" title="Express Logo" className="w-10 h-10"/>Express</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>Git</div>

              <div className="flex min-w-fit pr-1 text-lg rounded-xl"><img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>TypeScript</div> 
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>Node.js</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/expressjs-icon (1).svg" alt="Expess" title="Express Logo" className="w-10 h-10"/>Express</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>Git</div>

              <div className="flex min-w-fit pr-1 text-lg rounded-xl"><img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>TypeScript</div> 
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>Node.js</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/expressjs-icon (1).svg" alt="Expess" title="Express Logo" className="w-10 h-10"/>Express</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>Git</div>

              <div className="flex min-w-fit pr-1 text-lg rounded-xl"><img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>TypeScript</div> 
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>Node.js</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/expressjs-icon (1).svg" alt="Expess" title="Express Logo" className="w-10 h-10"/>Express</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>Git</div>

              <div className="flex min-w-fit pr-1 text-lg rounded-xl"><img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>TypeScript</div> 
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>Node.js</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/expressjs-icon (1).svg" alt="Expess" title="Express Logo" className="w-10 h-10"/>Express</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>Git</div>

              <div className="flex min-w-fit pr-1 text-lg rounded-xl"><img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>TypeScript</div> 
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>Node.js</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/expressjs-icon (1).svg" alt="Expess" title="Express Logo" className="w-10 h-10"/>Express</div>
              <div className="flex min-w-32 text-lg rounded-xl"><img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>Git</div>
            </motion.div>
          </motion.div>
        </Card>
        
        </div>
    )
}
const HireMeForCard = () => {
  return (
    <motion.div
      className="flex flex-row justify-between flex-wrap h-[450px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* Left Section: Hire Me For Tags */}
      <Card className="max-w-[60%] h-full py-3 px-6 bt-0  rounded-3xl shadow-xl bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 hover:shadow-2xl transition-shadow duration-300">
        <p className="text-md bg-slate-200 w-fit mx-auto text-blue-800 rounded-md px-2 flex items-center gap-1">
          <Briefcase size={16} /> Hire me For
        </p>
        <div className="flex flex-wrap pl-0.5 gap-2">
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
              className="p-1 text-sm  rounded-md transition min-w-[100%] sm:w-auto cursor-pointer flex items-center gap-1 text-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {"+"+ skill}
            </motion.span>
          ))}
        </div>
      </Card>
      <div className="max-w-[36%] h-full flex flex-col">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          
        >
          <Card className=" rounded-3xl shadow-xl bg-zinc-100 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <p className="bg-slate-200 text-sm w-[100%] rounded-xl px-1 "> 🚀Deployed Apps</p>
            </CardHeader>
            <CardContent>
              <h1 className="text-5xl font-bold">3+</h1>
            </CardContent>
          </Card>
          <Card className=" rounded-3xl shadow-xl bg-zinc-100 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <p className="bg-slate-200 text-sm w-[100%] rounded-xl px-1 "> 😊Cool Projects</p>
            </CardHeader>
            <CardContent>
              <h1 className="text-5xl font-bold">10+</h1>
            </CardContent>
          </Card>
          <Card className=" rounded-3xl shadow-xl bg-zinc-100 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <p className="bg-slate-200 text-sm w-[100%] rounded-xl px-1 "> 🕒Years Expertise</p>
            </CardHeader>
            <CardContent>
              <h1 className="text-7xl font-bold">2+</h1>
            </CardContent>
          </Card>
        </motion.div>
      </div>
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