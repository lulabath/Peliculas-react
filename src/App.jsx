import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "./views/Home";
import Footer from "./components/static/Footer";
import Header from "./components/static/Header";
import Popular from "./views/Popular";
import LatestReleases from "./views/LatestReleases";




export default function App() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latestReleases" element={<LatestReleases />} />
        <Route path="/popular" element={<Popular />} />
        </Routes>
        <Footer />
        </BrowserRouter>
       
    );
}
