from enum import Enum
import reflex as rx


class Color(str, Enum):
    VIOLET_LIGHT = "#cf6fd0"
    VIOLET_MEDIUM = "#8f4a82"
    GREEN_DARK = "#13220c"
    BLUE_MEDIUM = "#0a97b4"
    GREEN_LIGHT = "#0f828e"
    GREEN_MEDIUM = "#062821"
    BLACK = "#000000"
    WHITE = "#F1F1F1"
    ICON_COLOR = "#00FFAA"
    FONDO_CARDS = "rgba(0, 0, 0, 0.5)"


class Size(Enum):
    SMALL = "1.2em"
    DEFAULT = "1.8em"
    BIG = "2.3em"


class StyleConstants(Enum):
    MAX_WIDTH = "1200px"


class styles:
    MAX_WIDTH = StyleConstants.MAX_WIDTH.value
    SMALL = Size.SMALL.value
    DEFAULT = Size.DEFAULT.value
    BIG = Size.BIG.value

    BACKGROUND_GRADIENT = (
        "radial-gradient(circle at 20% 30%, #1fcdae 0%, transparent 40%), "
        "radial-gradient(circle at 70% 20%, #cf6fd0 0%, transparent 40%), "
        "radial-gradient(circle at 40% 80%, #0a97b4 0%, transparent 40%), "
        "linear-gradient(to bottom, #000000, #000000)"
    )

    BACKGROUND_OVERLAY = "rgba(0, 0, 0, 0.5)"
    TEXT_COLOR = "#ffffff"
    TEXT_COLOR_AVATAR = Color.VIOLET_MEDIUM

    BUTTON_BIG = {
        "width": "280px",
        "height": "300px",
        "border_radius": Size.DEFAULT.value,
        "font_weight": "normal",
        "margin": "0",
        "padding": Size.SMALL.value,
        # "padding": "8px",
        "display": "flex",
        "align_items": "center",
        "justify_content": "center",
        "text_align": "center",
        "color": Color.WHITE.value,
        "bg": Color.GREEN_LIGHT.value,
        "_hover": {"bg": Color.GREEN_MEDIUM.value},
    }

    BASE_STYLE = {rx.link: {"text_decoration": "none", "_hover": {}}}

    # Estilo para los tooltips animados (texto junto a icono al pasar el ratón)
    TOOLTIP_HOVER_CSS = """
    .nav-link:hover .tooltip-text {
        opacity: 1;
        transform: translateX(0);
    }
    """

    # Estilo de hover general para animar iconos
    ICON_HOVER_STYLE = {
        "transform": "scale(1.2)",
        "transition": "transform 0.2s ease",
        "filter": "brightness(1.3)",
    }