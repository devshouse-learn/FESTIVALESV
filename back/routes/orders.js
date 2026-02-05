// routes/orders.js - API de órdenes/compras

const express = require('express');
const router = express.Router();
const { orders, eventsData } = require('../data');
const { v4: uuidv4 } = require('uuid');

// Crear orden (compra de entradas)
router.post('/', (req, res) => {
    try {
        const { userId, eventId, quantity, totalPrice } = req.body;

        if (!userId || !eventId || !quantity || !totalPrice) {
            return res.status(400).json({ error: 'Datos incompletos' });
        }

        // Verificar que el evento exista
        let event = null;
        for (const city in eventsData) {
            const found = eventsData[city].find(e => e.id === eventId);
            if (found) {
                event = found;
                break;
            }
        }

        if (!event) {
            return res.status(404).json({ error: 'Evento no encontrado' });
        }

        // Verificar disponibilidad de entradas
        if (event.tickets !== -1 && event.ticketsSold + quantity > event.tickets) {
            return res.status(400).json({ error: 'No hay suficientes entradas disponibles' });
        }

        // Crear orden
        const order = {
            id: uuidv4(),
            orderId: `ORD-${Date.now()}`,
            userId,
            eventId,
            eventName: event.name,
            quantity,
            totalPrice,
            status: 'completado',
            createdAt: new Date(),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // Válido por 24 horas
        };

        // Actualizar tickets vendidos
        event.ticketsSold += quantity;
        orders.push(order);

        res.status(201).json({
            message: 'Compra realizada exitosamente',
            order
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener órdenes de un usuario
router.get('/user/:userId', (req, res) => {
    try {
        const userId = parseInt(req.params.userId);
        const userOrders = orders.filter(o => o.userId === userId);
        res.json(userOrders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener detalle de una orden
router.get('/:orderId', (req, res) => {
    try {
        const order = orders.find(o => o.id === req.params.orderId);
        if (!order) {
            return res.status(404).json({ error: 'Orden no encontrada' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Cancelar orden
router.delete('/:orderId', (req, res) => {
    try {
        const orderIndex = orders.findIndex(o => o.id === req.params.orderId);
        if (orderIndex === -1) {
            return res.status(404).json({ error: 'Orden no encontrada' });
        }

        const order = orders[orderIndex];
        
        // Restaurar entradas
        for (const city in eventsData) {
            const event = eventsData[city].find(e => e.id === order.eventId);
            if (event) {
                event.ticketsSold = Math.max(0, event.ticketsSold - order.quantity);
                break;
            }
        }

        // Eliminar orden
        orders.splice(orderIndex, 1);

        res.json({ message: 'Orden cancelada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
