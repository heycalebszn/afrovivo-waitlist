import { Check, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
//import { memoji1 } from "../assets";

const SubmissionSuccess = () => {
    return (
        <div className="flex flex-col">
            {/*<img src={memoji1} alt="success image" />*/}
            <div className="text-gray-600 flex justify-between p-[10px] bg-slate-900 rounded-md w-[300px] transition-all duration-300 ">
            <Check className="bg-green-300 mr-[10px] w-[20px] h-[20px] text-green-900 rounded-full border-black p-[2px] font-bold" />
            <div className="text-[12px]">
                We've added you to our waitlist. We'll let <br/> you know when Afrovivo is ready.
            </div>
            <X className="ml-[10px] w-[18px] cursor-pointer"/>
        </div>

        <Link to={"/"}>
        <Button styles="mt-[10px]" />
        </Link>
        </div>
        
    )
}

export default SubmissionSuccess;