import reflex as rx
from Link_bio.components.navbar import navbar
from Link_bio.views.header.header import header
from Link_bio.views.links.links import links


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.vstack(
        navbar(),
        rx.spacer(height="50px"),  # Espaciador grande con unidades px
        rx.vstack(
            header(),
            links(),
            align="center",
            spacing="9",  # Valor máximo permitido: 9
            width="100%",
            max_width="900px",
            margin="0 auto",
            padding_x="4",
            padding_y="8",  # Valor máximo permitido: 9
            background="black",
            min_height="100vh",
        ),
        width="100%",
        spacing="9",  # Valor máximo permitido: 9
        background="black",
    )


app = rx.App()
app.add_page(index)
