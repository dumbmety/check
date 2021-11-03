import Modal from "../shared/Modal"

type Props = {
  isOpen: boolean
  onClose: () => void
  onOkay: () => void
  onCancel: () => void
}

export default function AddTaskModal(props: Props) {
  return (
    <Modal
      isOpen={props.isOpen}
      name="add-task"
      title="Add Task"
      content="Content"
      minWidth={600}
      okayButton="Add"
      cancelButton="Cancel"
      onClose={props.onClose}
      onCancel={props.onCancel}
      onOkay={props.onOkay}
    />
  )
}
