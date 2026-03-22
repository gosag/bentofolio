import {Card,CardHeader,CardContent,CardFooter} from "./components/ui/card";
export default function ProfileCard() {
    return(
        <Card className="max-w-[391px]">
                <div className="flex flex-row items-center  gap-4 pl-4 ">
                <img src="/profile.jpg" alt="Profile" className="rounded-sm w-16 h-16  object-cover" />
                <div>
                    <p className="text-md w-fit px-2  bg-[#EEEEF1] text-[#71717A] rounded-lg">✌️ Welcome</p>
                    <h2>Gosa Girma</h2>
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
                <p className="text-center">gosagirma441@gmail.com</p>
            </CardFooter>
        </Card>
    )
}