import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Korean from "./pages/Korean"
import Math from "./pages/Math"
import Social from "./pages/Social"
import Science from "./pages/Science"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"

export default function App() {
    return (
        <Routes>
            {/* Routes는 react-router-dom 라이브러리에서 제공하는 컴포넌트로, Routes를 등록하고 관리할 수 있도록 한다. */}
            <Route element={<Layout/>}>
                {/* Layout 컴포넌트를 사용하여 공통 레이아웃을 적용한다. */}
                <Route path="/" element={<Home />} />
                {/* Route는 react-router-dom 라이브러리에서 제공하는 컴포넌트로 특정 URL 경로와 컴포넌트를 연결한다. */}
                <Route path="/about" element={<About />} />
                <Route path="/korean" element={<Korean />} />
                <Route path="/math" element={<Math />} />
                <Route path="/social" element={<Social />} />
                <Route path="/science" element={<Science />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )   
}
