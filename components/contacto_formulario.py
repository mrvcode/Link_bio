import reflex as rx
from styles.styles import styles, Color, Size


def contacto_formulario() -> rx.Component:
    return rx.center(
        rx.box(
            rx.form(
                rx.vstack(
                    rx.input(
                        placeholder="Nombre y apellido",
                        name="nombre y apellido",
                        font_size=Size.DEFAULT.value,
                        color=Color.BLUE_LIGHT.value,
                        _placeholder={"color": Color.BLUE_MEDIUM.value},
                        bg=Color.FONDO_CONTACTO.value,
                        border_radius="15px",
                        height="70px",
                        width="500px",
                        padding_x="15px",
                    ),
                    rx.input(
                        placeholder="Correo Electrónico",
                        name="email",
                        type_="email",
                        font_size=Size.DEFAULT.value,
                        color=Color.BLUE_LIGHT.value,
                        _placeholder={"color": Color.BLUE_MEDIUM.value},
                        bg=Color.FONDO_CONTACTO.value,
                        border_radius="15px",
                        height="70px",
                        width="500px",
                        padding_x="15px",
                    ),
                    rx.input(
                        placeholder="Asunto",
                        name="asunto",
                        font_size=Size.DEFAULT.value,
                        color=Color.BLUE_LIGHT.value,
                        _placeholder={"color": Color.GREEN_MEDIUM.value},
                        bg=Color.FONDO_CONTACTO.value,
                        border_radius="15px",
                        height="70px",
                        width="500px",
                        padding_x="15px",
                    ),
                    rx.button(
                        "Enviar",
                        type_="submit",
                        font_size=Size.DEFAULT.value,
                        bg=Color.BLUE_LIGHT.value,
                        color=Color.WHITE.value,
                        border_radius="15px",
                        _hover={"opacity": "0.9"},
                        height="70px",
                        width="500px",
                    ),
                    spacing="4",
                ),
                method="post",  # Aunque por ahora no tenga efecto real
            ),
            padding="4",
            width="500px",
            border_radius="15px",
        ),
        # height="100vh",
    )
