# 🎭 EventosCO - Plataforma de Eventos en Colombia

Una aplicación web moderna e interactiva para descubrir eventos en las principales ciudades de Colombia.

## 📋 Características

✨ **15 ciudades colombianas principales:**
- Bogotá
- Medellín
- Cali
- Barranquilla
- Cartagena
- Bucaramanga
- Cúcuta
- Santa Marta
- Pereira
- Manizales
- Villavicencio
- Ibagué
- Neiva
- Pasto
- Armenia

🎪 **Más de 100+ eventos** con información completa:
- Fecha y hora exacta de cada evento
- Ubicación específica en cada ciudad
- Descripción detallada del evento
- Precios en pesos colombianos (COP)
- Categorización por tipo de evento

🎯 **Funcionalidades principales:**
- Selector de ciudad con cambio dinámico de eventos
- Búsqueda en tiempo real por nombre, descripción y ubicación
- Filtros por categoría:
  - 🎵 Música
  - ⚽ Deportes
  - 🎨 Cultura
  - 🍽️ Gastronomía
  - 💻 Tecnología
  - 💼 Negocios
- Sección de eventos destacados
- Diseño responsive (móvil, tablet, desktop)
- Animaciones suaves y modernas
- Interfaz intuitiva y atractiva

## 🎨 Diseño

- **Paleta de colores:** Coral/Naranja (primario), Teal (secundario), Amarillo (acentos)
- **Tipografía:** Segoe UI con jerarquía clara
- **Componentes:** Cards elegantes con hover effects
- **Responsividad:** Mobile-first design

## 📁 Estructura de archivos

```
RY/
├── index.html      # HTML principal
├── styles.css      # Estilos CSS
├── app.js          # Lógica de la aplicación
├── data.js         # Datos de eventos por ciudad
└── README.md       # Este archivo
```

## 🚀 Cómo usar

1. **Abre el archivo `index.html`** en tu navegador web
2. **Selecciona una ciudad** usando el dropdown en el header
3. **Busca eventos** escribiendo en la barra de búsqueda
4. **Filtra por categoría** usando los botones de filtro
5. **Descubre eventos destacados** en la sección principal

## 💻 Requisitos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias
- No requiere servidor backend

## 🎯 Próximos pasos sugeridos

- Conectar con una base de datos para eventos en tiempo real
- Agregar sistema de login de usuarios
- Implementar carrito de compra de entradas
- Agregar calendario interactivo
- Sistema de favoritos/wishlist
- Notificaciones de nuevos eventos
- Integración con redes sociales

## 📊 Datos de eventos

Cada evento incluye:
- **ID única** para identificación
- **Nombre** del evento
- **Categoría** (música, deportes, cultura, etc.)
- **Fecha** en formato "DD Mon YYYY"
- **Hora** con rango de inicio y fin
- **Ubicación** específica de la ciudad
- **Descripción** detallada del evento
- **Precio** en COP (pesos colombianos)
- **Emoji** representativo
- **Estado destacado** (featured o no)

## 🔧 Personalización

Puedes modificar fácilmente:

### Colores (en `styles.css`)
```css
--primary: #FF6B6B;      /* Color principal (coral)*/
--secondary: #4ECDC4;    /* Color secundario (teal) */
--accent: #FFE66D;       /* Color de acentos (amarillo) */
```

### Agregar nuevos eventos
En `data.js`, agrega objetos al array de la ciudad deseada:
```javascript
{
    id: XXX,
    name: "Nombre del Evento",
    category: "musica|deportes|cultura|gastronomia|tecnologia|negocios",
    date: "DD Mon YYYY",
    time: "HH:MM - HH:MM",
    location: "Ubicación en la ciudad",
    description: "Descripción del evento",
    price: 50000,
    image: "🎭",
    featured: false
}
```

## 📱 Compatibilidad

- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1023px)
- ✅ Móvil (< 768px)

## 🎯 Atajos de teclado

- **Ctrl/Cmd + F:** Enfoca la barra de búsqueda

## 👨‍💻 Tecnologías utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Gradients, Animations)
- JavaScript vanilla (ES6+)
- LocalStorage para preferencias

## 📄 Licencia

Este proyecto es de código abierto y puede ser utilizado libremente.

## 📞 Contacto

Para sugerencias, reportar bugs o contribuir a mejoras, por favor contacta al equipo de desarrollo.

---

**¡Disfruta descubriendo eventos increíbles en Colombia! 🎉**

Creado con ❤️ por el equipo de EventosCO
