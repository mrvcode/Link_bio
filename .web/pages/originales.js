/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import { Book as LucideBook, Euro as LucideEuro, Heart as LucideHeart, Home as LucideHome, Mail as LucideMail, ShoppingCart as LucideShoppingCart, User as LucideUser } from "lucide-react"
import { EventLoopContext } from "$/utils/context"
import { Event } from "$/utils/state"
import NextHead from "next/head"



export function Link_dc2fd386adc995551d4094487311ad7f () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_483a69259f99491deb3c374a0ed464e2 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/detalle_originales/0", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesLink css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"} onClick={on_click_483a69259f99491deb3c374a0ed464e2}>

<RadixThemesBox css={({ ["width"] : "300px", ["height"] : "380px", ["backgroundColor"] : "rgba(0, 0, 0, 0.5)", ["borderRadius"] : "15px", ["boxShadow"] : "10px 20px 20px 5px rgba(0, 0, 0, 0.3)", ["overflow"] : "hidden", ["position"] : "relative" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%" })} direction={"column"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"4"}>

<RadixThemesBox css={({ ["background"] : "rgba(0, 0, 0, 0.2)", ["borderRadius"] : "10px", ["padding"] : "10px", ["width"] : "50px", ["height"] : "50px", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["border"] : "2px solid #cf6fd0" })}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2em", ["color"] : "#cf6fd0", ["fontWeight"] : "bold", ["filter"] : "brightness(1.3)" })}>

{"V3D"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2em", ["fontWeight"] : "bold", ["textAlign"] : "center", ["flex"] : "1", ["margin"] : "0 0 0 10px " })}>

{"Mochila Futura"}
</RadixThemesText>
</RadixThemesFlex>
<img css={({ ["width"] : "100%", ["height"] : "200px", ["objectFit"] : "cover", ["borderTopRadius"] : "15px" })} src={"/image_mochilas_original/mochila.jpg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingBottom"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"1"}>

<LucideEuro css={({ ["color"] : "#F1F1F1" })} size={20}/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2em", ["color"] : "#F1F1F1", ["fontWeight"] : "medium" })}>

{"59.99"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<LucideHeart css={({ ["color"] : "#F1F1F1" })} size={20}/>
<LucideShoppingCart css={({ ["color"] : "#F1F1F1", ["marginLeft"] : "10px" })} size={20}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesLink>
  )
}

export function Link_cfac9957560fbd0b14b4cfa861e238ff () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_7be6ca6af67c714540a0355ba1009991 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/detalle_originales/1", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesLink css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"} onClick={on_click_7be6ca6af67c714540a0355ba1009991}>

<RadixThemesBox css={({ ["width"] : "300px", ["height"] : "380px", ["backgroundColor"] : "rgba(0, 0, 0, 0.5)", ["borderRadius"] : "15px", ["boxShadow"] : "10px 20px 20px 5px rgba(0, 0, 0, 0.3)", ["overflow"] : "hidden", ["position"] : "relative" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%" })} direction={"column"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"4"}>

<RadixThemesBox css={({ ["background"] : "rgba(0, 0, 0, 0.2)", ["borderRadius"] : "10px", ["padding"] : "10px", ["width"] : "50px", ["height"] : "50px", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["border"] : "2px solid #0a97b4" })}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2em", ["color"] : "#0a97b4", ["fontWeight"] : "bold", ["filter"] : "brightness(1.3)" })}>

{"V3D"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2em", ["fontWeight"] : "bold", ["textAlign"] : "center", ["flex"] : "1", ["margin"] : "0 0 0 10px " })}>

{"Mochila Urbana"}
</RadixThemesText>
</RadixThemesFlex>
<img css={({ ["width"] : "100%", ["height"] : "200px", ["objectFit"] : "cover", ["borderTopRadius"] : "15px" })} src={"/image_mochilas_original/mochila.jpg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingBottom"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"1"}>

<LucideEuro css={({ ["color"] : "#F1F1F1" })} size={20}/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2em", ["color"] : "#F1F1F1", ["fontWeight"] : "medium" })}>

{"49.99"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<LucideHeart css={({ ["color"] : "#F1F1F1" })} size={20}/>
<LucideShoppingCart css={({ ["color"] : "#F1F1F1", ["marginLeft"] : "10px" })} size={20}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesLink>
  )
}

export function Link_b33d1979b033ba4d1644ef65fcaa3b28 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_8ae7104b7483d0e387ddd43a43cecd5d = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/detalle_originales/2", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesLink css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"} onClick={on_click_8ae7104b7483d0e387ddd43a43cecd5d}>

<RadixThemesBox css={({ ["width"] : "300px", ["height"] : "380px", ["backgroundColor"] : "rgba(0, 0, 0, 0.5)", ["borderRadius"] : "15px", ["boxShadow"] : "10px 20px 20px 5px rgba(0, 0, 0, 0.3)", ["overflow"] : "hidden", ["position"] : "relative" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["height"] : "100%" })} direction={"column"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"4"}>

<RadixThemesBox css={({ ["background"] : "rgba(0, 0, 0, 0.2)", ["borderRadius"] : "10px", ["padding"] : "10px", ["width"] : "50px", ["height"] : "50px", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["border"] : "2px solid #0f828e" })}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2em", ["color"] : "#0f828e", ["fontWeight"] : "bold", ["filter"] : "brightness(1.3)" })}>

{"V3D"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2em", ["fontWeight"] : "bold", ["textAlign"] : "center", ["flex"] : "1", ["margin"] : "0 0 0 10px " })}>

{"Mochila Eco"}
</RadixThemesText>
</RadixThemesFlex>
<img css={({ ["width"] : "100%", ["height"] : "200px", ["objectFit"] : "cover", ["borderTopRadius"] : "15px" })} src={"/image_mochilas_original/mochila.jpg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["paddingBottom"] : "10px" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"1"}>

<LucideEuro css={({ ["color"] : "#F1F1F1" })} size={20}/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.2em", ["color"] : "#F1F1F1", ["fontWeight"] : "medium" })}>

{"39.99"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<LucideHeart css={({ ["color"] : "#F1F1F1" })} size={20}/>
<LucideShoppingCart css={({ ["color"] : "#F1F1F1", ["marginLeft"] : "10px" })} size={20}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesLink>
  )
}

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

<NextLink href={"/nosotros"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"1"}>

<LucideUser css={({ ["color"] : "#00FFAA", ["&:hover"] : ({ ["transform"] : "scale(1.2)", ["transition"] : "transform 0.2s ease", ["filter"] : "brightness(1.3)" }) })} size={30}/>
<RadixThemesText as={"p"} className={"tooltip-text"} css={({ ["color"] : "#00FFAA", ["fontSize"] : "1rem", ["opacity"] : 0, ["whiteSpace"] : "nowrap", ["transform"] : "translateX(-10px)", ["transition"] : "opacity 0.3s ease, transform 0.3s ease" })}>

{"Nosotros"}
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

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.5em", ["color"] : "#F1F1F1", ["fontWeight"] : "bold" })}>

{"Originales"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesGrid columns={"repeat(3, 1fr)"} css={({ ["width"] : "100%", ["maxWidth"] : "1200px", ["marginTop"] : "2em", ["marginBottom"] : "2em" })} gap={"8"}>

<Link_dc2fd386adc995551d4094487311ad7f/>
<Link_cfac9957560fbd0b14b4cfa861e238ff/>
<Link_b33d1979b033ba4d1644ef65fcaa3b28/>
</RadixThemesGrid>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesBox css={({ ["width"] : "100%", ["paddingTop"] : "20px", ["paddingBottom"] : "20px", ["marginTop"] : "auto" })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<img css={({ ["width"] : "32px", ["height"] : "32px" })} src={"/favicon.ico"}/>
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
