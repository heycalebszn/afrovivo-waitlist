import { ArrowLeft } from "lucide-react";

const Button = ({ styles }) => {
    return (
        <div className="flex items-center justify-center text-center mt-[10px] py-[5px] px-[10px] rounded-md shadow-xl bg-slate-900 cursor-pointer text-gray-400 hover:text-white transition duration-150 w-[100px]">
        <ArrowLeft className="w-[15px] font-md" />
        <button className={`text-[12px] font-md mx-auto ${styles}`}>Go back</button>
    </div>
    )
}

export default Button;