import { Check, X } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";

const SubmissionSuccess = () => {
    return (
        <div className="flex flex-col">
            <div className="text-gray-600 flex justify-between p-[10px] bg-slate-900 rounded-md w-[300px] transition-all duration-300 mt-[50px] items-center">
            <Check className="bg-green-300 mr-[5px] w-[15px] h-[15px] text-green-900 rounded-full border-black p-[2px] font-bold" />
            <div className="text-[12px]">
                We've added you to our waitlist. We'll let <br/> you know when Afrovivo is ready.
            </div>

            <Link to={"/waitlist"}>
            <X className="ml-[10px] w-[18px] cursor-pointer hover:text-white"/>
            </Link>
        </div>

        <Link to={"/waitlist"}>
        <Button styles="mt-[10px]" />
        </Link>
        </div>
        
    )
}

export default SubmissionSuccess;