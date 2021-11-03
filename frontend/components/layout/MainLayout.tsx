import SimpleBar from "simplebar-react"
import Navigations from "./Navigations"

const MainLayout: React.FC = ({ children }) => {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <div className="flex min-h-screen">
        <Navigations />
        <main className="flex-1 ml-[300px] py-24 px-40">{children}</main>
      </div>
    </SimpleBar>
  )
}

export default MainLayout
