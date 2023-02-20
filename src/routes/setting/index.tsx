import { createSignal } from "solid-js";
import { useNavigate } from "solid-start";
import { logOut } from "~/api/auth";
import { pb, useUsr } from "~/api/pb";
import { TxtInput, Toggle, Box, Button, Dialog } from "~/components";

export default function Setting() {
  const [dialogIsOpen, setDialogOpen] = createSignal(false);
  const [app, usr] = [pb, pb.authStore.model];
  const navigate = useNavigate();
  const [logging, setLog] = createSignal(false);
  function logoutHdler() {
    setLog(true);
    if (confirm("Log out?")) {
      logOut();
      navigate("/");
    }
    setLog(false);
  }
  return (
    <Box
      component="main"
      sx={{
        textAlign: "start",
        margin: "0 2rem",
      }}
    >
      <h1>Setting</h1>
      <TxtInput type="search" />
      <h2>Account</h2>
      <Box component="div" sx={{ display: "flex", maxWidth: "100%" }}>
        <img
          src={`${app.baseUrl}/api/files/_pb_users_auth_/${usr?.id}/${usr?.avatar}?thumb=128x128`}
          alt="user's photo"
        />
        <Toggle />
      </Box>
      <Button name="open dialog" onClick={() => setDialogOpen(true)}>
        a
      </Button>
      <Dialog open={dialogIsOpen} setOpen={setDialogOpen}>
        <p>This is my first Dialog! hello wolrd! my name is Kenshin!</p>
      </Dialog>
      <Button onClick={logoutHdler}>
        {logging() ? "Loading..." : "Log out"}
      </Button>
    </Box>
  );
}
