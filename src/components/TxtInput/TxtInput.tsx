import { css, CSSObject } from "@emotion/css";
import { createSignal, JSX } from "solid-js";
import { sxMediaQ, V2CssMediaQ } from "../utility/Utility";

type V2TxtInputComponent = {
  type?: "text" | "tel" | "url" | "password" | "email" | "search";
  id?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  autoComplete?: boolean;
  autoCapitalize?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  inputRef?: HTMLInputElement;
  required?: boolean;
  /**
   * This prop makes style this component using [Emotion](https://emotion.sh/docs/@emotion/css).
   */
  sx?: CSSObject & V2CssMediaQ;
  event?: JSX.CustomEventHandlersCamelCase<HTMLInputElement>;
};

export function TxtInput(props: V2TxtInputComponent) {
  const [show, setShow] = createSignal(false);
  const InputStyle = css({
    display: "inline-flex",
    flexDirection: "column",
    "&>.V2TxtInput-Span": {
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
    },
    "& .V2TxtInput": {
      padding: "0.75rem",
      borderRadius: "0.5rem",
      borderStyle: "solid",
      borderColor: "black",
      outline: "none",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      width: "100%",
      "&:focus": {
        borderColor: "blue",
        boxShadow: "0 0 0 1px blue",
      },
    },
    "&>.V2TxtInput-Label": {
      lineHeight: "1.25rem",
      marginBottom: "0.5rem",
      "&>.V2TxtInput-Required": {
        marginLeft: "0.25rem",
        color: "red",
      },
    },
    ...sxMediaQ(props.sx),
    ...props.sx,
  });
  return (
    <label class={InputStyle}>
      {props.label ? (
        <span class="V2TxtInput-Label">
          {props.label}
          {props.required && <span class="V2TxtInput-Required">*</span>}
        </span>
      ) : null}
      <div class="V2TxtInput-Span">
        <input
          onChange={props.event?.onChange}
          ref={props.inputRef}
          id={props.id}
          name={props.name}
          type={show() ? "text" : props.type}
          required={props.required}
          readOnly={props.readOnly}
          disabled={props.disabled}
          autocomplete={props.autoComplete ? "on" : "off"}
          autoCapitalize={props.autoCapitalize ? "on" : "off"}
          autofocus={props.autoFocus}
          placeholder={props.placeholder}
          class={`V2TxtInput`}
        />
        {props.type == "password" && (
          <button
            type="button"
            onClick={() => setShow((e) => !e)}
            class={css`
              cursor: pointer;
              position: absolute;
              background-color: transparent;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 0.75rem;
              font-family: "SF Pro";
              font-size: 0.875rem;
              border: 0;
              border-radius: 0.5rem;
              width: 1.75rem;
              height: 1.75rem;
              color: #000000;
              &:active {
                scale: 0.95;
              }
            `}
            title={show() ? "パスワードを表示する" : "パスワードを隠す"}
          >
            {show() ? "􀋰" : "􀋮"}
          </button>
        )}
      </div>
    </label>
  );
}
