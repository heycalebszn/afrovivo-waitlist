import SocialCard from "../components/SocialCard";
import { Twitter, Linkedin } from "lucide-react";

const SocialsSection = () => {
    return (
        <div className="flex gap-10 mt-[100px] justify-center items-center">
            <SocialCard 
            icon={<Twitter />}
            title={"Twitter"}
            username={"@afrovivo"}
            styles="border-t border-gray-900 border-r"
            />
            <SocialCard 
            icon={<Linkedin />}
            title={"LinkedIn"}
            username={"@afrovivo"}
            styles="border-t border-gray-900 border-r"
            />
        </div>
    )
}

export default SocialsSection;