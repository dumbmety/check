import Link from "next/link"
import styled from "styled-components"

import { theme } from "../styles/ThemeStyles"
import Stack from "../elements/Stack"
import Icon from "../elements/Icon"

const projects = [
  {
    icon: "mask",
    color: theme.colors.indigo400,
    href: "beta",
    name: "Beta",
    number: 17,
  },
  {
    icon: "mask",
    color: theme.colors.green400,
    href: "ideas",
    name: "Ideas",
    number: 12,
  },
]

export default function Projects() {
  return (
    <Stack direction="column">
      <Title>Projects</Title>
      <List>
        {projects.map(project => (
          <Item key={project.href}>
            <Link href={`/project/${project.href}`}>
              <a>
                <Icon name={project.icon} color={project.color} />
                <span style={{ flex: 1 }}>{project.name}</span>
                <span>{project.number}</span>
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
