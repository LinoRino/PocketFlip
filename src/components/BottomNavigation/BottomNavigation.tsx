import { css, CSSAttribute } from "solid-styled-components";
import { JSX } from "solid-js";
import { sxMediaQ, V2CssMediaQ } from "../utility/Utility";

type V2BottomNavigation = {
  children?: JSX.Element[];
  sx?: CSSAttribute & V2CssMediaQ;
};

export function BottomNav(props: V2BottomNavigation) {
  const navClass = css({
    display: "grid",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100vw",
    boxShadow: "0 0 0.5rem #0000002f",
    ...props.sx,
  });
  const BClass = css({
    border: "0",
    color: "black",
    textDecoration: "none",
    padding: "0.5rem",
    backgroundColor: "transparent",
    textAlign: "center",
    "&:active": {
      backgroundColor: "#f3f4f6",
    },
    "&>.V2Icon": {
      fontFamily: "SF Pro",
      lineHeight: "1.5rem",
      userSelect: "none",
      display: "block",
      fontSize: "1.125rem",
      "& ~ span": {
        display: "block",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
    },
  });
  let navRef: HTMLElement | undefined;
  return (
    <nav
      class={`${navClass} ${sxMediaQ(props.sx)}`}
      ref={navRef}
      style={{
        "grid-template-columns": `repeat(${
          navRef && navRef.children.length
        },1fr)`,
      }}
    >
      <a link class={BClass} href="/">
        <span class="V2Icon">􀎞</span>
        <span>Home</span>
      </a>
      <a link class={BClass} href="/colection">
        <span class="V2Icon">􀫗</span>
        <span>Study</span>
      </a>
      <a link class={BClass} href="/chart">
        <span class="V2Icon">􁂥</span>
        <span>Chart</span>
      </a>
      <a link class={BClass} href="/setting">
        <span class="V2Icon">􀣋</span>
        <span>Setting</span>
      </a>
    </nav>
  );
}
