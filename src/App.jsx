import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/static/Footer";
import Header from "./components/static/Header";
import Popular from "./views/Popular";
import LatestReleases from "./views/LatestReleases";
import { Box } from "@mui/material";


export default function App() {
    return (
        <BrowserRouter>
            <Box style={{
                backgroundImage: "linear-gradient(290deg, rgba(10, 5, 37, 0.97), rgba(13, 4, 67, 1)",
                minHeight: "100vh",
                overflow: "hidden",
                color: "white",
            }}>
                {/* <Typography fontFamily="Roboto" fontWeight="900" fontSize="16px" lineHeight="1.5"> */}
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/latestReleases" element={<LatestReleases />} />
                        <Route path="/popular" element={<Popular />} />
                        <Route path="*" element={<h1>error {/*personificar lindo*/ }</h1>} />
                    </Routes>
                    <Footer />
                {/* </Typography> */}
            </Box>

        </BrowserRouter>

    );
}
