import React from "react"
import { classNames } from "../../utils/classNames"

interface IStackProps {
  direction: "flex-row" | "flex-row-reverse" | "flex-col" | "flex-col-reverse"
  justify?:
    | "justify-start"
    | "justify-center"
    | "justify-end"
    | "justify-around"
    | "justify-between"
  align?:
    | "items-start"
    | "items-center"
    | "items-end"
    | "items-stretch"
    | "items-baseline"

  children: React.ReactNode
}

export default function Stack(props: IStackProps) {
  return (
    <div
      className={classNames(
        "flex",
        props.direction,
        props.justify,
        props.align
      )}
    >
      {props.children}
    </div>
  )
}
