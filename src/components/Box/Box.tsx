import { JSX, ValidComponent } from "solid-js";
import { css, CSSAttribute } from "solid-styled-components";
import { Dynamic } from "solid-js/web";
import { sxMediaQ, V2CssMediaQ } from "../utility/Utility";

type V2BoxComponent = {
  children?: JSX.Element;
  sx?: CSSAttribute & V2CssMediaQ;
  component?: ValidComponent;
  event?: JSX.CustomEventHandlersCamelCase<HTMLElement>;
  class?: string;
  role?:
    | "alert"
    | "alertdialog"
    | "application"
    | "article"
    | "banner"
    | "button"
    | "cell"
    | "checkbox"
    | "columnheader"
    | "combobox"
    | "complementary"
    | "contentinfo"
    | "definition"
    | "dialog"
    | "directory"
    | "document"
    | "feed"
    | "figure"
    | "form"
    | "grid"
    | "gridcell"
    | "group"
    | "heading"
    | "img"
    | "link"
    | "list"
    | "listbox"
    | "listitem"
    | "log"
    | "main"
    | "marquee"
    | "math"
    | "menu"
    | "menubar"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "meter"
    | "navigation"
    | "none"
    | "note"
    | "option"
    | "presentation"
    | "progressbar"
    | "radio"
    | "radiogroup"
    | "region"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "scrollbar"
    | "search"
    | "searchbox"
    | "separator"
    | "slider"
    | "spinbutton"
    | "status"
    | "switch"
    | "tab"
    | "table"
    | "tablist"
    | "tabpanel"
    | "term"
    | "textbox"
    | "timer"
    | "toolbar"
    | "tooltip"
    | "tree"
    | "treegrid"
    | "treeitem";
};

//TODO: Change to be able to create an dynamic tag.
export function Box(props: V2BoxComponent): JSX.Element {
  const BoxClass = css({
    ...sxMediaQ(props.sx),
    ...props.sx,
  });
  return (
    <Dynamic
      component={props.component ? props.component : "div"}
      role={props.role}
      class={`V2Box ${props.class} ${BoxClass}`}
    >
      {props.children}
    </Dynamic>
  );
}
