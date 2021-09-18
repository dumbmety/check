import React from "react"
import styled from "styled-components"

interface IStackProps {
  direction: "row" | "column"
  justify?: "start" | "center" | "end" | "space-around" | "space-between"
  align?: "start" | "center" | "end" | "space-around" | "space-between"

  children: React.ReactNode
}

interface IStackWrapperProps {
  stackDir: "row" | "column"
  justify?: "start" | "center" | "end" | "space-around" | "space-between"
  align?: "start" | "center" | "end" | "space-around" | "space-between"
}

export default function Stack(props: IStackProps) {
  return (
    <Wrapper
      stackDir={props.direction}
      justify={props.justify}
      align={props.align}
    >
      {props.children}
    </Wrapper>
  )
}

const Wrapper = styled.div<IStackWrapperProps>`
  display: flex;
  flex-direction: ${props => props.stackDir};

  ${props => props.align && `align-items: ${props.align};`}
  ${props => props.justify && `justify-content: ${props.justify};`}
`
