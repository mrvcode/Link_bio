import reflex as rx


def navbar() -> rx.Component:
    return rx.hstack(
        rx.text(
            "Home",
            height=20,
        ),
        justify="start",  # Alinea el contenido al inicio (izquierda)
        width="100%",  # Ocupa todo el ancho
        position="sticky",
        top=0,  # Asegura que se pegue a la parte superior
        bg="blue",
        padding_x=16,
        padding_y=8,
        z_index=999,
    )
