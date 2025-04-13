import reflex as rx
from Link_bio.components.footer import footer
from Link_bio.views.header.header import header
from Link_bio.views.links.links import links
from Link_bio.views.creacion import creacion
from Link_bio.styles.styles import styles
from Link_bio.styles.styles import Size as Size
from Link_bio.components.navbar import navbar


def index() -> rx.Component:
    return rx.box(
        rx.fragment(
            # Capa oscura de overlay (como una máscara sobre el fondo para contraste)
            rx.box(
                position="fixed",
                top="0",
                left="0",
                width="100%",
                height="100%",
                bg=styles.BACKGROUND_OVERLAY,
                z_index="0",
            ),
            # Contenido principal
            rx.vstack(
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
                        margin_y=Size.SMALL.value,
                        # background="rgba(0,0,0,0.5)",  # Fondo oscuro para el contenido
                        border_radius="12px",
                        padding="20px",
                        z_index="1",
                    ),
                    width="100%",
                ),
                rx.center(rx.vstack(footer(), align="center")),
                width="100%",
                spacing="3",
                align_items="center",
                min_height="100vh",
                z_index="1",
            ),
        ),
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_repeat="no-repeat",
        background_attachment="fixed",
        background_position="center",
        width="100%",
        min_height="100vh",
    )


app = rx.App(style=styles.BASE_STYLE)
app.add_page(index)
app.add_page(creacion, route="/creacion")
