import Form from "../components/Form";
import SubmissionSuccess from "../components/SubmissionSuccess";
import { Ivana1, Mark1 } from "../assets"

const Waitlist = () => {
    return(
        <section className="flex flex-col items-center justify-center mt-[100px]">
            <p className="text-[#777] font-bold text-[10px] bg-black p-[7px] rounded-md border-t border-gray-800 shadow-lg border-l">Afrovivo | Sell Global</p>

            <div className="flex flex-col mt-[20px] items-center justify-center text-center z-50">
                <div className="flex items-center justify-center">
                <h1 className="text-white sm:text-[45px] font-sm sm:leading-[55px] text-[30px] leading-[45px]">Join the waitlist today <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-green-500">to Showcase your Global Talent</span></h1>
                <img src={Ivana1}
            className="w-[30px] sm:w-[60px] sm:mt-[40px] sm:ml-[10px]"
             alt="Ivana" />
             </div>
            </div>
            <Form />

            <img src={Mark1}
            className="absolute sm:top-[80px] md:left-[260px] sm:w-[150px] w-[100px] top-[70px] left-[5px] z-0"
             alt="Mark" />
        </section>
    )
}

export default Waitlist;