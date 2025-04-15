import reflex as rx
# from styles.styles import Color


def complement_individual_card(
    product_name: str = "nombre mochila",
    image_url: str = None
) -> rx.Component:
    """
    Componente de tarjeta de producto reutilizable.
    
    Args:
        product_name: Nombre del producto
        image_url: URL de la imagen del producto (opcional)
    
    Returns:
        Un componente de tarjeta de producto
    """
    return rx.box(
        # Contenedor principal con bordes redondeados y color verde/azulado
        rx.box(
            # Header con nombre del producto y botón de compartir
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
            
            # Área de imagen (recuadro blanco)
            rx.box(
                # Si hay una imagen, mostrarla; si no, mostrar texto placeholder
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
            ),
            
            # Footer con iconos de corazón y carrito
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
            
            bg="teal.600",  # Color de fondo azul/verde del componente
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
        max_width="300px",  # Ancho máximo para la tarjeta
    )