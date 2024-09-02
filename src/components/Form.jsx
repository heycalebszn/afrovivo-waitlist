import { User, ArrowRight, Mail } from "lucide-react";
import SocialsSection from "../sections/SocialsSection";
import { useForm, ValidationError } from '@formspree/react';
import SubmissionSuccess from "./SubmissionSuccess"


const Form = () => {
    const [state, handleSubmit] = useForm("xzzpwpwv");

    return (
    <div className="flex flex-col">
    <form class="max-w-sm mx-auto mt-[50px] w-[300px]" onSubmit={handleSubmit} action="https://formspree.io/f/xzzpwpwv" method="POST">
    <div className="bg-black p-[20px] relative flex rounded-md h-[20px] items-center text-left border border-gray-800">
    <User className="absolute text-white left-[10px] top-[20%] w-[20px]" />
    <div className="flex">
        <input type="text" placeholder="Full name.." name="text" className="ml-[20px] outline-none text-[12px] w-full bg-transparent text-white" />
        <ValidationError 
        prefix="Text" 
        field="text"
        errors={state.errors}
      />
        </div>
    </div>

    <div className="bg-black p-[20px] relative flex rounded-md h-[30px] items-center text-left border border-gray-800 mt-[10px]">
    <Mail className="absolute text-white left-[10px] top-[20%] w-[20px] h-[20px]" />
    <div className="flex">
        <input type="text" placeholder="Address mail.." name="email" className="ml-[20px] outline-none text-[12px] w-full bg-transparent text-white" />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>
    </div>

    <div className="flex items-center justify-end text-center mt-[10px] py-[5px] px-[10px] rounded-md shadow-xl bg-slate-900 cursor-pointer text-gray-400 hover:text-white transition duration-150" disabled={state.submitting}>
        <button type="submit" className={`text-[12px] font-md mx-auto ${state.submitting ? (
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        ) : ""}`}>Join the waitlist</button>
    <ArrowRight className="w-[15px] font-md" />
    </div>

    ${state.succeeded ? (
        <SubmissionSuccess />
    ) : "hidden"}
</form>

<SocialsSection />
</div>
  )
}

export default Form;