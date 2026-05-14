import { Router } from "express";
import { ActivityLogsController } from "./activityLogs.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const activityLogsController = new ActivityLogsController();

/**
 * @swagger
 * /activityLogs:
 *   post:
 *     summary: Crear activity log
 *     tags: [ActivityLogs]
 *     security:
 *       - bearerAuth: []
 *     description: Este método crea un nuevo registro de actividad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - action
 *               - description
 *             properties:
 *               action:
 *                 type: string
 *                 example: CREATE_TASK
 *               description:
 *                 type: string
 *                 example: El usuario creó una nueva tarea
 *               taskId:
 *                 type: string
 *                 example: 665f11111111111111111111
 *     responses:
 *       200:
 *         description: Activity log creado correctamente
 */
router.post(
  "/",
  authMiddleware,
  activityLogsController.create
);

/**
 * @swagger
 * /activityLogs:
 *   get:
 *     summary: Obtener todos los activity logs
 *     tags: [ActivityLogs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de activity logs
 */
router.get(
  "/",
  authMiddleware,
  activityLogsController.findAll
);

/**
 * @swagger
 * /activityLogs/{id}:
 *   get:
 *     summary: Obtener activity log por ID
 *     tags: [ActivityLogs]
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
 *         description: Activity log encontrado
 */
router.get(
  "/:id",
  authMiddleware,
  activityLogsController.findById
);

/**
 * @swagger
 * /activityLogs/{id}:
 *   put:
 *     summary: Actualizar activity log
 *     tags: [ActivityLogs]
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
 *               action:
 *                 type: string
 *                 example: UPDATE_TASK
 *               description:
 *                 type: string
 *                 example: El usuario actualizó una tarea
 *     responses:
 *       200:
 *         description: Activity log actualizado correctamente
 */
router.put(
  "/:id",
  authMiddleware,
  activityLogsController.update
);

/**
 * @swagger
 * /activityLogs/{id}:
 *   delete:
 *     summary: Eliminar activity log
 *     tags: [ActivityLogs]
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
 *         description: Activity log eliminado correctamente
 */
router.delete(
  "/:id",
  authMiddleware,
  activityLogsController.delete
);

export default router;