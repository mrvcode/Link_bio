# components/cards_originales/base_cards.py

import reflex as rx


def base_card(children: rx.Component) -> rx.Component:
    return rx.box(
        rx.vstack(
            # Contenido dinámico que se le pasa (imagen, nombre, etc.)
            children,
            # Línea de iconos al pie
            rx.hstack(
                rx.icon(tag="heart", color="black", size=20),
                rx.icon(tag="shopping-cart", color="black", size=20),
                justify="space-between",
                width="100%",
                padding_x="10px",
                padding_bottom="10px",
            ),
            justify="space-between",
            height="100%",
        ),
        width="220px",
        height="300px",
        background_color="white",
        border_radius="15px",
        box_shadow="lg",
        overflow="hidden",
        position="relative",
    )
