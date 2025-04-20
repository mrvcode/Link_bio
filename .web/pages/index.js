/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import { Book as LucideBook, Home as LucideHome, Mail as LucideMail, ShoppingCart as LucideShoppingCart, User as LucideUser } from "lucide-react"
import NextHead from "next/head"



export default function Component() {
    




  return (
    <Fragment>

<RadixThemesBox css={({ ["display"] : "flex", ["flexDirection"] : "column", ["minHeight"] : "100vh", ["width"] : "100%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["position"] : "fixed", ["top"] : "50%", ["left"] : "1rem", ["transform"] : "translateY(-50%)", ["zIndex"] : "999", ["padding"] : "0.5rem", ["backgroundColor"] : "transparent" })} direction={"column"} gap={"1"}>

<RadixThemesLink asChild={true} className={"nav-link"} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["padding"] : "0.5rem", ["cursor"] : "pointer", ["transition"] : "all 0.3s ease", ["borderRadius"] : "8px", ["display"] : "flex", ["alignItems"] : "center" })}>

<NextLink href={"/carrito"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"1"}>

<LucideShoppingCart css={({ ["color"] : "#00FFAA", ["&:hover"] : ({ ["transform"] : "scale(1.2)", ["transition"] : "transform 0.2s ease", ["filter"] : "brightness(1.3)" }) })} size={30}/>
<RadixThemesText as={"p"} className={"tooltip-text"} css={({ ["color"] : "#00FFAA", ["fontSize"] : "1rem", ["opacity"] : 0, ["whiteSpace"] : "nowrap", ["transform"] : "translateX(-10px)", ["transition"] : "opacity 0.3s ease, transform 0.3s ease" })}>

{"Carrito"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} className={"nav-link"} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["padding"] : "0.5rem", ["cursor"] : "pointer", ["transition"] : "all 0.3s ease", ["borderRadius"] : "8px", ["display"] : "flex", ["alignItems"] : "center" })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"1"}>

<LucideHome css={({ ["color"] : "#00FFAA", ["&:hover"] : ({ ["transform"] : "scale(1.2)", ["transition"] : "transform 0.2s ease", ["filter"] : "brightness(1.3)" }) })} size={30}/>
<RadixThemesText as={"p"} className={"tooltip-text"} css={({ ["color"] : "#00FFAA", ["fontSize"] : "1rem", ["opacity"] : 0, ["whiteSpace"] : "nowrap", ["transform"] : "translateX(-10px)", ["transition"] : "opacity 0.3s ease, transform 0.3s ease" })}>

{"Inicio"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} className={"nav-link"} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["padding"] : "0.5rem", ["cursor"] : "pointer", ["transition"] : "all 0.3s ease", ["borderRadius"] : "8px", ["display"] : "flex", ["alignItems"] : "center" })}>

<NextLink href={"/sobremi"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"1"}>

<LucideUser css={({ ["color"] : "#00FFAA", ["&:hover"] : ({ ["transform"] : "scale(1.2)", ["transition"] : "transform 0.2s ease", ["filter"] : "brightness(1.3)" }) })} size={30}/>
<RadixThemesText as={"p"} className={"tooltip-text"} css={({ ["color"] : "#00FFAA", ["fontSize"] : "1rem", ["opacity"] : 0, ["whiteSpace"] : "nowrap", ["transform"] : "translateX(-10px)", ["transition"] : "opacity 0.3s ease, transform 0.3s ease" })}>

{"Sobre m\u00ed"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} className={"nav-link"} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["padding"] : "0.5rem", ["cursor"] : "pointer", ["transition"] : "all 0.3s ease", ["borderRadius"] : "8px", ["display"] : "flex", ["alignItems"] : "center" })}>

<NextLink href={"/proyectos"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"1"}>

<LucideBook css={({ ["color"] : "#00FFAA", ["&:hover"] : ({ ["transform"] : "scale(1.2)", ["transition"] : "transform 0.2s ease", ["filter"] : "brightness(1.3)" }) })} size={30}/>
<RadixThemesText as={"p"} className={"tooltip-text"} css={({ ["color"] : "#00FFAA", ["fontSize"] : "1rem", ["opacity"] : 0, ["whiteSpace"] : "nowrap", ["transform"] : "translateX(-10px)", ["transition"] : "opacity 0.3s ease, transform 0.3s ease" })}>

{"Proyectos"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} className={"nav-link"} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["padding"] : "0.5rem", ["cursor"] : "pointer", ["transition"] : "all 0.3s ease", ["borderRadius"] : "8px", ["display"] : "flex", ["alignItems"] : "center" })}>

