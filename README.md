# Navbar Responsivo y Slider Automático

Este proyecto es una landing page que implementa un menú de navegación responsivo con animaciones, un slider automático de logos de clientes y una sección de contacto, todo adaptado para dispositivos móviles y escritorio.

## Características

- **Navbar responsivo:**  
  Menú de navegación adaptable a diferentes tamaños de pantalla, con animaciones de entrada y salida, y botón toggle para dispositivos móviles.

- **Slider automático de clientes:**  
  Carrusel de imágenes de logos de clientes que se desplaza automáticamente.

- **Animación typewriter:**  
  Efecto máquina de escribir en los textos principales de la portada.

- **Botón "Volver arriba":**  
  Botón flotante que aparece al hacer scroll y permite volver al inicio de la página.

- **Formulario de contacto:**  
  Formulario funcional conectado a [Formspree](https://formspree.io/) para recibir mensajes.

- **Diseño moderno y adaptable:**  
  Uso de CSS moderno, media queries y fuentes personalizadas.

## Estructura del proyecto

```
index.html
README.md
css/
  estilos.css
  fonts&Colors.css
  mediaQueries.css
img/
  ... (imágenes y logos)
js/
  carouselClientes.js
  menuToggle.js
  navBarFixed.js
  scrollSuave.js
  typewriterMain.js
```

## Instalación y uso

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tuusuario/NavbarResponsivo-slider-automatico.git
   ```
2. **Abre el archivo `index.html`** en tu navegador.

No se requieren dependencias adicionales, todo el código es HTML, CSS y JavaScript puro. El proyecto utiliza Bootstrap y Animate.css desde CDN.

## Archivos principales

- [`index.html`](index.html): Estructura principal de la página.
- [`css/estilos.css`](css/estilos.css): Estilos base y responsivos.
- [`js/menuToggle.js`](js/menuToggle.js): Lógica del menú responsivo.
- [`js/carouselClientes.js`](js/carouselClientes.js): Lógica del slider de clientes.
- [`js/typewriterMain.js`](js/typewriterMain.js): Efecto máquina de escribir.
- [`js/navBarFixed.js`](js/navBarFixed.js): Navbar fijo al hacer scroll.
- [`js/scrollSuave.js`](js/scrollSuave.js): Botón "Volver arriba".

## Personalización

- Puedes modificar los logos de clientes en la carpeta `img/clientes/`.
- Cambia los textos principales en `index.html` o en [`js/typewriterMain.js`](js/typewriterMain.js).
- Ajusta los colores y fuentes en [`css/fonts&Colors.css`](css/fonts&Colors.css).

