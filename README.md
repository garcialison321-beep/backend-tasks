#  Backend Tasks API

API REST construida con **Node.js, Express, TypeScript y MongoDB**, que incluye autenticación JWT, módulos organizados por funcionalidades y documentación con Swagger/OpenAPI.

## Características

- 🔐 Autenticación con JWT (login y registro)
- 👤 Módulo de usuarios (CRUD)
- 📋 Módulo de tareas (CRUD completo)
- 🏷️ Tags
- 🔔 Notificaciones
- 📎 Attachments
- 📊 Activity Logs
- 📁 Estructura modular escalable
- 🧠 Validaciones con Zod
- 🗄️ Base de datos MongoDB
- 📄 Documentación con Swagger/OpenAPI
- 🌐 Desplegado en Render

## Tecnologías

- Node.js
- Express
- TypeScript
- MongoDB
- JWT
- Swagger / OpenAPI
- Zod
- Helmet, CORS, Morgan

## Estructura del proyecto
src/
│
├── config/
├── middlewares/
├── modules/
│ ├── auth/
│ ├── users/
│ ├── tasks/
│ ├── tags/
│ ├── notifications/
│ ├── attachments/
│ └── activityLogs/
│
├── api/v1/
├── app.ts
└── server.ts


## Instalación y ejecución

### 1. Clonar repositorio
```bash
git clone https://github.com/garcialison321-beep/backend-tasks.git
2. Instalar dependencias
npm install
3. Configurar variables de entorno

Crear archivo .env:

PORT=3000
MONGO_URI=mongodb://Alison:Alison06@ac-6z59i4p-shard-00-00.27h4zok.mongodb.net:27017,ac-6z59i4p-shard-00-01.27h4zok.mongodb.net:27017,ac-6z59i4p-shard-00-02.27h4zok.mongodb.net:27017/?ssl=true&replicaSet=atlas-l9ue5l-shard-0&authSource=admin&appName=Cluster0
MONGO_DB_NAME=backenddb
JWT_SECRET=miclave123

4. Ejecutar en desarrollo
npm run dev
5. Compilar proyecto
npm run build
6. Ejecutar en producción
npm start

-Documentación API (Swagger)

Una vez el servidor esté en ejecución:

Local:
http://localhost:3000/api/v1/docs
Producción (Render):
https://tu-app.onrender.com/api/v1/docs
🌐Deploy

El proyecto está desplegado en Render:

url: https://backend-tasks-api.onrender.com

-Autenticación

La API usa JWT Bearer Token.

Ejemplo:

Authorization: Bearer <token>

-Autor

Alison Garcia
