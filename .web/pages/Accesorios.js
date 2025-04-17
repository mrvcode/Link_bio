/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import { Book as LucideBook, Heart as LucideHeart, Home as LucideHome, Mail as LucideMail, Send as LucideSend, ShoppingCart as LucideShoppingCart, User as LucideUser } from "lucide-react"
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

<RadixThemesBox css={({ ["backgroundImage"] : "radial-gradient(circle at 20% 30%, #1fcdae 0%, transparent 40%), radial-gradient(circle at 70% 20%, #cf6fd0 0%, transparent 40%), radial-gradient(circle at 40% 80%, #0a97b4 0%, transparent 40%), linear-gradient(to bottom, #000000, #000000)", ["backgroundSize"] : "cover", ["backgroundRepeat"] : "no-repeat", ["backgroundPosition"] : "center", ["width"] : "100%", ["minHeight"] : "100vh", ["padding"] : "2em", ["position"] : "relative" })}>

<RadixThemesBox css={({ ["position"] : "absolute", ["top"] : "1em", ["right"] : "2em", ["zIndex"] : "10" })}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.5em", ["fontWeight"] : "bold", ["color"] : "white" })}>

{"Accesorios"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesFlex css={({ ["flexWrap"] : "wrap", ["justifyContent"] : "center" })}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/accesorios/1"} passHref={true}>

<RadixThemesBox css={({ ["width"] : "220px", ["height"] : "150px", ["backgroundColor"] : "rgba(0, 0, 0, 0.5)", ["borderRadius"] : "15px", ["boxShadow"] : "lg", ["overflow"] : "hidden", ["position"] : "relative" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%" })} direction={"column"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["height"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold", ["fontSize"] : "1.2em" })}>

{"Pencil Case"}
</RadixThemesText>
<RadixThemesText as={"p"}>

{"Pencils near you"}
</RadixThemesText>
</RadixThemesFlex>
<img css={({ ["width"] : "40%", ["height"] : "100%", ["objectFit"] : "cover" })} src={"/image_accesorios/accesorio.jpg"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingBottom"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>

<LucideHeart css={({ ["color"] : "black" })} size={20}/>
<LucideShoppingCart css={({ ["color"] : "black" })} size={20}/>
<LucideSend css={({ ["color"] : "black" })} size={20}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/accesorios/2"} passHref={true}>

<RadixThemesBox css={({ ["width"] : "220px", ["height"] : "300px", ["backgroundColor"] : "rgba(0, 0, 0, 0.5)", ["borderRadius"] : "15px", ["boxShadow"] : "lg", ["overflow"] : "hidden", ["position"] : "relative" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%" })} direction={"column"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["height"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold", ["fontSize"] : "1.2em" })}>

{"Water Bag 3L"}
</RadixThemesText>
<RadixThemesText as={"p"}>

{"Drink wherever"}
</RadixThemesText>
</RadixThemesFlex>
<img css={({ ["width"] : "40%", ["height"] : "100%", ["objectFit"] : "cover" })} src={"/image_accesorios/accesorio.jpg"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingBottom"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>

<LucideHeart css={({ ["color"] : "black" })} size={20}/>
<LucideShoppingCart css={({ ["color"] : "black" })} size={20}/>
<LucideSend css={({ ["color"] : "black" })} size={20}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/accesorios/3"} passHref={true}>

<RadixThemesBox css={({ ["width"] : "220px", ["height"] : "300px", ["backgroundColor"] : "rgba(0, 0, 0, 0.5)", ["borderRadius"] : "15px", ["boxShadow"] : "lg", ["overflow"] : "hidden", ["position"] : "relative" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%" })} direction={"column"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["height"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold", ["fontSize"] : "1.2em" })}>

{"Rain Cover"}
</RadixThemesText>
<RadixThemesText as={"p"}>

{"Protect yourself"}
</RadixThemesText>
</RadixThemesFlex>
<img css={({ ["width"] : "40%", ["height"] : "100%", ["objectFit"] : "cover" })} src={"/image_accesorios/accesorio.jpg"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingBottom"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>

<LucideHeart css={({ ["color"] : "black" })} size={20}/>
<LucideShoppingCart css={({ ["color"] : "black" })} size={20}/>
<LucideSend css={({ ["color"] : "black" })} size={20}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/accesorios/4"} passHref={true}>

<RadixThemesBox css={({ ["width"] : "220px", ["height"] : "150px", ["backgroundColor"] : "rgba(0, 0, 0, 0.5)", ["borderRadius"] : "15px", ["boxShadow"] : "lg", ["overflow"] : "hidden", ["position"] : "relative" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%" })} direction={"column"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["height"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold", ["fontSize"] : "1.2em" })}>

{"Pencil Case"}
</RadixThemesText>
<RadixThemesText as={"p"}>

{"Pencils near you"}
</RadixThemesText>
</RadixThemesFlex>
<img css={({ ["width"] : "40%", ["height"] : "100%", ["objectFit"] : "cover" })} src={"/image_accesorios/accesorio.jpg"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingBottom"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>

<LucideHeart css={({ ["color"] : "black" })} size={20}/>
<LucideShoppingCart css={({ ["color"] : "black" })} size={20}/>
<LucideSend css={({ ["color"] : "black" })} size={20}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/accesorios/5"} passHref={true}>

<RadixThemesBox css={({ ["width"] : "220px", ["height"] : "150px", ["backgroundColor"] : "rgba(0, 0, 0, 0.5)", ["borderRadius"] : "15px", ["boxShadow"] : "lg", ["overflow"] : "hidden", ["position"] : "relative" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%" })} direction={"column"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["height"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold", ["fontSize"] : "1.2em" })}>

{"Water Bag 3L"}
</RadixThemesText>
<RadixThemesText as={"p"}>

{"Drink wherever"}
</RadixThemesText>
</RadixThemesFlex>
<img css={({ ["width"] : "40%", ["height"] : "100%", ["objectFit"] : "cover" })} src={"/image_accesorios/accesorio.jpg"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingBottom"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>

<LucideHeart css={({ ["color"] : "black" })} size={20}/>
<LucideShoppingCart css={({ ["color"] : "black" })} size={20}/>
<LucideSend css={({ ["color"] : "black" })} size={20}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/accesorios/6"} passHref={true}>

<RadixThemesBox css={({ ["width"] : "300px", ["height"] : "300px", ["backgroundColor"] : "rgba(0, 0, 0, 0.5)", ["borderRadius"] : "15px", ["boxShadow"] : "lg", ["overflow"] : "hidden", ["position"] : "relative" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%" })} direction={"column"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["height"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold", ["fontSize"] : "1.2em" })}>

{"Rain Cover"}
</RadixThemesText>
<RadixThemesText as={"p"}>

{"Protect yourself"}
</RadixThemesText>
</RadixThemesFlex>
<img css={({ ["width"] : "40%", ["height"] : "100%", ["objectFit"] : "cover" })} src={"/image_accesorios/accesorio.jpg"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingBottom"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>

<LucideHeart css={({ ["color"] : "black" })} size={20}/>
<LucideShoppingCart css={({ ["color"] : "black" })} size={20}/>
<LucideSend css={({ ["color"] : "black" })} size={20}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
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

{"Accesorios"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
