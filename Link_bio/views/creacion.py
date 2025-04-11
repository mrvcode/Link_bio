import reflex as rx

def creacion() -> rx.Component:
    return rx.vstack(
        rx.heading("Página en Construcción"),
        rx.text("Este contenido se agregará pronto."),
        align="center",
        padding="4em",
    )