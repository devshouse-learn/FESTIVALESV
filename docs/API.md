# 📡 Documentación de API - Festivales

## 🌐 Base URL

```
http://localhost:3000/api
```

---

## 📋 Tabla de Contenidos

1. [Eventos](#eventos)
2. [Usuarios](#usuarios)
3. [Órdenes](#órdenes)
4. [Códigos de Estado](#códigos-de-estado)
5. [Ejemplos de Uso](#ejemplos-de-uso)

---

## 🎭 Eventos

### Obtener todos los eventos

```http
GET /events
```

**Respuesta (200 OK):**
```json
[
    {
        "id": 1,
        "name": "Festival de Música Electrónica 2026",
        "category": "musica",
        "date": "15 Feb 2026",
        "time": "20:00 - 04:00",
        "location": "Parque Simón Bolívar, Bogotá",
        "description": "Sumérgete en una noche de electrónica...",
        "price": 85000,
        "image": "https://...",
        "featured": true,
        "tickets": 500,
        "ticketsSold": 120,
        "city": "bogota"
    }
]
```

---

### Obtener eventos por ciudad

```http
GET /events/city/{city}
```

**Parámetros:**
- `city` (string): Código de la ciudad (ej: bogota, medellin, cali)

**Ejemplo:**
```http
GET /events/city/bogota
```

**Respuesta (200 OK):**
```json
[
    {
        "id": 1,
        "name": "Festival de Música Electrónica 2026",
        ...
    }
]
```

---

### Obtener un evento específico

```http
GET /events/{id}
```

**Parámetros:**
- `id` (number): ID del evento

**Ejemplo:**
```http
GET /events/1
```

**Respuesta (200 OK):**
```json
{
    "id": 1,
    "name": "Festival de Música Electrónica 2026",
    "category": "musica",
    ...
}
```

**Respuesta (404 Not Found):**
```json
{
    "error": "Evento no encontrado"
}
```

---

### Buscar eventos

```http
GET /events/search/{query}
```

**Parámetros:**
- `query` (string): Término de búsqueda

**Ejemplo:**
```http
GET /events/search/musica
```

**Respuesta (200 OK):**
```json
[
    {
        "id": 1,
        "name": "Festival de Música Electrónica 2026",
        ...
    }
]
```

---

### Obtener eventos por categoría

```http
GET /events/category/{category}
```

**Parámetros:**
- `category` (string): Categoría (musica, teatro, deportes, cultura, gastronomia, tecnologia, negocios)

**Ejemplo:**
```http
GET /events/category/musica
```

---

## 👥 Usuarios

### Registrar usuario

```http
POST /users/register
Content-Type: application/json
```

**Body:**
```json
{
    "email": "usuario@ejemplo.com",
    "password": "contraseña123",
    "name": "Juan Pérez",
    "phone": "3001234567"
}
```

**Respuesta (201 Created):**
```json
{
    "message": "Usuario registrado exitosamente",
    "user": {
        "id": 1,
        "email": "usuario@ejemplo.com",
        "name": "Juan Pérez"
    }
}
```

**Respuesta (400 Bad Request):**
```json
{
    "error": "El usuario ya existe"
}
```

---

### Iniciar sesión

```http
POST /users/login
Content-Type: application/json
```

**Body:**
```json
{
    "email": "usuario@ejemplo.com",
    "password": "contraseña123"
}
```

**Respuesta (200 OK):**
```json
{
    "message": "Login exitoso",
    "token": "uuid-token-here",
    "user": {
        "id": 1,
        "email": "usuario@ejemplo.com",
        "name": "Juan Pérez"
    }
}
```

**Respuesta (401 Unauthorized):**
```json
{
    "error": "Credenciales inválidas"
}
```

---

### Obtener perfil de usuario

```http
GET /users/{id}
```

**Parámetros:**
- `id` (number): ID del usuario

**Respuesta (200 OK):**
```json
{
    "id": 1,
    "email": "usuario@ejemplo.com",
    "name": "Juan Pérez",
    "phone": "3001234567"
}
```

---

### Actualizar perfil de usuario

```http
PUT /users/{id}
Content-Type: application/json
```

**Body:**
```json
{
    "name": "Juan Pérez Nuevo",
    "phone": "3009876543"
}
```

**Respuesta (200 OK):**
```json
{
    "message": "Perfil actualizado",
    "user": {
        "id": 1,
        "email": "usuario@ejemplo.com",
        "name": "Juan Pérez Nuevo",
        "phone": "3009876543"
    }
}
```

---

## 🎟️ Órdenes

### Crear orden (comprar entradas)

```http
POST /orders
Content-Type: application/json
```

**Body:**
```json
{
    "userId": 1,
    "eventId": 1,
    "quantity": 2,
    "totalPrice": 170000
}
```

**Respuesta (201 Created):**
```json
{
    "message": "Compra realizada exitosamente",
    "order": {
        "id": "uuid-order-id",
        "orderId": "ORD-1707122400000",
        "userId": 1,
        "eventId": 1,
        "eventName": "Festival de Música Electrónica 2026",
        "quantity": 2,
        "totalPrice": 170000,
        "status": "completado",
        "createdAt": "2026-02-05T10:00:00.000Z",
        "expiresAt": "2026-02-06T10:00:00.000Z"
    }
}
```

**Respuesta (400 Bad Request):**
```json
{
    "error": "No hay suficientes entradas disponibles"
}
```

---

### Obtener órdenes de un usuario

```http
GET /orders/user/{userId}
```

**Parámetros:**
- `userId` (number): ID del usuario

**Respuesta (200 OK):**
```json
[
    {
        "id": "uuid-order-id",
        "orderId": "ORD-1707122400000",
        "userId": 1,
        "eventId": 1,
        "eventName": "Festival de Música Electrónica 2026",
        "quantity": 2,
        "totalPrice": 170000,
        "status": "completado",
        "createdAt": "2026-02-05T10:00:00.000Z"
    }
]
```

---

### Obtener detalle de una orden

```http
GET /orders/{orderId}
```

**Parámetros:**
- `orderId` (string): ID de la orden

**Respuesta (200 OK):**
```json
{
    "id": "uuid-order-id",
    "orderId": "ORD-1707122400000",
    "userId": 1,
    "eventId": 1,
    "eventName": "Festival de Música Electrónica 2026",
    "quantity": 2,
    "totalPrice": 170000,
    "status": "completado",
    "createdAt": "2026-02-05T10:00:00.000Z"
}
```

---

### Cancelar orden

```http
DELETE /orders/{orderId}
```

**Parámetros:**
- `orderId` (string): ID de la orden

**Respuesta (200 OK):**
```json
{
    "message": "Orden cancelada exitosamente"
}
```

---

## 📊 Códigos de Estado HTTP

| Código | Significado |
|--------|------------|
| 200 | OK - Solicitud exitosa |
| 201 | Created - Recurso creado exitosamente |
| 400 | Bad Request - Solicitud inválida |
| 401 | Unauthorized - No autorizado |
| 404 | Not Found - Recurso no encontrado |
| 500 | Internal Server Error - Error del servidor |

---

## 🧪 Ejemplos de Uso

### Usando JavaScript Fetch

#### Obtener todos los eventos
```javascript
fetch('http://localhost:3000/api/events')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

#### Buscar eventos
```javascript
const searchTerm = 'musica';
fetch(`http://localhost:3000/api/events/search/${searchTerm}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

#### Registrar usuario
```javascript
const userData = {
    email: "nuevo@ejemplo.com",
    password: "contraseña123",
    name: "Carlos López",
    phone: "3001234567"
};

fetch('http://localhost:3000/api/users/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

#### Crear una orden
```javascript
const orderData = {
    userId: 1,
    eventId: 1,
    quantity: 2,
    totalPrice: 170000
};

fetch('http://localhost:3000/api/orders', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

---

### Usando cURL

#### Obtener eventos de Bogotá
```bash
curl -X GET http://localhost:3000/api/events/city/bogota \
  -H "Content-Type: application/json"
```

#### Registrar usuario
```bash
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "nuevo@ejemplo.com",
    "password": "contraseña123",
    "name": "Carlos López",
    "phone": "3001234567"
  }'
```

---

## 🔒 Notas de Seguridad

- En producción, implementa JWT para autenticación
- Las contraseñas deben ser hasheadas con bcrypt
- Usa HTTPS para todas las solicitudes
- Implementa validación más robusta
- Usa variables de entorno para datos sensibles
- Implementa rate limiting para prevenir abuse

---

## 📚 Recursos Adicionales

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [REST API Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://httpwg.org/specs/rfc7231.html#status.codes)

---

Última actualización: 5 de Febrero de 2026
