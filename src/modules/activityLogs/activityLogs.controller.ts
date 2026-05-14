import { Request, Response } from "express";
import { ActivityLogsService } from "./activityLogs.service";

export class ActivityLogsController {

  private activityLogsService: ActivityLogsService;

  constructor() {
    this.activityLogsService = new ActivityLogsService();
  }

  create = async (req: any, res: Response) => {
    try {

      const userId = req.user.id;

      const activityLog =
        await this.activityLogsService.create(
          req.body,
          userId
        );

      res.status(201).json(activityLog);

    } catch (error) {

      res.status(500).json({
        message: "Error al crear activity log",
        error,
      });
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {

      const activityLogs =
        await this.activityLogsService.findAll();

      res.status(200).json(activityLogs);

    } catch (error) {

      res.status(500).json({
        message: "Error al obtener activity logs",
        error,
      });
    }
  };

  findById = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      const activityLog =
        await this.activityLogsService.findById(id);

      res.status(200).json(activityLog);

    } catch (error) {

      res.status(500).json({
        message: "Error al obtener activity log",
        error,
      });
    }
  };

  update = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      const updatedActivityLog =
        await this.activityLogsService.update(
          id,
          req.body
        );

      res.status(200).json({
        message: "Activity log actualizado correctamente",
        activityLog: updatedActivityLog,
      });

    } catch (error) {

      res.status(500).json({
        message: "Error al actualizar activity log",
        error,
      });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      await this.activityLogsService.delete(id);

      res.status(200).json({
        message: "Activity log eliminado correctamente",
      });

    } catch (error) {

      res.status(500).json({
        message: "Error al eliminar activity log",
        error,
      });
    }
  };

}