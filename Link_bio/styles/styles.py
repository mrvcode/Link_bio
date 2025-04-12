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


class Size(Enum):
    SMALL = "0.5em"
    DEFAULT = "1em"
    BIG = "2em"


class StyleConstants(Enum):
    MAX_WIDTH = "900px"


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
        "height": "360px",
        "border_radius": Size.DEFAULT.value,
        "bg": Color.GREEN_LIGHT.value,
        "color": "white",
        "font_weight": "normal",
        "_hover": {"bg": Color.GREEN_MEDIUM.value},
        "margin": "0",
        "padding": Size.SMALL.value,
        # "padding": "8px",
        "display": "flex",
        "align_items": "center",
        "justify_content": "center",
        "text_align": "center",
    }

    BASE_STYLE = {
        rx.link : {
            "text_decoration": "none",
            "_hover": {}
        }
    }