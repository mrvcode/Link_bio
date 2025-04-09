import reflex as rx
from Link_bio.components.navbar import navbar
from Link_bio.views.header.header import header
from Link_bio.views.links.links import links


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.vstack(
        navbar(),
        rx.vstack(
            header(),
            links(),
            align="center",  # Alinea los elementos horizontalmente al centro
            spacing="6",  # Mayor espaciado entre header y links
            width="100%",  # Ocupa todo el ancho disponible
            max_width="800px",  # Limita el ancho máximo para mejor apariencia
            margin="0 auto",  # Centra el contenedor en la página
            padding_x="4",  # Padding horizontal
            padding_y="4",  # Padding vertical
            background="black",  # Fondo negro como en la imagen
            min_height="100vh",  # Altura mínima para ocupar toda la pantalla
        ),
        width="100%",  # El vstack principal ocupa todo el ancho
        spacing="0",  # Sin espacio extra entre navbar y contenido
        background="black",  # Fondo negro para toda la página
    )


app = rx.App()
app.add_page(index)
