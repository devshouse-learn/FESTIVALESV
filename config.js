/**
 * Archivo de configuración de EventosCO
 * Personaliza aquí los colores, ciudades, categorías, etc.
 */

const CONFIG = {
    // Configuración de colores
    colors: {
        primary: '#FF6B6B',
        primaryDark: '#EE5A52',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
        text: '#2C3E50',
        lightBg: '#F7F9FC'
    },

    // Ciudades disponibles
    cities: [
        { id: 'bogota', name: 'Bogotá', region: 'Cundinamarca', emoji: '🏛️' },
        { id: 'medellin', name: 'Medellín', region: 'Antioquia', emoji: '🌆' },
        { id: 'cali', name: 'Cali', region: 'Valle del Cauca', emoji: '💃' },
        { id: 'barranquilla', name: 'Barranquilla', region: 'Atlántico', emoji: '🏖️' },
        { id: 'cartagena', name: 'Cartagena', region: 'Bolívar', emoji: '🏰' },
        { id: 'bucaramanga', name: 'Bucaramanga', region: 'Santander', emoji: '🌃' },
        { id: 'cucuta', name: 'Cúcuta', region: 'Norte de Santander', emoji: '🌍' },
        { id: 'santa-marta', name: 'Santa Marta', region: 'Magdalena', emoji: '⛰️' },
        { id: 'pereira', name: 'Pereira', region: 'Risaralda', emoji: '☕' },
        { id: 'manizales', name: 'Manizales', region: 'Caldas', emoji: '🌄' },
        { id: 'villavicencio', name: 'Villavicencio', region: 'Meta', emoji: '🤠' },
        { id: 'ibage', name: 'Ibagué', region: 'Tolima', emoji: '🎵' },
        { id: 'neiva', name: 'Neiva', region: 'Huila', emoji: '🎶' },
        { id: 'pasto', name: 'Pasto', region: 'Nariño', emoji: '🎨' },
        { id: 'armenia', name: 'Armenia', region: 'Quindío', emoji: '☕' }
    ],

    // Categorías de eventos
    categories: [
        { id: 'musica', name: 'Música', emoji: '🎵', color: '#FF6B6B' },
        { id: 'deportes', name: 'Deportes', emoji: '⚽', color: '#4ECDC4' },
        { id: 'cultura', name: 'Cultura', emoji: '🎨', color: '#FFE66D' },
        { id: 'gastronomia', name: 'Gastronomía', emoji: '🍽️', color: '#FF8C42' },
        { id: 'tecnologia', name: 'Tecnología', emoji: '💻', color: '#9B59B6' },
        { id: 'negocios', name: 'Negocios', emoji: '💼', color: '#3498DB' }
    ],

    // Configuración de la aplicación
    app: {
        title: 'EventosCO - Descubre eventos en toda Colombia',
        subtitle: 'Tu plataforma de eventos en Colombia',
        defaultCity: 'bogota',
        itemsPerPage: null, // null = mostrar todos
        enableSearch: true,
        enableFilters: true,
        enableFavorites: false, // Para futuras versiones
        enablePagination: false // Para futuras versiones
    },

    // Mensajes personalizados
    messages: {
        noEvents: 'No encontramos eventos con esa búsqueda',
        noEventsCity: 'No hay eventos disponibles en esta ciudad',
        noFeatured: 'No hay eventos destacados en esta ciudad',
        searchPlaceholder: 'Busca por nombre, categoría...',
        selectCity: 'Selecciona tu ciudad:'
    },

    // Formatos
    formats: {
        currency: 'es-CO',
        currencySymbol: '$',
        dateFormat: 'DD MMM YYYY', // Ej: 15 Feb 2026
        timeFormat: 'HH:MM - HH:MM'
    }
};

// Función helper para obtener la información de una ciudad
function getCityInfo(cityId) {
    return CONFIG.cities.find(city => city.id === cityId);
}

// Función helper para obtener la información de una categoría
function getCategoryInfo(categoryId) {
    return CONFIG.categories.find(cat => cat.id === categoryId);
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getCityInfo, getCategoryInfo };
}
