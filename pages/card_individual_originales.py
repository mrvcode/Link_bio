import reflex as rx
from styles.styles import styles, Color, Size
from pages.originales import PRODUCTOS


# Estado del carrusel para controlar el desplazamiento
class CarruselState(rx.State):
    index: int = 0
    producto_id: int = 0  # Añadido para almacenar el ID del producto actual

    def siguiente(self):
        self.index = (self.index + 1) % 5  # Ajusta al número real de imágenes/videos

    def anterior(self):
        self.index = (self.index - 1) % 5
    
    def set_producto_id(self, id: int):
        self.producto_id = id


def card_individual_originales(id: str = None) -> rx.Component:
    """
    Renderiza la ficha detallada de un producto original.
    
    Args:
        id: Identificador del producto a mostrar.
        
    Returns:
        Un componente Reflex con la información detallada del producto.
    """
    # Añadimos logging temporal para depurar
    # import logging
    # logging.basicConfig(level=logging.INFO)
    # logging.info(f"ID recibido: {id}")
    
    # Si no hay id, mostramos mensaje de error
    if id is None:
        return rx.center(
            rx.vstack(
                rx.text("No se ha seleccionado ningún producto.", color=Color.WHITE.value),
                rx.button("Volver a Originales", on_click=rx.redirect("/originales")),
                background="rgba(0, 0, 0, 0.5)",
                padding="2em",
                border_radius="10px",
                width="auto",
            ),
            background_image=styles.BACKGROUND_GRADIENT,
            background_size="cover",
            background_repeat="no-repeat",
            background_position="center",
            width="100%",
            min_height="100vh",
        )
    
    try:
        # Intentamos convertir el id a entero
        id_int = int(id)
        
        # Buscamos el producto por su id
        producto = next((p for p in PRODUCTOS if p["id"] == id_int), None)
        # logging.info(f"Producto encontrado: {producto['nombre'] if producto else 'No encontrado'}")
        
        # Almacenamos el ID en el estado
        CarruselState.set_producto_id(id_int)
    except (ValueError, TypeError) as e:
        # logging.error(f"Error al procesar ID: {e}")
        producto = None

    # Si no encontramos el producto, mostramos mensaje de error
    if not producto:
        return rx.center(
            rx.vstack(
                rx.text("Producto no encontrado", color=Color.WHITE.value),
                rx.button("Volver a Originales", on_click=rx.redirect("/originales")),
                background="rgba(0, 0, 0, 0.5)",
                padding="2em",
                border_radius="10px",
                width="auto",
            ),
            background_image=styles.BACKGROUND_GRADIENT,
            background_size="cover",
            background_repeat="no-repeat",
            background_position="center",
            width="100%",
            min_height="100vh",
        )

    # Usamos la galería del producto o el imagen principal repetido si no hay galería
    carrusel_items = producto.get("galeria", [producto["imagen"]] * 5)

    return rx.box(
        # Título página
        rx.box(
            rx.text(
                "Ficha mochila",
                font_size=Size.DEFAULT.value,
                color=Color.WHITE.value,
                font_weight="bold",
            ),
            position="absolute",
            top="1em",
            right="2em",
            z_index="10",
        ),
        # Botón volver
        rx.box(
            rx.button(
                "← Volver a Originales", 
                on_click=rx.redirect("/originales"),
                color_scheme="purple",
                variant="outline",
            ),
            position="absolute",
            top="1em",
            left="2em",
            z_index="10",
        ),
        # Nombre centrado
        rx.box(
            rx.heading(
                producto["nombre"],
                font_size=Size.BIG.value,
                color=Color.WHITE.value,
                text_align="center",
            ),
            padding="2em 0",
            width="100%",
            margin_top="2em",
        ),
        # Contenido principal: descripción + imagen
        rx.hstack(
            # Descripciones a la izquierda
            rx.box(
                rx.vstack(
                    # Bloque 1
                    rx.box(
                        rx.heading(
                            producto.get("descripcion_titulo1", "Título 1"),
                            font_size=Size.DEFAULT.value,
                            color=Color.WHITE.value,
                        ),
                        rx.text(
                            producto.get("descripcion_corta_card", ""),
                            color=Color.WHITE.value,
                            font_size=Size.SMALL.value,
                        ),
                        rx.text(
                            producto.get("descripcion_titulos_card", ""),
                            color=Color.VIOLET_LIGHT.value,
                            white_space="pre-line",
                        ),
                        border_radius="10px",
                        margin="2em",
                        width="100%",
                    ),
                    rx.spacer(height="2.5em"),
                    # Bloque 2
                    rx.box(
                        rx.heading(
                            producto.get("descripcion_titulo2", "Título 2"),
                            font_size=Size.DEFAULT.value,
                            color=Color.WHITE.value,
                        ),
                        rx.text(
                            producto.get("descripcion_larga_card", ""),
                            color=Color.WHITE.value,
                            font_size=Size.SMALL.value,
                        ),
                        rx.text(
                            producto.get("descripcion_titulos_card", ""),
                            color=Color.VIOLET_LIGHT.value,
                            white_space="pre-line",
                        ),
                        border_radius="10px",
                        margin="2em 10em 2em 2em",
                        width="100%",
                    ),
                    rx.spacer(height="2.5em"),
                    # Bloque 3
                    rx.box(
                        rx.heading(
                            producto.get("descripcion_titulo3", "Título 3"),
                            font_size=Size.DEFAULT.value,
                            color=Color.WHITE.value,
                        ),
                        rx.text(
                            producto.get("descripcion", ""),
                            color=Color.WHITE.value,
                            font_size=Size.SMALL.value,
                        ),
                        rx.text(
                            producto.get("descripcion_titulos_card", ""),
                            color=Color.VIOLET_LIGHT.value,
                            white_space="pre-line",
                        ),
                        border_radius="10px",
                        margin="2em",
                        width="100%",
                    ),
                    spacing="0",
                    align_items="flex-start",
                    padding="5em",
                ),
                width=["100%", "40%"],
            ),
            # Imagen a la derecha
            rx.box(
                rx.image(
                    src=producto["imagen"],
                    width="100%",
                    height="auto",
                    border_radius="10px",
                    alt=f"Imagen de {producto['nombre']}",
                ),
                width=["100%", "60%"],
                padding="1em",
            ),
            flex_wrap="wrap",
            width="100%",
        ),
        # Carrusel inferior
        rx.box(
            rx.hstack(
                # Flecha izquierda
                rx.box(
                    rx.text("❮", font_size="2em", color=Color.VIOLET_LIGHT.value),
                    on_click=CarruselState.anterior,
                    background="rgba(0, 0, 0, 0.2)",
                    border_radius="50%",
                    width="40px",
                    height="40px",
                    display="flex",
                    justify_content="center",
                    align_items="center",
                    cursor="pointer",
                ),
                # Carrusel
                rx.hstack(
                    *[
                        rx.box(
                            (
                                rx.image(
                                    src=item,
                                    alt=f"Imagen {i+1} de {producto['nombre']}"
                                )
                                if item.endswith(".jpg") or item.endswith(".png")
                                else rx.video(src=item, controls=True)
                            ),
                            width="150px",
                            height="130px",
                            border_radius="10px",
                            margin="0 0.5em",
                        )
                        for i, item in enumerate(carrusel_items)
                    ],
                    overflow_x="auto",
                    spacing="1",
                ),
                # Flecha derecha
                rx.box(
                    rx.text("❯", font_size="2em", color=Color.VIOLET_LIGHT.value),
                    on_click=CarruselState.siguiente,
                    background="rgba(0, 0, 0, 0.2)",
                    border_radius="50%",
                    width="40px",
                    height="40px",
                    display="flex",
                    justify_content="center",
                    align_items="center",
                    cursor="pointer",
                ),
                justify_content="space-between",
                align_items="center",
                width="100%",
                padding="1em 2em",
            ),
            width="100%",
        ),
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_repeat="no-repeat",
        background_position="center",
        width="100%",
        min_height="100vh",
        padding="2em",
    )