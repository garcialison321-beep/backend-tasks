import { Router } from "express";
import { TagsController } from "./tags.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const tagsController = new TagsController();

/**
 * @swagger
 * /tags:
 *   post:
 *     summary: Crear tag
 *     tags: [Tags]
 *     security:
 *       - bearerAuth: []
 *     description: Este método crea un nuevo tag
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - color
 *             properties:
 *               name:
 *                 type: string
 *                 example: Frontend
 *               color:
 *                 type: string
 *                 example: #3B82F6
 *     responses:
 *       200:
 *         description: Tag creado correctamente
 */
router.post(
  "/",
  authMiddleware,
  tagsController.create
);

/**
 * @swagger
 * /tags:
 *   get:
 *     summary: Obtener todos los tags
 *     tags: [Tags]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tags
 */
router.get(
  "/",
  authMiddleware,
  tagsController.findAll
);

/**
 * @swagger
 * /tags/{id}:
 *   get:
 *     summary: Obtener tag por ID
 *     tags: [Tags]
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
 *         description: Tag encontrado
 */
router.get(
  "/:id",
  authMiddleware,
  tagsController.findById
);

/**
 * @swagger
 * /tags/{id}:
 *   put:
 *     summary: Actualizar tag
 *     tags: [Tags]
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
 *               name:
 *                 type: string
 *                 example: Backend
 *               color:
 *                 type: string
 *                 example: #22C55E
 *     responses:
 *       200:
 *         description: Tag actualizado correctamente
 */
router.put(
  "/:id",
  authMiddleware,
  tagsController.update
);

/**
 * @swagger
 * /tags/{id}:
 *   delete:
 *     summary: Eliminar tag
 *     tags: [Tags]
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
 *         description: Tag eliminado correctamente
 */
router.delete(
  "/:id",
  authMiddleware,
  tagsController.delete
);

export default router;