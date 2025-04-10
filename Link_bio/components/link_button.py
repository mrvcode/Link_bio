import reflex as rx


def link_button(text) -> rx.Component:
    return rx.button(
        text,
        width="220px",  # Ancho grande para botones cuadrados
        height="220px",  # Altura igual al ancho
        border_radius="12px",
        bg="#0078d7",
        color="white",
        font_size="18px",
        font_weight="normal",
        _hover={"bg": "#0063b1"},
        margin="0",
        padding="0",
    )
