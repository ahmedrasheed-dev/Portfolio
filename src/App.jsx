
// import { Dock } from "lucide-react";
import { Navbar, Welcome, Dock } from "./components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap"
import { Resume, Safari, Terminal, Finder, Text, ImageFile, Contact, Photos, Trash } from "#windows";
import Home from "#components/Home";

gsap.registerPlugin(Draggable)


function App() {
  return (
    <main className="relative w-dvw h-dvh overflow-hidden">
      <div id="desktop-bounds" className="absolute top-[40px] bottom-[80px] left-0 right-0 pointer-events-none" />
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
      <Photos />
      <Trash />
      <Home/>
    </main>
  );
}

export default App;
