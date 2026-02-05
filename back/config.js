// config.js - Configuración de la aplicación

const CONFIG = {
    // Servidor
    SERVER: {
        API_BASE_URL: 'http://localhost:3000/api',
        TIMEOUT: 5000
    },

    // Aplicación
    APP: {
        NAME: 'Festivales Colombia',
        VERSION: '1.0.0',
        DESCRIPTION: 'Plataforma de compra de entradas para eventos en Colombia'
    },

    // Ciudades disponibles
    CITIES: [
        { code: 'bogota', name: 'Bogotá' },
        { code: 'medellin', name: 'Medellín' },
        { code: 'cali', name: 'Cali' },
        { code: 'barranquilla', name: 'Barranquilla' },
        { code: 'cartagena', name: 'Cartagena' },
        { code: 'bucaramanga', name: 'Bucaramanga' },
        { code: 'cucuta', name: 'Cúcuta' },
        { code: 'santa-marta', name: 'Santa Marta' },
        { code: 'pereira', name: 'Pereira' },
        { code: 'manizales', name: 'Manizales' }
    ],

    // Categorías de eventos
    CATEGORIES: [
        { id: 'musica', name: 'Música', icon: 'fas fa-music' },
        { id: 'teatro', name: 'Teatro', icon: 'fas fa-theater-masks' },
        { id: 'deportes', name: 'Deportes', icon: 'fas fa-football-ball' },
        { id: 'cultura', name: 'Cultura', icon: 'fas fa-palette' },
        { id: 'gastronomia', name: 'Gastronomía', icon: 'fas fa-utensils' },
        { id: 'tecnologia', name: 'Tecnología', icon: 'fas fa-laptop' },
        { id: 'negocios', name: 'Negocios', icon: 'fas fa-briefcase' }
    ],

    // Métodos de pago
    PAYMENT_METHODS: [
        { id: 'credit_card', name: 'Tarjeta de Crédito' },
        { id: 'debit_card', name: 'Tarjeta Débito' },
        { id: 'paypal', name: 'PayPal' },
        { id: 'pse', name: 'PSE' },
        { id: 'bank_transfer', name: 'Transferencia Bancaria' }
    ],

    // Validaciones
    VALIDATION: {
        MIN_PASSWORD_LENGTH: 6,
        EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        PHONE_REGEX: /^[0-9]{10}$/
    },

    // Mensajes de error
    ERRORS: {
        NETWORK_ERROR: 'Error de conexión. Intenta de nuevo.',
        SERVER_ERROR: 'Error del servidor. Intenta más tarde.',
        VALIDATION_ERROR: 'Por favor, verifica los datos ingresados.',
        NOT_FOUND: 'El recurso no fue encontrado.'
    },

    // Mensajes de éxito
    SUCCESS: {
        LOGIN: 'Bienvenido de vuelta!',
        REGISTER: 'Cuenta creada exitosamente',
        PURCHASE: 'Compra realizada con éxito',
        UPDATE: 'Datos actualizados correctamente'
    }
};

// Función para obtener la URL base de la API
function getApiUrl(endpoint) {
    return `${CONFIG.SERVER.API_BASE_URL}${endpoint}`;
}

// Función para buscar una categoría por ID
function getCategoryById(categoryId) {
    return CONFIG.CATEGORIES.find(cat => cat.id === categoryId);
}

// Función para buscar una ciudad por código
function getCityByCode(code) {
    return CONFIG.CITIES.find(city => city.code === code);
}

// Exportar para Node.js (si es necesario)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getApiUrl, getCategoryById, getCityByCode };
}
