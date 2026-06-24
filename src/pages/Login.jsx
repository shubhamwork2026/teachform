import { Link } from "react-router";
import Heading from "../components/ui/Heading";
import Input from "../components/ui/Input";
import { NavText } from "../components/ui/NavText";
import SubmitButton from "../components/ui/SubmitButton";

export default function Login () {
    return (
        <div className="flex justify-center sm:items-center sm:h-[90vh]">
            <div className="w-[300px] sm:w-[500px]">
                <Heading text="Log in"/>
                <form className="flex flex-col gap-6">
                    <Input type="tel" placeholder="Enter your phone number" />
                    <Input type="password" placeholder="Enter your password" />
                    <Link to="/auth/forgot">Forgot password</Link>
                    <SubmitButton text="Log in"/>
                    <NavText text="Don't have an account ?" linkText="Sign up" link="/auth/signup"/>
                </form>
            </div>
        </div>
    )
}