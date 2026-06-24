
import Heading from "../components/ui/Heading";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";

export default function Verify () {
    return (
        <div className="flex justify-center sm:items-center sm:h-[100vh]">
            <div className="w-[300px] sm:w-[500px]">
                <Heading text="Verify OTP"/>
                <form className="flex flex-col gap-3">
                    <Input type="text" placeholder="Enter OTP" />
                    <button className="text-left w-[100px]">Resend OTP</button>
                    <SubmitButton text="Submit"/>
                </form>
            </div>
        </div>
    )
}