import { css } from "@emotion/css";
import { createSignal } from "solid-js";
import { A, useNavigate } from "solid-start";
import { Form } from "solid-start/data/Form";
import { logIn } from "~/api/auth";
import { Button } from "~/components/Button/Button";
import { TxtInput } from "~/components/TxtInput/TxtInput";

export default function Logout() {
  let mailRef: HTMLInputElement | undefined;
  let passRef: HTMLInputElement | undefined;
  const [loading, setLoad] = createSignal(false);
  const navigate = useNavigate();
  async function SubmitHdler() {
    setLoad(true);
    if (mailRef && passRef) {
      await logIn(mailRef.value, passRef.value)
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
        display: flex;
        justify-content: center;
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
          width: 100%;
          margin: 0 2rem;
          margin-bottom: 3.75rem;
          max-width: 36rem;
        `}
      >
        <h1>Log in</h1>
        <TxtInput
          inputRef={mailRef}
          label="Email:"
          type="email"
          placeholder="email"
          required
          sx={{ width: "-webkit-fill-available", marginBottom: "1rem" }}
        />
        <TxtInput
          inputRef={passRef}
          label="Password:"
          type="password"
          placeholder="password"
          required
          sx={{ width: "-webkit-fill-available", marginBottom: "1rem" }}
        />
        <Button type="submit" sx={{ justifyContent: "center" }}>
          {loading() ? "Loading..." : "Log in"}
        </Button>
        <p>
          If you don't have your account yet,{" "}
          <A href="/signup">just click here to sign up.</A>
        </p>
      </Form>
    </main>
  );
}
