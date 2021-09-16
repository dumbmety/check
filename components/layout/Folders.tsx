import Link from "next/link"
import styled from "styled-components"

import { theme } from "../styles/ThemeStyles"
import Stack from "../elements/Stack"
import Icon from "../elements/Icon"

const folders = [
  { href: "check", name: "Check" },
  { href: "doit", name: "Doit" },
]

export default function Folders() {
  return (
    <Stack direction="column">
      <Title>Folders</Title>
      <List>
        {folders.map(folder => (
          <Item key={folder.href}>
            <Link href={`/folder/${folder.href}`}>
              <a>
                <Icon name="folder" width={20} height={20} />
                <span>{folder.name}</span>
              </a>
            </Link>
          </Item>
        ))}
      </List>
    </Stack>
  )
}

const Title = styled.h2`
  color: ${theme.colors.gray100};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5rem;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
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