<NextLink href={"/contacto"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"1"}>

<LucideMail css={({ ["color"] : "#00FFAA", ["&:hover"] : ({ ["transform"] : "scale(1.2)", ["transition"] : "transform 0.2s ease", ["filter"] : "brightness(1.3)" }) })} size={30}/>
<RadixThemesText as={"p"} className={"tooltip-text"} css={({ ["color"] : "#00FFAA", ["fontSize"] : "1rem", ["opacity"] : 0, ["whiteSpace"] : "nowrap", ["transform"] : "translateX(-10px)", ["transition"] : "opacity 0.3s ease, transform 0.3s ease" })}>

{"Contacto"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesBox css={({ ["flex"] : "1", ["minHeight"] : "100vh" })}>

<RadixThemesBox css={({ ["backgroundImage"] : "radial-gradient(circle at 20% 30%, #1fcdae 0%, transparent 40%), radial-gradient(circle at 70% 20%, #cf6fd0 0%, transparent 40%), radial-gradient(circle at 40% 80%, #0a97b4 0%, transparent 40%), linear-gradient(to bottom, #000000, #000000)", ["backgroundSize"] : "cover", ["backgroundRepeat"] : "no-repeat", ["backgroundAttachment"] : "fixed", ["backgroundPosition"] : "center", ["width"] : "100%", ["minHeight"] : "100vh" })}>

<Fragment>

<RadixThemesBox css={({ ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["width"] : "100%", ["height"] : "100%", ["zIndex"] : "0" })}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["alignItems"] : "center", ["minHeight"] : "100vh", ["zIndex"] : "1" })} direction={"column"} gap={"3"}>

<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch", ["height"] : "px" })}/>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["maxWidth"] : "1200px", ["marginInlineStart"] : "20px", ["marginInlineEnd"] : "20px", ["marginTop"] : "1.2em", ["marginBottom"] : "1.2em", ["borderRadius"] : "12px", ["padding"] : "20px", ["zIndex"] : "1" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesBox css={({ ["background"] : "rgba(0, 0, 0, 0.2)", ["borderRadius"] : "15px", ["padding"] : "20px", ["width"] : "90px", ["height"] : "90px", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["border"] : "2px solid #cf6fd0" })}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "2.3em", ["color"] : "#cf6fd0", ["fontWeight"] : "bold", ["filter"] : "brightness(1.3)" })}>

{"V3D"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesText align={"center"} as={"p"} css={({ ["fontWeight"] : "bold", ["fontSize"] : "1.8em", ["color"] : "#F1F1F1", ["paddingTop"] : "10px", ["paddingBottom"] : "10px" })}>

{"TU IMAGINACI\u00d3N, TUS REGLAS"}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"center"} gap={"0"}>

<RadixThemesBox css={({ ["width"] : "50%", ["paddingRight"] : "1em" })}>

<RadixThemesText as={"p"} css={({ ["textAlign"] : "justify", ["color"] : "#F1F1F1", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["fontSize"] : "1.2em" })}>

{"\u00a1Desata tu creatividad con las revolucionarias Mochilas 3D!\n    Creadas mediante la m\u00e1s avanzada impresi\u00f3n tridimensional,\n    estas piezas \u00fanicas van mucho m\u00e1s all\u00e1 de lo convencional.\n    Implementalas a tu gusto, personalizando cada detalle para reflejar\n    tu estilo inconfundible. Sum\u00e9rgete en un universo\n    de gran colorido y dise\u00f1os vibrantes, donde la utilidad se fusiona\n    con la innovaci\u00f3n."}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["width"] : "50%", ["paddingLeft"] : "1em" })}>

<RadixThemesText as={"p"} css={({ ["textAlign"] : "justify", ["color"] : "#F1F1F1", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["fontSize"] : "1.2em" })}>

{"Si buscas lo mejor del mercado en personalizaci\u00f3n\n    y funcionalidad, has llegado al destino ideal.\n    En nuestra web de venta nacional, te ofrecemos la oportunidad de\n    poseer una mochila que no solo te acompa\u00f1a, sino que tambi\u00e9n\n    te define. \u00a1Explora un nuevo horizonte de posibilidades\n    y lleva contigo una obra de arte funcional!"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["alignItems"] : "center", ["padding"] : "0", ["marginTop"] : "100px", ["marginBottom"] : "50px" })} direction={"column"} justify={"center"} gap={"3"}>

