import { Title } from "solid-start";
import { css } from "solid-styled-components";
import { pb, useUsr } from "~/api/pb";
import { Box, Button } from "~/components";
import "~/components/utility/utility.css";

export default function Home() {
  const app = pb;
  const usr = pb.authStore.model;
  console.log(app);

  return (
    <main>
      <Title>Hello World</Title>
      <img width={180} height={180} src="/plip.svg" />
      <p>{usr ? usr.name : "null"}</p>
      <Box
        sx={{
          display: "flex",
          marginTop: "3rem",
          justifyContent: "center",
          "&>.V2Button": {
            margin: "0 0.75rem",
          },
        }}
      >
        <Button link href="/login">
          <svg
            class={css`
              fill: white;
              width: 1.5rem;
              height: 1.5rem;
              scale: 1.1;
              margin-right: 0.25rem;
            `}
            data-name="arrow-down-box"
            viewBox="0 0 48 48"
          >
            <path d="m34.91,17h-3.47c-.82,0-1.49.67-1.49,1.5h0c0,.83.67,1.5,1.49,1.5h3.47c1.16,0,2.11.96,2.11,2.13v16.74c0,1.17-.95,2.13-2.11,2.13H13.09c-1.16,0-2.11-.96-2.11-2.13v-16.74c0-1.17.95-2.13,2.11-2.13h3.47c.82,0,1.49-.67,1.49-1.5h0c0-.83-.67-1.5-1.49-1.5h-3.47c-2.81,0-5.09,2.3-5.09,5.13v16.74c0,2.83,2.28,5.13,5.09,5.13h21.82c2.81,0,5.09-2.3,5.09-5.13v-16.74c0-2.83-2.28-5.13-5.09-5.13Z" />
            <path d="m31.06,28.06l-6,6c-.59.59-1.53.59-2.12,0l-6-6c-.59-.59-.59-1.53,0-2.12.29-.29.68-.44,1.06-.44s.77.15,1.06.44l3.44,3.44V6.5c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5v22.88l3.44-3.44c.59-.59,1.53-.59,2.12,0,.59.59.59,1.53,0,2.12Z" />
          </svg>
          Start learning
        </Button>
        <Button variant="outline">hello</Button>
      </Box>
    </main>
  );
}
