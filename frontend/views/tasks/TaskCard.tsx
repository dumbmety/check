import moment from "moment"
import styled, { css } from "styled-components"

import { theme } from "../../components/styles/ThemeStyles"
import Checkbox from "../../components/shared/Checkbox"
import Icon from "../../components/shared/Icon"

interface ITaskCardProps {
  checked: boolean

  id: string
  title: string
  date: string
  file: string
  priority: string
  description: string

  onEdit?: () => void
  onDelete?: () => void
  onChecked: (id: string) => void
}

interface IWrapperProps {
  isChecked: boolean
}

interface IGroupProps {
  isFull?: boolean
}

export default function TaskCard(props: ITaskCardProps) {
  return (
    <Wrapper isChecked={props.checked}>
      <Group>
        <Checkbox
          checked={props.checked}
          onClick={() => props.onChecked(props.id)}
        />
      </Group>
      <Group isFull>
        <Title>{props.title}</Title>
      </Group>
      <Group>
        <Info>
          {props.date && (
            <Date>
              <Icon name="Calendar" width={20} height={20} />
              <span>{moment(props.date).format("ll")}</span>
            </Date>
          )}
          {props.date?.length > 0 && (
            <Icon name="Note" width={20} height={20} />
          )}
          {props.file?.length > 0 && (
            <Icon name="Folder" width={20} height={20} />
          )}
        </Info>
      </Group>
    </Wrapper>
  )
}

const Wrapper = styled.div<IWrapperProps>`
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  gap: 1rem;
  display: flex;
  align-items: center;
  user-select: none;
  transition: all 0.3s ease-in-out;

  ${props =>
    props.isChecked &&
    css`
      opacity: 0.75;

      h3 {
        color: ${theme.colors.gray100};
        text-decoration: line-through;
      }
    `}
`

const Group = styled.div<IGroupProps>`
  padding: 0.25rem 0;

  ${props =>
    props.isFull &&
    css`
      flex: 1;
      padding: 0;
      display: flex;
      align-items: center;
    `}
`

const Title = styled.h3`
  transition: all 0.3s ease-in-out;
`

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  opacity: 0.5;
  gap: 0.25rem;

  * {
    cursor: pointer;
  }
`

const Date = styled.div`
  gap: 0.25rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-right: 0.25rem;

  span {
    line-height: 1.6;
  }
`
