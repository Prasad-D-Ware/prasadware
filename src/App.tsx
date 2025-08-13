import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Blogs from "./components/blogs/Blogs";
import RookieUnderstandingOfAI from "./components/blogs/RookieUnderstandingOfAI";

function App() {
  return (
    <div className="font-mono bg-black min-h-screen">
        <div className="">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/rookie-understanding-of-ai" element={<RookieUnderstandingOfAI />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
