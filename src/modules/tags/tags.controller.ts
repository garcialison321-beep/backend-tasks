import { Request, Response } from "express";
import { TagsService } from "./tags.service";

export class TagsController {

  private tagsService: TagsService;

  constructor() {
    this.tagsService = new TagsService();
  }

  create = async (req: any, res: Response) => {
    try {

      const userId = req.user.id;

      const tag = await this.tagsService.create(
        req.body,
        userId
      );

      res.status(201).json(tag);

    } catch (error) {

      res.status(500).json({
        message: "Error al crear tag",
        error,
      });
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {

      const tags = await this.tagsService.findAll();

      res.status(200).json(tags);

    } catch (error) {

      res.status(500).json({
        message: "Error al obtener tags",
        error,
      });
    }
  };

  findById = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      const tag = await this.tagsService.findById(id);

      res.status(200).json(tag);

    } catch (error) {

      res.status(500).json({
        message: "Error al obtener tag",
        error,
      });
    }
  };

  update = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      const updatedTag = await this.tagsService.update(
        id,
        req.body
      );

      res.status(200).json({
        message: "Tag actualizado correctamente",
        tag: updatedTag,
      });

    } catch (error) {

      res.status(500).json({
        message: "Error al actualizar tag",
        error,
      });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;

      await this.tagsService.delete(id);

      res.status(200).json({
        message: "Tag eliminado correctamente",
      });

    } catch (error) {

      res.status(500).json({
        message: "Error al eliminar tag",
        error,
      });
    }
  };

}