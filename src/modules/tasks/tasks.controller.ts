import { Request, Response } from "express";
import { TasksService } from "./tasks.service";

export class TasksController {

  private tasksService: TasksService;

  constructor() {
    this.tasksService = new TasksService();
  }

  create = async (req: any, res: Response) => {
    try {

      const userId = req.user.id;

      const task = await this.tasksService.create(
        req.body,
        userId
      );

      res.status(201).json(task);

    } catch (error) {

      res.status(500).json({
        message: "Error al crear tarea",
        error,
      });
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {

      const tasks = await this.tasksService.findAll();

      res.status(200).json(tasks);

    } catch (error) {

      res.status(500).json({
        message: "Error al obtener tareas",
        error,
      });
    }
  };

  findById = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      const task = await this.tasksService.findById(id);

      res.status(200).json(task);

    } catch (error) {

      res.status(500).json({
        message: "Error al obtener tarea",
        error,
      });
    }
  };

  update = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      const updatedTask = await this.tasksService.update(
        id,
        req.body
      );

      res.status(200).json({
        message: "Tarea actualizada correctamente",
        task: updatedTask,
      });

    } catch (error) {

      res.status(500).json({
        message: "Error al actualizar tarea",
        error,
      });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      await this.tasksService.delete(id);

      res.status(200).json({
        message: "Tarea eliminada correctamente",
      });

    } catch (error) {

      res.status(500).json({
        message: "Error al eliminar tarea",
        error,
      });
    }
  };

}