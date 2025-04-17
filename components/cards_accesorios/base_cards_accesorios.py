import reflex as rx
from styles.styles import styles, Size, Color

def base_card_accesorios(children: rx.Component, width: str, height: str) -> rx.Component:
    return rx.box(
        rx.vstack(
            children,  # Contenido dinámico
            rx.hstack(  # Iconos
                rx.icon(tag="heart", color="black", size=20),
                rx.icon(tag="shopping-cart", color="black", size=20),
                rx.icon(tag="send", color="black", size=20),
                justify="between",
                width="100%",
                padding_x="10px",
                padding_bottom="10px",
            ),
            justify="between",
            height="100%",
        ),
        width=width,
        height=height,
        background_color=Color.FONDO_CARDS.value,
        border_radius="15px",
        box_shadow="lg",
        overflow="hidden",
        position="relative",
    )