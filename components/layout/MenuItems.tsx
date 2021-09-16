import Link from "next/link"
import styled from "styled-components"

import { theme } from "../styles/ThemeStyles"
import Icon from "../elements/Icon"

const list_items = [
  { url: "/", icon: "inbox", name: "Inbox", number: 4 },
  { url: "/today", icon: "sun", name: "Today", number: 2 },
  { url: "/tomorrow", icon: "calendar-number", name: "Tomorrow", number: 4 },
  { url: "/snoozed", icon: "calendar", name: "Snoozed", number: 6 },
  { url: "/trash", icon: "trash", name: "Trash" },
]

export default function MenuItems() {
  return (
    <Menu>
      {list_items.map(item => (
        <Item key={item.url}>
          <Link href={item.url}>
            <a>
              <Icon width={20} height={20} name={item.icon} />
              <span style={{ flex: 1 }}>{item.name}</span>
              <span>{item.number}</span>
            </a>
          </Link>
        </Item>
      ))}
    </Menu>
  )
}

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  user-select: none;
  margin-top: 1rem;
`

const Item = styled.li`
  font-size: 0.9rem;

  a {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
    align-items: center;
    color: ${theme.colors.white300};
    border-radius: 5px;
    transition: all 0.2s ease;

    &:hover {
      background: ${theme.colors.black200};
    }

    &:active {
      background: ${theme.colors.black100};
    }
  }
`
