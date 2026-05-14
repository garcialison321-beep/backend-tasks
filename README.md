# 🚀 Backend Tasks API

## 📌 Descripción del proyecto

Backend Tasks API es una aplicación REST diseñada para la gestión de tareas colaborativas. Permite a los usuarios registrarse, autenticarse y administrar tareas con diferentes niveles de organización como tags, notificaciones, adjuntos y registros de actividad.

El proyecto está construido con Node.js, Express y TypeScript, utilizando MongoDB como base de datos y JWT para autenticación segura. Además, incluye documentación completa con Swagger/OpenAPI y está desplegado en Render.

---

## ⚙️ Características

- 🔐 Autenticación con JWT (registro e inicio de sesión)
- 👤 Módulo de usuarios con CRUD completo
- 📋 Gestión de tareas (CRUD completo)
- 🏷️ Sistema de etiquetas (Tags)
- 🔔 Notificaciones de eventos
- 📎 Adjuntos a tareas
- 📊 Registro de actividad (Activity Logs)
- 📁 Arquitectura modular escalable
- 🧠 Validaciones con Zod
- 🗄️ Base de datos MongoDB
- 📄 Documentación con Swagger/OpenAPI
- 🌐 Despliegue en Render

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- MongoDB
- JWT
- Swagger / OpenAPI
- Zod
- Helmet
- CORS
- Morgan

---

## 📁 Estructura del proyecto


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


---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/garcialison321-beep/backend-tasks.git
2. Instalar dependencias
npm install
3. Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto:

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
📄 Documentación API (Swagger)

Una vez el servidor esté en ejecución:

Local:
http://localhost:3000/api/v1/docs
Producción (Render):
https://backend-tasks-api.onrender.com/api/v1/docs
🌐 Deploy

El proyecto está desplegado en Render:

👉 https://backend-tasks-api.onrender.com

🔐 Autenticación

La API utiliza JWT (Bearer Token).

Ejemplo de uso:

Authorization: Bearer <token>
👨‍💻 Autor

Alison Garcia