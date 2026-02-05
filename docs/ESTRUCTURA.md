# 📁 Estructura del Proyecto - Festivales

## 🎯 Organización General

El proyecto está dividido en dos carpetas independientes: **front** (frontend) y **back** (backend)

```
FESTIVALESV/
├── 📂 front/              ← Interfaz de usuario
├── 📂 back/               ← Servidor y API
├── 📄 README.md           ← Documentación principal
├── 📄 INSTALACION.md      ← Guía de instalación
├── 📄 API.md              ← Documentación de API
└── 📄 ESTRUCTURA.md       ← Este archivo
```

---

## 🎨 Carpeta FRONT (Frontend)

Contiene toda la interfaz de usuario y lógica del lado del cliente.

```
front/
├── index.html             # Página principal
├── auth.html              # Página de login/registro  
├── styles.css             # Estilos CSS (12.8 KB)
├── app.js                 # Lógica de JavaScript
└── README.md              # Documentación del frontend
```

### 📄 Archivos del Frontend

| Archivo | Tamaño | Descripción |
|---------|--------|-------------|
| `index.html` | 6.5 KB | Página principal con hero, búsqueda, grid de eventos |
| `auth.html` | 11 KB | Formularios de login y registro |
| `styles.css` | 12.8 KB | Diseño responsivo, animaciones |
| `app.js` | 7 KB | Búsqueda, filtrado, modal, eventos |
| `README.md` | - | Documentación específica del frontend |

### 🚀 Ejecutar Frontend

```bash
cd front

# Opción 1: Python HTTP Server
python3 -m http.server 8000

# Opción 2: VS Code Live Server
# Click derecho en index.html → Open with Live Server

# Opción 3: Node http-server
npx http-server
```

Accede a: **http://localhost:8000**

### 🔗 Conexión API

El frontend está configurado para conectarse al backend en:
```
http://localhost:3000/api
```

---

## 🔧 Carpeta BACK (Backend)

Contiene el servidor Express y todos los endpoints de la API.

```
back/
├── server.js              # Servidor Express
├── package.json           # Dependencias npm
├── data.js                # Base de datos en memoria
├── config.js              # Configuración centralizada
├── start.sh               # Script para iniciar
├── .env.example           # Variables de entorno (ejemplo)
├── routes/                # Endpoints de la API
│   ├── events.js          # Gestión de eventos
│   ├── users.js           # Gestión de usuarios
│   └── orders.js          # Gestión de órdenes
└── README.md              # Documentación del backend
```

### 📄 Archivos del Backend

| Archivo | Tamaño | Descripción |
|---------|--------|-------------|
| `server.js` | 3.3 KB | Configuración de Express, rutas, middleware |
| `package.json` | - | Dependencias: express, cors, body-parser, uuid |
| `data.js` | 5.8 KB | 11 eventos, usuarios, órdenes en memoria |
| `config.js` | 3.2 KB | Ciudades, categorías, validaciones |
| `routes/events.js` | 2.9 KB | 5 endpoints para eventos |
| `routes/users.js` | 2.7 KB | 4 endpoints para usuarios |
| `routes/orders.js` | 3.4 KB | 4 endpoints para órdenes |

### 🚀 Ejecutar Backend

```bash
cd back

# Instalar dependencias (primera vez)
npm install

# Iniciar el servidor
npm start
```

El servidor estará en: **http://localhost:3000**

### 📡 API Endpoints

Todos disponibles en: `http://localhost:3000/api/`

```
EVENTOS
GET /events
GET /events/city/{city}
GET /events/{id}
GET /events/search/{query}
GET /events/category/{category}

USUARIOS
POST /users/register
POST /users/login
GET /users/{id}
PUT /users/{id}

ÓRDENES
POST /orders
GET /orders/user/{userId}
GET /orders/{orderId}
DELETE /orders/{orderId}
```

---

## 📂 Raíz del Proyecto

Archivos de documentación y configuración general:

```
FESTIVALESV/
├── README.md              # Documentación principal
├── INSTALACION.md         # Guía paso a paso
├── API.md                 # Referencia de endpoints
├── ESTRUCTURA.md          # Este archivo
├── PROYECTO_RESUMEN.txt   # Resumen visual
├── .git/                  # Repositorio Git
└── .gitignore            # Archivos ignorados por Git
```

---

