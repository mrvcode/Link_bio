# pages/page_card_originales.py
import reflex as rx
from styles.styles import styles, Color, Size
from pages.originales import PRODUCTOS  # Lista de productos para simular BD


def page_card_originales(id: int) -> rx.Component:
    producto = PRODUCTOS[id] if 0 <= id < len(PRODUCTOS) else None

    if not producto:
        return rx.center(
            rx.text("Producto no encontrado", color=Color.WHITE.value, font_size=Size.DEFAULT.value)
        )

    return rx.box(
        # Título
        rx.box(
            rx.heading(
                producto["nombre"],
                font_size=Size.BIG.value,
                color=Color.VIOLET_LIGHT.value,
                text_align="center",
            ),
            padding="2em 0",
            width="100%",
        ),
        # Contenido principal
        rx.hstack(
            # Descripciones (simuladas)
            rx.vstack(
                *[
                    rx.box(
                        rx.heading(
                            f"Característica {i+1}",
                            font_size=Size.DEFAULT.value,
                            color=Color.WHITE.value,
                        ),
                        rx.text(
                            producto["descripcion"],
                            font_size=Size.SMALL.value,
                            color=Color.WHITE.value,
                        ),
                        margin="1em",
                        padding="1em",
                        border_radius="10px",
                        background="rgba(255, 255, 255, 0.05)",
                    )
                    for i in range(3)
                ],
                spacing="2",
                width="60%",
            ),
            # Imagen
            rx.box(
                rx.image(
                    src=producto["imagen"],
                    width="300px",
                    height="auto",
                    border_radius="10px",
                    box_shadow="lg",
                ),
                margin_left="2em",
            ),
            width="100%",
            padding_x="2em",
        ),
        # Precio
        rx.text(
            f"Precio: {producto['precio']}",
            font_size=Size.DEFAULT.value,
            color=Color.VIOLET_LIGHT.value,
            text_align="center",
            padding="2em",
        ),
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_repeat="no-repeat",
        background_position="center",
        width="100%",
        min_height="100vh",
        padding="2em",
    )
