import Heading from "../components/ui/Heading";
import Input from "../components/ui/Input";
import { NavText } from "../components/ui/NavText";
import SubmitButton from "../components/ui/SubmitButton";

export default function Forgot () {
    return (
        <div className="flex justify-center sm:items-center sm:h-[90vh]">
            <div className="w-[300px] sm:w-[500px]">
                <Heading text="Forgot Password"/>
                <form className="flex flex-col gap-6 items-center">
                    <Input type="tel" placeholder="Enter your phone number" />
                    <Input type="password" placeholder="Enter new password" />
                    <Input type="password" placeholder="Confirm password" />
                    <SubmitButton text="Reset"/>
                    <NavText text="Remember your password ?" linkText="Log in" link="/auth/login"/>
                </form>
            </div>
        </div>
    )
}