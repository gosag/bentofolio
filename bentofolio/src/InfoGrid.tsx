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
            <div className="border-l-2 border-l-gray-600 w-1/6">
                <img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>
            </div>
          </motion.div>
        </Card>
        
        </div>
    )
}
function HireMeForCard(){
  return(
    <div className="flex justify-between">
      <Card className="max-w-[60%]">
        <p className="text-md bg-slate-200 w-fit mx-auto text-blue-800 rounded-md px-2 flex items-center gap-1"> <Briefcase size={16} /> Hire me For</p>
        <div className="flex flex-wrap pl-0.5 gap-2">
          <span className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200 transition w-[180px]">Full-Stack MERN + TypeScript</span>
          <span className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200 transition w-[180px]">Modern UI with Tailwind</span>
          <span className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200 transition w-[180px]">REST API Development </span>
          <span className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200 transition w-[180px]">Auth</span>
          <span className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200 transition w-[180px]">AI Features (LLMs)</span>
          <span className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200 transition w-[180px]">MongoDB Database Design</span>
          <span className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200 transition w-[180px]">Responsive Web Apps</span>
          <span className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200 transition w-[180px]">Performance Optimization</span>
       </div>
      </Card>
      <div className="max-w-[36%] flex flex-col justify-evenly gap-4 ">

      <Card>
        < CardHeader>
        <p className="bg-slate-200 text-sm"> 🚀Deployed Apps</p>
        </CardHeader>
        <CardContent>
            <h1 className="text-5xl">3+</h1>
        </CardContent>
      </Card>
      
      <Card>
        < CardHeader>
        <p className="bg-slate-200"> 😊cool Projects</p>
        </CardHeader> 
            <h1 className="text-5xl">10+</h1>
      </Card>
       <Card>
        < CardHeader>
        <p className="bg-slate-200"> 🕒Years Expertise</p>
        </CardHeader>
        <CardContent>
            <h1 className="text-7xl">2+</h1>
        </CardContent>
      </Card>
      
    </div>
    </div>
  )
}
function InfoGrid() {
  return (
    <div className="flex flex-col gap-3 min-w-[337px] min-h-screen">
        <MySkills />
        <HireMeForCard/>
    </div>
  );
}
export default InfoGrid;