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
                rx.box(  # Caja del formulario
                    rx.vstack(
                        rx.text(
                            "Contacta con nosotros",
                            font_size=Size.BIGX2,
                            font_weight="bold",
                            color="white",
                            padding_bottom="1em",
                        ),
                        rx.box(
                            contacto_formulario(),
                            margin_left="auto",
                            margin_right="auto",
                        ),
                        spacing="3",
                        align="center",
                        width="100%",  # Asegura que vstack use el ancho para centrar texto y form
                        height="100%",
                        justify="center",  # Centra verticalmente el contenido del vstack
                    ),
                    width="600px",
                    height="600px",
                    border_radius="15px",
                    background_color=Color.FONDO_CARDS_LIGHT.value,
                    padding="2em",  # Mantenemos padding para el contenido del formulario
                    display="flex",  # Usar flex para centrar el vstack interno
                    align_items="center",
                    justify_content="center",
                ),
                rx.box(  # Caja para Imagen 1 (fondo + imagen centrada)
                    rx.image(
                        src="/contacto.jpg", max_width="400px", max_height="400px"
                    ),
                    width="600px",
                    height="600px",
                    border_radius="15px",
                    background_color=Color.FONDO_CARDS_LIGHT.value,  # El fondo semitransparente
                    # Usamos flexbox para centrar la imagen hija
                    display="flex",
                    align_items="center",  # Centrado vertical
                    justify_content="center",  # Centrado horizontal
                    padding="1em",  # Añadimos un padding opcional si quieres espacio entre imagen y borde del box
                    overflow="hidden",  # Mantenemos esto por si acaso y por el border_radius
                ),
                rx.box(  # Caja para Imagen 2 (fondo + imagen centrada)
                    rx.image(
                        src="/contacto1.jpg", max_width="400px", max_height="400px"
                    ),
                    width="600px",
                    height="600px",
                    border_radius="15px",
                    background_color=Color.FONDO_CARDS_LIGHT.value,
                    display="flex",
                    align_items="center",
                    justify_content="center",
                    padding="1em",  # Padding opcional
                    overflow="hidden",
                ),
                rx.box(  # Caja de la dirección
                    rx.vstack(
                        rx.text(
                            "Dónde estamos?",
                            font_size=Size.BIGX2,
                            font_weight="bold",
                            color="white",
                            padding_bottom="0.8em",
                        ),
                        rx.text(
                            "123 Calle de la Mochila\n" "28001 Madrid\n" "España",
                            font_size=Size.BIG,
                            color="white",
                            white_space="pre-wrap",
                            line_height="1.6",
                            text_align="center",  # Centrar el texto de la dirección
                        ),
                        spacing="4",
                        align="center",
                        width="100%",
                        height="100%",
                        justify="center",
                    ),
                    width="600px",
                    height="600px",
                    border_radius="15px",
                    background_color=Color.FONDO_CARDS_LIGHT.value,
                    padding="2em",
                    display="flex",
                    align_items="center",
                    justify_content="center",
                ),
                columns="2",
                spacing="2",
                width="auto",
                padding="2em",
            ),
            height="100vh",
            width="100%",
        ),
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_repeat="no-repeat",
        background_attachment="fixed",
        background_position="center",
        width="100%",
        min_height="100vh",
    )
