import { Router } from "express";
import { NotificationsController } from "./notifications.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const notificationsController = new NotificationsController();

/**
 * @swagger
 * /notifications:
 *   post:
 *     summary: Crear notificación
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     description: Este método crea una nueva notificación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - message
 *             properties:
 *               title:
 *                 type: string
 *                 example: Nueva tarea asignada
 *               message:
 *                 type: string
 *                 example: Se te asignó una nueva tarea
 *               type:
 *                 type: string
 *                 example: info
 *     responses:
 *       200:
 *         description: Notificación creada correctamente
 */
router.post(
  "/",
  authMiddleware,
  notificationsController.create
);

/**
 * @swagger
 * /notifications:
 *   get:
 *     summary: Obtener todas las notificaciones
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de notificaciones
 */
router.get(
  "/",
  authMiddleware,
  notificationsController.findAll
);

/**
 * @swagger
 * /notifications/{id}:
 *   get:
 *     summary: Obtener notificación por ID
 *     tags: [Notifications]
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
 *         description: Notificación encontrada
 */
router.get(
  "/:id",
  authMiddleware,
  notificationsController.findById
);

/**
 * @swagger
 * /notifications/{id}:
 *   put:
 *     summary: Actualizar notificación
 *     tags: [Notifications]
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
 *               title:
 *                 type: string
 *                 example: Tarea completada
 *               message:
 *                 type: string
 *                 example: La tarea fue completada correctamente
 *               type:
 *                 type: string
 *                 example: success
 *               isRead:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Notificación actualizada correctamente
 */
router.put(
  "/:id",
  authMiddleware,
  notificationsController.update
);

/**
 * @swagger
 * /notifications/{id}:
 *   delete:
 *     summary: Eliminar notificación
 *     tags: [Notifications]
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
 *         description: Notificación eliminada correctamente
 */
router.delete(
  "/:id",
  authMiddleware,
  notificationsController.delete
);

export default router;