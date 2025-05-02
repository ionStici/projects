import { AppContainer } from "./ui/components/app-container";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import { Projects } from "./ui/projects";

export default function App() {
  return (
    <AppContainer footer={<Footer />}>
      <Header />
      <Projects />
    </AppContainer>
  );
}
