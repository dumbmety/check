import styled from "styled-components"

import { theme } from "../styles/ThemeStyles"
import Icon from "../elements/Icon"
import Stack from "../elements/Stack"

interface IUserStatusProps {
  status: "syncing" | "synced"
}

export default function UserStatus(props: IUserStatusProps) {
  return (
    <Stack direction="row" align="center">
      <AvatarWrapper>
        <Avatar status={props.status} src="/images/logo.jpg" alt="Check Logo" />
        {props.status === "syncing" && (
          <IconStatusWrapper>
            <IconStatus status={props.status}>
              <Icon name="refresh" width={8} height={8} />
            </IconStatus>
          </IconStatusWrapper>
        )}
      </AvatarWrapper>

      <Text>{props.status === "syncing" ? "Syncing..." : "Synced"}</Text>
    </Stack>
  )
}

const AvatarWrapper = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
`

const Avatar = styled.img<IUserStatusProps>`
  width: 100%;
  height: 100%;
  padding: 2px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px dashed
    ${props =>
      props.status === "syncing"
        ? theme.colors.indigo500
        : theme.colors.gray500};
`

const IconStatusWrapper = styled.div`
  padding: 2px;
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${theme.colors.black400};
  border-radius: 50%;
`

const IconStatus = styled.div<IUserStatusProps>`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: ${props =>
    props.status === "syncing"
      ? theme.colors.indigo500
      : theme.colors.green500};
`

const Text = styled.span`
  flex: 1;
  margin-left: 1rem;
  font-style: italic;
  font-weight: 500;
  color: ${theme.colors.gray200};
`
