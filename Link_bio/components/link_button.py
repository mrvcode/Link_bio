import reflex as rx

def link_button(text: str, url: str) -> rx.Component:
    return rx.link(
        rx.button(
            text,
            width="220px",
            height="220px",
            border_radius="12px",
            bg="#0078d7",
            color="white",
            font_size="18px",
            font_weight="normal",
            _hover={"bg": "#0063b1"},
            margin="0",
            padding="0",
        ),
        href=url,
        is_external=False,
        width="auto",
        height="auto",
        display="block",
        text_decoration="none"
    )