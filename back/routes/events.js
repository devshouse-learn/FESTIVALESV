// routes/events.js - API de eventos

const express = require('express');
const router = express.Router();
const { eventsData } = require('../data');

// Obtener todos los eventos
router.get('/', (req, res) => {
    try {
        const allEvents = [];
        for (const city in eventsData) {
            allEvents.push(...eventsData[city].map(event => ({
                ...event,
                city: city
            })));
        }
        res.json(allEvents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener eventos por ciudad
router.get('/city/:city', (req, res) => {
    try {
        const city = req.params.city;
        const events = eventsData[city] || [];
        res.json(events.map(event => ({
            ...event,
            city: city
        })));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener evento por ID
router.get('/:id', (req, res) => {
    try {
        const eventId = parseInt(req.params.id);
        for (const city in eventsData) {
            const event = eventsData[city].find(e => e.id === eventId);
            if (event) {
                return res.json({
                    ...event,
                    city: city
                });
            }
        }
        res.status(404).json({ error: 'Evento no encontrado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Buscar eventos
router.get('/search/:query', (req, res) => {
    try {
        const query = req.params.query.toLowerCase();
        const results = [];
        
        for (const city in eventsData) {
            eventsData[city].forEach(event => {
                if (
                    event.name.toLowerCase().includes(query) ||
                    event.description.toLowerCase().includes(query) ||
                    event.location.toLowerCase().includes(query)
                ) {
                    results.push({
                        ...event,
                        city: city
                    });
                }
            });
        }
        
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener eventos por categoría
router.get('/category/:category', (req, res) => {
    try {
        const category = req.params.category;
        const results = [];
        
        for (const city in eventsData) {
            eventsData[city]
                .filter(e => e.category === category)
                .forEach(event => {
                    results.push({
                        ...event,
                        city: city
                    });
                });
        }
        
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
