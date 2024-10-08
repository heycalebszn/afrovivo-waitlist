import SocialCard from "../components/SocialCard";
import { Twitter, Linkedin, Check, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button"
import SubmissionSuccess from "../components/SubmissionSuccess";

const SocialsSection = () => {
    return (
        <div className="flex flex-col">
            <SubmissionSuccess />
        <div className="flex gap-10 mt-[150px] justify-center items-center">
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
    </div>
    )
}

export default SocialsSection;