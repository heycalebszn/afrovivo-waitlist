import { User, ArrowRight, Mail, LoaderCircle } from "lucide-react";
import SocialsSection from "../sections/SocialsSection";
import SocialSection from "../sections/SocialSection";
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
    const [state, handleSubmit] = useForm("xzzpwpwv");
    if(state.succeeded){
        return(
            <SocialsSection />
        )
    }

    if(state.submitting){
      console.log("Submitting")
    }

    return (
    <div className="flex flex-col">
    <form className="max-w-sm mx-auto mt-[50px] w-[300px]" onSubmit={handleSubmit} action="https://formspree.io/f/xzzpwpwv" method="POST">
    <div className="bg-black p-[20px] relative flex rounded-md h-[20px] items-center text-left border border-gray-800 focus:border focus:border-red-500 focus:outline-red-500 cursor-text">
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

    <div className="bg-black p-[20px] relative flex rounded-md h-[30px] items-center text-left border border-gray-800 mt-[10px] cursor-text">
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

    <a className="flex items-center justify-end text-center mt-[10px] py-[5px] px-[10px] rounded-md shadow-xl bg-slate-900 cursor-pointer text-gray-400 hover:text-white transition duration-300" disabled={state.submitting} type="submit">
        <button className={`text-[12px] font-md mx-auto ${state.submitting ? "text-white" : "flex"}`}>Join the waitlist</button>
        {state.submitting ? (
          <LoaderCircle className="w-[15px] animate-spin font-md" viewBox="0 0 24 24" />
        ) : (
          <ArrowRight className="w-[15px] font-md" />
        )}
    
    </a>
</form>

<SocialSection />
</div>
  )
}

export default Form;