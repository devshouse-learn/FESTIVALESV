// data.js - Base de datos de eventos

const eventsData = {
    bogota: [
        {
            id: 1,
            name: "Feria del Libro Bogotá 2026",
            category: "cultura",
            date: "25 Feb 2026",
            time: "10:00 - 19:00",
            location: "Centro de Convenciones Corferias, Bogotá",
            description: "La feria de libros más importante de Colombia. Lanzamientos de nuevas obras, encuentros con autores, talleres de escritura y actividades para toda la familia. Más de 500 expositores nacionales e internacionales.",
            price: 20000,
            image: "https://images.unsplash.com/photo-150784272343-583f20270319?w=500&h=400&fit=crop",
            featured: true,
            tickets: 5000,
            ticketsSold: 1200
        },
        {
            id: 2,
            name: "Exposición Frida Kahlo: La Vida de una Ícona",
            category: "cultura",
            date: "10 Feb 2026",
            time: "10:00 - 18:00",
            location: "Museo de Arte Moderno de Bogotá (MAMBO), Carrera 3 Este #26-52",
            description: "Exhibición temporal de obras y documentos de Frida Kahlo. Recorridos guiados especializados, talleres artísticos y documentales. Conoce la vida y obra de una de las artistas más importantes del siglo XX.",
            image: "https://images.unsplash.com/photo-1578989078519-e21cc028cb29?w=500&h=400&fit=crop",
            featured: true,
            tickets: 1000,
            ticketsSold: 450
        },
        {
            id: 3,
            name: "Colombia Jazz Festival 2026",
            category: "musica",
            date: "20 Feb 2026",
            time: "19:00 - 23:00",
            location: "Teatro Mayor Julio Mario Santo Domingo, Bogotá",
            description: "Festival de jazz con artistas internacionales y nacionales. Disfruta de música en vivo de la más alta calidad en una de las salas más modernas de América Latina. Múltiples géneros del jazz en una noche inolvidable.",
            price: 95000,
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=400&fit=crop",
            featured: true,
            tickets: 1500,
            ticketsSold: 800
        },
        {
            id: 4,
            name: "Festival de Gastronomía Sostenible Bogotá",
            category: "gastronomia",
            date: "15 Feb 2026",
            time: "12:00 - 22:00",
            location: "Parque Arvi, Cra 7 con Calle 73, Bogotá",
            description: "Celebración de la cocina colombiana sostenible. Chefs reconocidos internacionalmente compartirán sus mejores recetas. Degustaciones gourmet, talleres culinarios y experiencias de sabores únicos.",
            price: 125000,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561231?w=500&h=400&fit=crop",
            featured: false,
            tickets: 800,
            ticketsSold: 350
        },
        {
            id: 5,
            name: "Concierto de Sinfónica Nacional",
            category: "musica",
            date: "28 Feb 2026",
            time: "20:00 - 21:30",
            location: "Teatro Colón, Calle 10 #5-49, Bogotá",
            description: "La Orquesta Sinfónica Nacional presenta un repertorio clásico dirigido por maestros premiados. Una velada de música clásica en uno de los teatros más icónicos de América Latina.",
            price: 80000,
            image: "https://images.unsplash.com/photo-1492623265897-c8ff1ef1bbf4?w=500&h=400&fit=crop",
            featured: false,
            tickets: 1200,
            ticketsSold: 950
        },
        {
            id: 6,
            name: "Festival de Cortometrajes Bogotá",
            category: "cultura",
            date: "12 Feb 2026",
            time: "18:00 - 21:00",
            location: "Cinemateca Distrital, Cra 3 #16-34, Bogotá",
            description: "Proyección de los mejores cortometrajes colombianos e internacionales. Incluye debate con directores, talleres audiovisuales y premiación de las mejores obras.",
            image: "https://images.unsplash.com/photo-1533709752211-118fcffe46ab?w=500&h=400&fit=crop",
            featured: false,
            tickets: 500,
            ticketsSold: 200
        },
        {
            id: 7,
            name: "Maratón de Atletismo Bogotá 2026",
            category: "deportes",
            date: "16 Feb 2026",
            time: "06:30 - 12:00",
            location: "Avda. Cra 7 (entre Calle 0 y Calle 130), Bogotá",
            description: "Carrera de 42 km abierta a participantes nacionales e internacionales. Recorrido por los principales puntos de la ciudad. Apoyo médico, puntos de hidratación y área de llegada con premios y reconocimientos.",
            price: 85000,
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=400&fit=crop",
            featured: false,
            tickets: 3000,
            ticketsSold: 2100
        }
    ],
    medellin: [
        {
            id: 101,
            name: "Festival de Flores Medellín 2026",
            category: "cultura",
            date: "01 Feb 2026",
            time: "09:00 - 22:00",
            location: "Centro de Medellín y diferentes comunas, Medellín",
            description: "El evento más importante de Medellín. Desfiles florales, silleteros de Jericó, eventos culturales, conciertos gratuitos y actividades en toda la ciudad. Celebración de la flora y la tradición colombiana.",
            image: "https://images.unsplash.com/photo-1493762715506-8149f6b40595?w=500&h=400&fit=crop",
            featured: true,
            tickets: -1,
            ticketsSold: 0
        },
        {
            id: 102,
            name: "Concierto de Carlos Vives en Medellín",
            category: "musica",
            date: "22 Feb 2026",
            time: "20:00 - 23:00",
            location: "Atanasio Girardot - Estadio de Fútbol, Medellín",
            description: "El legendarío Carlos Vives en un concierto único. Sus mayores éxitos, colaboraciones especiales y un ambiente de fiesta colombiana. No te pierdas esta noche de música inolvidable.",
            price: 120000,
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=400&fit=crop",
            featured: true,
            tickets: 8000,
            ticketsSold: 5600
        },
        {
            id: 103,
            name: "Festival de Artes Escénicas Medellín",
            category: "teatro",
            date: "18 Feb 2026",
            time: "19:00 - 22:00",
            location: "Teatro Metropolitano, Cra 49c #49-28, Medellín",
            description: "Espectáculos de teatro, danza contemporánea y performance de artistas colombianos e internacionales. Una ventana a las artes escénicas más innovadoras.",
            price: 45000,
            image: "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=500&h=400&fit=crop",
            featured: false,
            tickets: 600,
            ticketsSold: 280
        },
        {
            id: 104,
            name: "Medellín International Film Festival",
            category: "cultura",
            date: "10 Feb 2026",
            time: "17:00 - 23:00",
            location: "Museo de Antioquia y salas de cine, Medellín",
            description: "Festival internacional de cine con proyecciones de películas de 40 países. Competencia internacional, cine colombiano, talleres con cineastas y encuentros especiales.",
            price: 30000,
            image: "https://images.unsplash.com/photo-1533709752211-118fcffe46ab?w=500&h=400&fit=crop",
            featured: true,
            tickets: 2000,
            ticketsSold: 800
        },
        {
            id: 105,
            name: "Feria de Emprendimiento y Tecnología",
            category: "negocios",
            date: "27 Feb 2026",
            time: "08:00 - 18:00",
            location: "Centro de Convenciones Plaza Mayor, Medellín",
            description: "Encuentro de emprendedores, inversionistas y líderes tecnológicos. Charlas inspiradoras, talleres de innovación, pitch de startups y networking con ejecutivos.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
            featured: false,
            tickets: 80000,
            ticketsSold: 0
        }
    ],
    cali: [
        {
            id: 201,
            name: "Festival de Salsa Cali 2026",
            category: "musica",
            date: "08 Feb 2026",
            time: "15:00 - 23:00",
            location: "Cristo Rey (Cerro de Cristo Rey), Cali",
            description: "La capital mundial de la salsa celebra su festival más importante. Competencias de parejas, shows de salseros profesionales, orquestas en vivo, talleres de baile y experiencia sensorial única.",
            price: 50000,
            image: "https://images.unsplash.com/photo-1493514789560-586cb221df37?w=500&h=400&fit=crop",
            featured: true,
            tickets: 3000,
            ticketsSold: 2200
        },
        {
            id: 202,
            name: "Concierto Salsero Grupo Niche",
            category: "musica",
            date: "24 Feb 2026",
            time: "20:00 - 23:30",
            location: "Teatro Cristo Rey, Cali",
            description: "La agrupación más emblemática del género salsero. Disfruta de los mayores éxitos de Grupo Niche en una noche de pura salsa. Ambiente festivo y danzable.",
            price: 85000,
            image: "https://images.unsplash.com/photo-1466375832694-dd98d0d8b0ef?w=500&h=400&fit=crop",
            featured: false,
            tickets: 1500,
            ticketsSold: 900
        },
        {
            id: 203,
            name: "Festival Gastronómico Valluno",
            category: "gastronomia",
            date: "21 Feb 2026",
            time: "12:00 - 21:00",
            location: "Parque Belalcázar, Cali",
            description: "Celebración de la gastronomía del Valle del Cauca. Ajiaco valluno, empanadas, tamales y dulces tradicionales. Chefs locales, talleres de cocina tradicional y actividades familiares.",
            price: 40000,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561231?w=500&h=400&fit=crop",
            featured: false,
            tickets: 1200,
            ticketsSold: 600
        },
        {
            id: 204,
            name: "Festival de Arte Urbano Cali",
            category: "cultura",
            date: "14 Feb 2026",
            time: "10:00 - 18:00",
            location: "Barrio San Antonio, Cali",
            description: "Celebración del street art, grafiti y arte urbano. Artistas pintando en vivo, instalaciones interactivas, exposiciones y competencias. Descubre el lado creativo de Cali.",
            image: "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=400&fit=crop",
            featured: false,
            tickets: 500,
            ticketsSold: 280
        }
    ],
    cartagena: [
        {
            id: 301,
            name: "Festival de Cine de Cartagena 2026",
            category: "cultura",
            date: "05 Feb 2026",
            time: "17:00 - 23:00",
            location: "Centro Histórico - Teatro Heredia, Cartagena",
            description: "Festival internacional con películas de autores reconocidos. Competencia latinoamericana, cine colombiano independiente, charlas magistrales y premiación de las mejores obras.",
            price: 40000,
            image: "https://images.unsplash.com/photo-1533709752211-118fcffe46ab?w=500&h=400&fit=crop",
            featured: true,
            tickets: 800,
            ticketsSold: 450
        },
        {
            id: 302,
            name: "Concierto de Música Caribeña",
            category: "musica",
            date: "20 Feb 2026",
            time: "19:00 - 23:00",
            location: "Castillo San Felipe de Barajas, Cartagena",
            description: "Artistas locales e internacionales interpretan géneros caribeños: cumbia, champeta, vallenato y reggae. Ambiente tropical bajo las estrellas en el Castillo.",
            price: 75000,
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=400&fit=crop",
            featured: false,
            tickets: 1000,
            ticketsSold: 650
        },
        {
            id: 303,
            name: "Festival Gastronómico Costero Cartagena",
            category: "gastronomia",
            date: "17 Feb 2026",
            time: "12:00 - 23:00",
            location: "Playa Bocagrande, Cartagena",
            description: "Delicias del mar Caribe. Ceviches, arroces de mariscos, patacones y mojitos frescos. Chefs reconocidos comparten secretos de cocina costera en talleres interactivos.",
            price: 95000,
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop",
            featured: false,
            tickets: 600,
            ticketsSold: 400
        },
        {
            id: 304,
            name: "Tours Históricos del Centro Amurallado",
            category: "cultura",
            date: "10 Feb 2026",
            time: "09:00 - 17:00",
            location: "Centro Histórico, Cartagena",
            description: "Recorridos guiados por las calles del patrimonio mundial. Historia colonial, leyendas cartageneras, arquitectura colonial y visitas a museos. Experiencia inmersiva en la historia.",
            image: "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=500&h=400&fit=crop",
            featured: false,
            tickets: 400,
            ticketsSold: 200
        }
    ],
    barranquilla: [
        {
            id: 401,
            name: "Carnaval de Barranquilla 2026",
            category: "cultura",
            date: "28 Feb 2026",
            time: "09:00 - 23:00",
            location: "Avenida 20 de Julio y Vía 40, Barranquilla",
            description: "Segundo carnaval más importante de América. Desfiles de comparsas, reinas, orquestas en vivo y ambiente festivo. Celebración de la tradición afroatlántica colombiana.",
            image: "https://images.unsplash.com/photo-1520236060906-9c5ed525b025?w=500&h=400&fit=crop",
            featured: true,
            tickets: 2000,
            ticketsSold: 1200
        },
        {
            id: 402,
            name: "Concierto Vallenato en Barranquilla",
            category: "musica",
            date: "23 Feb 2026",
            time: "19:00 - 22:00",
            location: "Anfiteatro Metropolitano, Barranquilla",
            description: "Encuentro de acordeoneros y cantantes de vallenato. Música de la costa caribeña, historias cantadas y ambiente festivo de la región.",
            price: 60000,
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=400&fit=crop",
            featured: false,
            tickets: 1500,
            ticketsSold: 700
        },
        {
            id: 403,
            name: "Festival de Cevichería Barranquilla",
            category: "gastronomia",
            date: "19 Feb 2026",
            time: "11:00 - 22:00",
            location: "Parque Bolívar, Barranquilla",
            description: "Competencia de cevichería más importante de la costa. Presentación de mejores cevichistas, degustaciones, bebidas tropicales y actividades culinarias.",
            price: 35000,
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop",
            featured: false,
            tickets: 800,
            ticketsSold: 450
        }
    ],
    santamarta: [
        {
            id: 501,
            name: "Festival de Música del Magdalena",
            category: "musica",
            date: "16 Feb 2026",
            time: "18:00 - 23:00",
            location: "Parque Tayrona - Playa, Santa Marta",
            description: "Festival de música tropical con artistas regionales e internacionales. Cumbia, champeta, reggae bajo las palmeras. Experiencia única de música y naturaleza.",
            price: 70000,
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=400&fit=crop",
            featured: true,
            tickets: 1200,
            ticketsSold: 700
        },
        {
            id: 502,
            name: "Tour Ciudad Perdida y Experiencia Indígena",
            category: "cultura",
            date: "12 Feb 2026",
            time: "06:00 - 18:00",
            location: "Parque Arqueológico Ciudad Perdida, Santa Marta",
            description: "Recorrido de 4 días por la Ciudad Perdida de los Tayronas. Incluye guías especializados, campamentos en la selva y encuentro con comunidades indígenas.",
            price: 450000,
            image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop",
            featured: true,
            tickets: 100,
            ticketsSold: 45
        },
        {
            id: 503,
            name: "Festival Gastronómico Costero Santa Marta",
            category: "gastronomia",
            date: "25 Feb 2026",
            time: "12:00 - 21:00",
            location: "Playa Gayraca, Santa Marta",
            description: "Delicias frescas del mar. Mariscos a la brasa, moluscos, pesca del día preparada por chefs. Ambiente de playa con música en vivo.",
            price: 80000,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561231?w=500&h=400&fit=crop",
            featured: false,
            tickets: 600,
            ticketsSold: 300
        }
    ],
    pereira: [
        {
            id: 601,
            name: "Festival del Café Pereira 2026",
            category: "cultura",
            date: "13 Feb 2026",
            time: "09:00 - 18:00",
            location: "Eje Cafetero - Centro de Pereira",
            description: "Celebración del café colombiano de excelencia. Degustaciones de café de diferentes regiones, catas guiadas, origen y procesamiento del café colombiano.",
            image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop",
            featured: true,
            tickets: 1500,
            ticketsSold: 800
        },
        {
            id: 602,
            name: "Concierto Indie Rock Pereira",
            category: "musica",
            date: "21 Feb 2026",
            time: "20:00 - 23:00",
            location: "Teatro Santiago Pérez Triana, Pereira",
            description: "Bandas de rock independiente colombianas e internacionales. Música alternativa, experimental y vanguardista. Ambiente íntimo de sala de conciertos.",
            price: 55000,
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=400&fit=crop",
            featured: false,
            tickets: 800,
            ticketsSold: 500
        },
        {
            id: 603,
            name: "Maratón Cafetera Pereira",
            category: "deportes",
            date: "09 Feb 2026",
            time: "07:00 - 12:00",
            location: "Vía hacia el Eje Cafetero, Pereira",
            description: "Carrera de 10 km y media maratón entre plantaciones de café. Paisaje de las montañas cafeteras, apoyo médico y premios para los ganadores.",
            price: 65000,
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=400&fit=crop",
            featured: false,
            tickets: 2000,
            ticketsSold: 1400
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
