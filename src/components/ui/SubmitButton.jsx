
export default function SubmitButton (props) {
    return (
        <button
            className="w-[300px] sm:w-[500px] bg-[#000000] text-white h-[48px] font-bold" type="submit">
            {props.text}
        </button>
    )
}