import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
import Fit from "./pages/Fit";
import Layout from "./components/layout/Layout";
import Motion from "./pages/motion";
import Power from "./pages/Power";
import Brave from "./pages/Brave";
import Vapora from "./pages/vapora";
import Zwr from "./pages/zwr";
import News from "./pages/news";
import NewsProducts from "./pages/NewsProducts";
import NewsEvent from "./pages/NewsEvent";
import Newssponsor from "./pages/Newssponsor";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import Newsele from "./pages/Newsele";
import NewssponsDetail from "./pages/NewssponsDetail";



"./components/layout/layout";
"./components/layout/Layout";




ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<App />} />
                <Route path="/fit" element={<Fit />} />
                <Route path="/motion" element={<Motion />} />
                <Route path="/power" element={<Power />} />
                <Route path="/brave" element={<Brave />} />
                <Route path="/Vapora" element={<Vapora />} />
                <Route path="/zwr" element={<Zwr />} />
                <Route path="/News" element={<News />} />
                <Route path="/News/Products" element={<NewsProducts />} />
                <Route path="/News/events" element={<NewsEvent />} />
                <Route path="/News/sponsor" element={<Newssponsor />} />
                {/* <Route path="/news/:id" element={<NewsDetail />} /> */}
                <Route path="/News/ele" element={<Newsele />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news/:id" element={<NewssponsDetail />} />
            </Route>
        </Routes>
    </BrowserRouter>
);