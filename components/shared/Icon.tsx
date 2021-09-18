import styled from "styled-components"

import getIcon from "../../helpers/get-icon"

interface IIconProps {
  name: string
  color?: string
  width?: number
  height?: number
}

interface ISVGProps {
  svgColor?: string
}

export default function Icon(props: IIconProps) {
  const component = getIcon(props.name)

  return (
    <SVG
      fill="none"
      svgColor={props.color}
      width={props.width || 24}
      height={props.height || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {component}
    </SVG>
  )
}

const SVG = styled.svg<ISVGProps>`
  * {
    fill: ${props => props.svgColor || "currentColor"};
  }
`
