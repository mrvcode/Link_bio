import reflex as rx
from components.sidebar import sidebar
from components.footer import footer
from components.header import header
from components.links import links
from pages.creacion import creacion
from pages.originales import originales
from pages.accesorios import accesorios
from pages.extras import extras
from styles.styles import styles
from pages.page_card_originales import page_card_originales


# Metadatos para la página de inicio
home_title = "Mochilas V3D | Diseño Innovador y Personalizado"
home_description = "Descubre la colección de mochilas 3D únicas y personalizables. Expresa tu estilo con diseños vibrantes y funcionales."
home_preview_image = "/assets/mochilas_3d_preview.jpg"


# Layout común para todas las páginas
def layout(page: rx.Component) -> rx.Component:
    """
    Layout común para todas las páginas que incluye una barra lateral y el contenido principal.
    """
    return rx.box(
        # Añadimos el sidebar
        sidebar(),
        # Contenido principal
        rx.box(
            page,
            flex="1",
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


def index() -> rx.Component:
    """
    Página de inicio que muestra el header, links y footer.
    """
    return rx.box(
        rx.fragment(
            rx.box(
                position="fixed",
                top="0",
                left="0",
                width="100%",
                height="100%",
                # bg=styles.BACKGROUND_OVERLAY,
                z_index="0",
            ),
            rx.vstack(
                rx.spacer(height="px"),
                rx.center(
                    rx.vstack(
                        header(),
                        links(),
                        align="center",
                        spacing="3",
                        width="100%",
                        max_width=styles.MAX_WIDTH,
                        margin_x="20px",
                        margin_y=styles.SMALL,
                        border_radius="12px",
                        padding="20px",
                        z_index="1",
                    ),
                    width="100%",
                ),
                width="100%",
                spacing="3",
                align_items="center",
                min_height="100vh",
                z_index="1",
            ),
        ),
        background_image=styles.BACKGROUND_GRADIENT,
        background_size="cover",
        background_repeat="no-repeat",
        background_attachment="fixed",
        background_position="center",
        width="100%",
        min_height="100vh",
    )


# Inicializa la aplicación Reflex
app = rx.App(
    style=styles.BASE_STYLE,
    head_components=[
        rx.script(src="https://www.googletagmanager.com/gtag/js?id=G-F9PNLXF9EK"),
        rx.script(
            """
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config',  'G-F9PNLXF9EK');
            """
        ),
    ],
)

# Registro de páginas
app.add_page(
    lambda: layout(index()),
    route="/",
    title=home_title,
    description=home_description,
    image="/assets/favicon.ico",
    meta=[
        {"name": "og:type", "content": "website"},
        {"name": "og:title", "content": home_title},
        {"name": "og:description", "content": home_description},
        {"name": "og:image", "content": home_preview_image},
    ],
)
app.add_page(lambda: layout(creacion()), route="/creacion", title="Creación")
app.add_page(lambda: layout(accesorios()), route="/accesorios", title="Accesorios")
app.add_page(lambda: layout(originales()), route="/originales", title="Originales")
app.add_page(lambda: layout(extras()), route="/extras", title="Extras")
app.add_page(
    lambda id: layout(page_card_originales(id)),
    route="/originales/[id]",
    title="Detalle Producto",
)
