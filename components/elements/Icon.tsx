import styled from "styled-components"

import Calendar from "../icons/Calendar"
import CalendarNumber from "../icons/CalendarNumber"
import Folder from "../icons/Folder"
import Inbox from "../icons/Inbox"
import Mask from "../icons/Mask"
import Refresh from "../icons/Refresh"
import Sun from "../icons/Sun"
import Trash from "../icons/Trash"

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
  let component = null

  switch (props.name) {
    case "calendar":
      component = <Calendar />
      break
    case "calendar-number":
      component = <CalendarNumber />
      break
    case "folder":
      component = <Folder />
      break
    case "inbox":
      component = <Inbox />
      break
    case "mask":
      component = <Mask />
      break
    case "refresh":
      component = <Refresh />
      break
    case "sun":
      component = <Sun />
      break
    case "trash":
      component = <Trash />
      break
  }

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
