import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Curious from "./pages/Curious";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curiosa" element={<Curious />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
