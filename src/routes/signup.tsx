import { css } from "solid-styled-components";
import { createSignal } from "solid-js";
import { A, useNavigate } from "solid-start";
import { Form } from "solid-start/data/Form";
import { signUp } from "~/api/auth";
import { Button, TxtInput } from "~/components";

export default function SignUp() {
  // Ref
  let usrnameRef: HTMLInputElement | undefined;
  let nameRef: HTMLInputElement | undefined;
  let mailRef: HTMLInputElement | undefined;
  let passRef: HTMLInputElement | undefined;
  let passconfRef: HTMLInputElement | undefined;
  // Value
  const [username, name, mail, pass, passcon] = [
    usrnameRef?.value,
    nameRef?.value,
    mailRef?.value,
    passRef?.value,
    passconfRef?.value,
  ];
  const [loading, setLoad] = createSignal(false);
  const navigate = useNavigate();
  async function SubmitHdler() {
    setLoad(true);
    if (username && pass && mail && name && passcon) {
      await signUp(username, mail, pass, passcon, name)
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
        <h1>Sign up</h1>
        <TxtInput
          inputRef={usrnameRef}
          name="name"
          type="text"
          placeholder="your name"
          sx={{ width: "-webkit-fill-available", marginBottom: "1.5rem" }}
        />
        <TxtInput
          inputRef={nameRef}
          name="name"
          type="text"
          placeholder="name"
          sx={{ width: "-webkit-fill-available", marginBottom: "1.5rem" }}
        />
        <TxtInput
          inputRef={mailRef}
          type="email"
          placeholder="email"
          sx={{ width: "-webkit-fill-available", marginBottom: "1.5rem" }}
        />
        <TxtInput
          inputRef={passRef}
          type="password"
          placeholder="password"
          sx={{ width: "-webkit-fill-available", marginBottom: "1.5rem" }}
        />
        <Button type="submit" sx={{ justifyContent: "center" }}>
          {loading() ? "Loading..." : "Sign up"}
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
