import reflex as rx
from components.cards_originales.base_cards import base_card
from styles.styles import Color, Size


def complement_individual_card(
    nombre: str,
    imagen: str,
    precio: str,
    color_avatar: str = Color.VIOLET_LIGHT.value,  # ✅ valor por defecto
) -> rx.Component:
    return base_card(
        rx.vstack(
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
                    font_size=Size.SMALL.value,
                    font_weight="bold",
                    text_align="center",
                    flex="1",
                    margin="0 0 0 10px ",
                ),
                spacing="4",
                align="center",
                width="100%",
                justify="between",  # Modificamos justify para separar avatar y nombre
            ),
            rx.image(
                src=imagen,
                width="100%",
                height="200px",
                object_fit="cover",
                border_top_radius="15px",
            ),
            # Precio e iconos
            rx.hstack(
                rx.hstack(  # Agrupamos el precio
                    rx.icon(tag="euro", size=20, color=Color.WHITE.value),
                    rx.text(
                        precio,
                        font_size=Size.SMALL.value,
                        color=Color.WHITE.value,
                        font_weight="medium",
                    ),
                    spacing="1",
                    align_items="center",
                ),
                # rx.spacer(),  # Elimina este rx.spacer()
                rx.hstack(  # Agrupamos los iconos a la derecha
                    rx.icon(tag="heart", size=20, color=Color.WHITE.value),
                    rx.icon(
                        tag="shopping-cart",
                        size=20,
                        color=Color.WHITE.value,
                        margin_left="10px",
                    ),
                ),
                justify="between",  # Precio a la izquierda, grupo de iconos a la derecha
                align_items="center",
                width="100%",
                padding_x="10px",
                padding_bottom="10px",
            ), 
        )
    )
