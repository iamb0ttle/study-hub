import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Korean from "./pages/Korean"
import Math from "./pages/Math";
import Social from "./pages/Social";
import Science from "./pages/Science";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/korean" element={<Korean />} />
            <Route path="/math" element={<Math />} />
            <Route path="/social" element={<Social />} />
            <Route path="/science" element={<Science />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );   
}
