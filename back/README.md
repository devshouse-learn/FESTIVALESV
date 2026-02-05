# 🔧 Backend - Festivales

## 📂 Estructura

```
back/
├── server.js           # Servidor Express
├── package.json        # Dependencias npm
├── data.js             # Base de datos de eventos
├── config.js           # Configuración
├── start.sh            # Script para iniciar
├── .env.example        # Variables de entorno
├── routes/             # Rutas de la API
│   ├── events.js       # API de eventos
│   ├── users.js        # API de usuarios
│   └── orders.js       # API de órdenes
└── README.md           # Documentación del backend
```

## 🚀 Para ejecutar el backend

### Paso 1: Instalar dependencias
```bash
cd back
npm install
```

### Paso 2: (Opcional) Configurar variables de entorno
```bash
cp .env.example .env
# Edita .env si necesitas cambiar valores
```

### Paso 3: Iniciar el servidor
```bash
npm start
```

El servidor estará disponible en: **http://localhost:3000**

## 📝 Dependencias

- **express** - Framework web
- **cors** - Para requests cross-origin
- **body-parser** - Para parsear JSON
- **uuid** - Para generar IDs únicos
- **nodemon** (dev) - Para recarga automática en desarrollo

## 🔌 Endpoints API

### Base URL
```
http://localhost:3000/api
```

### Eventos
- `GET /events` - Obtener todos
- `GET /events/city/:city` - Por ciudad
- `GET /events/:id` - Por ID
- `GET /events/search/:query` - Buscar
- `GET /events/category/:category` - Por categoría

### Usuarios
- `POST /users/register` - Registrar
- `POST /users/login` - Login
- `GET /users/:id` - Obtener perfil
- `PUT /users/:id` - Actualizar perfil

### Órdenes
- `POST /orders` - Crear orden
- `GET /orders/user/:userId` - Mis órdenes
- `GET /orders/:orderId` - Detalle
- `DELETE /orders/:orderId` - Cancelar

## 📊 Datos iniciales

El archivo `data.js` contiene:
- 11 eventos iniciales
- 10 ciudades colombianas
- 7 categorías de eventos
- Precios desde gratuito hasta $150,000

## 🔐 Seguridad

Para producción:
1. Implementar JWT
2. Hashear contraseñas con bcrypt
3. Usar variables de entorno
4. Validar datos más robustamente
5. Implementar rate limiting
6. Usar HTTPS

## 💾 Base de datos

Actualmente usa base de datos en memoria. Para persistencia:
1. Conectar MongoDB
2. Crear modelos Mongoose
3. Configurar variables de entorno

## 📝 Variables de entorno

Ver `.env.example` para ver todas las variables disponibles.

## 🧪 Testing

```bash
npm test
```

## 📚 Documentación completa

Ver `API.md` en la raíz del proyecto para documentación detallada de todos los endpoints.
