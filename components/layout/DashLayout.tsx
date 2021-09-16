import styled from "styled-components"
import Navigations from "./Navigations"

interface IDashLayoutProps {
  children: any
}

export default function DashLayout(props: IDashLayoutProps) {
  return (
    <Layout>
      <Navigations />
      <Content>{props.children}</Content>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`

const Content = styled.main`
  flex: 1;
`
