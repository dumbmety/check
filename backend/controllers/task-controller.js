import Task from "../models/task-model.js"

class TaskController {
  async list(req, res) {
    try {
      const tasks = await Task.find()
      res.status(200).json({ ok: true, results: tasks })
    } catch (err) {
      res.status(500).json({ ok: false, message: err })
    }
  }

  async create(req, res) {
    const { title, description, date, file, priority } = req.body

    try {
      const task = Task.create({ title, description, date, file, priority })
      res.status(201).json({ ok: true, result: task })
    } catch (err) {
      res.status(500).json({ ok: false, message: err })
    }
  }

  async changeChecked(req, res) {
    const { id } = req.params
    const { checked } = req.body

    try {
      const task = await Task.findByIdAndUpdate(id, { checked })
      res.status(200).json({ ok: true, result: task })
    } catch (err) {
      res.status(500).json({ ok: false, message: err })
    }
  }
}

export default new TaskController()
