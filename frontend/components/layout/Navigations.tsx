import SimpleBar from "simplebar-react"

import UserStatus from "./UserStatus"
import MenuItems from "./MenuItems"
import Projects from "./Projects"
import Folders from "./Folders"

export default function Navigations() {
  return (
    <nav className="fixed top-0 left-0 bottom-0 w-[300px] bg-gray-800">
      <SimpleBar style={{ height: "100vh" }}>
        <div className="p-4 flex flex-col space-y-4">
          <UserStatus status="synced" />
          <MenuItems />
          <Projects />
          <Folders />
        </div>
      </SimpleBar>
    </nav>
  )
}
