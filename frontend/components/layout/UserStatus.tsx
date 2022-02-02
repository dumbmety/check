import { classNames } from "../../utils/classNames"

import Icon from "../shared/Icon"
import Stack from "../shared/Stack"

interface IUserStatusProps {
  status: "syncing" | "synced"
}

export default function UserStatus(props: IUserStatusProps) {
  return (
    <Stack direction="flex-row" align="items-center">
      <div className="relative w-9 h-9">
        <img
          className={classNames(
            "w-full h-full p-[2px] object-cover rounded-full border border-dashed",
            props.status === "syncing" ? "border-indigo500" : "border-gray100"
          )}
          src="/images/logo.jpg"
          alt="Check Logo"
        />
        {props.status === "syncing" && (
          <div className="p-[2px] w-4 h-4 absolute bottom-0 right-0 bg-black400 rounded-full">
            <div
              className={classNames(
                "w-full h-full grid place-items-center rounded-full",
                props.status === "syncing" ? "text-indigo500" : "text-green500"
              )}
            >
              <Icon name="Refresh" width={8} height={8} />
            </div>
          </div>
        )}
      </div>

      <span className="flex-1 ml-4 italic font-semibold text-gray200">
        {props.status === "syncing" ? "Syncing..." : "Synced"}
      </span>
    </Stack>
  )
}
