// Variables globales
let currentCity = 'bogota';
let currentFilter = 'all';
let currentSearch = '';

// Elementos del DOM
const citySelect = document.getElementById('citySelect');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const eventsList = document.getElementById('eventsList');
const highlightedEvents = document.getElementById('highlightedEvents');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderEvents();
    attachEventListeners();
});

// Attach event listeners
function attachEventListeners() {
    // City selector
    citySelect.addEventListener('change', (e) => {
        currentCity = e.target.value;
        currentSearch = '';
        searchInput.value = '';
        renderEvents();
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderEvents();
    });

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderEvents();
        });
    });
}

// Render events
function renderEvents() {
    const events = getEventsByCity(currentCity);
    
    // Filter by search and category
    let filteredEvents = events.filter(event => {
        const matchesSearch = event.name.toLowerCase().includes(currentSearch) ||
                            event.description.toLowerCase().includes(currentSearch) ||
                            event.location.toLowerCase().includes(currentSearch);
        const matchesFilter = currentFilter === 'all' || event.category === currentFilter;
        return matchesSearch && matchesFilter;
    });

    // Separate featured and regular events
    const featured = filteredEvents.filter(e => e.featured);
    const regular = filteredEvents.filter(e => !e.featured);

    // Render highlighted/featured events
    if (featured.length > 0) {
        highlightedEvents.innerHTML = featured.map(event => createEventCard(event, true)).join('');
    } else {
        highlightedEvents.innerHTML = '<div class="no-events" style="grid-column: 1/-1;"><h3>No hay eventos destacados</h3></div>';
    }

    // Render all events
    if (filteredEvents.length > 0) {
        eventsList.innerHTML = filteredEvents.map(event => createEventCard(event)).join('');
    } else {
        eventsList.innerHTML = `
            <div class="no-events" style="grid-column: 1/-1;">
                <h3>🔍 No encontramos eventos</h3>
                <p>Intenta cambiar de ciudad, filtro o búsqueda para ver más eventos.</p>
            </div>
        `;
    }
}

// Create event card HTML
function createEventCard(event, isFeatured = false) {
    const priceText = event.price === 0 ? '¡GRATIS!' : `$${event.price.toLocaleString('es-CO')}`;
    const priceClass = event.price === 0 ? 'free' : '';
    const featuredClass = isFeatured ? 'featured' : '';

    return `
        <div class="event-card ${featuredClass}">
            <div class="event-image">${event.image}</div>
            <div class="event-content">
                <span class="event-category">${getCategoryName(event.category)}</span>
                <h3 class="event-name">${event.name}</h3>
                <div class="event-meta">
                    <div class="event-meta-item">
                        <strong>📅 Fecha:</strong>
                        <span>${event.date}</span>
                    </div>
                    <div class="event-meta-item">
                        <strong>⏰ Hora:</strong>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-meta-item">
                        <strong>📍 Lugar:</strong>
                        <span>${event.location}</span>
                    </div>
                </div>
                <p class="event-description">${event.description}</p>
                <div class="event-price ${priceClass}">${priceText}</div>
            </div>
        </div>
    `;
}

// Get category name with emoji
function getCategoryName(category) {
    const categories = {
        'musica': '🎵 Música',
        'deportes': '⚽ Deportes',
        'cultura': '🎨 Cultura',
        'gastronomia': '🍽️ Gastronomía',
        'tecnologia': '💻 Tecnología',
        'negocios': '💼 Negocios'
    };
    return categories[category] || category;
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Utility: Format price in Colombian pesos
function formatPrice(price) {
    return price.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + F to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.5s ease-out';
        }
    });
}, observerOptions);

// Observer para tarjetas cuando se cargan
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.event-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
});
