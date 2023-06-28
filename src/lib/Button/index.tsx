
interface ButtonProps {
    text?: string
}

const Button = ({text}: ButtonProps) => <button className="text-headless">{text}</button>

export default Button