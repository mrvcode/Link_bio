import reflex as rx
from components.cards_originales.base_cards import base_card
from styles.styles import Color, Size


def complement_individual_card(
    nombre: str,
    imagen: str,
    precio: str,
    color_avatar: str = Color.VIOLET_LIGHT.value  # ✅ valor por defecto
) -> rx.Component:
    return base_card(
        rx.vstack(
            rx.image(
                src=imagen,
                width="100%",
                height="200px",
                object_fit="cover",
                border_top_radius="15px",
            ),
            rx.hstack(
                # Avatar a la izquierda
                rx.box(
                    rx.text(
                        "V3D",
                        font_size=Size.SMALL.value,
                        color=color_avatar,
                        font_weight="bold",
                        filter="brightness(1.3)",
                    ),
                    background="rgba(0, 0, 0, 0.2)",
                    border_radius="10px",
                    padding="10px",
                    width="50px",
                    height="50px",
                    display="flex",
                    align_items="center",
                    justify_content="center",
                    border=f"2px solid {color_avatar}",
                ),
                # Nombre del producto
                rx.text(
                    nombre,
                    font_size="1.1em",
                    font_weight="bold",
                    text_align="center",
                    flex="1",
                ),
                spacing="4",  # Cambiado de "1em" a un valor válido "4"
                align="center",
                width="100%",
                justify="center"
            ),
            # Precio debajo
            rx.hstack(
                rx.icon(tag="euro", size=16, color="gray"),
                rx.text(
                    precio,
                    font_size="1em",
                    color="gray",
                    font_weight="medium",
                ),
                justify="center",
            ),
            spacing="3",  # Cambiado de "0.3em" a un valor válido "3"
            padding="10px",
            height="100%",
            justify="between",
        )
    )
