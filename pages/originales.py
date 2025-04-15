import reflex as rx
from styles.styles import styles  # Asegúrate de que Color esté definido en tus estilos

# Importa la función de la tarjeta individual
from tu_archivo_de_tarjeta import complement_individual_card  # Reemplaza 'tu_archivo_de_tarjeta'

def originales() -> rx.Component:
    """
    Página de productos originales con una rejilla de tarjetas de producto.
    Al hacer clic en la imagen de cada tarjeta, se navega a la página de detalle del producto.
    """
    productos = [
        {"nombre": "Mochila Clásica", "imagen": "url_mochila_clasica.jpg"},
        {"nombre": "Mochila Deportiva", "imagen": "url_mochila_deportiva.jpg"},
        {"nombre": "Mochila Urbana", "imagen": None},  # Ejemplo sin imagen
        {"nombre": "Mochila Táctica", "imagen": "url_mochila_tactica.jpg"},
        {"nombre": "Mochila Vintage", "imagen": "url_mochila_vintage.jpg"},
        {"nombre": "Mochila Minimalista", "imagen": None}, # Otro ejemplo sin imagen
        # Añade más productos aquí
    ]

    return rx.box(
        rx.heading(
            "Mochilas Originales",
            font_size="2em",
            color="white",
            text_align="center",
            padding_top="1em",
        ),
        rx.grid(
            *[
                complement_individual_card(
                    product_name=producto["nombre"],
                    image_url=producto["imagen"]
                ).override({"_hover": {}}) # Remove hover effect from the card
                for producto in productos
            ],
            columns=[1, 2, 3],  # Define el número de columnas para diferentes tamaños de pantalla
            spacing="1.5em",
            padding="2em",
        ),
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_repeat="no-repeat",
        background_attachment="fixed",
        background_position="center",
        width="100%",
        min_height="100vh",
    )

# Modificamos la función complement_individual_card para incluir el enlace en la imagen
def complement_individual_card(
    product_name: str = "nombre mochila",
    image_url: str = None
) -> rx.Component:
    """
    Componente de tarjeta de producto reutilizable con enlace a la página de detalle en la imagen.
    """
    image_area = rx.box(
        rx.cond(
            image_url != None,
            rx.image(
                src=image_url,
                width="100%",
                height="100%",
                object_fit="contain",
            ),
            rx.center(
                rx.text(
                    "en este recuadro\nira la foto de la\nmochila",
                    color="teal.700",
                    font_size="1.2em",
                    text_align="center",
                    white_space="pre-line",
                )
            )
        ),
        bg="white",
        width="100%",
        height="200px",
        border_radius="10px",
        margin="0.5em 0",
        overflow="hidden",
        cursor="pointer", # Indica que es clickeable
    )

    return rx.box(
        rx.box(
            rx.hstack(
                rx.hstack(
                    rx.box(
                        "VIP",
                        bg="black",
                        color="white",
                        font_size="0.7em",
                        border_radius="3px",
                        padding="0 6px",
                        margin_right="0.5em",
                    ),
                    rx.text(
                        product_name,
                        font_size="0.9em",
                        font_weight="medium",
                        color="white",
                    ),
                ),
                rx.icon(
                    "paper-airplane",
                    color="white",
                    transform="rotate(45deg)",
                    cursor="pointer",
                ),
                width="100%",
                justify_content="space-between",
                padding="0.5em 0.8em",
            ),

            rx.link(
                image_area,
                href="/componets/page_card_originales", # Asegúrate de que esta ruta sea correcta
                width="100%",
            ),

            rx.hstack(
                rx.icon(
                    "heart",
                    color="white",
                    cursor="pointer",
                    _hover={"color": "red.400"},
                ),
                rx.icon(
                    "shopping-cart",
                    color="white",
                    cursor="pointer",
                    _hover={"color": "blue.300"},
                ),
                justify_content="space-between",
                width="100%",
                padding="0.5em 1em",
            ),

            bg="teal.600",
            border_radius="12px",
            width="100%",
            height="100%",
            padding="0.5em",
            transition="transform 0.3s, box-shadow 0.3s",
            _hover={
                "transform": "translateY(-5px)",
                "box_shadow": "lg",
            },
        ),
        padding="0.5em",
        width="100%",
        max_width="300px",
        
    )

# Asegúrate de definir la ruta para esta página en tu archivo de rutas (rx.App(routes=[...]))