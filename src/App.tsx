import { AppContextProvider } from "./contexts/app-provider";
import { AppContainer } from "./ui/components/app-container";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import { Panel } from "./ui/panel";
import { Projects } from "./ui/projects";

export default function App() {
  return (
    <AppContextProvider>
      <AppContainer footer={<Footer />}>
        <Header />
        <Panel />
        <Projects />
      </AppContainer>
    </AppContextProvider>
  );
}
