import swaggerJsdoc from "swagger-jsdoc";

export const openApiSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",

    info: {
      title: "API tasks",
      version: "1.0.0",
      description: "Documentacion de endpoints de la API"
    },

    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Servidor local"
      }
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },

    security: [
      {
        bearerAuth: []
      }
    ]
  },

  apis: ["./src/modules/**/*.routes.ts"]
});