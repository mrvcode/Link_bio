import reflex as rx
from components.contacto_formulario import contacto_formulario
from styles.styles import styles, Color, Size


def contacto() -> rx.Component:
    return rx.box(
        rx.box(
            rx.text("Contacto", font_size="1.5em", font_weight="bold", color="white"),
            position="absolute",
            top="1em",
            right="2em",
            z_index="10",
        ),
        rx.center(
            rx.grid(
                rx.box(  # contacta con nosotros
                    rx.vstack(
                        rx.text(
                            "Contacta con nosotros",
                            font_size=Size.DEFAULT.value,
                            font_weight="bold",
                            color="white",
                            padding_bottom="1em",
                        ),
                        contacto_formulario(),
                        spacing="4",
                        align="center",
                    ),
                    width="600px",
                    height="600px",
                    border_radius="15px",
                    background_color=Color.FONDO_CARDS.value,
                    padding="2em",
                ),
                rx.box(  # foto mochila derecha
                    width="600px",
                    height="600px",
                    border_radius="15px",
                    background_color=Color.FONDO_CARDS.value,
                ),
                rx.box(  # foto mochila derecha
                    width="600px",
                    height="600px",
                    border_radius="15px",
                    background_color=Color.FONDO_CARDS.value,
                ),
                rx.box(  # Donde estamos
                    width="600px",
                    height="600px",
                    border_radius="15px",
                    background_color=Color.FONDO_CARDS.value,
                ),
                columns="2",
                spacing="2",
            ),
            height="100vh",
        ),
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_repeat="no-repeat",
        background_attachment="fixed",
        background_position="center",
        width="100%",
        min_height="100vh",
    )
