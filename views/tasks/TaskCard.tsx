import styled, { css } from "styled-components"
import Checkbox from "../../components/shared/Checkbox"
import Icon from "../../components/shared/Icon"
import { theme } from "../../components/styles/ThemeStyles"

interface ITaskCardProps {
  completed: boolean

  id: string
  title: string
  date: string
  file: string
  description: string

  priority: string

  onEdit?: () => void
  onDelete?: () => void
  onComplete: (id: string) => void
}

interface IGroupProps {
  isFull?: boolean
}

export default function TaskCard(props: ITaskCardProps) {
  let color = ""

  if (props.priority === "high") color = theme.colors.red300
  else if (props.priority === "medium") color = theme.colors.indigo300
  else if (props.priority === "low") color = theme.colors.gray300

  return (
    <Wrapper>
      <Group>
        <Checkbox
          checked={props.completed}
          onClick={() => props.onComplete(props.id)}
        />
      </Group>
      <Group isFull>
        <Title>{props.title}</Title>
        <Info>
          {props.date && (
            <Date>
              <Icon name="Calendar" width={20} height={20} />
              <span>{props.date}</span>
            </Date>
          )}
          {props.date && <Icon name="Note" width={20} height={20} />}
          {props.file && <Icon name="Folder" width={20} height={20} />}
        </Info>
      </Group>
      <Group title={props.priority}>
        <Icon name="Security" color={color} />
      </Group>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  gap: 1rem;
  display: flex;
  align-items: flex-start;
  user-select: none;
`

const Group = styled.div<IGroupProps>`
  padding: 0.25rem 0;

  ${props =>
    props.isFull &&
    css`
      flex: 1;
      padding: 0;
    `}
`

const Title = styled.h3``

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
