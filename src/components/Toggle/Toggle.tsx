import { css } from "@emotion/css";

type V2ToggleComponent = {
  label?: string;
  inputRef?: HTMLInputElement;
  checked?: boolean;
};

export function Toggle(props: V2ToggleComponent) {
  const TogleStyle = css({
    display: "inline-flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    cursor: "pointer",
    "&>input": {
      position: "absolute",
      opacity: 0,
    },
    "&>.V2TogleStyle": {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "gray",
      borderRadius: "99rem",
      width: "2.5rem",
      height: "1.25rem",
      padding: "0.25rem",
      "&:after": {
        content: '""',
        display: "flex",
        translate: "-0.5rem 0",
        height: "100%",
        margin: "0 0.125rem",
        borderRadius: "99rem",
        aspectRatio: "1 / 1",
        backgroundColor: "white",
        transition: "all 250ms ease",
      },
    },
    "&>input:checked~.V2TogleStyle": {
      backgroundColor: "blue",
      "&:after": {
        translate: "0.5rem 0",
      },
    },
    "&>.V2TogleLabel": {
      margin: "0 1rem",
    },
  });
  return (
    <label class={TogleStyle}>
      <input type="checkbox" ref={props.inputRef} checked={props.checked} />
      <span class="V2TogleStyle"></span>
      <span class="V2TogleLabel">label:</span>
    </label>
  );
}
