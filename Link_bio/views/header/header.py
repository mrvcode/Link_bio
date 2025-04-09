import reflex as rx


def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(fallback="V3D", font_size=50, name="Logo Mochilas V3D", size="9"),
        rx.text("Mochilas V3D"),
        rx.text("TU IMAGINACIÓN, TUS REGLAS"),
        rx.text(
            """¡Desata tu creatividad con las revolucionarias Mochilas 3D! 
                Creadas mediante la más avanzada impresión tridimensional,
                estas piezas únicas van mucho más allá de lo convencional. 
                Impleméntalas a tu gusto, personalizando cada detalle para reflejar 
                tu estilo inconfundible. Sumérgete en un universo
                de gran colorido y diseños vibrantes, donde la utilidad se fusiona
                con la innovación. Si buscas lo mejor del mercado en personalización
                y funcionalidad, has llegado al destino ideal. 
                En nuestra web de venta nacional, te ofrecemos la oportunidad de 
                poseer una mochila que no solo te acompaña, sino que también 
                te define. ¡Explora un nuevo horizonte de posibilidades 
                y lleva contigo una obra de arte funcional!"""
        ),
    )
