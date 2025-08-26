# ☕ Menú Digital de Cafetería

Una aplicación web moderna para mostrar el menú de una cafetería mediante código QR, con diseño responsive y funcionalidades interactivas.

## 🚀 Características

### Página Principal (`index.html`)
- **Código QR automático**: Se genera dinámicamente con la URL del menú
- **URL copiable**: Botón para copiar la URL del menú al portapapeles
- **Detección móvil**: Información adicional para dispositivos móviles
- **Diseño moderno**: Interfaz con gradientes y efectos visuales

### Página del Menú (`menu.html`)
- **Categorías organizadas**: Bebidas, Comidas, Postres y Snacks
- **Navegación intuitiva**: Botones de categoría con efectos visuales
- **Diseño responsive**: Adaptable a todos los dispositivos
- **Soporte táctil**: Gestos de deslizamiento para móviles
- **Navegación por teclado**: Flechas y tecla Escape

## 📱 Funcionalidades

- ✅ Generación automática de código QR
- ✅ Copia de URL al portapapeles
- ✅ Navegación entre categorías
- ✅ Efectos visuales y animaciones
- ✅ Soporte completo para móviles
- ✅ Gestos táctiles (deslizar)
- ✅ Navegación por teclado
- ✅ Diseño responsive
- ✅ Efectos de hover y click

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con gradientes y efectos
- **JavaScript ES6+**: Funcionalidad interactiva
- **QRCode.js**: Generación de códigos QR
- **CSS Grid & Flexbox**: Layout responsive
- **CSS Animations**: Transiciones suaves

## 📁 Estructura del Proyecto

```
menu/
├── index.html          # Página principal con código QR
├── menu.html           # Página del menú
├── print-qr.html       # Página optimizada para imprimir código QR
├── styles.css          # Estilos principales
├── menu-styles.css     # Estilos específicos del menú
├── script.js           # JavaScript de la página principal
├── menu-script.js      # JavaScript del menú
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### 1. Configuración Inicial
1. Coloca todos los archivos en tu servidor web
2. Asegúrate de que el servidor soporte archivos estáticos
3. Abre `index.html` en tu navegador

### 2. Generación del Código QR
- El código QR se genera automáticamente al cargar la página
- La URL del menú se actualiza dinámicamente
- Usa el botón "Copiar URL" para compartir el enlace

### 3. Acceso al Menú
- Los clientes escanean el código QR
- Se redirigen automáticamente a `menu.html`
- Navegan entre categorías tocando los botones

## 📱 Personalización

### Cambiar Productos
Edita `menu.html` para modificar:
- Nombres de productos
- Descripciones
- Precios
- Categorías

### Cambiar Estilos
Modifica `styles.css` y `menu-styles.css` para:
- Colores del tema
- Tipografías
- Espaciados
- Efectos visuales

### Cambiar Funcionalidad
Edita `script.js` y `menu-script.js` para:
- Comportamiento del código QR
- Efectos de animación
- Funcionalidades adicionales

## 🌐 Despliegue

### Servidor Local
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx serve .

# Usando PHP
php -S localhost:8000
```

### Servidor Web
- Sube todos los archivos a tu hosting
- Asegúrate de que `index.html` sea la página principal
- El código QR se generará automáticamente

## 🔧 Requisitos del Servidor

- Servidor web (Apache, Nginx, etc.)
- Soporte para archivos estáticos
- HTTPS recomendado para producción
- Navegadores modernos (Chrome, Firefox, Safari, Edge)

## 📱 Compatibilidad

- ✅ **Desktop**: Chrome, Firefox, Safari, Edge
- ✅ **Móvil**: iOS Safari, Chrome Mobile, Samsung Internet
- ✅ **Tablet**: iPad, Android tablets
- ✅ **Navegadores antiguos**: Fallbacks incluidos

## 🎨 Características de Diseño

- **Gradientes modernos**: Fondo con degradado azul-púrpura
- **Glassmorphism**: Efectos de cristal con transparencias
- **Sombras suaves**: Profundidad visual con sombras
- **Animaciones fluidas**: Transiciones de 0.3s para mejor UX
- **Tipografía clara**: Segoe UI para mejor legibilidad

## 🚀 Funcionalidades Futuras

- [ ] Sistema de pedidos online
- [ ] Integración con sistemas de pago
- [ ] Panel de administración
- [ ] Base de datos de productos
- [ ] Notificaciones push
- [ ] Modo offline
- [ ] Múltiples idiomas
- [ ] Temas personalizables

## 📞 Soporte

Para dudas o sugerencias:
- Revisa el código fuente
- Modifica los archivos según tus necesidades
- Personaliza colores y estilos
- Agrega nuevos productos y categorías

## 📄 Licencia

Este proyecto es de código abierto y puede ser usado libremente para fines comerciales y personales.

---

**¡Disfruta tu menú digital! ☕**
