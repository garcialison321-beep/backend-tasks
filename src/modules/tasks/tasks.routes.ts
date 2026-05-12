import { Router } from "express";
import { TasksController } from "./tasks.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const tasksController = new TasksController();

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crear tarea
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     description: Este metodo crea una nueva tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 example: Diseñar backend
 *               description:
 *                 type: string
 *                 example: Crear endpoints REST
 *               projectId:
 *                 type: string
 *                 example: 665f11111111111111111111
 *               priority:
 *                 type: string
 *                 example: high
 *               status:
 *                 type: string
 *                 example: pending
 *     responses:
 *       200:
 *         description: Tarea creada correctamente
 */
router.post(
  "/",
  authMiddleware,
  tasksController.create
);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tareas
 */
router.get(
  "/",
  authMiddleware,
  tasksController.findAll
);

/**
 * @swagger
 * /tasks/me:
 *   get:
 *     summary: Obtener tareas del usuario autenticado
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tareas del usuario
 */
router.get(
  "/me",
  authMiddleware,
  tasksController.findByUser
);

/**
 * @swagger
 * /tasks/project/{projectId}:
 *   get:
 *     summary: Obtener tareas por proyecto
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de tareas del proyecto
 */
router.get(
  "/project/:projectId",
  authMiddleware,
  tasksController.findByProject
);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Obtener tarea por ID
 *     tags: [Tasks]
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
 *         description: Tarea encontrada
 */
router.get(
  "/:id",
  authMiddleware,
  tasksController.findById
);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Eliminar tarea
 *     tags: [Tasks]
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
 *         description: Tarea eliminada correctamente
 */
router.delete(
  "/:id",
  authMiddleware,
  tasksController.delete
);

export default router;