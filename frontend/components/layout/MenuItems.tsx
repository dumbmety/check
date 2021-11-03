import Link from "next/link"
import Icon from "../shared/Icon"

const list_items = [
  { url: "/", icon: "Inbox", name: "Inbox", number: 4 },
  { url: "/today", icon: "Sun", name: "Today", number: 2 },
  { url: "/tomorrow", icon: "CalendarNumber", name: "Tomorrow", number: 4 },
  { url: "/snoozed", icon: "Calendar", name: "Snoozed", number: 6 },
  { url: "/trash", icon: "Trash", name: "Trash" },
]

export default function MenuItems() {
  return (
    <ul className="flex flex-col space-y-[2px] select-none mt-4">
      {list_items.map(item => (
        <li key={item.url} className="text-sm">
          <Link href={item.url}>
            <a className="flex space-x-2 p-2 items-center text-white300 rounded transition duration-150 ease-in-out hover:bg-black200 active:bg-black100">
              <Icon width={20} height={20} name={item.icon} />
              <span style={{ flex: 1 }}>{item.name}</span>
              <span>{item.number}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
