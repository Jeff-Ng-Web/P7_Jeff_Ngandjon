import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Article from "./pages/Article"

const Chemin = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/article/*" element={<Article />}></Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Chemin

