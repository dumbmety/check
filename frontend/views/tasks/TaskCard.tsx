import moment from "moment"

import { classNames } from "../../utils/classNames"
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

export default function TaskCard(props: ITaskCardProps) {
  return (
    <div
      className={classNames(
        "py-2 px-4 rounded space-x-4 flex items-center select-none transition duration-150 ease-in-out",
        props.checked && "opacity-75"
      )}
    >
      <div className="py-1">
        <Checkbox
          checked={props.checked}
          onClick={() => props.onChecked(props.id)}
        />
      </div>
      <div className="flex-1 flex items-center">
        <h3
          className={classNames(props.checked && "text-gray100 line-through")}
        >
          {props.title}
        </h3>
      </div>
      <div className="py-1">
        <div className="flex items-center mt-1 opacity-50 space-x-1 cursor-pointer">
          {props.date && (
            <div className="space-x-1 flex items-center text-sm mr-1">
              <Icon name="Calendar" width={20} height={20} />
              <span>{moment(props.date).format("ll")}</span>
            </div>
          )}
          {props.date?.length > 0 && (
            <Icon name="Note" width={20} height={20} />
          )}
          {props.file?.length > 0 && (
            <Icon name="Folder" width={20} height={20} />
          )}
        </div>
      </div>
    </div>
  )
}
