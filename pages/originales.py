# pages/originales.py

import reflex as rx
from components.cards_originales.complement_individual_card import (
    complement_individual_card,
)
from styles.styles import styles


# Lista de productos de ejemplo
PRODUCTOS = [
    {
        "nombre": "Mochila Futura",
        "precio": "59.99€",
        "imagen": "/mochila.jpg",
        "descripcion": "Una mochila hecha para destacar. Ideal para los soñadores.",
    },
    {
        "nombre": "Mochila Urbana",
        "precio": "49.99€",
        "imagen": "/mochila.jpg",
        "descripcion": "Diseño moderno y adaptable para tu día a día.",
    },
    {
        "nombre": "Mochila Eco",
        "precio": "39.99€",
        "imagen": "/mochila.jpg",
        "descripcion": "Hecha con materiales reciclados y mucho estilo.",
    },
    {
        "nombre": "Mochila Futura",
        "precio": "59.99€",
        "imagen": "/mochila.jpg",
        "descripcion": "Una mochila hecha para destacar. Ideal para los soñadores.",
    },
    {
        "nombre": "Mochila Urbana",
        "precio": "49.99€",
        "imagen": "/mochila.jpg",
        "descripcion": "Diseño moderno y adaptable para tu día a día.",
    },
    {
        "nombre": "Mochila Eco",
        "precio": "39.99€",
        "imagen": "/mochila.jpg",
        "descripcion": "Hecha con materiales reciclados y mucho estilo.",
    },
    # Puedes añadir más productos según lo necesites
]


def originales() -> rx.Component:
    return rx.center(
        rx.grid(
            *[
                rx.link(
                    complement_individual_card(
                        nombre=producto["nombre"],
                        imagen=producto["imagen"],
                        precio=producto["precio"],
                    ),
                    href=f"/originales/{i}",
                    style={"text_decoration": "none"},
                )
                for i, producto in enumerate(PRODUCTOS)
            ],
            columns=[1, 2, 3],  # Responsive: móvil, tablet, escritorio
            spacing="4",
            width="100%",
            max_width=styles.MAX_WIDTH,
            margin_y="2em",
        ),
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_repeat="no-repeat",
        background_position="center",
        width="100%",
        min_height="100vh",
        padding="2em",
    )
