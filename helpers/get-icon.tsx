import Add from "../assets/icons/Add"
import Calendar from "../assets/icons/Calendar"
import CalendarNumber from "../assets/icons/CalendarNumber"
import Folder from "../assets/icons/Folder"
import Inbox from "../assets/icons/Inbox"
import Mask from "../assets/icons/Mask"
import Note from "../assets/icons/Note"
import Refresh from "../assets/icons/Refresh"
import Security from "../assets/icons/Security"
import Sun from "../assets/icons/Sun"
import Tick from "../assets/icons/Tick"
import Trash from "../assets/icons/Trash"

export default function getIcon(name: string) {
  switch (name) {
    case "Add":
      return <Add />
    case "Calendar":
      return <Calendar />
    case "CalendarNumber":
      return <CalendarNumber />
    case "Folder":
      return <Folder />
    case "Inbox":
      return <Inbox />
    case "Mask":
      return <Mask />
    case "Note":
      return <Note />
    case "Refresh":
      return <Refresh />
    case "Security":
      return <Security />
    case "Sun":
      return <Sun />
    case "Tick":
      return <Tick />
    case "Trash":
      return <Trash />
    default:
      return "Not found icon!"
  }
}
