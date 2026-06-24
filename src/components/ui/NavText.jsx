import { Link } from "react-router";

export function NavText (props) {
    return (
        <p className="text-center">
            {props.text} <Link className="font-bold" to={props.link}>{props.linkText}</Link>
        </p>
    )
}