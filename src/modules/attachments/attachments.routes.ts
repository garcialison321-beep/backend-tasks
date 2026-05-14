import { Router } from "express";
import { AttachmentsController } from "./attachments.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const attachmentsController = new AttachmentsController();

/**
 * @swagger
 * /attachments:
 *   post:
 *     summary: Crear attachment
 *     tags: [Attachments]
 *     security:
 *       - bearerAuth: []
 *     description: Este método crea un nuevo attachment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fileName
 *               - fileUrl
 *             properties:
 *               fileName:
 *                 type: string
 *                 example: evidencia_backend.pdf
 *               fileUrl:
 *                 type: string
 *                 example: https://miapp.com/uploads/evidencia_backend.pdf
 *               taskId:
 *                 type: string
 *                 example: 665f11111111111111111111
 *     responses:
 *       200:
 *         description: Attachment creado correctamente
 */
router.post(
  "/",
  authMiddleware,
  attachmentsController.create
);

/**
 * @swagger
 * /attachments:
 *   get:
 *     summary: Obtener todos los attachments
 *     tags: [Attachments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de attachments
 */
router.get(
  "/",
  authMiddleware,
  attachmentsController.findAll
);

/**
 * @swagger
 * /attachments/{id}:
 *   get:
 *     summary: Obtener attachment por ID
 *     tags: [Attachments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Attachment encontrado
 */
router.get(
  "/:id",
  authMiddleware,
  attachmentsController.findById
);

/**
 * @swagger
 * /attachments/{id}:
 *   put:
 *     summary: Actualizar attachment
 *     tags: [Attachments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fileName:
 *                 type: string
 *                 example: entrega_final.pdf
 *               fileUrl:
 *                 type: string
 *                 example: https://miapp.com/uploads/entrega_final.pdf
 *     responses:
 *       200:
 *         description: Attachment actualizado correctamente
 */
router.put(
  "/:id",
  authMiddleware,
  attachmentsController.update
);

/**
 * @swagger
 * /attachments/{id}:
 *   delete:
 *     summary: Eliminar attachment
 *     tags: [Attachments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Attachment eliminado correctamente
 */
router.delete(
  "/:id",
  authMiddleware,
  attachmentsController.delete
);

export default router;