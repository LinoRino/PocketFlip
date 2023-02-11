import { JSX } from "solid-js";
import { css, CSSObject } from "@emotion/css";
import { V2CssMediaQ, sxMediaQ } from "../utility/Utility";

type V2BoxComponent<T> = {
  children?: JSX.Element;
  sx?: CSSObject & V2CssMediaQ;
  element?: "div" | "nav" | "span" | "main"
  event?: JSX.CustomEventHandlersCamelCase<T>
};

export function Box<T>(props: V2BoxComponent<T>): JSX.Element {
  const BoxClass = css(props.sx);
  return (
    <div class={`V2Box ${BoxClass} ${sxMediaQ(props.sx)}`}>
      {props.children}
    </div>
  );
}
