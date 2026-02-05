// app.js - Frontend - Gestión de eventos y UI

// Variables globales
let currentCity = '';
let currentFilter = 'all';
let currentSearch = '';
let allEvents = [];

// Elementos del DOM
const citySelect = document.getElementById('citySelect');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const eventsList = document.getElementById('eventsList');
const highlightedEvents = document.getElementById('highlightedEvents');
const eventModal = document.getElementById('eventModal');
const closeBtn = document.querySelector('.close');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
    attachEventListeners();
});

// Cargar eventos
async function loadEvents() {
    try {
        // Intentar cargar del backend API
        const response = await fetch('http://localhost:3000/api/events');
        if (response.ok) {
            allEvents = await response.json();
            renderEvents();
        } else {
            console.error('Error al cargar eventos del API');
            // Fallback a datos locales si existen
            if (typeof eventsData !== 'undefined') {
                allEvents = flattenEvents(eventsData);
                renderEvents();
            }
        }
    } catch (error) {
        console.error('Error conectando con el backend:', error);
        // Fallback a datos locales
        if (typeof eventsData !== 'undefined') {
            allEvents = flattenEvents(eventsData);
            renderEvents();
        }
    }
}

// Aplanar estructura de eventos por ciudad
function flattenEvents(data) {
    // Si data es un array (viene del API), retornarlo directamente
    if (Array.isArray(data)) {
        return data;
    }
    
    // Si es un objeto con ciudades, aplanar
    const flat = [];
    for (const city in data) {
        flat.push(...data[city].map(event => ({
            ...event,
            city: city
        })));
    }
    return flat;
}

// Adjuntar event listeners
function attachEventListeners() {
    // Cambio de ciudad
    if (citySelect) {
        citySelect.addEventListener('change', (e) => {
            currentCity = e.target.value;
            renderEvents();
        });
    }

    // Búsqueda
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase();
            renderEvents();
        });
    }

    // Filtros por categoría
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderEvents();
        });
    });

    // Modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    if (eventModal) {
        eventModal.addEventListener('click', (e) => {
            if (e.target === eventModal) {
                closeModal();
            }
        });
    }
}

// Renderizar eventos
function renderEvents() {
    let filteredEvents = [...allEvents];

    // Filtrar por ciudad
    if (currentCity) {
        filteredEvents = filteredEvents.filter(e => e.city === currentCity);
    }

    // Filtrar por búsqueda
    if (currentSearch) {
        filteredEvents = filteredEvents.filter(e => 
            e.name.toLowerCase().includes(currentSearch) ||
            e.description.toLowerCase().includes(currentSearch) ||
            e.location.toLowerCase().includes(currentSearch)
        );
    }

    // Filtrar por categoría
    if (currentFilter !== 'all') {
        filteredEvents = filteredEvents.filter(e => e.category === currentFilter);
    }

    // Separar destacados y normales
    const featured = filteredEvents.filter(e => e.featured);
    const normal = filteredEvents.filter(e => !e.featured);

    // Renderizar destacados
    if (highlightedEvents) {
        if (featured.length > 0) {
            highlightedEvents.innerHTML = featured.map(event => createEventCard(event, true)).join('');
        } else {
            highlightedEvents.innerHTML = '<p class="no-events">No hay eventos destacados disponibles</p>';
        }
    }

    // Renderizar todos
    if (eventsList) {
        if (filteredEvents.length > 0) {
            eventsList.innerHTML = filteredEvents.map(event => createEventCard(event)).join('');
            attachCardListeners();
        } else {
            eventsList.innerHTML = '<p class="no-events">No se encontraron eventos</p>';
        }
    }
}

// Crear tarjeta de evento
function createEventCard(event, isFeatured = false) {
    const ticketsAvailable = event.tickets === -1 ? 'Gratuito' : `${event.tickets - event.ticketsSold} entradas`;
    const priceDisplay = event.price === 0 ? 'GRATUITO' : `$${event.price.toLocaleString()}`;

    return `
        <div class="event-card ${isFeatured ? 'featured' : ''}" data-event-id="${event.id}">
            <img src="${event.image}" alt="${event.name}" class="event-image" onerror="this.src='https://via.placeholder.com/400x300?text=Evento'">
            <div class="event-content">
                <span class="event-badge">${event.category}</span>
                <h3 class="event-title">${event.name}</h3>
                <div class="event-meta">
                    <div class="event-meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${event.date}</span>
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.location}</span>
                    </div>
                </div>
                <div class="event-footer">
                    <span class="event-price">${priceDisplay}</span>
                    <button class="event-btn view-details">Ver detalles</button>
                </div>
            </div>
        </div>
    `;
}

// Adjuntar listeners a tarjetas
function attachCardListeners() {
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
            const eventId = parseInt(card.getAttribute('data-event-id'));
            const event = allEvents.find(e => e.id === eventId);
            if (event) openModal(event);
        });
    });
}

// Abrir modal
function openModal(event) {
    document.getElementById('modalTitle').textContent = event.name;
    document.getElementById('modalImage').src = event.image;
    document.getElementById('modalCategory').textContent = event.category.toUpperCase();
    document.getElementById('modalDate').textContent = event.date;
    document.getElementById('modalTime').textContent = event.time;
    document.getElementById('modalLocation').textContent = event.location;
    document.getElementById('modalDescription').textContent = event.description;
    document.getElementById('modalPrice').textContent = event.price === 0 ? 'GRATUITO' : `$${event.price.toLocaleString()}`;
    
    eventModal.classList.add('active');
}

// Cerrar modal
function closeModal() {
    eventModal.classList.remove('active');
}

// Utilidad para obtener eventos por ciudad (si no hay backend)
function getEventsByCity(city) {
    if (typeof eventsData !== 'undefined' && eventsData[city]) {
        return eventsData[city];
    }
    return [];
}
