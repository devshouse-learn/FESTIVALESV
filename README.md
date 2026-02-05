# 🎭 Festivales - Plataforma de Compra de Entradas

Una plataforma moderna para descubrir y comprar entradas para eventos en toda Colombia, inspirada en el estilo y funcionalidad de tuboleta.com.

## � Estructura del Proyecto

```
FESTIVALESV/
├── front/                      # 🎨 Frontend
│   ├── index.html              # Página principal
│   ├── auth.html               # Página de autenticación
│   ├── styles.css              # Estilos CSS
│   ├── app.js                  # Lógica del frontend
│   └── README.md               # Documentación frontend
│
├── back/                       # 🔧 Backend
│   ├── server.js               # Servidor Express
│   ├── package.json            # Dependencias npm
│   ├── data.js                 # Base de datos
│   ├── config.js               # Configuración
│   ├── start.sh                # Script de inicio
│   ├── .env.example            # Variables de entorno
│   ├── routes/                 # API endpoints
│   │   ├── events.js
│   │   ├── users.js
│   │   └── orders.js
│   └── README.md               # Documentación backend
│
├── README.md                   # Este archivo
├── INSTALACION.md              # Guía de instalación
├── API.md                      # Documentación de API
└── PROYECTO_RESUMEN.txt        # Resumen del proyecto
```

## 🚀 Inicio Rápido

### 1. Backend

```bash
cd back
npm install
npm start
```

El backend estará en: `http://localhost:3000`

### 2. Frontend

En otra terminal:

```bash
cd front
python3 -m http.server 8000
```

O abre `front/index.html` con VS Code Live Server.

El frontend estará en: `http://localhost:8000`

## 📋 Características

✨ **Frontend Moderno**
- Diseño responsivo al estilo tuboleta.com
- Búsqueda en tiempo real
- Filtrado por ciudad y categoría
- Modal de detalles de eventos
- Página de autenticación

🔧 **Backend Robusto**
- API REST completa (13 endpoints)
- Gestión de eventos, usuarios y órdenes
- Validación de datos
- CORS habilitado
- Manejo de inventario

📚 **Documentación**
- README.md - Este archivo
- back/README.md - Documentación del backend
- front/README.md - Documentación del frontend
- API.md - Referencia completa de endpoints
- INSTALACION.md - Guía paso a paso

## 🔌 API Endpoints

Base URL: `http://localhost:3000/api`

### Eventos
```
GET /events                    - Todos los eventos
GET /events/city/:city         - Por ciudad
GET /events/:id                - Por ID
GET /events/search/:query      - Buscar
GET /events/category/:cat      - Por categoría
```

### Usuarios
```
POST /users/register           - Registrar
POST /users/login              - Login
GET /users/:id                 - Obtener perfil
PUT /users/:id                 - Actualizar perfil
```

### Órdenes
```
POST /orders                   - Crear orden
GET /orders/user/:userId       - Mis órdenes
GET /orders/:orderId           - Detalle
DELETE /orders/:orderId        - Cancelar
```

Para más detalles, ver [API.md](API.md)

## 🎨 Características Frontend

- Navbar sticky con navegación
- Hero section con búsqueda
- Grid responsivo de eventos
- Eventos destacados
- Modal con detalles completos
- Formularios de login/registro
- Diseño mobile-first
- Animaciones suaves

## 🔧 Características Backend

- Express.js moderno
- 13 endpoints REST funcionales
- Base de datos en memoria (configurable)
- Validación de datos
- Manejo de errores robusto
- CORS habilitado
- Logging de requests

## 📊 Datos Iniciales

- 11 eventos
- 10 ciudades colombianas
- 7 categorías
- 2 usuarios de prueba
- Precios desde gratuito hasta $150,000

## 🎯 Ciudades

Bogotá, Medellín, Cali, Barranquilla, Cartagena, Bucaramanga, Cúcuta, Santa Marta, Pereira, Manizales

## 🎭 Categorías

Música, Teatro, Deportes, Cultura, Gastronomía, Tecnología, Negocios

## 🛠️ Requisitos

- Node.js 14+
- npm o yarn
- Navegador moderno
- Python 3 (opcional, para servir frontend)

## 📱 Responsivo

- ✅ Mobile (< 480px)
- ✅ Tablet (480px - 768px)
- ✅ Desktop (> 768px)

## 🔐 Seguridad (Próximas mejoras)

- Implementar JWT
- Hashear contraseñas
- Validación más robusta
- Rate limiting
- HTTPS

## 📚 Documentación Detallada

- [INSTALACION.md](INSTALACION.md) - Guía paso a paso
- [API.md](API.md) - Referencia de endpoints
- [back/README.md](back/README.md) - Documentación backend
- [front/README.md](front/README.md) - Documentación frontend

## 🚀 Próximas Mejoras

- Conectar a MongoDB
- Sistema de pagos
- Carrito de compras
- Sistema de favoritos
- Dashboard de admin
- Notificaciones por email
- Comentarios y reseñas

## 📝 Notas

- El backend se ejecuta en puerto 3000
- El frontend se sirve en puerto 8000 (con http-server)
- Los datos se almacenan en memoria (se pierden al reiniciar)
- Ver `.env.example` para configurar variables de entorno

## 💡 Tips

1. Abre dos terminales: una para backend, otra para frontend
2. Usa VS Code Live Server para desarrollo frontend más rápido
3. Usa Postman para probar la API
4. Verifica los logs del servidor para ver requests

## 📞 Soporte

Consulta los archivos de documentación incluidos en el proyecto.

## 📄 Licencia

MIT - 2026

---

**¡Listo para usar! Ejecuta el backend y frontend según las instrucciones de inicio rápido.**

