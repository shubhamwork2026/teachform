
export default function Input (props) {
    return (
        <input
            className="p-3 border w-[300px] sm:w-[500px]"
            type={props.type}
            placeholder={props.placeholder}
        />
    )
}