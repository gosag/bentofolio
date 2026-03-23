import {Card,CardContent,CardFooter, CardHeader} from "./components/ui/card";
import { Copy } from "lucide-react";
import InfoGrid from "./InfoGrid";
function IdentityCard(){
    return(
        <div>
        <Card className="max-full">
                <div className="flex flex-row items-center  gap-4 pl-4 ">
                <img src="/profile.jpg" alt="Profile" className="rounded-sm w-20 h-20  object-cover" />
                <div>
                    <p className="text-md w-fit px-2  bg-[#EEEEF1] text-[#71717A] rounded-lg">✌️ Welcome</p>
                    <h1 className="mt-4 text-lg font-semibold">Gosa Girma</h1>
                    <h4>I'm a Full stack Web Developer</h4>
                    
                </div>
            </div>
            <CardContent>
                <p className=" text-[#71717A]">
                    I turn ideas into production-ready web applications, managing the entire journey from concept to deployment and iteration.
                </p>
            </CardContent>
            <CardFooter className="border-t-0 flex items-center justify-center p-0 " >
                
                <div className="text-center flex justify-center items-center bg-[#EEEEF1] w-[343px] py-2 rounded-md text-[#303038]"><Copy size={20}/> <p className="ml-2"> gosagirma441@gmail.com</p></div>
            </CardFooter>
        </Card>
        </div>
    )
}
function GithubDisplay(){

    return(
        <div className="flex flex-col gap-3">
        <div className="w-full border-blue-400 border rounded-lg px-4 flex flex-col justify-center items-center">
            <p className="text-center">600+ contributions in the last year</p>
           <img src="/github.png" alt="Github" className="w-[391px] mb-4"/>
        </div>
        <Card className="w-full border-none border-transparent h-[131px] flex justify-center items-center">
            Available now
        </Card>
        </div>
    )
}

function ProjectsCard(){
    return(
          <Card className="w-full border-none border-transparent h-[272px] pb-2">
            <CardHeader>
                   <p className="bg-[#EEEEF1] text-[#71717A] rounded-lg w-fit px-3 flex justify-center items-center"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.28192 4.43904C1.37173 4.07496 0.916626 3.89292 0.916626 3.66671C0.916626 3.4405 1.37173 3.25846 2.28192 2.89438L3.56914 2.37949C4.47934 2.01541 4.93443 1.83337 5.49996 1.83337C6.06548 1.83337 6.52058 2.01541 7.43078 2.37949L8.718 2.89438C9.62819 3.25846 10.0833 3.4405 10.0833 3.66671C10.0833 3.89292 9.62819 4.07496 8.718 4.43904L7.43078 4.95392C6.52058 5.318 6.06548 5.50004 5.49996 5.50004C4.93443 5.50004 4.47934 5.318 3.56914 4.95392L2.28192 4.43904Z" fill="#09090B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.916626 3.66671C0.916626 3.89292 1.37173 4.07496 2.28192 4.43904L3.56914 4.95392C4.47934 5.318 4.93443 5.50004 5.49996 5.50004C6.06548 5.50004 6.52058 5.318 7.43078 4.95392L8.718 4.43904C9.62819 4.07496 10.0833 3.89292 10.0833 3.66671C10.0833 3.4405 9.62819 3.25846 8.718 2.89438L7.43078 2.37949C6.52058 2.01541 6.06548 1.83337 5.49996 1.83337C4.93443 1.83337 4.47934 2.01541 3.56914 2.37949L2.28192 2.89438C1.37173 3.25846 0.916626 3.4405 0.916626 3.66671Z" fill="#71717A"/>
                    <path d="M8.718 6.27237L7.43078 6.78725C6.52058 7.15133 6.06548 7.33337 5.49996 7.33337C4.93443 7.33337 4.47934 7.15133 3.56914 6.78725L2.28192 6.27237C1.37173 5.90829 0.916626 5.72625 0.916626 5.50004C0.916626 5.29613 1.28641 5.12811 2.02599 4.8303L3.46561 5.40616C4.31291 5.74525 4.84544 5.95837 5.49996 5.95837C6.15448 5.95837 6.68701 5.74525 7.53431 5.40616L8.97393 4.8303C9.7135 5.12811 10.0833 5.29613 10.0833 5.50004C10.0833 5.72625 9.62819 5.90829 8.718 6.27237Z" fill="#71717A"/>
                    <path d="M8.718 8.10562L7.43078 8.62051C6.52058 8.98459 6.06548 9.16663 5.49996 9.16663C4.93443 9.16663 4.47934 8.98459 3.56914 8.62051L2.28192 8.10562C1.37173 7.74154 0.916626 7.5595 0.916626 7.33329C0.916626 7.12938 1.28641 6.96137 2.02599 6.66355L3.46561 7.23941C4.31291 7.5785 4.84544 7.79163 5.49996 7.79163C6.15448 7.79163 6.68701 7.5785 7.53431 7.23941L8.97393 6.66355C9.7135 6.96137 10.0833 7.12938 10.0833 7.33329C10.0833 7.5595 9.62819 7.74154 8.718 8.10562Z" fill="#71717A"/>
                    </svg>
                    My Work</p>
                <h1 className="text-lg font-semibold">Selected Projects</h1>
            </CardHeader>
            <CardContent className="flex gap-2">
                <div className=" border border-gray-400 rounded-2xl p-1 max-w-[200px]">
                 <p><span className="text-blue-500 font-bold">EchoStudy:-</span> an AI-powered learning platform</p>
                 <img src="/EchoStudy.png" alt="EchoStudy" className="max-w-[90%]"/>  
                 <a href="https://echostudy.gosagirma.me" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit EchoStudy</a>
                </div>
                <div>   
                <div className=" border border-gray-400 rounded-2xl p-1 max-w-[200px]">
                  <p><span className="text-blue-500 font-bold">Movie App:-</span> a movie app built with React & IMDB </p>
                  <img src="/movieApp.png" alt="Movie App" className="max-w-[100%]"/>
                  <a href="https://movie-app-theta-steel.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit Movie App</a>  
                </div>
                </div> 

            </CardContent>
          </Card>
    
    )
}
export default function ProfileCard() {
    return(
        <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-3">
            <div className="flex flex-col gap-3 min-w-[337px]">
            <IdentityCard />
            <GithubDisplay />
            </div>
            <InfoGrid/>
        </div>
        <ProjectsCard/>
        </div>
    )
}