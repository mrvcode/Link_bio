import reflex as rx
from Link_bio.styles.styles import styles  # ✅ Asegúrate de importar los estilos


def header() -> rx.Component:
    return rx.vstack(
        # Avatar personalizado con fondo semitransparente
        rx.box(
            rx.text(
                "V3D", font_size="2em", color=styles.TEXT_COLOR_AVATAR, font_weight="bold"
            ),  # Color morado
            background="rgba(0, 0, 0, 0.3)",  # Fondo negro semitransparente
            border_radius="15px",
            padding="20px",
            width="90px",
            height="90px",
            display="flex",
            align_items="center",
            justify_content="center",
        ),
        rx.text("Mochilas V3D", align="center", font_size="1.5em", color="white"),
        rx.text(
            "TU IMAGINACIÓN, TUS REGLAS",
            align="center",
            font_size="1.2em",
            color="white",
        ),
        rx.text(
            """¡Desata tu creatividad con las revolucionarias Mochilas 3D!
            Creadas mediante la más avanzada impresión tridimensional,
            estas piezas únicas van mucho más allá de lo convencional.
            Implementalas a tu gusto, personalizando cada detalle para reflejar
            tu estilo inconfundible. Sumérgete en un universo
            de gran colorido y diseños vibrantes, donde la utilidad se fusiona
            con la innovación. Si buscas lo mejor del mercado en personalización
            y funcionalidad, has llegado al destino ideal.
            En nuestra web de venta nacional, te ofrecemos la oportunidad de
            poseer una mochila que no solo te acompaña, sino que también
            te define. ¡Explora un nuevo horizonte de posibilidades
            y lleva contigo una obra de arte funcional!""",
            align="center",
            color="white",
            padding_x="10px",
        ),
        align="center",  # Centra los elementos internos del vstack del header
        spacing="3",
    )
