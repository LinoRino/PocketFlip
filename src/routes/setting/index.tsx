import { css } from "@emotion/css";
import { usePB, useUsr } from "~/api/pb";
import { Box } from "~/components/Box/Box";
import { TxtInput } from "~/components/TxtInput/TxtInput";

export default function Setting() {
  const [app, usr] = [usePB(), useUsr()]
  return (
    <main
      class={css`
        margin: 0 1rem;
      `}
    >
    <h1>Setting</h1>
      <TxtInput type="search" />
      <Box sx={{display: "flex", maxWidth: "100%"}}><img src={`${app.baseUrl}/api/files/_pb_users_auth_/${usr?.id}/${usr?.avatar}?thumb=100x100`} alt="user's photo" /></Box>
    </main>
  );
}