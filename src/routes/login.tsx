import { css } from "solid-styled-components";
import { createSignal } from "solid-js";
import { A, useNavigate } from "solid-start";
import { Form } from "solid-start/data/Form";
import { logIn } from "~/api/auth";
import { Box, Button, TxtInput } from "~/components";

export default function Login() {
  let mailRef: HTMLInputElement;
  let passRef: HTMLInputElement;
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
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
      }}
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
          inputRef={(el) => (mailRef = el)}
          label="Email:"
          type="email"
          placeholder="email"
          required
          sx={{ width: "-webkit-fill-available", marginBottom: "1rem" }}
        />
        <TxtInput
          inputRef={(el) => (passRef = el)}
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
    </Box>
  );
}
