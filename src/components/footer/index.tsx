import { P12 } from "../typography";
import { Button } from "../ui/button";
import { PiDiscordLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LiaTelegramPlane } from "react-icons/lia";

export default function Footer() {
    return (
        <div className="hidden md:block bg-background md:fixed bottom-0 w-full">
            <footer className="border-t border-primary bg-primary-5 pb-16 sm:pb-0 ">
                <div className="w-full mx-auto py-2 px-4 md:px-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#089215] h-4 w-4 rounded-full"></div>
                        <P12>Stable Connection</P12>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-3.5 justify-end">
                        <Button variant="outline" size="icon"><LiaTelegramPlane /></Button>
                        <Button variant="outline" size="icon"><PiDiscordLogo /></Button>
                        <Button variant="outline" size="icon"><RiTwitterXLine /></Button>
                        <Button variant="outline" size="icon"><IoDocumentTextOutline /> Docs</Button>
                    </div>
                </div>
            </footer>
        </div>
    )
}