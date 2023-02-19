import { css, CSSAttribute } from "solid-styled-components";
import { JSX, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

type V2TextComponent = {
  component?: ValidComponent;
  children?: JSX.Element;
  sx?: CSSAttribute;
};

export function Txt(props: V2TextComponent) {
  const TxtClass = css({ ...props.sx });
  return (
    <Dynamic
      component={props.component ? props.component : "p"}
      class={TxtClass}
    >
      {props.children}
    </Dynamic>
  );
}
