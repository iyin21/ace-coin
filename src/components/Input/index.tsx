interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control?: string
    prefixIcon?: JSX.Element
    suffixIcon?: JSX.Element
    inputClassName?: string
}

const Input = ({
    prefixIcon,
    suffixIcon,
    className,
    inputClassName,
    ...rest
}: InputProps) => {
    return (
        <div
            className={`px-2 md:px-4  flex items-center border border-[#eef1f7] h-12 md:h-14 rounded ${className}`}
        >
            {prefixIcon}
            <input
                className={`w-full outline-none input bg-transparent ${inputClassName}`}
                {...rest}
            />
            {/* <span> */}
            {suffixIcon}
            {/* </span> */}
        </div>
    )
}
export default Input
