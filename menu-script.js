// Función para cambiar entre categorías del menú
function changeCategory(categoryName) {
    // Ocultar todas las secciones de categorías
    const allSections = document.querySelectorAll('.category-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remover la clase active de todos los botones
    const allButtons = document.querySelectorAll('.category-btn');
    allButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Mostrar la categoría seleccionada
    const selectedSection = document.getElementById(categoryName);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Activar el botón correspondiente
    const selectedButton = document.querySelector(`[data-category="${categoryName}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
    
    // Agregar efecto de transición suave
    selectedSection.style.opacity = '0';
    selectedSection.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        selectedSection.style.transition = 'all 0.3s ease';
        selectedSection.style.opacity = '1';
        selectedSection.style.transform = 'translateY(0)';
    }, 50);
}

// Función para volver a la página anterior
function goBack() {
    if (document.referrer) {
        window.history.back();
    } else {
        // Si no hay página anterior, ir al generador de QR
        window.location.href = 'qr-simple.html';
    }
}

// Función para agregar efectos de hover a las tarjetas de productos
function addProductCardEffects() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        });
        
        // Agregar efecto de click
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Función para agregar efectos de hover a los botones de categoría
function addCategoryButtonEffects() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            }
        });
        
        // Agregar efecto de click
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Función para agregar efectos de hover al botón de volver
function addBackButtonEffects() {
    const backButton = document.querySelector('.back-btn');
    
    if (backButton) {
        backButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        backButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        backButton.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
}

// Función para agregar navegación con teclado
function addKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Navegar entre categorías con flechas izquierda/derecha
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const activeButton = document.querySelector('.category-btn.active');
            if (activeButton) {
                const allButtons = Array.from(document.querySelectorAll('.category-btn'));
                const currentIndex = allButtons.indexOf(activeButton);
                let newIndex;
                
                if (e.key === 'ArrowLeft') {
                    newIndex = currentIndex > 0 ? currentIndex - 1 : allButtons.length - 1;
                } else {
                    newIndex = currentIndex < allButtons.length - 1 ? currentIndex + 1 : 0;
                }
                
                const newButton = allButtons[newIndex];
                const categoryName = newButton.getAttribute('data-category');
                changeCategory(categoryName);
            }
        }
        
        // Volver con la tecla Escape
        if (e.key === 'Escape') {
            goBack();
        }
    });
}

// Función para agregar soporte táctil mejorado
function addTouchSupport() {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        // Agregar indicadores visuales para dispositivos táctiles
        const touchElements = document.querySelectorAll('.product-card, .category-btn, .back-btn');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
        
        // Agregar mensaje informativo para dispositivos táctiles
        const header = document.querySelector('.header');
        if (header) {
            const touchInfo = document.createElement('div');
            touchInfo.style.marginTop = '10px';
            touchInfo.style.padding = '8px 15px';
            touchInfo.style.background = 'rgba(255, 255, 255, 0.9)';
            touchInfo.style.borderRadius = '20px';
            touchInfo.style.fontSize = '0.9rem';
            touchInfo.style.color = '#666';
            touchInfo.innerHTML = '👆 <strong>Dispositivo táctil:</strong> Desliza para navegar entre categorías';
            header.appendChild(touchInfo);
        }
    }
}

// Función para agregar soporte de gestos de deslizamiento
function addSwipeSupport() {
    let startX = 0;
    let endX = 0;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    document.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            const activeButton = document.querySelector('.category-btn.active');
            if (activeButton) {
                const allButtons = Array.from(document.querySelectorAll('.category-btn'));
                const currentIndex = allButtons.indexOf(activeButton);
                let newIndex;
                
                if (diff > 0) {
                    // Deslizar hacia la izquierda - siguiente categoría
                    newIndex = currentIndex < allButtons.length - 1 ? currentIndex + 1 : 0;
                } else {
                    // Deslizar hacia la derecha - categoría anterior
                    newIndex = currentIndex > 0 ? currentIndex - 1 : allButtons.length - 1;
                }
                
                const newButton = allButtons[newIndex];
                const categoryName = newButton.getAttribute('data-category');
                changeCategory(categoryName);
            }
        }
    }
}

// Función para inicializar la página del menú
function initMenuPage() {
    // Agregar event listeners a los botones de categoría
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categoryName = this.getAttribute('data-category');
            changeCategory(categoryName);
        });
    });
    
    // Agregar efectos visuales
    addProductCardEffects();
    addCategoryButtonEffects();
    addBackButtonEffects();
    
    // Agregar navegación con teclado
    addKeyboardNavigation();
    
    // Agregar soporte táctil
    addTouchSupport();
    addSwipeSupport();
    
    // Mostrar la primera categoría por defecto
    const firstCategory = document.querySelector('.category-btn');
    if (firstCategory) {
        const categoryName = firstCategory.getAttribute('data-category');
        changeCategory(categoryName);
    }
    
    // Agregar indicador de carga
    const menuContent = document.querySelector('.menu-content');
    if (menuContent) {
        menuContent.style.opacity = '0';
        menuContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            menuContent.style.transition = 'all 0.5s ease';
            menuContent.style.opacity = '1';
            menuContent.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Ejecutar la inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initMenuPage);

// Función para actualizar precios en tiempo real (ejemplo)
function updatePrices() {
    // Esta función se puede usar para actualizar precios dinámicamente
    // Por ejemplo, desde una API o base de datos
    console.log('Función para actualizar precios disponible');
}

// Función para buscar productos (funcionalidad futura)
function searchProducts(query) {
    // Esta función se puede implementar para buscar productos
    console.log('Búsqueda de productos:', query);
}

// Función para filtrar productos por precio (funcionalidad futura)
function filterByPrice(minPrice, maxPrice) {
    // Esta función se puede implementar para filtrar por precio
    console.log('Filtro por precio:', minPrice, '-', maxPrice);
}
