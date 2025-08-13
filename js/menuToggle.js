// Elementos del DOM
const menuToggle = document.getElementById("toggle");
const showMenu = document.getElementById("containerNavBar");
const menuItems = document.querySelectorAll(".itemMenuCelu");
const menuItemsRRSS = document.querySelectorAll(".itemMenuRRSS");

/**
 * Despliega o cierra el menú con animaciones apropiadas
 */
function deployMenu() {
    if (!menuToggle || !showMenu) {
        return; // Salida silenciosa si faltan elementos
    }
    
    // Verificar si el menú está actualmente abierto
    const isMenuOpen = showMenu.classList.contains("showMenu");
    
    if (isMenuOpen) {
        // Si está abierto, cerrarlo con animación
        closeMenu();
    } else {
        // Si está cerrado, abrirlo con animación
        menuToggle.classList.add("active");
        showMenu.classList.add("showMenu");
    }
}

/**
 * Cierra el menú con animación de salida
 */
function closeMenu() {
    if (!menuToggle || !showMenu) {
        return; // Salida silenciosa si faltan elementos
    }
    
    // Agregar clase de animación de salida
    showMenu.classList.add("hideMenu");
    menuToggle.classList.remove("active");
    
    // Remover las clases después de que termine la animación
    setTimeout(() => {
        showMenu.classList.remove("showMenu", "hideMenu");
    }, 500); // 500ms coincide con la duración de la animación CSS
}

/**
 * Inicializa los event listeners del menú
 */
function initializeMenuToggle() {
    // Verificar que el elemento toggle existe antes de agregar el event listener
    if (menuToggle) {
        menuToggle.addEventListener("click", deployMenu);
    }

    // Agregar event listeners a los elementos del menú principal
    if (menuItems.length > 0) {
        menuItems.forEach(item => {
            item.addEventListener("click", closeMenu);
        });
    }

    // Agregar event listeners a los elementos del menú de redes sociales
    if (menuItemsRRSS.length > 0) {
        menuItemsRRSS.forEach(item => {
            item.addEventListener("click", closeMenu);
        });
    }

    // Event listener para cerrar el menú con la tecla Escape
    window.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            closeMenu();
        }
    });
}

// Inicializar el menú cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initializeMenuToggle);