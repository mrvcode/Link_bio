/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
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

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["padding"] : "3em", ["maxWidth"] : "900px", ["margin"] : "0 auto" })} direction={"column"} gap={"5"}>

<RadixThemesHeading css={({ ["color"] : "#F1F1F1" })} size={"2"}>

{"\u00c1rea de Creaci\u00f3n"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["fontSize"] : "1.8em", ["textAlign"] : "center" })}>

{"Aqu\u00ed podr\u00e1s personalizar tu mochila V3D\n                Fondos de pantalla 3D de tu mochila personalizada\n                Manual de cuidados\n                Stickers digitales para redes\n                Tutoriales de c\u00f3mo montar/desmontar"}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch", ["height"] : "2em" })}/>
<RadixThemesBox css={({ ["padding"] : "2em", ["background"] : "rgba(0, 0, 0, 0.3)", ["borderRadius"] : "15px" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#cf6fd0", ["fontSize"] : "2.3em", ["fontWeight"] : "bold" })}>

{"Pr\u00f3ximamente disponible..."}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
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

{"Extras"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
