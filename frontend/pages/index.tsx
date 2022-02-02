import Head from "next/head"
import { useState } from "react"

import { changeChecked, getTasks } from "../services/task"
import { ITask } from "../types/Schemas"
import Icon from "../components/shared/Icon"
import TaskCard from "../views/tasks/TaskCard"
import AddTaskModal from "../components/modals/AddTaskModal"

type Props = {
  tasks: ITask[]
}

export default function Home(props: Props) {
  const [openAddModal, setOpenAddModal] = useState<boolean>(false)
  const [tasks, setTasks] = useState<ITask[]>(props.tasks)

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
      <Head>
        <title>Inbox • Check</title>
      </Head>

      <AddTaskModal
        isOpen={openAddModal}
        onOkay={() => setOpenAddModal(false)}
        onClose={() => setOpenAddModal(false)}
        onCancel={() => setOpenAddModal(false)}
      />

      <div className="w-full m-auto max-w-[650px]">
        <header className="flex items-center gap-2 px-3">
          <Icon name="Inbox" />
          <h1 className="text-2xl">Inbox</h1>
        </header>

        <div
          className="my-4 py-3 px-4 gap-2 rounded-md flex items-center select-none cursor-pointer bg-black300"
          onClick={() => setOpenAddModal(true)}
        >
          <button className="grid place-items-center">
            <Icon name="Add" />
          </button>
          <p className="flex-1 text-white300">Add Task</p>
        </div>

        <div className="mt-8 gap-2 flex flex-col">
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

          <div className="mt-4">
            <h2 className="px-3">Checked</h2>
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
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await getTasks()

  return {
    props: {
      tasks: res.results,
    },
  }
}
