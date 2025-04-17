import reflex as rx
from components.cards_accesorios.individual_card_accesorios import (
    individual_card_accesorios,
)
from styles.styles import styles

# Datos de ejemplo
ACCESORIOS = [
    {
        "id": 1,
        "nombre": "Pencil Case",
        "descripcion": "Pencils near you",
        "imagen": "/image_accesorios/accesorio.jpg",
    },
    {
        "id": 2,
        "nombre": "Water Bag 3L",
        "descripcion": "Drink wherever",
        "imagen": "/image_accesorios/accesorio.jpg",
    },
    {
        "id": 3,
        "nombre": "Rain Cover",
        "descripcion": "Protect yourself",
        "imagen": "/image_accesorios/accesorio.jpg",
    },
    {
        "id": 4,
        "nombre": "Pencil Case",
        "descripcion": "Pencils near you",
        "imagen": "/image_accesorios/accesorio.jpg",
    },
    {
        "id": 5,
        "nombre": "Water Bag 3L",
        "descripcion": "Drink wherever",
        "imagen": "/image_accesorios/accesorio.jpg",
    },
    {
        "id": 6,
        "nombre": "Rain Cover",
        "descripcion": "Protect yourself",
        "imagen": "/image_accesorios/accesorio.jpg",
    },
    # ... más accesorios
]

# Define el layout de la cuadricula.
GRID_LAYOUT = [
    {"width": "220px", "height": "150px"},
    {"width": "220px", "height": "300px"},
    {"width": "220px", "height": "300px"},
    {"width": "220px", "height": "150px"},
    {"width": "220px", "height": "150px"},
    {"width": "300px", "height": "300px"},
    {"width": "220px", "height": "300px"},
    {"width": "220px", "height": "150px"},
    {"width": "220px", "height": "150px"},
    {"width": "220px", "height": "300px"},
    {"width": "220px", "height": "150px"},
    {"width": "220px", "height": "150px"},
    {"width": "220px", "height": "150px"},
    {"width": "220px", "height": "300px"},
    {"width": "220px", "height": "150px"},
    {"width": "220px", "height": "300px"},
    {"width": "220px", "height": "300px"},
]


def accesorios() -> rx.Component:
    items = []
    for i, accesorio in enumerate(ACCESORIOS):
        # Obtenemos el tamaño correspondiente del diseño
        size = GRID_LAYOUT[i % len(GRID_LAYOUT)]
        items.append(
            rx.link(
                individual_card_accesorios(
                    nombre=accesorio["nombre"],
                    descripcion=accesorio["descripcion"],
                    imagen=accesorio["imagen"],
                    width=size["width"],
                    height=size["height"],
                ),
                href=f"/accesorios/{accesorio['id']}",
                style={"text_decoration": "none"},
            )
        )

    return rx.box(
        rx.box(
            rx.text("Accesorios", font_size="1.5em", font_weight="bold", color="white"),
            position="absolute",
            top="1em",
            right="2em",
            z_index="10",
        ),
        rx.flex(
            *items,
            flex_wrap="wrap",  # Permite que los elementos se envuelvan a la siguiente fila
            justify_content="center",  # Centra los elementos horizontalmente
        ),
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_repeat="no-repeat",
        background_position="center",
        width="100%",
        min_height="100vh",
        padding="2em",
        position="relative",
    )
