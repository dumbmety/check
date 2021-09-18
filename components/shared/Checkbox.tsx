import styled, { css } from "styled-components"
import { theme } from "../styles/ThemeStyles"
import Icon from "./Icon"

interface ICheckboxProps {
  checked: boolean
  disabled?: boolean

  onClick: () => void
}

interface IWrapperProps {
  isChecked?: boolean
  isDisabled?: boolean
}

export default function Checkbox(props: ICheckboxProps) {
  const handleClick = () => {
    if (!props.disabled && typeof props.onClick === "function") props.onClick()
  }

  return (
    <Wrapper
      isChecked={props.checked}
      isDisabled={props.disabled}
      onClick={handleClick}
    >
      <Icon name="Tick" width={22} height={22} />
    </Wrapper>
  )
}

const Wrapper = styled.div<IWrapperProps>`
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  background: ${theme.colors.black100};

  &:hover {
    background: ${theme.colors.black200};
  }

  &:active {
    background: ${theme.colors.black300};
  }

  svg {
    transition: all 0.2s ease-in-out;
  }

  ${props => props.isDisabled && `pointer-events: none; opacity: 0.5;`}

  ${props =>
    props.isChecked
      ? css`
          background: ${theme.colors.indigo500};

          &:hover {
            background: ${theme.colors.indigo600};
          }

          &:active {
            background: ${theme.colors.indigo700};
          }
        `
      : css`
          svg {
            opacity: 0;
          }
        `}
`
