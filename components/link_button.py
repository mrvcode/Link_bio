import reflex as rx
from styles.styles import styles, Size


def link_button(text_line1: str, text_line2: str = "", url: str = "") -> rx.Component:
    # Creamos el contenido del botón
    if not text_line2:
        content = rx.text(text_line1, font_size=Size.BIG.value, align="center")
    else:
        content = rx.vstack(
            rx.text(text_line1, font_size=Size.BIG.value, margin_bottom="4px"),
            rx.text(text_line2, font_size=Size.BIG.value),
            width="100%",
            spacing="3",
            justify="center",
            align_items="center",
        )

    # Devolvemos el botón con estilo aplicado desde styles.BUTTON_BIG
    return rx.button(
        rx.link(
            content,
            href=url,
            is_external=False,
            text_decoration="none",
            width="100%",
            height="100%",
        ),
        as_child=True,
        style=styles.BUTTON_BIG,
    )