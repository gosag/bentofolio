import {Card,CardHeader,CardContent,CardFooter} from "./components/ui/card";
import { Copy } from "lucide-react";

export default function ProfileCard() {
    return(
        <div className="flex flex-col">
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
                <p className="text-muted-foreground text-[#71717A]">
                    I offer end to end product web services that encompass
                    everything from initial research and identification to prototyping
                    and final product delivery.
                </p>
            </CardContent>
            <CardFooter className="border-t-0 flex items-center justify-center" >
                
                <div className="text-center flex justify-center items-center bg-[#EEEEF1] w-[343px] py-2 rounded-md text-[#303038]"><Copy size={20}/> <p className="ml-2"> gosagirma441@gmail.com</p></div>
            </CardFooter>
        </Card>
        <Card className="max-w-[391px] mt-2">

        </Card>
        </div>
    )
}