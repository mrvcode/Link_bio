import reflex as rx
from components.link_button import link_button


def links() -> rx.Component:
    return rx.vstack(
        rx.box(
            rx.hstack(
                link_button("Area de", "creación", "/creacion"),
                link_button("Accesorios", "", "/accesorios"),
                spacing="9",
                justify="center",
                width="100%",
                margin_y="25px",
            ),
            width="100%",
        ),
        rx.spacer(height="20px"),
        rx.box(
            rx.hstack(
                # Aquí aseguramos que Mochilas y Originales estén separados
                link_button(
                    text_line1="Mochilas", text_line2="Originales", url="/originales"
                ),
                link_button(text_line1="Extras", text_line2="", url="/extras"),
                spacing="9",
                justify="center",
                width="100%",
                margin_y="25px",
            ),
            width="100%",
        ),
        width="100%",
        align_items="center",
        justify="center",
        padding="0",
        margin_top="100px",
        margin_bottom="50px",
    )
