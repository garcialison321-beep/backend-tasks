import { Request, Response } from "express";
import { AttachmentsService } from "./attachments.service";

export class AttachmentsController {

  private attachmentsService: AttachmentsService;

  constructor() {
    this.attachmentsService = new AttachmentsService();
  }

  create = async (req: any, res: Response) => {
    try {

      const userId = req.user.id;

      const attachment =
        await this.attachmentsService.create(
          req.body,
          userId
        );

      res.status(201).json(attachment);

    } catch (error) {

      res.status(500).json({
        message: "Error al crear attachment",
        error,
      });
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {

      const attachments =
        await this.attachmentsService.findAll();

      res.status(200).json(attachments);

    } catch (error) {

      res.status(500).json({
        message: "Error al obtener attachments",
        error,
      });
    }
  };

  findById = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      const attachment =
        await this.attachmentsService.findById(id);

      res.status(200).json(attachment);

    } catch (error) {

      res.status(500).json({
        message: "Error al obtener attachment",
        error,
      });
    }
  };

  update = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      const updatedAttachment =
        await this.attachmentsService.update(
          id,
          req.body
        );

      res.status(200).json({
        message: "Attachment actualizado correctamente",
        attachment: updatedAttachment,
      });

    } catch (error) {

      res.status(500).json({
        message: "Error al actualizar attachment",
        error,
      });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      await this.attachmentsService.delete(id);

      res.status(200).json({
        message: "Attachment eliminado correctamente",
      });

    } catch (error) {

      res.status(500).json({
        message: "Error al eliminar attachment",
        error,
      });
    }
  };

}