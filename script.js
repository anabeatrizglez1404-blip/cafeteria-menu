// Función para generar el código QR
function generateQRCode() {
    // Obtener la URL actual y crear la URL del menú
    const currentUrl = window.location.href;
    const menuUrl = currentUrl.replace('index.html', 'menu.html');
    
    // Actualizar la URL mostrada
    document.getElementById('menuUrl').textContent = menuUrl;
    
    // Generar el código QR
    const qrCodeElement = document.getElementById('qrCode');
    
    // Limpiar el contenedor
    qrCodeElement.innerHTML = '';
    
    // Crear el código QR usando la librería QRCode
    QRCode.toCanvas(qrCodeElement, menuUrl, {
        width: 200,
        height: 200,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        }
    }, function (error) {
        if (error) {
            console.error('Error generando código QR:', error);
            qrCodeElement.innerHTML = '<p style="color: red;">Error generando código QR</p>';
        }
    });
}

// Función para copiar la URL del menú
function copyUrl() {
    const menuUrl = document.getElementById('menuUrl').textContent;
    
    // Usar la API moderna de clipboard si está disponible
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(menuUrl).then(() => {
            showCopySuccess();
        }).catch(err => {
            console.error('Error copiando al clipboard:', err);
            fallbackCopyTextToClipboard(menuUrl);
        });
    } else {
        // Fallback para navegadores más antiguos
        fallbackCopyTextToClipboard(menuUrl);
    }
}

// Función fallback para copiar texto
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess();
        } else {
            showCopyError();
        }
    } catch (err) {
        console.error('Error en fallback copy:', err);
        showCopyError();
    }
    
    document.body.removeChild(textArea);
}

// Función para mostrar mensaje de éxito al copiar
function showCopySuccess() {
    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.textContent;
    
    copyBtn.textContent = '¡Copiado!';
    copyBtn.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
    
    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
    }, 2000);
}

// Función para mostrar mensaje de error al copiar
function showCopyError() {
    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.textContent;
    
    copyBtn.textContent = 'Error al copiar';
    copyBtn.style.background = 'linear-gradient(45deg, #dc3545, #c82333)';
    
    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
    }, 2000);
}

// Función para detectar si estamos en un dispositivo móvil
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Función para mostrar información adicional en dispositivos móviles
function showMobileInfo() {
    if (isMobileDevice()) {
        const qrInfo = document.querySelector('.qr-info');
        const mobileInfo = document.createElement('div');
        mobileInfo.style.marginTop = '15px';
        mobileInfo.style.padding = '10px';
        mobileInfo.style.background = '#e3f2fd';
        mobileInfo.style.borderRadius = '8px';
        mobileInfo.style.border = '1px solid #2196f3';
        mobileInfo.innerHTML = '<p style="margin: 0; color: #1976d2; font-size: 0.9rem;">📱 <strong>Dispositivo móvil detectado:</strong> Puedes tocar la URL para abrir el menú directamente.</p>';
        qrInfo.appendChild(mobileInfo);
    }
}

// Función para hacer la URL del menú clickeable en móviles
function makeUrlClickable() {
    if (isMobileDevice()) {
        const menuUrl = document.getElementById('menuUrl');
        menuUrl.style.cursor = 'pointer';
        menuUrl.style.textDecoration = 'underline';
        menuUrl.style.color = '#667eea';
        
        menuUrl.addEventListener('click', function() {
            window.open(menuUrl.textContent, '_blank');
        });
        
        menuUrl.title = 'Toca para abrir el menú';
    }
}

// Función para inicializar la página
function initPage() {
    // Generar el código QR de alta calidad cuando la página se carga
    generateHighQualityQR();
    
    // Mostrar información adicional para móviles
    showMobileInfo();
    
    // Hacer la URL clickeable en móviles
    makeUrlClickable();
    
    // Agregar efecto de hover a las tarjetas de características
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Ejecutar la inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initPage);

// Función para regenerar el código QR si es necesario
function regenerateQR() {
    generateQRCode();
}

// Función para imprimir el código QR
function printQR() {
    // Generar un código QR de alta calidad para impresión
    const currentUrl = window.location.href;
    const menuUrl = currentUrl.replace('index.html', 'menu.html');
    
    // Crear una ventana de impresión optimizada
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Código QR - Menú Cafetería</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    text-align: center;
                    background: white;
                }
                .qr-container {
                    max-width: 400px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 2px solid #333;
                }
                .qr-title {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    color: #333;
                }
                .qr-subtitle {
                    font-size: 16px;
                    margin-bottom: 30px;
                    color: #666;
                }
                .qr-code {
                    background: white;
                    padding: 20px;
                    border: 1px solid #333;
                    display: inline-block;
                    margin-bottom: 20px;
                }
                .qr-instructions {
                    font-size: 14px;
                    color: #666;
                    text-align: left;
                    margin-top: 20px;
                }
                .qr-instructions h4 {
                    color: #333;
                    margin-bottom: 10px;
                }
                .qr-instructions ul {
                    margin: 0;
                    padding-left: 20px;
                }
                .qr-instructions li {
                    margin-bottom: 5px;
                }
                @media print {
                    body { margin: 0; }
                    .qr-container { border: none; }
                }
            </style>
        </head>
        <body>
            <div class="qr-container">
                <div class="qr-title">☕ Cafetería</div>
                <div class="qr-subtitle">Escanea para ver nuestro menú</div>
                <div class="qr-code" id="printQR"></div>
                <div class="qr-instructions">
                    <h4>📱 Cómo usar:</h4>
                    <ul>
                        <li>Abre la cámara de tu teléfono</li>
                        <li>Apunta al código QR</li>
                        <li>Accede a nuestro menú completo</li>
                    </ul>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"></script>
            <script>
                // Generar código QR de alta calidad para impresión
                QRCode.toCanvas(document.getElementById('printQR'), '${menuUrl}', {
                    width: 250,
                    height: 250,
                    margin: 1,
                    color: {
                        dark: '#000000',
                        light: '#FFFFFF'
                    }
                }, function (error) {
                    if (error) {
                        document.getElementById('printQR').innerHTML = '<p style="color: red;">Error generando código QR</p>';
                    } else {
                        // Imprimir automáticamente después de generar el QR
                        setTimeout(() => {
                            window.print();
                        }, 500);
                    }
                });
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// Función para generar código QR de alta calidad
function generateHighQualityQR() {
    const currentUrl = window.location.href;
    const menuUrl = currentUrl.replace('index.html', 'menu.html');
    
    // Generar código QR con mejor calidad para impresión
    const qrCodeElement = document.getElementById('qrCode');
    qrCodeElement.innerHTML = '';
    
    QRCode.toCanvas(qrCodeElement, menuUrl, {
        width: 250, // Tamaño más grande para mejor calidad
        height: 250,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        },
        errorCorrectionLevel: 'H' // Máxima corrección de errores
    }, function (error) {
        if (error) {
            console.error('Error generando código QR:', error);
            qrCodeElement.innerHTML = '<p style="color: red;">Error generando código QR</p>';
        }
    });
}

// Agregar listener para el botón de regenerar (opcional)
// document.addEventListener('keydown', function(e) {
//     if (e.ctrlKey && e.key === 'r') {
//         e.preventDefault();
//         regenerateQR();
//     }
// });
