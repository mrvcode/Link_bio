/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import NextLink from "next/link"
import { Book as LucideBook, Home as LucideHome, Mail as LucideMail, ShoppingCart as LucideShoppingCart, User as LucideUser } from "lucide-react"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import { EventLoopContext } from "$/utils/context"
import { Event, getRefValue, getRefValues } from "$/utils/state"
import NextHead from "next/head"



export function Root_cb4626b99b358dab4d63095580bdf96d () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_72a9ef97d8ef8f1918e1a837a5797ccb = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => null), ["callback"] : null }), ({ ["preventDefault"] : true })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    




  
  return (
    <RadixFormRoot className={"Root "} css={({ ["width"] : "100%" })} method={"post"} onSubmit={handleSubmit_72a9ef97d8ef8f1918e1a837a5797ccb}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"4"}>

<RadixThemesTextField.Root css={({ ["fontSize"] : "1.8em", ["color"] : "#5070c9", ["&:placeholder"] : ({ ["color"] : "#0a97b4" }), ["background"] : "rgba(242, 227, 206, 0.5)", ["borderRadius"] : "15px", ["height"] : "70px", ["width"] : "500px", ["paddingInlineStart"] : "15px", ["paddingInlineEnd"] : "15px" })} name={"nombre y apellido"} placeholder={"Nombre y apellido"}/>
<RadixThemesTextField.Root css={({ ["type"] : "email", ["fontSize"] : "1.8em", ["color"] : "#5070c9", ["&:placeholder"] : ({ ["color"] : "#0a97b4" }), ["background"] : "rgba(242, 227, 206, 0.5)", ["borderRadius"] : "15px", ["height"] : "70px", ["width"] : "500px", ["paddingInlineStart"] : "15px", ["paddingInlineEnd"] : "15px" })} name={"email"} placeholder={"Correo Electr\u00f3nico"}/>
<RadixThemesTextField.Root css={({ ["fontSize"] : "1.8em", ["color"] : "#5070c9", ["&:placeholder"] : ({ ["color"] : "#062821" }), ["background"] : "rgba(242, 227, 206, 0.5)", ["borderRadius"] : "15px", ["height"] : "70px", ["width"] : "500px", ["paddingInlineStart"] : "15px", ["paddingInlineEnd"] : "15px" })} name={"asunto"} placeholder={"Asunto"}/>
<RadixThemesButton css={({ ["type"] : "submit", ["fontSize"] : "1.8em", ["background"] : "#5070c9", ["color"] : "#F1F1F1", ["borderRadius"] : "15px", ["&:hover"] : ({ ["opacity"] : "0.9" }), ["height"] : "70px", ["width"] : "500px" })}>

{"Enviar"}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
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

<RadixThemesBox css={({ ["backgroundImage"] : "radial-gradient(circle at 20% 30%, #1fcdae 0%, transparent 40%), radial-gradient(circle at 70% 20%, #cf6fd0 0%, transparent 40%), radial-gradient(circle at 40% 80%, #0a97b4 0%, transparent 40%), linear-gradient(to bottom, #000000, #000000)", ["backgroundSize"] : "cover", ["backgroundRepeat"] : "no-repeat", ["backgroundAttachment"] : "fixed", ["backgroundPosition"] : "center", ["width"] : "100%", ["minHeight"] : "100vh" })}>

<RadixThemesBox css={({ ["position"] : "absolute", ["top"] : "1em", ["right"] : "2em", ["zIndex"] : "10" })}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.5em", ["fontWeight"] : "bold", ["color"] : "white" })}>

{"Contacto"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["height"] : "100vh", ["width"] : "100%" })}>

<RadixThemesGrid columns={"2"} css={({ ["width"] : "auto", ["padding"] : "2em" })} gap={"2"}>

<RadixThemesBox css={({ ["width"] : "600px", ["height"] : "600px", ["borderRadius"] : "15px", ["backgroundColor"] : "rgba(242, 227, 206, 0.1)", ["padding"] : "2em", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["height"] : "100%" })} direction={"column"} justify={"center"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "3.0em", ["fontWeight"] : "bold", ["color"] : "white", ["paddingBottom"] : "1em" })}>

{"Contacta con nosotros"}
</RadixThemesText>
<RadixThemesBox css={({ ["marginLeft"] : "auto", ["marginRight"] : "auto" })}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesBox css={({ ["padding"] : "4", ["width"] : "500px", ["borderRadius"] : "15px" })}>

<Root_cb4626b99b358dab4d63095580bdf96d/>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["width"] : "600px", ["height"] : "600px", ["borderRadius"] : "15px", ["backgroundColor"] : "rgba(242, 227, 206, 0.1)", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["padding"] : "1em", ["overflow"] : "hidden" })}>

<img css={({ ["maxWidth"] : "400px", ["maxHeight"] : "400px" })} src={"/contacto.jpg"}/>
</RadixThemesBox>
<RadixThemesBox css={({ ["width"] : "600px", ["height"] : "600px", ["borderRadius"] : "15px", ["backgroundColor"] : "rgba(242, 227, 206, 0.1)", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["padding"] : "1em", ["overflow"] : "hidden" })}>

<img css={({ ["maxWidth"] : "400px", ["maxHeight"] : "400px" })} src={"/contacto1.jpg"}/>
</RadixThemesBox>
<RadixThemesBox css={({ ["width"] : "600px", ["height"] : "600px", ["borderRadius"] : "15px", ["backgroundColor"] : "rgba(242, 227, 206, 0.1)", ["padding"] : "2em", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["height"] : "100%" })} direction={"column"} justify={"center"} gap={"4"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "3.0em", ["fontWeight"] : "bold", ["color"] : "white", ["paddingBottom"] : "0.8em" })}>

{"D\u00f3nde estamos?"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "2.3em", ["color"] : "white", ["whiteSpace"] : "pre-wrap", ["lineHeight"] : "1.6", ["textAlign"] : "center" })}>

{"123 Calle de la Mochila\n28001 Madrid\nEspa\u00f1a"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
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

{"Contacto"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