## 🔄 Flujo de Trabajo

### Para Desarrollar

1. **Terminal 1: Backend**
   ```bash
   cd back
   npm install  # (solo la primera vez)
   npm start
   ```
   Servidor en: http://localhost:3000

2. **Terminal 2: Frontend**
   ```bash
   cd front
   python3 -m http.server 8000
   ```
   Sitio en: http://localhost:8000

3. **Edita archivos** en `front/` o `back/` según necesites
   - Frontend: `front/index.html`, `front/app.js`, `front/styles.css`
   - Backend: `back/server.js`, `back/routes/*.js`, `back/data.js`

### Para Deploy

- **Backend (Heroku)**: Usar carpeta `back/` con `Procfile`
- **Frontend (Vercel/Netlify)**: Usar carpeta `front/`

---

## 📊 Datos y Configuración

### Base de datos (`back/data.js`)

```javascript
eventsData = {
    bogota: [ {...}, {...}, ... ],
    medellin: [ {...}, {...} ],
    cali: [ {...} ],
    cartagena: [ {...} ]
}
```

- 11 eventos totales
- 5 ciudades iniciales
- Precios de $0 a $150,000
- Información: nombre, categoría, fecha, hora, ubicación, descripción, precio, imagen

### Configuración (`back/config.js`)

```javascript
CONFIG = {
    CITIES: [],          // 10 ciudades
    CATEGORIES: [],      // 7 categorías
    PAYMENT_METHODS: [], // Métodos de pago
    VALIDATION: {},      // Reglas de validación
    // ... más configuración
}
```

---

## 🛠️ Dependencias

### Backend (`back/package.json`)

```json
{
  "dependencies": {
    "express": "^4.18.2",      // Framework web
    "cors": "^2.8.5",          // Cross-origin requests
    "body-parser": "^1.20.2",  // Parsear JSON
    "uuid": "^9.0.0"           // Generar IDs
  },
  "devDependencies": {
    "nodemon": "^3.0.1",       // Recarga automática
    "jest": "^29.5.0"          // Testing
  }
}
```

### Frontend

Sin dependencias externas (JavaScript vanilla)
- Usa Font Awesome (CDN)
- No requiere build tools

---

## 🔐 Seguridad

### Frontend
- Validación de formularios
- Protección contra XSS (básica)

### Backend
- Validación de entrada
- CORS configurado
- Manejo de errores
- Datos en variables de entorno (.env)

**Para producción, implementar:**
- JWT para autenticación
- Bcrypt para hashing de contraseñas
- HTTPS obligatorio
- Rate limiting
- Validación más robusta

---

## 📱 Responsivo

```css
/* Breakpoints */
Mobile:  < 480px
Tablet:  480px - 768px
Desktop: > 768px
```

Ambas carpetas tienen diseño responsivo.

---

## 📚 Documentación Adicional

| Archivo | Contenido |
|---------|----------|
| `README.md` | Visión general del proyecto |
| `INSTALACION.md` | Instrucciones paso a paso |
| `API.md` | Referencia completa de endpoints |
| `front/README.md` | Guía específica del frontend |
| `back/README.md` | Guía específica del backend |
| `PROYECTO_RESUMEN.txt` | Resumen visual |

---

## 🚀 Iniciar Proyecto Completo

### Script rápido (Mac/Linux)

```bash
# Terminal 1: Backend
cd /path/to/FESTIVALESV/back
npm install
npm start

# Terminal 2: Frontend  
cd /path/to/FESTIVALESV/front
python3 -m http.server 8000

# Abre navegador
# Frontend: http://localhost:8000
# Backend API: http://localhost:3000/api
```

### Windows

Similar, pero en Command Prompt o PowerShell

---

## 💡 Tips

1. **Desarrollo eficiente**: Abre 2 terminales (una para back, una para front)
2. **VS Code**: Usa Live Server para frontend, nodemon para backend
3. **Testing API**: Usa Postman o Insomnia
4. **Logs**: Verifica la consola del navegador (F12) y terminal del servidor
5. **Cambios**: Los cambios en archivos se reflejan automáticamente (con Live Server/nodemon)

---

## 🔗 Enlaces Útiles

- [Express.js Docs](https://expressjs.com/)
- [REST API Best Practices](https://restfulapi.net/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

Última actualización: 5 de Febrero de 2026
