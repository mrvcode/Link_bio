import reflex as rx
from Link_bio.components.navbar import navbar
from Link_bio.components.footer import footer
from Link_bio.views.header.header import header
from Link_bio.views.links.links import links
from Link_bio.views.creacion import creacion
from Link_bio.components.footer import footer
from Link_bio.styles.styles import styles


def index() -> rx.Component:
    return rx.vstack(
        navbar(),
        rx.spacer(height="50px"),
        rx.center(
            rx.vstack(
                header(),
                links(),
                align="center",
                spacing="3",
                width="100%",
                max_width=styles.MAX_WIDTH,
                margin_x="20px",
                margin_y="10px",
                # padding_x="4",
                # padding_y="8",
                background="black",
            ),
            width="100%",
        ),
        rx.center(rx.vstack(footer(), align="center")),
        width="100%",
        spacing="3",
        background="black",
        align="center",
    )


app = rx.App()
app.add_page(index)
app.add_page(creacion, route="/creacion")
