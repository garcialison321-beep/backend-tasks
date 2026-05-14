import swaggerJsdoc from "swagger-jsdoc";

export const openApiSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",

    info: {
      title: "API Tasks",
      version: "1.0.0",
      description: "Documentación de endpoints de la API",
    },

    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Servidor local",
      },

      {
        url: "https://backend-tasks-api.onrender.com/api/v1/docs",
       description: "Servidor produccion"
      }

    ],

    tags: [
      {
        name: "Users",
        description: "Endpoints de usuarios",
      },
      {
        name: "Auth",
        description: "Endpoints de autenticación",
      },
      {
        name: "Tasks",
        description: "Endpoints de tareas",
      },
      {
        name: "Tags",
        description: "Endpoints de tags",
      },
      {
        name: "Notifications",
        description: "Endpoints de notificaciones",
      },
      {
        name: "Attachments",
        description: "Endpoints de attachments",
      },
      {
        name: "ActivityLogs",
        description: "Endpoints de activity logs",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ["./src/modules/**/*.routes.ts"],
});