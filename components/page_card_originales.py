import reflex as rx
from styles.styles import styles, Color, Size


def page_card_originales() -> rx.Component:
    """
    Página de muestra de un producto (mochila) con bloques de descripción a la izquierda e imagen a la derecha,
    con margen para la navegación lateral y carrusel inferior.
    """
    return rx.box(
        # titulo pagina actual
        rx.box(
            rx.heading(
                "Mochilas Originales",
                font_size=Size.BIG.value,
                color=Color.WHITE.value,
                text_align="right",
            ),
            padding="1em 2em",
            width="100%",
        ),
        rx.hstack(
            # Sección izquierda: Bloques de título y descripción del producto
            rx.box(
                rx.vstack(
                    # Bloque 1
                    rx.box(
                        rx.heading(
                            "título descriptivo accesorio",
                            font_size=Size.DEFAULT.value,
                            color=Color.WHITE.value,
                        ),
                        rx.text(
                            """descripcion del accesorio
                            tamaño, forma, material.""",
                            color=Color.WHITE.value,
                            font_size=Size.SMALL.value,
                            white_space="pre-line",
                        ),
                        rx.text(
                            """##############################
                            ##############################
                            ##############################""",
                            color=Color.VIOLET_LIGHT.value,
                            white_space="pre-line",
                        ),
                    width=["100%", "100%"],
                    # background="rgba(0, 0, 0, 0.2)",
                    border_radius="10px",
                    margin="2em 2em 2em 2em",  # Añadido margen izquierdo
                    height="100%",
                    ),
                    rx.spacer(height="2.5em"),  # Espacio entre bloques
                    # Bloque 2
                    rx.box(
                            rx.heading(
                            "título descriptivo accesorio",
                            font_size=Size.DEFAULT.value,
                            color=Color.WHITE.value,
                        ),
                        rx.text(
                            """descripcion del accesorio
                            tamaño, forma, material.""",
                            color=Color.WHITE.value,
                            font_size=Size.SMALL.value,
                            white_space="pre-line",
                        ),
                        rx.text(
                            """##############################
                            ##############################
                            ##############################""",
                            color=Color.VIOLET_LIGHT.value,
                            white_space="pre-line",
                        ),
                    width=["100%", "100%"],
                    # background="rgba(0, 0, 0, 0.2)",
                    border_radius="10px",
                    margin="2em 2em 2em 10em",  # Añadido margen izquierdo
                    height="100%",
                    ),
                    rx.spacer(height="2.5em"),  # Espacio entre bloques
                    # Bloque 3
                    rx.box(
                            rx.heading(
                            "título descriptivo accesorio",
                            font_size=Size.DEFAULT.value,
                            color=Color.WHITE.value,
                        ),
                        rx.text(
                            """descripcion del accesorio
                            tamaño, forma, material.""",
                            color=Color.WHITE.value,
                            font_size=Size.SMALL.value,
                            white_space="pre-line",
                        ),
                        rx.text(
                            """##############################
                            ##############################
                            ##############################""",
                            color=Color.VIOLET_LIGHT.value,
                            white_space="pre-line",
                        ),
                    width=["100%", "100%"],
                    # background="rgba(0, 0, 0, 0.2)",
                    border_radius="10px",
                    margin="2em 2em 2em 2em",  # Añadido margen izquierdo
                    height="100%",
                    ),
                    rx.spacer(flex=1),  # Empuja hacia arriba si hay espacio extra
                    align_items="flex-start",
                    padding="5em",
                    spacing="0",  # Elimina espaciado predeterminado del vstack
                    height="100%",
                ),

            ),
            # Sección derecha: Imagen del producto
            rx.box(
                rx.text(
                    "texto nombre de la mochila",
                    color=Color.WHITE.value,
                    font_size="2em",
                    font_weight="bold",
                    text_align="center",
                    margin_bottom="0.5em",
                ),
                rx.box(
                    rx.text(
                        "en este recuadro\nira la foto de la\nmochila",
                        color=Color.WHITE.value,
                        text_align="center",
                        font_style="italic",
                        font_size="1.5em",
                        white_space="pre-line",
                    ),
                    background="rgba(128, 128, 128, 0.5)",  # Gris más claro
                    border_radius="10px",
                    padding="8em 4em",
                    display="flex",
                    justify_content="center",
                    align_items="center",
                    width="100%",
                    height="70%",
                ),
                width=["100%", "60%"],
                padding="1em",
                margin="1em",
                display="flex",
                flex_direction="column",
                align_items="center",
                height="100%",
            ),
            align_items="stretch",
            width="100%",
            flex_wrap="wrap",
            height="80vh",  # Altura fija para la sección principal
        ),
        # Carrusel con flechas de navegación
        rx.box(
            rx.hstack(
                # Flecha izquierda
                rx.box(
                    rx.text(
                        "❮",  # Flecha izquierda
                        font_size="2em",
                        color=Color.VIOLET_LIGHT.value,
                    ),
                    background="rgba(0, 0, 0, 0.2)",
                    border_radius="50%",
                    width="40px",
                    height="40px",
                    display="flex",
                    justify_content="center",
                    align_items="center",
                    cursor="pointer",
                ),
                # Contenedor para las tarjetas del carrusel
                rx.hstack(
                    *[
                        rx.box(
                            rx.text(
                                "fotos características\nde la mochila como\ndiferentes puntos de\nvista de ella",
                                color=Color.WHITE.value,
                                text_align="center",
                                white_space="pre-line",
                                font_size="0.8em",
                            ),
                            background="rgba(128, 128, 128, 0.5)",  # Gris
                            border_radius="10px",
                            padding="2em 1em",
                            margin="0 0.5em",
                            width="150px",
                            height="130px",
                            display="flex",
                            justify_content="center",
                            align_items="center",
                        )
                        for _ in range(20)  # Crear 4 tarjetas
                    ],
                    spacing="1",
                    overflow_x="auto",  # Cambiado a auto para permitir scroll si es necesario
                ),
                # Flecha derecha
                rx.box(
                    rx.text(
                        "❯",  # Flecha derecha
                        font_size="2em",
                        color=Color.VIOLET_LIGHT.value,
                    ),
                    background="rgba(0, 0, 0, 0.2)",
                    border_radius="50%",
                    width="40px",
                    height="40px",
                    display="flex",
                    justify_content="center",
                    align_items="center",
                    cursor="pointer",
                ),
                width="100%",
                justify_content="space-between",
                align_items="center",  # Centrar verticalmente las flechas con el carrusel
                padding="0 2em",
            ),
            margin="1em",
            padding="1em",
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
