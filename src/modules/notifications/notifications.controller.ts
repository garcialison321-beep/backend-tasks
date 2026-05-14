import { Request, Response } from "express";
import { NotificationsService } from "./notifications.service";

export class NotificationsController {

  private notificationsService: NotificationsService;

  constructor() {
    this.notificationsService = new NotificationsService();
  }

  create = async (req: any, res: Response) => {
    try {

      const userId = req.user.id;

      const notification =
        await this.notificationsService.create(
          req.body,
          userId
        );

      res.status(201).json(notification);

    } catch (error) {

      res.status(500).json({
        message: "Error al crear notificación",
        error,
      });
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {

      const notifications =
        await this.notificationsService.findAll();

      res.status(200).json(notifications);

    } catch (error) {

      res.status(500).json({
        message: "Error al obtener notificaciones",
        error,
      });
    }
  };

  findById = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      const notification =
        await this.notificationsService.findById(id);

      res.status(200).json(notification);

    } catch (error) {

      res.status(500).json({
        message: "Error al obtener notificación",
        error,
      });
    }
  };

  update = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      const updatedNotification =
        await this.notificationsService.update(
          id,
          req.body
        );

      res.status(200).json({
        message: "Notificación actualizada correctamente",
        notification: updatedNotification,
      });

    } catch (error) {

      res.status(500).json({
        message: "Error al actualizar notificación",
        error,
      });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      await this.notificationsService.delete(id);

      res.status(200).json({
        message: "Notificación eliminada correctamente",
      });

    } catch (error) {

      res.status(500).json({
        message: "Error al eliminar notificación",
        error,
      });
    }
  };

}