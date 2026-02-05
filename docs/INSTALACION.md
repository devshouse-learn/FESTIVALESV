# 📖 Guía de Instalación - Festivales

## ✅ Requisitos Previos

Antes de comenzar, asegúrate de tener instalados:

- **Node.js** (v14 o superior) → [Descargar](https://nodejs.org/)
- **npm** (viene con Node.js)
- **Git** (opcional, para clonar el proyecto)

### Verificar instalación

```bash
node --version
npm --version
```

---

## 🚀 Instalación Rápida (3 pasos)

### 1️⃣ Navega a la carpeta del proyecto

```bash
cd /Users/ibacrea/Downloads/FESTIVALESV
```

### 2️⃣ Instala las dependencias

```bash
npm install
```

Este comando descargará e instalará todas las librerías necesarias en la carpeta `node_modules/`.

### 3️⃣ Inicia el servidor

```bash
npm start
```

¡Listo! El servidor estará ejecutándose en **http://localhost:3000**

---

## 🌐 Acceder a la Aplicación

Una vez que el servidor esté ejecutándose:

1. Abre tu navegador preferido
2. Navega a: **http://localhost:3000**
3. ¡Disfruta explorando eventos!

---

## 🛠️ Comandos Disponibles

### Desarrollo con recarga automática
```bash
npm run dev
```
*Requiere tener instalado `nodemon` (se instala con `npm install`)*

### Ejecutar en modo producción
```bash
npm start
```

### Ejecutar tests (cuando estén configurados)
```bash
npm test
```

---

## 📁 Estructura Creada

```
FESTIVALESV/
├── 📄 index.html              # Página principal
├── 📄 auth.html               # Página de login/registro
├── 🎨 styles.css              # Estilos CSS
├── 📝 app.js                  # Lógica del frontend
├── ⚙️ config.js               # Configuración
├── 📊 data.js                 # Base de datos de eventos
├── 🔧 server.js               # Servidor Express
├── 📦 package.json            # Dependencias
├── 📚 README.md               # Documentación completa
├── 📋 INSTALACION.md          # Este archivo
├── 🚀 start.sh                # Script para iniciar
├── .env.example               # Variables de entorno ejemplo
├── .gitignore                 # Archivos a ignorar en Git
└── 📂 routes/
    ├── events.js              # API de eventos
    ├── users.js               # API de usuarios
    └── orders.js              # API de órdenes
```

---

## 🐛 Solucionar Problemas Comunes

### Error: "npm: command not found"
```bash
# Instala Node.js desde https://nodejs.org/
# Luego reinicia tu terminal
```

### Error: "EADDRINUSE: address already in use :::3000"
El puerto 3000 ya está en uso. Opciones:
```bash
# Opción 1: Usar otro puerto
PORT=3001 npm start

# Opción 2: Matar el proceso en el puerto 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9
```

### Error: "Cannot find module 'express'"
```bash
# Reinstala las dependencias
rm -rf node_modules package-lock.json
npm install
```

### La página no se carga
1. Verifica que http://localhost:3000 esté correcta
2. Revisa la consola del navegador (F12) para ver errores
3. Comprueba que el servidor esté ejecutándose (deberías ver mensajes en la terminal)

---

## 🔧 Variables de Entorno (Opcional)

Para usar variables de entorno:

1. Copia `.env.example` a `.env`
   ```bash
   cp .env.example .env
   ```

2. Edita los valores según necesites

3. Reinicia el servidor

---

## 📱 Características Disponibles

✅ **Frontend**
- Búsqueda de eventos
- Filtrado por ciudad y categoría
- Visualización de detalles en modal
- Interfaz responsiva
- Autenticación (página de login/registro)

✅ **Backend**
- API REST completa
- Gestión de eventos
- Gestión de usuarios
- Sistema de órdenes/compras
- Validación de datos

---

## 🔗 Endpoints de la API

Todos los endpoints están disponibles en:
```
http://localhost:3000/api/
```

### Ejemplos:

**Obtener todos los eventos:**
```
GET http://localhost:3000/api/events
```

**Obtener eventos de una ciudad:**
```
GET http://localhost:3000/api/events/city/bogota
```

**Buscar eventos:**
```
GET http://localhost:3000/api/events/search/musica
```

Para más detalles, ve al archivo [README.md](README.md)

---

## 📊 Base de Datos (Desarrollo)

En desarrollo, los datos se almacenan en memoria (se pierden al reiniciar).

Para usar una base de datos real:
1. Instala MongoDB
2. Configura la conexión en `.env`
3. Crea modelos Mongoose

---

## 🚀 Próximos Pasos

### Personalización
1. Cambia los colores en `styles.css` (variables CSS)
2. Agrega más eventos en `data.js`
3. Modifica el contenido en `index.html`

### Integración con Backend Real
1. Conecta la API con una base de datos
2. Implementa autenticación con JWT
3. Agrega pagos con Stripe

### Deploy
- **Heroku**: Ver instrucciones en README.md
- **Vercel**: Para el frontend estático
- **AWS**: Para mayor escalabilidad

---

## 💡 Tips Útiles

### Ver logs del servidor
```bash
npm start
# Los logs aparecen en la terminal
```

### Modo incógnito en el navegador
Abre el navegador en modo incógnito (Ctrl+Shift+P) para evitar caché:
```
http://localhost:3000
```

### Limpiar caché
- Chrome: Ctrl+Shift+Delete
- Firefox: Ctrl+Shift+Delete
- Safari: Cmd+Option+E

---

## 📞 Soporte

Si encuentras problemas:
1. Verifica los requisitos previos ✓
2. Revisa la consola del navegador (F12)
3. Revisa los logs del servidor
4. Consulta la documentación en README.md

---

## 📝 Notas Importantes

- El servidor debe estar ejecutándose para que funcione la aplicación
- En desarrollo, los datos se almacenan en memoria
- Para producción, implementa una base de datos real
- Cambia todas las contraseñas antes de deployar

---

¡Ahora estás listo para usar Festivales! 🎉

Haz clic en http://localhost:3000 cuando el servidor esté ejecutándose.
