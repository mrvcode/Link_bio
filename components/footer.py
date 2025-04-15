import reflex as rx
import datetime


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="favicon.ico"),
        rx.link(
            f"© {datetime.date.today().year} Mochilas V3D.",
            href="/creacion",
            is_external=False,
        ),
        rx.text("BUILDING WITH YOU"),
        align="center",
    )