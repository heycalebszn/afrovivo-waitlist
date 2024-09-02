import { ArrowLeft } from "lucide-react";

const Button = ({ styles }) => {
    return (
        <div className={`flex items-center justify-end text-center mt-[10px] py-[5px] px-[10px] rounded-md shadow-xl bg-slate-900 cursor-pointer text-gray-400 hover:text-white transition duration-150 ${styles}`}>
        <button type="submit" className={`text-[12px] font-md mx-auto`}>Go back</button>
    <ArrowLeft className="w-[15px] font-md" />
    </div>
    )
}

export default Button;