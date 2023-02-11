import { Title } from "solid-start";
import { usePB, useUsr } from "~/api/pb";
import { Button } from "~/components/Button/Button";
import { Fab } from "~/components/FloatingActionButton/FloatingActionButton";
import "~/components/utility/utility.css";

export default function Home() {
  const app = usePB()
  const usr = useUsr();
  console.log(app);

  return (
    <main>
      <Title>Hello World</Title>
        <img width={180} height={180} src="/plip.svg" />
      <p>{usr ? usr.name : "null"}</p>
      <Button link href="/login">
        Start learning
      </Button>
      <Button variant="outline">hello</Button>
      <Fab sx={{position: "fixed", bottom: 60+16,right:16}} icon={"􁚛"} />
    </main>
  );
}
