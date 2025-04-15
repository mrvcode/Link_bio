import reflex as rx
from components.nav import vertical_menu

def sidebar() -> rx.Component:
    """
    Componente sidebar que envuelve el menú vertical para usarlo en el layout.
    """
    return vertical_menu()