import reflex as rx
from components.sidebar import sidebar
from components.footer import footer


def layout(page: rx.Component) -> rx.Component:
    """
    Layout común para todas las páginas que incluye una barra lateral y el contenido principal.

    Args:
        page: Componente de la página a renderizar en el área principal.

    Returns:
        Un componente con la estructura común de todas las páginas.
    """
    return rx.box(
        # Añadimos el sidebar
        sidebar(),
        # Contenido principal
        rx.box(
            page,
            flex="1",
            # padding="20px",
            min_height="100vh",
        ),
        # Footer al final
        rx.box(footer(), width="100%", padding_y="20px", margin_top="auto"),
        # Propiedades del contenedor principal
        display="flex",
        flex_direction="column",
        min_height="100vh",
        width="100%",
    )
