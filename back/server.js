// server.js - Backend con Express.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Importar datos y rutas
const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');

// ==================== MIDDLEWARE ====================
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
}));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '.')));

// Logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// ==================== RUTAS API ====================
app.use('/api/events', eventsRouter);
app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);

// ==================== RUTAS PRINCIPALES ====================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok',
        message: 'Servidor ejecutándose correctamente',
        timestamp: new Date()
    });
});

// Información del servidor
app.get('/api/info', (req, res) => {
    res.json({
        name: 'Festivales API',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development'
    });
});

// ==================== MANEJO DE ERRORES ====================
// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Ruta no encontrada',
        path: req.path,
        method: req.method
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(err.status || 500).json({
        error: err.message || 'Error interno del servidor',
        status: err.status || 500
    });
});

// ==================== INICIAR SERVIDOR ====================
const server = app.listen(PORT, () => {
    console.log('\n');
    console.log('🎭 ╔════════════════════════════════════════╗');
    console.log('🎭 ║  FESTIVALES - PLATAFORMA DE EVENTOS    ║');
    console.log('🎭 ╚════════════════════════════════════════╝');
    console.log(`📡 Servidor ejecutándose en: http://localhost:${PORT}`);
    console.log(`🔗 API Base URL: http://localhost:${PORT}/api`);
    console.log(`🌍 CORS habilitado para: ${process.env.CORS_ORIGIN || 'todas las direcciones'}`);
    console.log(`⚙️  Ambiente: ${process.env.NODE_ENV || 'development'}`);
    console.log('\n✅ Presiona Ctrl+C para detener el servidor\n');
});

// Manejo de señales de parada
process.on('SIGINT', () => {
    console.log('\n\n🛑 Servidor detenido por el usuario');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n\n🛑 Servidor detenido');
    process.exit(0);
});

module.exports = app;
