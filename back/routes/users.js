// routes/users.js - API de usuarios

const express = require('express');
const router = express.Router();
const { users } = require('../data');
const { v4: uuidv4 } = require('uuid');

// Registro de usuario
router.post('/register', (req, res) => {
    try {
        const { email, password, name, phone } = req.body;

        // Validar que el usuario no exista
        if (users.find(u => u.email === email)) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }

        // Crear nuevo usuario
        const newUser = {
            id: users.length + 1,
            email,
            password, // En producción, hashear la contraseña
            name,
            phone
        };

        users.push(newUser);
        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            user: { id: newUser.id, email, name }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login
router.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Generar token (en producción usar JWT)
        const token = uuidv4();
        res.json({
            message: 'Login exitoso',
            token,
            user: { id: user.id, email: user.email, name: user.name }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener perfil de usuario
router.get('/:id', (req, res) => {
    try {
        const user = users.find(u => u.id === parseInt(req.params.id));
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json({ id: user.id, email: user.email, name: user.name, phone: user.phone });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar perfil
router.put('/:id', (req, res) => {
    try {
        const user = users.find(u => u.id === parseInt(req.params.id));
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const { name, phone } = req.body;
        if (name) user.name = name;
        if (phone) user.phone = phone;

        res.json({
            message: 'Perfil actualizado',
            user: { id: user.id, email: user.email, name: user.name, phone: user.phone }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
