import reflex as rx


config = rx.Config(
    app_name="main",
    api_url="http://localhost:8000",
    build_path="build",
    static_dir="assets/public",  # Así Reflex buscará en assets/public como raíz de archivos estáticos
    
)