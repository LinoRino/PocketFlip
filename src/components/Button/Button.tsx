import { JSX } from "solid-js";
import { css, CSSAttribute } from "solid-styled-components";
import type { Property } from "csstype";

type V2ButtonComponent = {
  children: JSX.Element;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  // Strings
  id?: string;
  title?: string;
  name?: string;
  href?: string;
  link?: boolean;
  variant?: "text" | "outline" | "filled";
  icon?: JSX.Element;
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
  sx?: CSSAttribute & {
    paddingX?: Property.Padding<0 | string>;
    paddingY?: Property.Padding<0 | string>;
  };
};

/** Voyager2's Button component
 *
 */

export function Button(props: V2ButtonComponent) {
  const sx = props.sx;
  // Normal class
  const ButtonClass = css({
    cursor: "pointer",
    display: "inline-flex",
    fontFamily: "Ubuntu",
    lineHeight: "1.5rem !important",
    fontSize: "1rem",
    fontWeight: 500,
    // Padding
    padding: "0.75rem 0.875rem",
    borderStyle: "solid",
    borderRadius: "0.75rem",
    textDecoration: "none",
    "&:active": {
      scale: "0.95",
    },
    ...sx,
  });
  const filledClass = css({
    borderWidth: "0",
    backgroundColor: "black",
    color: "white",
  });
  const outlineClass = css({
    backgroundColor: "transparent",
    borderWidth: "2px",
    borderColor: "black",
  });
  const textClass = css({
    backgroundColor: "transparent",
    color: "black",
    borderWidth: "0",
  });
  const pickClass = () => {
    switch (props.variant) {
      case "filled":
        return filledClass;
      case "outline":
        return outlineClass;
      case "text":
        return textClass;
      default:
        return filledClass;
    }
  };
  // JSX Here
  if (props.link) {
    return (
      <a
        class={`V2Button ${pickClass()} ${ButtonClass}`}
        href={props.href ? props.href : ""}
        link
      >
        {props.icon && <span class="V2Button-icon">{props.icon}</span>}
        {props.children}
      </a>
    );
  } else
    return (
      <button
        class={`V2Button ${pickClass()} ${ButtonClass}`}
        type={props.type}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
}
