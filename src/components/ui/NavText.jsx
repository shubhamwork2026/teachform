import { Link } from "react-router";

export function NavText (props) {
    return (
        <p>
            {props.text} <Link className="font-bold" to={props.link}>{props.linkText}</Link>
        </p>
    )
}