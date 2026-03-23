import {Card} from "./components/ui/card"
import {motion} from "framer-motion"
function MySkills(){
    return(
        <Card className="p-2 h-[120px] overflow-hidden">
          <p className="bg-[#EEEEF1] w-fit px-2 rounded-md">my skills</p>  
           <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
            className="flex gap-1 ">
            <img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>
            <img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>
            <img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>
            <img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>
            <img src="/skills/expressjs-icon (1).svg" alt="Expess" title="Express Logo" className="w-10 h-10"/>
            <img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" title="JavaScript" className="w-10 h-10"/>
            <img src="/skills/html-svgrepo-com.svg" alt="HTML logo" title="HTML" className="w-10 h-10"/>
            <img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>
            
            <img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>
            <img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>
            <img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>
            <img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>
            <img src="/skills/expressjs-icon (1).svg" alt="Expess" title="Express Logo" className="w-10 h-10"/>
            <img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" title="JavaScript" className="w-10 h-10"/>
            <img src="/skills/html-svgrepo-com.svg" alt="HTML logo" title="HTML" className="w-10 h-10"/>
            <img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>

             <img src="/skills/typescript-svgrepo-com (1).svg" alt="Typescript Logo" title="Typescript" className="w-10 h-10"/>
            <img src="/skills/react-svgrepo-com.svg" alt="React logo" title="React" className="w-10 h-10"/>
            <img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo" title="Tailwind CSS" className="w-10 h-10"/>
            <img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" title="Node.js" className="w-10 h-10"/>
            <img src="/skills/expressjs-icon (1).svg" alt="Expess" title="Express Logo" className="w-10 h-10"/>
            <img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" title="JavaScript" className="w-10 h-10"/>
            <img src="/skills/html-svgrepo-com.svg" alt="HTML logo" title="HTML" className="w-10 h-10"/>
            <img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" title="Git" className="w-10 h-10"/>
         </motion.div>
        </Card>
    )
}
function InfoGrid() {
  return (
    <div className="grid grid-cols gap-3 max-w-[391px] min-h-screen my-2">
        <MySkills />
        
    </div>
  );
}
export default InfoGrid;