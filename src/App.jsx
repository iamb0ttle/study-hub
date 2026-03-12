import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About.jsx"
import Korean from "./pages/Korean.jsx"
import Math from "./pages/Math.jsx";
import Social from "./pages/Social.jsx";
import Science from "./pages/Science.jsx";
import NotFound from "./pages/NotFound.jsx";

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
