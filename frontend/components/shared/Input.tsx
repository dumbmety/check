import styled, { css, CSSObject } from "styled-components"
import { ChangeEvent } from "react"
import { theme } from "../styles/ThemeStyles"

interface IInputProps {
  type?: string
  value?: string
  placeholder?: string

  style?: CSSObject

  as?: "input" | "textarea"
  size?: "sm" | "md" | "lg"

  onChange?: (value: string) => void
}

interface IStyledInputProps {
  inputStyle?: CSSObject
  inputSize: "sm" | "md" | "lg"
}

export default function Input(props: IInputProps) {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (typeof props.onChange === "function") props.onChange(event.target.value)
  }

  return props.as === "textarea" ? (
    <StyledTextArea
      value={props.value}
      placeholder={props.placeholder}
      onChange={handleChange}
      inputSize={props.size || "md"}
      inputStyle={props.style}
    />
  ) : (
    <StyledInput
      type={props.type || "text"}
      value={props.value}
      placeholder={props.placeholder}
      onChange={handleChange}
      inputSize={props.size || "md"}
      inputStyle={props.style}
    />
  )
}

const StyledInput = styled.input<IStyledInputProps>`
  width: 100%;
  color: ${theme.colors.white500};

  &::placeholder {
    color: ${theme.colors.gray100};
  }

  ${props =>
    props.inputSize === "lg" &&
    css`
      font-size: 1.2rem;
      font-weight: 600;
      padding: 0.6rem 1.5rem;
    `}

  ${props =>
    props.inputSize === "md" &&
    css`
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `}

  ${props =>
    props.inputSize === "sm" &&
    css`
      font-size: 0.9rem;
      padding: 0.4rem 0.9rem;
    `}

  ${props => props.inputStyle && css(props.inputStyle)}
`

const StyledTextArea = styled.textarea<IStyledInputProps>`
  width: 100%;
  resize: vertical;
  color: ${theme.colors.white500};

  &::placeholder {
    color: ${theme.colors.gray100};
  }

  ${props =>
    props.inputSize === "lg" &&
    css`
      font-size: 1.2rem;
      font-weight: 600;
      padding: 0.6rem 1.5rem;
    `}

  ${props =>
    props.inputSize === "md" &&
    css`
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `}

  ${props =>
    props.inputSize === "sm" &&
    css`
      font-size: 0.9rem;
      padding: 0.4rem 0.9rem;
    `}

  ${props => props.inputStyle && css(props.inputStyle)}
`
