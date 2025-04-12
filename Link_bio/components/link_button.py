import reflex as rx


def link_button(text_line1: str, text_line2: str = "", url: str = "") -> rx.Component:
    # Creamos el contenido del botón
    if not text_line2:
        # Si solo hay una línea de texto
        content = rx.text(text_line1, font_size="30px", align="center")
    else:
        # Si hay dos líneas de texto, asegurarnos de que estén claramente separadas
        content = rx.vstack(
            rx.text(text_line1, font_size="30px", margin_bottom="4px"),
            rx.text(text_line2, font_size="30px"),
            width="100%",
            spacing="3",  # Aumentamos el espaciado entre líneas
            justify="center",
            align_items="center",
        )

    return rx.link(
        rx.button(
            content,
            width="280px",
            height="360px",
            border_radius="8px",
            bg="#0078d7",
            color="white",
            font_weight="normal",
            _hover={"bg": "#0063b1"},
            margin="0",
            padding="8px",  # Aumentamos el padding para dar más espacio
            display="flex",
            align_items="center",
            justify_content="center",
        ),
        href=url,
        is_external=False,
        width="auto",
        height="auto",
        display="block",
        text_decoration="none",
    )
