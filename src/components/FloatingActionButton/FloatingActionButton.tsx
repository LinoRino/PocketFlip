import { JSX } from "solid-js";
import { css, CSSObject } from "@emotion/css";
import { V2CssMediaQ } from "../utility/Utility";

type V2FloatingActionButtonComponent = {
  type?: "button" | "submit" | "reset";
  icon: JSX.Element;
  name?: string;
  title?: string;
  sx?: CSSObject & V2CssMediaQ;
} & JSX.CustomEventHandlersCamelCase<HTMLButtonElement | HTMLAnchorElement>;

export function Fab(props: V2FloatingActionButtonComponent) {
  const FabClass = css({
    alignItems: "center",
    boxShadow: "0 6px 0.5rem #00000051",
    backgroundColor: "black",
    border: 0,
    borderRadius: "1em",
    cursor: "pointer",
    color: "white",
    display: "inline-flex",
    textDecoration: "none",
    padding: "1.25rem 1.25rem",
    fontSize: "1rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    "&:active": {
      transform: "scale(0.95)",
    },
    "&:disabled": {
      opacity: 0.8,
      cursor: "not-allowed",
    },
    "&>.V2Fab-icon": {
      placeItems: "center",
      width: "1.5rem",
      height: "1.5rem",
      fontSize: "1.25rem",
      display: "grid",
      fontFamily: "SF Pro",
    },
    "&.V2Fab-label": {
      display: "flex",
      marginLeft: "0.5rem",
    },
    ...props.sx,
  });
  return (
    <button class={FabClass} type={props.type}>
      <span class="V2Fab-icon">{props.icon}</span>
      <span class="V2Fab-label">{props.name}</span>
    </button>
  );
}
