import reflex as rx


def link_button() -> rx.Component:
    return rx.button(
        "Area de creación",
        width="100%",
        height="60px",              # Altura para que se vea como en la imagen
        border_radius="12px",       # Bordes redondeados pero no demasiado
        bg="#0078d7",               # Color azul como en la imagen
        color="white",              # Texto en color blanco
        font_size="16px",           # Tamaño de fuente
        font_weight="normal",       # Peso de fuente normal
        _hover={"bg": "#0063b1"},   # Color un poco más oscuro al pasar el ratón
        padding="0px",              # Sin padding interno
        justify="center",           # Centrar el texto horizontalmente
        align_items="center",       # Centrar el texto verticalmente
        margin="0",                 # Sin margen externo
    )