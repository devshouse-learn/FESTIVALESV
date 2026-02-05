# 🎨 Frontend - Festivales

## 📂 Estructura

```
front/
├── index.html          # Página principal
├── auth.html           # Página de autenticación
├── styles.css          # Estilos CSS
├── app.js              # Lógica del frontend
└── README.md           # Documentación del frontend
```

## 🚀 Para ejecutar el frontend

### Opción 1: Servir archivos estáticos con Python
```bash
cd front
python3 -m http.server 8000
```
Luego abre: http://localhost:8000

### Opción 2: Usando VS Code Live Server
1. Instala la extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"

### Opción 3: Usando Node.js http-server
```bash
npm install -g http-server
cd front
http-server
```

## 📝 Archivos principales

### index.html
- Navbar con logo y navegación
- Hero section con búsqueda
- Barra de filtros
- Grid de eventos
- Footer

### auth.html
- Formulario de login
- Formulario de registro
- Validación de formularios

### styles.css
- Diseño responsivo
- Variables CSS
- Animaciones
- Media queries para mobile/tablet/desktop

### app.js
- Gestión de eventos
- Búsqueda y filtrado
- Modal de detalles
- Llamadas a API (cuando esté disponible)

## 🔗 API Backend

El frontend está configurado para conectarse a:
```
http://localhost:3000/api
```

Asegúrate de que el backend esté ejecutándose en ese puerto.

## 🎨 Colores

- Primario: #6366f1 (Indigo)
- Secundario: #ec4899 (Pink)
- Acento: #f59e0b (Amber)

## 📱 Responsive

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px
