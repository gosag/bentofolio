import { Card } from "./components/ui/card";
import {
  Linkedin,
  Github,
  Send,        // Telegram
  Briefcase,   // Upwork (no official icon)
  MessageCircle, // WhatsApp
  X            // Twitter (X)
} from "lucide-react";
function SocialBar(){
    return(
        <div className="flex lg:flex-col lg:w-20 gap-2">
        <Card className="w-20 h-20 rounded-xl flex justify-center items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" fill="#EEEEF1"/>
            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#E1E1E6"/>
            <path d="M27.9001 10.3072C27.7392 9.8976 27.1616 9.8976 27.0007 10.3072L26.5703 11.4025C26.5212 11.5275 26.4226 11.6265 26.298 11.6758L25.2067 12.1078C24.7986 12.2693 24.7986 12.849 25.2067 13.0105L26.298 13.4425C26.4226 13.4918 26.5212 13.5908 26.5703 13.7159L27.0007 14.8112C27.1616 15.2207 27.7392 15.2207 27.9001 14.8112L28.3305 13.7159C28.3796 13.5908 28.4782 13.4918 28.6028 13.4425L29.6941 13.0105C30.1022 12.849 30.1022 12.2693 29.6941 12.1078L28.6028 11.6758C28.4782 11.6265 28.3796 11.5275 28.3305 11.4025L27.9001 10.3072Z" fill="#71717A"/>
            <path d="M24.0328 16.1297C23.8718 15.7201 23.2943 15.7201 23.1333 16.1297L22.9764 16.529C22.9273 16.6541 22.8287 16.7531 22.7041 16.8024L22.3062 16.9599C21.8981 17.1214 21.8981 17.7011 22.3062 17.8626L22.7041 18.0201C22.8287 18.0694 22.9273 18.1684 22.9764 18.2935L23.1333 18.6928C23.2943 19.1024 23.8718 19.1024 24.0328 18.6928L24.1897 18.2935C24.2388 18.1684 24.3374 18.0694 24.462 18.0201L24.8599 17.8626C25.268 17.7011 25.268 17.1214 24.8599 16.9599L24.462 16.8024C24.3374 16.7531 24.2388 16.6541 24.1897 16.529L24.0328 16.1297Z" fill="#71717A"/>
            <path d="M20 30C25.5228 30 30 25.5228 30 20C30 19.5373 29.3065 19.4608 29.0672 19.8568C27.9289 21.7406 25.8615 23 23.5 23C19.9101 23 17 20.0899 17 16.5C17 14.1385 18.2594 12.0711 20.1432 10.9328C20.5392 10.6935 20.4627 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z" fill="#71717A"/>
            </svg>

        </Card>
        <div className="flex flex-row w-full h-20 border border-gray-300 rounded-xl justify-around items-center lg:flex-col lg:h-full">
            <Linkedin size={40} className="bg-[#EEEEF1] p-3 border border-gray-300 rounded-xl"/>
            <Github size={40} className="bg-[#EEEEF1] p-3 border border-gray-300 rounded-xl"/>
            <Send size={40} className="bg-[#EEEEF1] p-3 border border-gray-300 rounded-xl"/>
            <MessageCircle size={40} className="bg-[#EEEEF1] p-3 border border-gray-300 rounded-xl"/>
            <Briefcase size={40} className="bg-[#EEEEF1] p-3 border border-gray-300 rounded-xl"/>
            <X size={40} className="bg-[#EEEEF1] p-3 border border-gray-300 rounded-xl"/>
        </div>
        </div>
    )
}
export default SocialBar;