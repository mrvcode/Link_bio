import reflex as rx
from Link_bio.components.link_button import link_button


def links() -> rx.Component:
    return rx.vstack(
        rx.box(
            rx.hstack(
                link_button("Area de creación", url="/creacion"),
                link_button("Accesorios", url="/creacion"),
                spacing="5",
                justify="center",
                width="100%",
            ),
            width="100%",
        ),
        rx.spacer(height="20px"),
        rx.box(
            rx.hstack(
                link_button("Mochilas Originales", url="/creacion"),
                link_button("Extras", url="/creacion"),
                spacing="5",
                justify="center",
                width="100%",
            ),
            width="100%",
        ),
        width="100%",
        align_items="center",
        justify="center",
        padding="0",
        margin_top="10px",
    )