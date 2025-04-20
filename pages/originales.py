# pages/originales.py

import reflex as rx
from components.cards_originales.complement_individual_card import (
    complement_individual_card,
)
from styles.styles import styles, Color


PRODUCTOS = [
    {
        "id": 0,
        "nombre": "Mochila Futura",
        "precio": "59.99",
        "imagen": "/image_mochilas_original/mochila.jpg",  # Añadido / al inicio
        "descripcion_titulo1": "Diseño del Futuro",
        "descripcion_corta_card": "Ligera, moderna, y resistente al agua.",
        "descripcion_larga_card": "La Mochila Futura está pensada para quienes siempre están un paso adelante. Combina tecnología y comodidad con materiales premium. Ideal para la ciudad o tus viajes más atrevidos.",
        "descripcion_titulo2": "Características",
        "descripcion_titulo3": "Especificaciones",
        "descripcion": "Mochila de alta calidad con materiales premium y diseño ergonómico.",
        "descripcion_titulos_card": "• Material: Nylon resistente\n• Capacidad: 20L\n• Peso: 650g",
        "galeria": [
            "/image_carrusel_original/mochila.jpg",  # Añadido / al inicio
            "/image_carrusel_original/mochila1.jpg",
            "/image_carrusel_original/mochila2.jpg",
            "/image_carrusel_original/mochila3.jpg",
            "/image_carrusel_original/mochila4.jpg",
            "/image_carrusel_original/mochila5.jpg",
            "/image_carrusel_original/mochila6.jpg",
        ],
        "color_avatar": Color.VIOLET_LIGHT.value,
    },
    {
        "id": 1,
        "nombre": "Mochila Urbana",
        "precio": "49.99",
        "imagen": "/image_mochilas_original/mochila.jpg",  # Añadido / al inicio
        "descripcion_titulo1": "Perfecta para el día a día",
        "descripcion_corta_card": "Comodidad, estilo y funcionalidad urbana.",
        "descripcion_larga_card": "Diseñada pensando en la movilidad urbana. Con múltiples compartimentos, espacio para portátil y acolchado ergonómico. Combina con tu ritmo de vida y tu outfit diario.",
        "descripcion_titulo2": "Características",
        "descripcion_titulo3": "Especificaciones",
        "descripcion": "Mochila urbana con estilo moderno ideal para la ciudad.",
        "descripcion_titulos_card": "• Material: Poliéster\n• Capacidad: 15L\n• Peso: 550g",
        "galeria": [
            "/image_carrusel_original/mochila.jpg",  # Añadido / al inicio
            "/image_carrusel_original/mochila1.jpg",
            "/image_carrusel_original/mochila2.jpg",
            "/image_carrusel_original/mochila3.jpg",
            "/image_carrusel_original/mochila4.jpg",
            "/image_carrusel_original/mochila5.jpg",
            "/image_carrusel_original/mochila6.jpg",
        ],
        "color_avatar": Color.BLUE_MEDIUM.value,
    },
    {
        "id": 2,
        "nombre": "Mochila Eco",
        "precio": "39.99",
        "imagen": "/image_mochilas_original/mochila.jpg",  # Añadido / al inicio
        "descripcion_titulo1": "Sostenibilidad con estilo",
        "descripcion_corta_card": "Materiales reciclados, compromiso con el planeta.",
        "descripcion_larga_card": "La Mochila Eco no solo se ve bien, también hace el bien. Hecha con tejidos reciclados y procesos de baja huella ecológica. Es tu compañera perfecta si amas el planeta.",
        "descripcion_titulo2": "Características",
        "descripcion_titulo3": "Especificaciones",
        "descripcion": "Mochila ecológica hecha con materiales reciclados y sostenibles.",
        "descripcion_titulos_card": "• Material: Algodón reciclado\n• Capacidad: 18L\n• Peso: 500g",
        "galeria": [
            "/image_carrusel_original/mochila.jpg",  # Añadido / al inicio
            "/image_carrusel_original/mochila1.jpg",
            "/image_carrusel_original/mochila2.jpg",
            "/image_carrusel_original/mochila3.jpg",
            "/image_carrusel_original/mochila4.jpg",
            "/image_carrusel_original/mochila5.jpg",
            "/image_carrusel_original/mochila6.jpg",
        ],
        "color_avatar": Color.GREEN_LIGHT.value,
    },
]


def originales() -> rx.Component:
    """
    Renderiza la página de productos originales.

    Returns:
        Un componente Reflex que muestra la grid de productos.
    """
    return rx.box(
        # Título superior derecho
        rx.box(
            rx.text(
                "Originales",
                font_size="1.5em",
                color=Color.WHITE.value,
                font_weight="bold",
            ),
            position="absolute",
            top="1em",
            right="2em",
            z_index="10",
        ),
        # Grid de productos
        rx.center(
            rx.grid(
                *[
                    rx.link(
                        complement_individual_card(
                            nombre=producto["nombre"],
                            imagen=producto["imagen"],
                            precio=producto["precio"],
                            color_avatar=producto["color_avatar"],
                        ),
                        # Es importante usar rx.redirect en vez de href para páginas dinámicas
                        on_click=rx.redirect(f"/detalle_originales/{producto['id']}"),
                        style={"text_decoration": "none"},
                    )
                    for producto in PRODUCTOS
                ],
                columns="repeat(3, 1fr)",
                spacing="8",
                width="100%",
                max_width=styles.MAX_WIDTH,
                margin_y="2em",
            )
        ),
        # Fondo y dimensiones del contenedor general
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_repeat="no-repeat",
        background_position="center",
        width="100%",
        min_height="100vh",
        padding="2em",
        position="relative",
    )