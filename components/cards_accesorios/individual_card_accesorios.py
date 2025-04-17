import reflex as rx
from components.cards_accesorios.base_cards_accesorios import base_card_accesorios


def individual_card_accesorios(
    nombre: str,
    descripcion: str,
    imagen: str,
    width: str,
    height: str,
) -> rx.Component:
    return base_card_accesorios(
        rx.hstack(  # Usamos hstack para la imagen a la derecha y texto a la izquierda
            rx.vstack(  # Columna izquierda para el texto
                rx.text(nombre, font_weight="bold", font_size="1.2em"),
                rx.text(descripcion),
                align_items="flex-start",
                spacing="1",  # Cambiado de "0.5em" a "1"
            ),
            rx.image(  # Imagen a la derecha
                src=imagen,
                width="40%",  # Ajusta según sea necesario
                height="100%",
                object_fit="cover",
            ),
            width="100%",
            height="100%",
            justify="between",  # Cambiado de "space-between" a "between"
        ),
        width=width,
        height=height,
    )
