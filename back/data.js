// data.js - Base de datos de eventos

const eventsData = {
    bogota: [
        {
            id: 1,
            name: "Festival de Música Electrónica 2026",
            category: "musica",
            date: "15 Feb 2026",
            time: "20:00 - 04:00",
            location: "Parque Simón Bolívar, Bogotá",
            description: "Sumérgete en una noche de electrónica de clase mundial con DJs internacionales y nacionales. Experiencia visual con luces y proyecciones 3D.",
            price: 85000,
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=400&fit=crop",
            featured: true,
            tickets: 500,
            ticketsSold: 120
        },
        {
            id: 2,
            name: "Exposición de Arte Contemporáneo",
            category: "cultura",
            date: "18 Feb 2026",
            time: "10:00 - 18:00",
            location: "Museo de Arte Moderno, Bogotá",
            description: "Obras maestras de artistas colombianos e internacionales. Recorridos guiados disponibles.",
            price: 25000,
            image: "https://images.unsplash.com/photo-1578989078519-e21cc028cb29?w=500&h=400&fit=crop",
            featured: false,
            tickets: 200,
            ticketsSold: 50
        },
        {
            id: 3,
            name: "Festival Gastronómico Bogotá 2026",
            category: "gastronomia",
            date: "22 Feb 2026",
            time: "12:00 - 23:00",
            location: "Centro de Convenciones, Bogotá",
            description: "Gastronomía de alta cocina con chefs reconocidos internacionalmente. Degustaciones exclusivas.",
            price: 150000,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561231?w=500&h=400&fit=crop",
            featured: true,
            tickets: 300,
            ticketsSold: 200
        },
        {
            id: 4,
            name: "Concierto de Reggaeton",
            category: "musica",
            date: "25 Feb 2026",
            time: "19:00 - 23:00",
            location: "Estadio Nemesio Camacho, Bogotá",
            description: "Artistas del reggaeton más popular en un mismo escenario. Experiencia musical inolvidable.",
            price: 120000,
            image: "https://images.unsplash.com/photo-1501612780353-f45c65d23e12?w=500&h=400&fit=crop",
            featured: false,
            tickets: 1000,
            ticketsSold: 450
        },
        {
            id: 5,
            name: "Obra de Teatro Clásico",
            category: "teatro",
            date: "20 Feb 2026",
            time: "19:30",
            location: "Teatro Colón, Bogotá",
            description: "Producción teatral de un clásico de la literatura mundial. Interpretación de primer nivel.",
            price: 80000,
            image: "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=500&h=400&fit=crop",
            featured: false,
            tickets: 600,
            ticketsSold: 300
        }
    ],
    medellin: [
        {
            id: 101,
            name: "Feria de Flores Medellín",
            category: "cultura",
            date: "05 Feb 2026",
            time: "09:00 - 18:00",
            location: "Centro de Medellín",
            description: "El evento floral más importante de Colombia. Desfiles, exposiciones y flores de todo el país.",
            price: 0,
            image: "https://images.unsplash.com/photo-1493762715506-8149f6b40595?w=500&h=400&fit=crop",
            featured: true,
            tickets: -1,
            ticketsSold: 0
        },
        {
            id: 102,
            name: "Concierto de Rock Nacional",
            category: "musica",
            date: "20 Feb 2026",
            time: "19:00",
            location: "Atanasio Girardot, Medellín",
            description: "Las mejores bandas de rock colombiano en un solo escenario.",
            price: 95000,
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=400&fit=crop",
            featured: true,
            tickets: 800,
            ticketsSold: 600
        }
    ],
    cali: [
        {
            id: 201,
            name: "Festival de Salsa Cali",
            category: "musica",
            date: "08 Feb 2026",
            time: "15:00 - 23:00",
            location: "Cristo Rey, Cali",
            description: "Encuentro de salseros de todo el mundo. Competiciones, shows en vivo y talleres.",
            price: 50000,
            image: "https://images.unsplash.com/photo-1493514789560-586cb221df37?w=500&h=400&fit=crop",
            featured: true,
            tickets: 2000,
            ticketsSold: 1500
        }
    ],
    cartagena: [
        {
            id: 301,
            name: "Festival de Cine Cartagena",
            category: "cultura",
            date: "12 Feb 2026",
            time: "17:00",
            location: "Centro Histórico, Cartagena",
            description: "Festival internacional de cine con películas de todo el mundo.",
            price: 35000,
            image: "https://images.unsplash.com/photo-1533709752211-118fcffe46ab?w=500&h=400&fit=crop",
            featured: false,
            tickets: 300,
            ticketsSold: 100
        }
    ]
};

// Usuarios (simulados en memoria)
const users = [
    {
        id: 1,
        email: "usuario@ejemplo.com",
        password: "contraseña123",
        name: "Juan Pérez",
        phone: "3001234567"
    }
];

// Órdenes/Compras
const orders = [];

module.exports = {
    eventsData,
    users,
    orders
};
