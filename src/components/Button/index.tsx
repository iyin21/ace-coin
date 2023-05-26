interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: "primary" | "secondary"
}
const Button = ({ children, className, variant, ...rest }: ButtonProps) => {
    return (
        <button
            {...rest}
            className={`bg-blue-10 text-white  rounded-lg px-4 py-4  text-md ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
