// @refresh reload
import { createSignal, onMount, Suspense, } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

function GlobalStyles() {
  return null;
}
import { PBContextProvider } from "./api/pb";
import { BottomNav } from "./components/BottomNavigation/BottomNavigation";

export default function Root() {
  const [loading, setLoad] = createSignal(true);
  onMount(() => {
    setLoad(false);
  });
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PBContextProvider>
        <Body>
          <GlobalStyles />
          {loading() ? (
            <main id="loading">
              <h1>Loading...</h1>
            </main>
          ) : (
            <Suspense>
              <ErrorBoundary>
                <Routes>
                  <FileRoutes />
                </Routes>
              </ErrorBoundary>
              <BottomNav
                sx={{
                  _MinLg: {
                    display: "none",
                  },
                }}
              ></BottomNav>
            </Suspense>
          )}
          <Scripts />
        </Body>
      </PBContextProvider>
    </Html>
  );
}
