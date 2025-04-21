# components/cards_originales/base_cards.py

import reflex as rx
from styles.styles import Color


def base_card(children: rx.Component) -> rx.Component:
    return rx.box(
        rx.vstack(
            # Contenido dinámico que se le pasa (imagen, nombre, etc.)
            children,
            # Línea de iconos al pie
            justify="between",
            height="100%",
        ),
        width="300px",
        height="380px",
        background_color=Color.FONDO_CARDS.value,
        border_radius="15px",
        box_shadow="10px 20px 20px 5px rgba(0, 0, 0, 0.3)",
        overflow="hidden",
        position="relative",
    )
