#!/usr/bin/env python3
"""
Servidor web local simple para probar el menú desde el teléfono
"""

import http.server
import socketserver
import socket
import webbrowser
import os

def get_local_ip():
    """Obtener la IP local de la máquina"""
    try:
        # Conectar a un servidor externo para obtener la IP local
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "127.0.0.1"

def start_server(port=8000):
    """Iniciar el servidor web local"""
    
    # Cambiar al directorio actual
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Configurar el servidor
    Handler = http.server.SimpleHTTPRequestHandler
    Handler.extensions_map.update({
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
    })
    
    with socketserver.TCPServer(("", port), Handler) as httpd:
        local_ip = get_local_ip()
        print("=" * 60)
        print("🚀 SERVIDOR WEB LOCAL INICIADO")
        print("=" * 60)
        print(f"📱 Para acceder desde tu teléfono:")
        print(f"   http://{local_ip}:{port}/menu.html")
        print()
        print(f"💻 Para acceder desde tu computadora:")
        print(f"   http://localhost:{port}/menu.html")
        print()
        print(f"🔗 URL para el código QR:")
        print(f"   http://{local_ip}:{port}/menu.html")
        print()
        print("📋 Archivos disponibles:")
        for file in os.listdir('.'):
            if file.endswith(('.html', '.css', '.js')):
                print(f"   - {file}")
        print()
        print("⏹️  Presiona Ctrl+C para detener el servidor")
        print("=" * 60)
        
        # Abrir el menú en el navegador
        try:
            webbrowser.open(f"http://localhost:{port}/menu.html")
        except:
            pass
        
        # Mantener el servidor corriendo
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Servidor detenido")

if __name__ == "__main__":
    try:
        start_server()
    except KeyboardInterrupt:
        print("\n👋 ¡Hasta luego!")
    except Exception as e:
        print(f"❌ Error: {e}")
        print("💡 Asegúrate de tener Python instalado")
