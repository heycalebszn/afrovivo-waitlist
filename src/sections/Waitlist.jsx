import Form from "../components/Form";
import SubmissionSuccess from "../components/SubmissionSuccess";

const Waitlist = () => {
    return(
        <section className="flex flex-col items-center justify-center mt-[100px]">
            <p className="text-[#777] font-bold text-[10px] bg-black p-[7px] rounded-md border-t border-gray-800 shadow-lg border-l">Afrovivo | Sell Global</p>

            <div className="flex flex-col mt-[20px] items-center justify-center text-center">
                <h1 className="text-white sm:text-[45px] font-sm sm:leading-[55px] text-[30px] leading-[45px]">Join the waitlist today <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-green-500">to Showcase your Global Talent</span></h1>
            </div>
            <Form />
        </section>
    )
}

export default Waitlist;