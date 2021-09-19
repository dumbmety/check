import SimpleBar from "simplebar-react"
import styled from "styled-components"
import Navigations from "./Navigations"

interface IMainLayoutProps {
  children: any
}

export default function MainLayout(props: IMainLayoutProps) {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <Layout>
        <Navigations />
        <Content>{props.children}</Content>
      </Layout>
    </SimpleBar>
  )
}

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`

const Content = styled.main`
  flex: 1;
  margin-left: 300px;
  padding: 6rem 10rem;
`
