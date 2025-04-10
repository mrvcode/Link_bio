import reflex as rx
from Link_bio.components.link_button import link_button


def links() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.hstack(
                link_button("Area de creación"),
                link_button("Accesorios"),
                width="100%",
                spacing="9",  # Valores permitidos: 0-9
                justify="center",
            ),
            rx.spacer(height="20px"),  # Usamos un separador explícito con px
            rx.hstack(
                link_button("Mochilas Originales"),
                link_button("Extras"),
                width="100%",
                spacing="9",  # Valores permitidos: 0-9
                justify="center",
            ),
            width="100%",
            spacing="6",  # Máximo valor permitido
            align_items="center",
            justify="center",
        ),
        width="100%",
        padding="6",
        margin_top="30px",  # Usamos px para valores mayores a 9
    )
