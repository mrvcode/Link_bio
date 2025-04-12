from enum import Enum


class Color(str, Enum):
    VIOLET_LIGHT = "#cf6fd0"
    VIOLET_MEDIUM = "#8f4a82"
    GREEN_DARK = "#13220c"
    BLUE_MEDIUM = "#0a97b4"
    GREEN_LIGHT = "#1fcdae"
    BLACK = "#000000"  # Añadido por si lo necesitas para el fondo base


class Size(Enum):
    SMALL = "0.5em"
    DEFAULT = "1em"
    BIG = "2em"


class StyleConstants(Enum):
    MAX_WIDTH = "900px"


class styles:
    # Constants
    MAX_WIDTH = StyleConstants.MAX_WIDTH.value

    # Sizes
    SMALL = Size.SMALL.value
    DEFAULT = Size.DEFAULT.value
    BIG = Size.BIG.value

    # Background Gradient (simulación del fondo blur tipo blob)
    BACKGROUND_GRADIENT = (
        "radial-gradient(circle at 20% 30%, #1fcdae 0%, transparent 40%), "
        "radial-gradient(circle at 70% 20%, #cf6fd0 0%, transparent 40%), "
        "radial-gradient(circle at 40% 80%, #0a97b4 0%, transparent 40%), "
        "linear-gradient(to bottom, #000000, #000000)"  # base oscura debajo
    )

    # Capa opcional oscura
    BACKGROUND_OVERLAY = "rgba(0, 0, 0, 0.5)"

    # Color de texto por si acaso
    TEXT_COLOR = "#ffffff"
