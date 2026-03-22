import {Card,CardContent,CardFooter, CardHeader} from "./components/ui/card";
import { Copy } from "lucide-react";

function IdentityCard(){
    return(
        <div>
        <Card className="max-w-[391px]">
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
                    I offer end to end product web services that encompass
                    everything from initial research and identification to building, testing, deployment,
                    and final product delivery.
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
        <div className="w-[391px] border-blue-400 border rounded-lg px-4">
            <p className="text-center">550+ contributions in the last year</p>
           <img src="/github.png" alt="Github" className="w-[391px] mb-4"/>
        </div>
    )
}

function ProjectsCard(){
    return(
        <div>
          <Card className="max-w-[391px]">
            <CardHeader>
                <p className="bg-[#EEEEF1] text-[#71717A] rounded-lg w-fit px-3">My Work</p>
                <h1 className="text-lg font-semibold">Selected Projects</h1>
            </CardHeader>
          </Card>
        </div>
    )
}
export default function ProfileCard() {
    return(
        <div className="flex flex-col p-2 gap-3">
            <IdentityCard />
            <GithubDisplay />
            <ProjectsCard/>
        </div>
    )
}