import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/static/Footer";
import Header from "./components/static/Header";
import LatestReleases from "./views/LatestReleases";
import Popular from "./views/Popular";
import Search from "./views/Search";
import { Box } from "@mui/material";
import Detail from "./views/Detail";
import { FavoritesProvider } from "./context/FavoritesContext";
import Favorites from "./views/Favorites";
import "./index.css";

const App = () => {
    return (
        <FavoritesProvider>
            <BrowserRouter>
                <Box style={{
                    backgroundColor: '#04011A',
                    minHeight: "100vh",
                    width: '100%',
                    overflow: "hidden",
                    color: "white",
                    padding: 0,
                    margin: 0,
                }}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/latestReleases" element={<LatestReleases />} />
                        <Route path="/popular" element={<Popular />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="*" element={<h1>Error</h1>} />
                    </Routes>
                    <Footer />
                </Box>
            </BrowserRouter>
        </FavoritesProvider>
    );
}
export default App;
