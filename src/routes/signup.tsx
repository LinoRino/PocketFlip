import { css } from "@emotion/css";
import { createSignal } from "solid-js";
import { A, useNavigate } from "solid-start";
import { Form } from "solid-start/data/Form";
import { signUp } from "~/api/auth";
import { Button } from "~/components/Button/Button";
import { TxtInput } from "~/components/TxtInput/TxtInput";

export default function Logout() {
  let usrRef: HTMLInputElement | undefined;
  let nameRef: HTMLInputElement | undefined;
  let mailRef: HTMLInputElement | undefined;
  let passRef: HTMLInputElement | undefined;
  let passconfRef: HTMLInputElement | undefined;
  const [loading, setLoad] = createSignal(false);
  const navigate = useNavigate();
  async function SubmitHdler() {
    setLoad(true);
    if (mailRef && passRef && usrRef && nameRef && passconfRef) {
      await signUp()
        .then((res) => {
          if (res) {
            alert("ログインに成功しました。");
            navigate("/");
          } else {
            alert("ログインに失敗しました。");
          }
        })
        .finally(() => {
          setLoad(false);
        });
    }
  }
  return (
    <main
      class={css`
        display: grid;
        place-items: center;
      `}
    >
      <Form
        onSubmit={SubmitHdler}
        class={css`
          display: flex;
          flex-direction: column;
          width: fit-content;
          text-align: start;
        `}
      >
        <h1>Login</h1>
        <label>
          <span>Email:</span>
          <TxtInput
            inputRef={mailRef}
            type="email"
            placeholder="email"
            sx={{ width: "-webkit-fill-available", marginBottom: "1.5rem" }}
          />
        </label>
        <TxtInput
          inputRef={passRef}
          type="password"
          placeholder="password"
          sx={{ width: "-webkit-fill-available", marginBottom: "1.5rem" }}
        />
        <Button type="submit" sx={{ justifyContent: "center" }}>
          {loading() ? "Loading..." : "Log in"}
        </Button>
        <p>
          If you already have your account ,{" "}
          <A link href="/login">
            just click here to log in.
          </A>
        </p>
      </Form>
    </main>
  );
}
