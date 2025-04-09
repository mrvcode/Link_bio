import reflex as rx
from Link_bio.components.link_button import link_button

def links() -> rx.Component:
    return rx.box(
        rx.vstack(
            link_button(),
            link_button(),
            link_button(),
            link_button(),
            spacing="4",                # Espacio entre botones
            width="100%",               # Ancho completo disponible
            max_width="700px",          # Ancho máximo para los botones
        ),
        width="100%",
        display="flex",
        justify_content="center",      # Centrar la columna horizontalmente
        padding="4",
    )