<RadixThemesBox css={({ ["width"] : "100%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["marginTop"] : "25px", ["marginBottom"] : "25px" })} direction={"row"} justify={"center"} gap={"9"}>

<RadixThemesButton asChild={true} css={({ ["width"] : "280px", ["height"] : "300px", ["borderRadius"] : "1.8em", ["fontWeight"] : "normal", ["margin"] : "0", ["padding"] : "1.2em", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["textAlign"] : "center", ["color"] : "#F1F1F1", ["background"] : "#0f828e", ["&:hover"] : ({ ["background"] : "#062821" }) })}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%", ["height"] : "100%" })} target={(false ? "_blank" : "")}>

<NextLink href={"/creacion"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["alignItems"] : "center" })} direction={"column"} justify={"center"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.8em", ["marginBottom"] : "4px" })}>

{"Area de"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.8em" })}>

{"creaci\u00f3n"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesButton>
<RadixThemesButton asChild={true} css={({ ["width"] : "280px", ["height"] : "300px", ["borderRadius"] : "1.8em", ["fontWeight"] : "normal", ["margin"] : "0", ["padding"] : "1.2em", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["textAlign"] : "center", ["color"] : "#F1F1F1", ["background"] : "#0f828e", ["&:hover"] : ({ ["background"] : "#062821" }) })}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%", ["height"] : "100%" })} target={(false ? "_blank" : "")}>

<NextLink href={"/accesorios"} passHref={true}>

<RadixThemesText align={"center"} as={"p"} css={({ ["fontSize"] : "1.8em" })}>

{"Accesorios"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch", ["height"] : "20px" })}/>
<RadixThemesBox css={({ ["width"] : "100%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["marginTop"] : "25px", ["marginBottom"] : "25px" })} direction={"row"} justify={"center"} gap={"9"}>

<RadixThemesButton asChild={true} css={({ ["width"] : "280px", ["height"] : "300px", ["borderRadius"] : "1.8em", ["fontWeight"] : "normal", ["margin"] : "0", ["padding"] : "1.2em", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["textAlign"] : "center", ["color"] : "#F1F1F1", ["background"] : "#0f828e", ["&:hover"] : ({ ["background"] : "#062821" }) })}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%", ["height"] : "100%" })} target={(false ? "_blank" : "")}>

<NextLink href={"/originales"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["alignItems"] : "center" })} direction={"column"} justify={"center"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.8em", ["marginBottom"] : "4px" })}>

{"Mochilas"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.8em" })}>

{"Originales"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesButton>
<RadixThemesButton asChild={true} css={({ ["width"] : "280px", ["height"] : "300px", ["borderRadius"] : "1.8em", ["fontWeight"] : "normal", ["margin"] : "0", ["padding"] : "1.2em", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["textAlign"] : "center", ["color"] : "#F1F1F1", ["background"] : "#0f828e", ["&:hover"] : ({ ["background"] : "#062821" }) })}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%", ["height"] : "100%" })} target={(false ? "_blank" : "")}>

<NextLink href={"/extras"} passHref={true}>

<RadixThemesText align={"center"} as={"p"} css={({ ["fontSize"] : "1.8em" })}>

{"Extras"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesBox css={({ ["width"] : "100%", ["paddingTop"] : "20px", ["paddingBottom"] : "20px", ["marginTop"] : "auto" })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<img src={"favicon.ico"}/>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(false ? "_blank" : "")}>

<NextLink href={"/creacion"} passHref={true}>

{"\u00a9 2025 Mochilas V3D."}
</NextLink>
</RadixThemesLink>
<RadixThemesText as={"p"}>

{"BUILDING WITH YOU"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
<NextHead>

<title>

{"Mochilas V3D | Dise\u00f1o Innovador y Personalizado"}
</title>
<meta content={"Descubre la colecci\u00f3n de mochilas 3D \u00fanicas y personalizables. Expresa tu estilo con dise\u00f1os vibrantes y funcionales."} name={"description"}/>
<meta content={"/assets/favicon.ico"} property={"og:image"}/>
<meta content={"website"} name={"og:type"}/>
<meta content={"Mochilas V3D | Dise\u00f1o Innovador y Personalizado"} name={"og:title"}/>
<meta content={"Descubre la colecci\u00f3n de mochilas 3D \u00fanicas y personalizables. Expresa tu estilo con dise\u00f1os vibrantes y funcionales."} name={"og:description"}/>
<meta content={"/mochilas_3d_preview.jpg"} name={"og:image"}/>
</NextHead>
</Fragment>
  )
}
