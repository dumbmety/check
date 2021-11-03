import { classNames } from "../../utils/classNames"

interface IButtonProps {
  children: any
  style?: any
  className?: string

  fluid?: boolean
  disabled?: boolean

  mode: "primary" | "secondary"
  variant?: "solid" | "outline" | "ghost"

  size?: "sm" | "md" | "lg"

  onClick?: () => void
}

export default function Button(props: IButtonProps) {
  const size = props.size || "md"

  const handleClick = () => {
    if (!props.disabled && typeof props.onClick === "function") props.onClick()
  }

  return (
    <button
      className={classNames(
        "text-white bg-none border border-transparent",
        "select-none rounded-md transition duration-150 ease-in-out",
        "disabled:opacity-50 disabled:pointer-events-none",

        size === "lg" && "text-lg font-bold py-4 px-6",
        size === "md" && "py-2 px-5",
        size === "sm" && "py-1.5 px-4",

        props.mode === "primary" &&
          props.variant === "solid" &&
          "bg-indigo500 hover:bg-indigo600 active:bg-indigo700",

        props.mode === "secondary" &&
          props.variant === "solid" &&
          "bg-black300 hover:bg-black200 active:bg-black100",

        props.mode === "secondary" &&
          props.variant === "ghost" &&
          "hover:bg-black300 active:bg-black200",

        props.mode === "secondary" &&
          props.variant === "outline" &&
          "hover:bg-black200 active:bg-black100",

        props.className
      )}
      style={props.style}
      disabled={props.disabled}
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}
