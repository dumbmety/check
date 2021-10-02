import styled from "styled-components"
import { useEffect, useState } from "react"

import { theme } from "../components/styles/ThemeStyles"
import { changeChecked, getTasks } from "../services/task"
import { ITask } from "../types/Schemas"
import Icon from "../components/shared/Icon"
import TaskCard from "../views/tasks/TaskCard"

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([] as ITask[])

  useEffect(() => {
    getTasks().then(res => {
      if (res.ok) setTasks(res.results)
    })
  }, [])

  const handleChangeChecked = (id: string) => {
    const allTasks = [...tasks]
    const task = allTasks.find(task => task._id === id)

    if (task?.checked !== undefined) {
      changeChecked(id, !task.checked).then(res => {
        if (res.ok) {
          task.checked = !task.checked
          setTasks(allTasks)
        }
      })
    }
  }

  return (
    <>
      <Wrapper>
        <Header>
          <Icon name="Inbox" />
          <Title>Inbox</Title>
        </Header>

        <AddTaskCard>
          <AddTaskButton>
            <Icon name="Add" />
          </AddTaskButton>
          <AddTaskTitle>Add Task</AddTaskTitle>
        </AddTaskCard>

        <TasksListWrapper>
          {tasks
            .filter(task => !task.checked)
            .map(task => (
              <TaskCard
                key={task._id}
                id={task._id}
                title={task.title}
                description={task.description}
                date={task.date}
                file={task.file}
                checked={task.checked}
                priority={task.priority}
                onChecked={handleChangeChecked}
              />
            ))}

          <TasksListChecked>
            <h2>Checked</h2>
            {tasks
              .filter(task => task.checked)
              .map(task => (
                <TaskCard
                  key={task._id}
                  id={task._id}
                  title={task.title}
                  description={task.description}
                  date={task.date}
                  file={task.file}
                  checked={task.checked}
                  priority={task.priority}
                  onChecked={handleChangeChecked}
                />
              ))}
          </TasksListChecked>
        </TasksListWrapper>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 650px;
`

const Header = styled.header`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
`

const Title = styled.h1`
  font-size: 1.5rem;
`

const AddTaskCard = styled.div`
  margin: 1rem 0;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  background: ${theme.colors.black300};
  user-select: none;
  cursor: pointer;
`

const AddTaskButton = styled.button`
  display: grid;
  place-items: center;
`

const AddTaskTitle = styled.p`
  flex: 1;
  color: ${theme.colors.white300};
`

const TasksListWrapper = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

const TasksListChecked = styled.div`
  margin-top: 1rem;

  h2 {
    padding: 0 0.8rem;
  }
`
