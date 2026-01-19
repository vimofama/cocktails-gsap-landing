import gsap from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
        </main>
    );
};

export default App;