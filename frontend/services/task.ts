import { http } from "../helpers/http"

export async function getTasks() {
  return await http("/tasks", "GET")
}

export async function changeChecked(id: string, checked: boolean) {
  return await http(`/tasks/${id}`, "PUT", { checked })
}
