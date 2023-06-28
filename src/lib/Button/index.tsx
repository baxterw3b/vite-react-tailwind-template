
interface ButtonProps {
    text?: string
}

const Button = ({text}: ButtonProps) => <button className="text-red-500">{text}</button>

export default Button