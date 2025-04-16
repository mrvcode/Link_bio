import reflex as rx
from styles.styles import Color, Size


def header() -> rx.Component:
    primera_columna_texto = """¡Desata tu creatividad con las revolucionarias Mochilas 3D!
    Creadas mediante la más avanzada impresión tridimensional,
    estas piezas únicas van mucho más allá de lo convencional.
    Implementalas a tu gusto, personalizando cada detalle para reflejar
    tu estilo inconfundible. Sumérgete en un universo
    de gran colorido y diseños vibrantes, donde la utilidad se fusiona
    con la innovación."""

    segunda_columna_texto = """Si buscas lo mejor del mercado en personalización
    y funcionalidad, has llegado al destino ideal.
    En nuestra web de venta nacional, te ofrecemos la oportunidad de
    poseer una mochila que no solo te acompaña, sino que también
    te define. ¡Explora un nuevo horizonte de posibilidades
    y lleva contigo una obra de arte funcional!"""

    return rx.vstack(
        rx.box(  # Avatar
            rx.text(
                "V3D",
                font_size=Size.BIG.value,
                color=Color.VIOLET_LIGHT.value,
                font_weight="bold",
                filter="brightness(1.3)",
            ),
            background="rgba(0, 0, 0, 0.2)",
            border_radius="15px",
            padding="20px",
            width="90px",
            height="90px",
            display="flex",
            align_items="center",
            justify_content="center",
            border="2px solid " + Color.VIOLET_LIGHT.value,  # Añadimos el borde
        ),
        rx.text(
            "TU IMAGINACIÓN, TUS REGLAS",
            align="center",
            font_weight="bold",
            font_size=Size.DEFAULT.value,
            color=Color.WHITE.value,
            padding_y="10px",
        ),
        rx.hstack(  # Usamos hstack para las dos columnas
            rx.box(  # Contenedor para la primera columna
                rx.text(
                    primera_columna_texto,
                    style={"textAlign": "justify"},  # Aplica la justificación con style
                    color=Color.WHITE.value,
                    padding_x="10px",
                    font_size=Size.SMALL.value,
                ),
                width="50%",  # Establece el ancho al 50%
                padding_right="1em",  # Añade un poco de espacio a la derecha
            ),
            rx.box(  # Contenedor para la segunda columna
                rx.text(
                    segunda_columna_texto,
                    style={"textAlign": "justify"},  # Aplica la justificación con style
                    color=Color.WHITE.value,
                    padding_x="10px",
                    font_size=Size.SMALL.value,
                ),
                width="50%",  # Establece el ancho al 50%
                padding_left="1em",  # Añade un poco de espacio a la izquierda
            ),
            justify="center",  # Centra las columnas horizontalmente (opcional, ya ocupan el 100%)
            width="100%",
            spacing="0",  # El espacio ahora se gestiona con padding en los rx.box
        ),
        align="center",  # Centra los elementos internos del vstack del header
        spacing="3",
    )
