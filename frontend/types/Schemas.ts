export interface ITask {
  _id: string
  title: string
  description: string
  status: string
  file: string
  date: string
  checked: boolean
  priority: "low" | "medium" | "high"
}
