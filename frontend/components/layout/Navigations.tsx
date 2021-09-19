import styled from "styled-components"
import SimpleBar from "simplebar-react"

import { theme } from "../styles/ThemeStyles"
import UserStatus from "./UserStatus"
import MenuItems from "./MenuItems"
import Projects from "./Projects"
import Folders from "./Folders"

export default function Navigations() {
  return (
    <Wrapper>
      <SimpleBar style={{ height: "100vh" }}>
        <Container>
          <UserStatus status="synced" />
          <MenuItems />
          <Projects />
          <Folders />
        </Container>
      </SimpleBar>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: ${theme.colors.black400};
`

const Container = styled.div`
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`
