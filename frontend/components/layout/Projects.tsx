import Link from "next/link"

import { theme } from "../styles/ThemeStyles"
import Stack from "../shared/Stack"
import Icon from "../shared/Icon"

const projects = [
  {
    icon: "Mask",
    color: theme.colors.indigo400,
    href: "beta",
    name: "Beta",
    number: 17,
  },
  {
    icon: "Mask",
    color: theme.colors.green400,
    href: "ideas",
    name: "Ideas",
    number: 12,
  },
]

export default function Projects() {
  return (
    <Stack direction="flex-col">
      <h2 className="text-sm font-bold p-2 text-gray100">Projects</h2>
      <ul className="flex flex-col">
        {projects.map(project => (
          <li key={project.href} className="text-sm">
            <Link href={`/project/${project.href}`}>
              <a className="flex space-x-2 p-2 items-center text-white300 rounded transition duration-150 ease-in-out hover:bg-black200 active:bg-black100">
                <Icon name={project.icon} color={project.color} />
                <span style={{ flex: 1 }}>{project.name}</span>
                <span>{project.number}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Stack>
  )
}
