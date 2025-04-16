import reflex as rx
from components.cards_originales.base_cards import base_card


def complement_individual_card(nombre: str, imagen: str, precio: str) -> rx.Component:
    return base_card(
        rx.vstack(
            rx.image(
                src=imagen,
                width="100%",
                height="200px",
                object_fit="cover",
                border_top_radius="15px",
            ),
            rx.text(
                nombre,
                font_size="1.1em",
                font_weight="bold",
                text_align="center",
            ),
            rx.hstack(  # Aquí metemos el icono del euro junto al precio
                rx.icon(tag="euro", size=16, color="gray"),
                rx.text(
                    precio,
                    font_size="1em",
                    color="gray",
                    font_weight="medium",
                ),
                justify="center",
            ),
            spacing="0.3em",
            padding="10px",
            height="100%",
            justify="space-between",
        )
    )
