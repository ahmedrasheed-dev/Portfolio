
// import { Dock } from "lucide-react";
import { Navbar, Welcome, Dock } from "./components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap"
import { Resume, Safari, Terminal, Finder, Text, ImageFile, Contact } from "#windows";
import Home from "#components/Home";

gsap.registerPlugin(Draggable)


function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageFile />
      <Contact />
      <Home/>
    </main>
  );
}

export default App;
