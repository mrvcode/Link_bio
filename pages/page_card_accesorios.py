# pages/page_card_accesorios.py
import reflex as rx
from styles.styles import styles, Size, Color
from pages.accesorios import ACCESORIOS


def page_card_accesorios(id: int = None) -> rx.Component:
    # Verifica si el ID es None
    if id is None:
        return rx.center(
            rx.text(
                "No se proporcionó un ID de accesorio.",
                color=Color.WHITE.value,
                font_size=Size.DEFAULT.value,
            )
        )

    # Busca el accesorio por ID
    accesorio = next((a for a in ACCESORIOS if a["id"] == int(id)), None)

    # Si no se encuentra el accesorio, muestra un mensaje de error
    if not accesorio:
        return rx.center(
            rx.text(
                "Accesorio no encontrado",
                color=Color.WHITE.value,
                font_size=Size.DEFAULT.value,
            )
        )

    # Si se encuentra el accesorio, muestra sus detalles
    return rx.box(
        rx.heading(
            accesorio["nombre"],
            color=Color.VIOLET_LIGHT.value,
            font_size=Size.BIG.value,
        ),
        rx.image(src=accesorio["imagen"], width="300px", height="auto"),
        rx.text(
            accesorio["descripcion"],
            color=Color.WHITE.value,
            font_size=Size.DEFAULT.value,
        ),
        padding="2em",
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_position="center",
        width="100%",
        min_height="100vh",
    )
