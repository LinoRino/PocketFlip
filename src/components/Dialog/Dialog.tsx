import { css, CSSObject } from "@emotion/css";
import { Accessor, createEffect, JSX, Setter } from "solid-js";
import { Box } from "../Box";
import { Txt } from "../Txt";


type V2DialogComponent = {
  children?: JSX.Element;
  sx?: CSSObject;
  id?: string;
  open: Accessor<boolean>;
  setOpen: Setter<boolean>;
};

export function Dialog(props: V2DialogComponent): JSX.Element {
  let diaRef: HTMLDivElement | undefined;
  function closeHdler(e: KeyboardEvent) {
    if (e.key === "Escape") {
      props.setOpen(false);
    }
  }
  const dialogClass = css({
    display: "grid",
    placeItems: "center",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    backgroundColor: "#0000006a",
    transition: "all 150ms ease",
    "& .V2Dialog-contain": {
      margin: "0 2rem",
      transition: "all 150ms ease",
      backgroundColor: "white",
      padding: "1.25rem",
      borderRadius: "0.75rem",
    },
    "& .V2Dialog-close": {
      color: "#4a4a4a",
      display: "grid",
      placeItems: "center",
      padding: 0,
      borderWidth: 0,
      backgroundColor: "transparent",
      fontWeight: 500,
      width: "1.5rem",
      height: "1.5rem",
      "&:active": {
        scale: "0.8",
      },
    },
    ...props.sx
  });
  const closeClass = css({
    pointerEvents: "none",
    scale: "1.125",
    opacity: 0
  });

  createEffect(()=>{
    if (props.open()) {
      document.body.style.overflow = "hidden"
      diaRef?.focus();
    } else {
      document.body.style.overflow = "auto"
      diaRef?.blur();
    }
  })

  return (
    <div
      role="presentation"
      class={`${dialogClass} ${props.open() ? null : closeClass}`}
      onKeyDown={closeHdler}
      onAbort={(e) => e.target}
      tabIndex={props.open() ? 0 : -1}
      ref={diaRef}
    >
      <div class={`V2Dialog-contain`} role="dialog">
        <Box
          sx={{
            display: "flex",
            alignItems: "cente",
            paddingBottom: "0.25rem",
            marginBottom: "0.5rem",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Txt component="h2" sx={{ marginRight: "3rem" }}>
            Hello
          </Txt>
          <button
            title="Close dialog"
            class="V2Dialog-close"
            onClick={() => {
              props.setOpen(false);
            }}
          >
            􀆄
          </button>
        </Box>
        {props.children}
      </div>
    </div>
  );
}
