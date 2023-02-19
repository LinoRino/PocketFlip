import { css, CSSAttribute } from "solid-styled-components";

export type V2CssMediaQ =
  | {
      /**
       * The **@media** CSS at-rule can be used to apply part of a style sheet based on the result of one or more media queries.
       *
       * | Chrome | Firefox | Safari |  Edge  |
       * | :----: | :-----: | :----: | :----: |
       * | **1**  |  **1**  | **3**  | **12** |
       *
       * @see https://developer.mozilla.org/docs/Web/CSS/@media
       */
      _MinSm?: CSSAttribute;
      _MinMd?: CSSAttribute;
      _MinLg?: CSSAttribute;
      _MinXl?: CSSAttribute;
      _Min2Xl?: CSSAttribute;
      _MaxSm?: CSSAttribute;
      _MaxMd?: CSSAttribute;
      _MaxLg?: CSSAttribute;
      _MaxXl?: CSSAttribute;
      _Max2Xl?: CSSAttribute;
    }
  | undefined;

export const sxMediaQ = (props: V2CssMediaQ) => {
  if (props) {
    return css({
      "@media (width >= 640px)": {
        ...props._MinSm,
      },
      "@media (width >= 768px)": {
        ...props._MinMd,
      },
      "@media (width >= 1024px)": {
        ...props._MinLg,
      },
      "@media (width >= 1280px)": {
        ...props._MinXl,
      },
      "@media (width >= 1536px)": {
        ...props._Min2Xl,
      },
      "@media (width <= 640px)": {
        ...props._MaxSm,
      },
      "@media (width <= 768px)": {
        ...props._MaxMd,
      },
      "@media (width <= 1024px)": {
        ...props._MaxLg,
      },
      "@media (width <= 1280px)": {
        ...props._MaxXl,
      },
      "@media (width <= 1536px)": {
        ...props._Max2Xl,
      },
    });
  } else {
    return {};
  }
};
