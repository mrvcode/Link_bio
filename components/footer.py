import reflex as rx
import datetime

def footer() -> rx.Component:
    return rx.vstack(
        # Usa la ruta absoluta desde la raíz web
        rx.image(src="/favicon.ico", width="32px", height="32px"), # Añade tamaño si quieres
        rx.link(
            f"© {datetime.date.today().year} Mochilas V3D.",
            href="/creacion",
            is_external=False,
        ),
        rx.text("BUILDING WITH YOU"),
        align="center",
    )