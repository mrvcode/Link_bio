import reflex as rx
from styles.styles import styles, Color, Size



def extras() -> rx.Component:
    """
    Página de creación que muestra opciones para crear mochilas personalizadas.
    """
    return rx.box(
        rx.vstack(
            rx.heading("Área de Creación", size="2", color=Color.WHITE.value),
            rx.text(
                """Aquí podrás personalizar tu mochila V3D
                Fondos de pantalla 3D de tu mochila personalizada
                Manual de cuidados
                Stickers digitales para redes
                Tutoriales de cómo montar/desmontar""",
                color=Color.WHITE.value,
                font_size=Size.DEFAULT.value,
                text_align="center",
            ),
            rx.spacer(height="2em"),
            rx.box(
                rx.text(
                    "Próximamente disponible...",
                    color=Color.VIOLET_LIGHT.value,
                    font_size=Size.BIG.value,
                    font_weight="bold",
                ),
                padding="2em",
                background="rgba(0, 0, 0, 0.3)",
                border_radius="15px",
            ),
            spacing="5",
            align="center",
            padding="3em",
            max_width=styles.MAX_WIDTH,
            margin="0 auto",
        ),
        
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_repeat="no-repeat",
        background_attachment="fixed",
        background_position="center",
        width="100%",
        min_height="100vh",
    )
