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

<RadixThemesBox css={({ ["padding"] : "1em 2em", ["width"] : "100%" })}>

<RadixThemesHeading css={({ ["fontSize"] : "2.3em", ["color"] : "#F1F1F1", ["textAlign"] : "right" })}>

{"Mochilas Originales"}
</RadixThemesHeading>
</RadixThemesBox>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "stretch", ["width"] : "100%", ["flexWrap"] : "wrap", ["height"] : "80vh" })} direction={"row"} gap={"3"}>

<RadixThemesBox>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start", ["padding"] : "5em", ["height"] : "100%" })} direction={"column"} gap={"0"}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "100%" }), ["borderRadius"] : "10px", ["margin"] : "2em 2em 2em 2em", ["height"] : "100%" })}>

<RadixThemesHeading css={({ ["fontSize"] : "1.8em", ["color"] : "#F1F1F1" })}>

{"t\u00edtulo descriptivo accesorio"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["fontSize"] : "1.2em", ["whiteSpace"] : "pre-line" })}>

{"descripcion del accesorio\n                            tama\u00f1o, forma, material."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "#cf6fd0", ["whiteSpace"] : "pre-line" })}>

{"##############################\n                            ##############################\n                            ##############################"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch", ["height"] : "2.5em" })}/>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "100%" }), ["borderRadius"] : "10px", ["margin"] : "2em 2em 2em 10em", ["height"] : "100%" })}>

<RadixThemesHeading css={({ ["fontSize"] : "1.8em", ["color"] : "#F1F1F1" })}>

{"t\u00edtulo descriptivo accesorio"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["fontSize"] : "1.2em", ["whiteSpace"] : "pre-line" })}>

{"descripcion del accesorio\n                            tama\u00f1o, forma, material."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "#cf6fd0", ["whiteSpace"] : "pre-line" })}>

{"##############################\n                            ##############################\n                            ##############################"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch", ["height"] : "2.5em" })}/>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "100%" }), ["borderRadius"] : "10px", ["margin"] : "2em 2em 2em 2em", ["height"] : "100%" })}>

<RadixThemesHeading css={({ ["fontSize"] : "1.8em", ["color"] : "#F1F1F1" })}>

{"t\u00edtulo descriptivo accesorio"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["fontSize"] : "1.2em", ["whiteSpace"] : "pre-line" })}>

{"descripcion del accesorio\n                            tama\u00f1o, forma, material."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "#cf6fd0", ["whiteSpace"] : "pre-line" })}>

{"##############################\n                            ##############################\n                            ##############################"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "60%" }), ["padding"] : "1em", ["margin"] : "1em", ["display"] : "flex", ["flexDirection"] : "column", ["alignItems"] : "center", ["height"] : "100%" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["fontSize"] : "2em", ["fontWeight"] : "bold", ["textAlign"] : "center", ["marginBottom"] : "0.5em" })}>

{"texto nombre de la mochila"}
</RadixThemesText>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "8em 4em", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center", ["width"] : "100%", ["height"] : "70%" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["fontStyle"] : "italic", ["fontSize"] : "1.5em", ["whiteSpace"] : "pre-line" })}>

{"en este recuadro\nira la foto de la\nmochila"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesBox css={({ ["margin"] : "1em", ["padding"] : "1em", ["width"] : "100%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["justifyContent"] : "space-between", ["alignItems"] : "center", ["padding"] : "0 2em" })} direction={"row"} gap={"3"}>

<RadixThemesBox css={({ ["background"] : "rgba(0, 0, 0, 0.2)", ["borderRadius"] : "50%", ["width"] : "40px", ["height"] : "40px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center", ["cursor"] : "pointer" })}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "2em", ["color"] : "#cf6fd0" })}>

{"\u276e"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["overflowX"] : "auto" })} direction={"row"} gap={"1"}>

<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["background"] : "rgba(128, 128, 128, 0.5)", ["borderRadius"] : "10px", ["padding"] : "2em 1em", ["margin"] : "0 0.5em", ["width"] : "150px", ["height"] : "130px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#F1F1F1", ["textAlign"] : "center", ["whiteSpace"] : "pre-line", ["fontSize"] : "0.8em" })}>

{"fotos caracter\u00edsticas\nde la mochila como\ndiferentes puntos de\nvista de ella"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesBox css={({ ["background"] : "rgba(0, 0, 0, 0.2)", ["borderRadius"] : "50%", ["width"] : "40px", ["height"] : "40px", ["display"] : "flex", ["justifyContent"] : "center", ["alignItems"] : "center", ["cursor"] : "pointer" })}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "2em", ["color"] : "#cf6fd0" })}>

{"\u276f"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
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

{"Originales"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
