import { css, CSSObject } from "@emotion/css";
import { JSX } from "solid-js";
import { Dynamic } from "solid-js/web";

type V2TextComponent = {
  component?:
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "i"
    | "strong"
    | "span";
  children?: JSX.Element;
  sx?: CSSObject;
};

export function Txt(props: V2TextComponent) {
  const TxtClass = css({ ...props.sx });
  return (
    <Dynamic component={props.component ? props.component : "p"} class={TxtClass}>
      {props.children}
    </Dynamic>
  );
}
