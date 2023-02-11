import { css } from "@emotion/css";
import { JSX } from "solid-js"

type V2TextComponent = {
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "strong" | "span" ;
  children?: JSX.Element
}

export function Txt(props:V2TextComponent){
  const El = props.element
  const TxtClass = css({
    
  })
  return <El class={TxtClass}>{props.children}</El>
}