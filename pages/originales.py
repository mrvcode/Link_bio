# pages/originales.py

import reflex as rx
from components.cards_originales.complement_individual_card import (
    complement_individual_card,
)
from styles.styles import styles, Color


# Lista de productos de ejemplo
PRODUCTOS = [
    {
        "nombre": "Mochila Futura",
        "precio": "59.99",
        "imagen": "/image_mochilas_original/mochila.jpg",
        "descripcion": "Una mochila hecha para destacar. Ideal para los soñadores.",
        "color_avatar": Color.VIOLET_LIGHT.value,
    },
    {
        "nombre": "Mochila Urbana",
        "precio": "49.99",
        "imagen": "/image_mochilas_original/mochila.jpg",
        "descripcion": "Diseño moderno y adaptable para tu día a día.",
        "color_avatar": Color.BLUE_MEDIUM.value,
    },
    {
        "nombre": "Mochila Eco",
        "precio": "39.99",
        "imagen": "/image_mochilas_original/mochila.jpg",
        "descripcion": "Hecha con materiales reciclados y mucho estilo.",
        "color_avatar": Color.GREEN_LIGHT.value,
    },
    {
        "nombre": "Mochila Futura",
        "precio": "59.99",
        "imagen": "/image_mochilas_original/mochila.jpg",
        "descripcion": "Una mochila hecha para destacar. Ideal para los soñadores.",
        "color_avatar": Color.VIOLET_LIGHT.value,
    },
    {
        "nombre": "Mochila Urbana",
        "precio": "49.99",
        "imagen": "/image_mochilas_original/mochila.jpg",
        "descripcion": "Diseño moderno y adaptable para tu día a día.",
        "color_avatar": Color.BLUE_MEDIUM.value,
    },
    {
        "nombre": "Mochila Eco",
        "precio": "39.99",
        "imagen": "/image_mochilas_original/mochila.jpg",
        "descripcion": "Hecha con materiales reciclados y mucho estilo.",
        "color_avatar": Color.GREEN_LIGHT.value,
    },
    # Puedes añadir más productos según lo necesites
]


def originales(id=None) -> rx.Component:
    """
    Renderiza la página de productos originales.

    Args:
        id: Parámetro opcional para compatibilidad, no se usa en esta función.

    Returns:
        Un componente Reflex que muestra la grid de productos.
    """
    return rx.box(  # cambiamos de rx.center a rx.box para poder usar position="relative"
        # ✅ Título superior derecho
        rx.box(
            rx.text(
                "Originales",
                font_size="1.5em",
                color=Color.WHITE.value,
                font_weight="bold",
            ),
            position="absolute",
            top="1em",
            right="2em",
            z_index="10",
        ),
        # ✅ Grid de productos
        rx.center(
            rx.grid(
                *[
                    rx.link(
                        complement_individual_card(
                            nombre=producto["nombre"],
                            imagen=producto["imagen"],
                            precio=producto["precio"],
                            color_avatar=producto["color_avatar"],
                        ),
                        href=f"/originales/{i}",
                        style={"text_decoration": "none"},
                    )
                    for i, producto in enumerate(PRODUCTOS)
                ],
                columns="repeat(3, 1fr)",  # Cambiado de [1, 2, 3] a un valor válido
                spacing="8",
                width="100%",
                max_width=styles.MAX_WIDTH,
                margin_y="2em",
            )
        ),
        # ✅ Fondo y dimensiones del contenedor general
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_repeat="no-repeat",
        background_position="center",
        width="100%",
        min_height="100vh",
        padding="2em",
        position="relative",  # necesario para el título absoluto
    )
