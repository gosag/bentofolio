import {Card} from "./components/ui/card"
function MySkills(){
    return(
        <Card className="p-2 h-[120px]">
          <p>my skills</p>  
           <div className="flex gap-1">
            <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="14" fill="#3178C6"/>
            <text x="50%" y="50%" fill="white" font-size="26" font-family="Arial" font-weight="bold" text-anchor="middle" dominant-baseline="central">TS</text>
            </svg>
            <img src="/skills/react-svgrepo-com.svg" alt="React logo" className="w-10 h-10"/>
            <img src="/skills/tailwind-css-svgrepo-com.svg"  alt="Tailwind logo"  className="w-10 h-10 text-blue-500"/>
            <img src="/skills/nodejs-icon-svgrepo-com.svg" alt="Node.js logo" className="w-10 h-10"/>
            <img src="/skills/javascript-logo-svgrepo-com.svg" alt="JavaScript logo" className="w-10 h-10"/>
            <img src="/skills/html-svgrepo-com.svg" alt="HTML logo" className="w-10 h-10"/>
            <img src="/skills/git-icon-logo-svgrepo-com.svg" alt="Git Logo" className="w-10 h-10"/>
         </div>
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