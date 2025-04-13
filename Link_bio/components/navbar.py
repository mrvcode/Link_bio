import reflex as rx
from Link_bio.state import NavbarState
from Link_bio.styles.styles import Color as Color
from Link_bio.styles.styles import Size as Size


def navbar() -> rx.Component:
    return rx.box(
        rx.box(  # Este box es el contenedor relativo
            rx.box(  # Avatar
                rx.text(
                    "V3D",
                    font_size="2em",
                    color=Color.VIOLET_LIGHT.value,
                    font_weight="bold",
                ),
                background="rgba(0, 0, 0, 0.3)",
                border_radius="15px",
                padding="20px",
                width="90px",
                height="90px",
                display="flex",
                align_items="center",
                justify_content="center",
                cursor="pointer",
                on_click=NavbarState.toggle_menu,
                id="avatar-box",
            ),
            rx.cond(
                NavbarState.show_menu,
                rx.box(
                    rx.hstack(  # CAMBIADO de vstack a hstack
                        rx.link("Home", href="/", color=Color.VIOLET_LIGHT.value),
                        rx.link(
                            "Origen",
                            href="/materiales",
                            color=Color.VIOLET_LIGHT.value,
                        ),
                        rx.link(
                            "Contacto", href="/contacto", color=Color.VIOLET_LIGHT.value
                        ),
                        rx.link(
                            "Nosotros", href="/nosotros", color=Color.VIOLET_LIGHT.value
                        ),
                        rx.link("FAQ", href="/faq", color=Color.VIOLET_LIGHT.value),
                        rx.link("Blog", href="/blog", color=Color.VIOLET_LIGHT.value),
                        spacing="3",
                        align="center",
                    ),
                    background="rgba(0,0,0,0.3)",
                    padding="1em",
                    border_radius=Size.DEFAULT.value,
                    position="absolute",
                    top="0",
                    left="100px",
                    z_index="1001",
                    box_shadow="0 4px 6px rgba(0, 0, 0, 0.1)",
                ),
            ),
            position="relative",
            display="inline-block",
        ),
        width="100%",
        padding="1em",
        # position="fixed",
        top="0",
        left="0",
        z_index="1000",
    )
