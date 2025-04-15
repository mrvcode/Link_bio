import reflex as rx
from styles.styles import styles, Color


# Lista de iconos del menú con texto y enlace
menu_items = [
    {"icon": "home", "text": "Inicio", "link": "/"},
    {"icon": "user", "text": "Sobre mí", "link": "/sobremi"},
    {"icon": "book", "text": "Proyectos", "link": "/proyectos"},
    {"icon": "mail", "text": "Contacto", "link": "/contacto"},
]

# Componente individual de cada icono con texto
def nav_icon(item):
    return rx.link(
        rx.hstack(
            rx.icon(
                tag=item["icon"],
                color=Color.ICON_COLOR.value,
                size=30,
                _hover=styles.ICON_HOVER_STYLE,  # Estilo hover desde styles.py
            ),
            rx.text(
                item["text"],
                class_name="tooltip-text",  # Se activa con CSS global
                color=Color.ICON_COLOR.value,
                font_size="1rem",
                opacity=0,
                white_space="nowrap",
                transform="translateX(-10px)",
                transition="opacity 0.3s ease, transform 0.3s ease",
            ),
            spacing="1",
            align="center",
        ),
        href=item["link"],
        class_name="nav-link",  # Necesario para que el CSS lo detecte
        style={
            "padding": "0.5rem",
            "cursor": "pointer",
            "transition": "all 0.3s ease",
            "borderRadius": "8px",
            "display": "flex",
            "alignItems": "center",
        },
    )

# Menú vertical con todos los iconos
def vertical_menu():
    """
    Crea un menú vertical fijado al lado izquierdo de la pantalla
    con iconos y tooltips animados.
    """
    return rx.vstack(
        *[nav_icon(item) for item in menu_items],
        position="fixed",
        top="50%",
        left="1rem",
        transform="translateY(-50%)",
        spacing="1",
        z_index="999",
        padding="0.5rem",
        backgroundColor="transparent",
        align="start",
    )