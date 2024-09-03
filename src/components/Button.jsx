import { ArrowLeft } from "lucide-react";

const Button = ({ styles }) => {
    return (
        <div className={`flex items-center justify-center mt-[10px] py-[5px] px-[10px] rounded-md shadow-xl bg-slate-900 cursor-pointer text-gray-400 hover:text-white transition duration-300 ${styles}`}>
        <ArrowLeft className="w-[20px] font-md pr-[5px]" />
        <button type="submit" className={`text-[12px] font-md`}>Go back</button>
    </div>
    )
}

export default Button;