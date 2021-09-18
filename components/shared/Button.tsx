import styled, { css } from "styled-components"
import { theme } from "../styles/ThemeStyles"

interface IButtonProps {
  children: any

  fluid?: boolean
  disabled?: boolean

  mode: "primary" | "secondary"
  variant?: "solid" | "outline" | "ghost"

  size?: "sm" | "md" | "lg"

  onClick?: () => void
}

interface IStyledButtonProps {
  btnMode: "primary" | "secondary"
  btnSize?: "sm" | "md" | "lg"
  btnVariant: "solid" | "outline" | "ghost"
}

export default function Button(props: IButtonProps) {
  const handleClick = () => {
    if (!props.disabled && typeof props.onClick === "function") props.onClick()
  }

  return (
    <StyledButton
      disabled={props.disabled}
      btnMode={props.mode}
      btnSize={props.size || "md"}
      btnVariant={props.variant || "solid"}
      onClick={handleClick}
    >
      {props.children}
    </StyledButton>
  )
}

const StyledButton = styled.button<IStyledButtonProps>`
  color: #ffffff;
  background: none;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  user-select: none;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  ${props =>
    props.btnSize === "lg" &&
    css`
      font-size: 1.2rem;
      font-weight: 600;
      padding: 0.6rem 1.5rem;
    `}

  ${props =>
    props.btnSize === "md" &&
    css`
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `}

  ${props =>
    props.btnSize === "sm" &&
    css`
      font-size: 0.9rem;
      padding: 0.4rem 0.9rem;
    `}

  ${props =>
    props.btnMode === "primary" &&
    props.btnVariant === "solid" &&
    css`
      background: ${theme.colors.indigo500};
      &:hover {
        background: ${theme.colors.indigo600};
      }
      &:active {
        background: ${theme.colors.indigo700};
      }
    `}

  ${props =>
    props.btnMode === "secondary" &&
    props.btnVariant === "solid" &&
    css`
      background: ${theme.colors.black300};
      &:hover {
        background: ${theme.colors.black200};
      }
      &:active {
        background: ${theme.colors.black100};
      }
    `}

  ${props =>
    props.btnMode === "secondary" &&
    props.btnVariant === "ghost" &&
    css`
      &:hover {
        background: ${theme.colors.black300};
      }
      &:active {
        background: ${theme.colors.black200};
      }
    `}

  ${props =>
    props.btnMode === "secondary" &&
    props.btnVariant === "outline" &&
    css`
      border-color: 1px solid ${theme.colors.black100};
      &:hover {
        background: ${theme.colors.black200};
        border-color: ${theme.colors.black200};
      }
      &:active {
        background: ${theme.colors.black100};
        border-color: ${theme.colors.black100};
      }
    `}
`
