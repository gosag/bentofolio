import { Briefcase } from "lucide-react";
import {Card, CardContent, CardHeader} from "./components/ui/card"
import {motion} from "framer-motion"

function MySkills(){
    return(
      <div>
        <Card className="p-2 h-[120px] overflow-hidden">
          <p className="bg-[#EEEEF1] w-fit px-2 rounded-md">my skills</p>  
          <motion.div className="flex" >
            <div className="w-5/6 overflow-hidden flex ">
           <div className="flex min-w-28"><img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>TypeScript</div> 
            <div className="flex min-w-28"><img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>React</div>
            <div className="flex min-w-32"><img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>Tailwind CSS</div>
            <div className="flex min-w-32"><img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>Node.js</div>
            <div className="flex min-w-32"><img src="/skills/expressjs-icon (1).svg" alt="Expess" title="Express Logo" className="w-10 h-10"/>Express</div>
            <div className="flex min-w-32"><img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" title="JavaScript" className="w-10 h-10"/>JavaScript</div>
            <div className="flex min-w-32"><img src="/skills/html-svgrepo-com.svg" alt="HTML logo" title="HTML" className="w-10 h-10"/>HTML</div>
            <div className="flex min-w-32"><img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>Git</div>

            <div className="flex min-w-32"><img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>TypeScript</div>
            <div className="flex min-w-32"><img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>React</div>
            <div className="flex min-w-32"><img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>Tailwind CSS</div>
            <div className="flex min-w-32"><img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>Node.js</div>

             <div className="flex min-w-32"><img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>TypeScript</div>
            <div className="flex min-w-32"><img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>React</div>
            <div className="flex min-w-32"><img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>Tailwind CSS</div>
            <div className="flex min-w-32"><img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>Node.js</div>
            <div className="flex min-w-32"><img src="/skills/expressjs-icon (1).svg" alt="Expess" title="Express Logo" className="w-10 h-10"/>Express</div>
            <div className="flex min-w-32"><img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" title="JavaScript" className="w-10 h-10"/>JavaScript</div>
            <div className="flex min-w-32"><img src="/skills/html-svgrepo-com.svg" alt="HTML logo" title="HTML" className="w-10 h-10"/>HTML</div>
            <div className="flex min-w-32"><img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>Git</div>
            </div>
            <div className="border-l-2 border-l-gray-600 w-1/6 overflow-hidden flex">
                <img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>
                <img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>
                <img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>
                <img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>
                <img src="/skills/expressjs-icon (1).svg" alt="Expess" title="Express Logo" className="w-10 h-10"/>
                <img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" title="JavaScript" className="w-10 h-10"/>
                <img src="/skills/html-svgrepo-com.svg" alt="HTML logo" title="HTML" className="w-10 h-10"/>
                <img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>
            </div>
          </motion.div>
        </Card>
        
        </div>
    )
}
const HireMeForCard = () => {
  return (
    <motion.div
      className="flex flex-row justify-between flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* Left Section: Hire Me For Tags */}
      <Card className="max-w-[60%] p-6 rounded-3xl shadow-xl bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100">
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
              className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200 transition w-[180px]"
              whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
              whileTap={{ scale: 0.98 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </Card>
      <div className="max-w-[36%] flex flex-col justify-evenly gap-4">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="p-4 rounded-3xl shadow-xl bg-zinc-100">
            <CardHeader>
              <p className="bg-slate-200 text-sm w-[90%] rounded-xl px-2"> 🚀Deployed Apps</p>
            </CardHeader>
            <CardContent>
              <h1 className="text-5xl font-bold">3+</h1>
            </CardContent>
          </Card>
          <Card className="p-4 rounded-3xl shadow-xl bg-zinc-100">
            <CardHeader>
              <p className="bg-slate-200 text-sm rounded-xl px-2"> 😊Cool Projects</p>
            </CardHeader>
            <CardContent>
              <h1 className="text-5xl font-bold">10+</h1>
            </CardContent>
          </Card>
          <Card className="p-4 rounded-3xl shadow-xl bg-zinc-100">
            <CardHeader>
              <p className="bg-slate-200 text-sm rounded-xl px-2"> 🕒Years Expertise</p>
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
    <div className="flex flex-col gap-3 min-w-[337px] min-h-screen">
        <MySkills />
        <HireMeForCard/>
    </div>
  );
}
export default InfoGrid;