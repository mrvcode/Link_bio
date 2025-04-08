import reflex as rx
from Link_bio.components.navbar import navbar


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.vstack(navbar())


app = rx.App()
app.add_page(index)
