import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="font-mono ">
        <div className="md:h-screen">
            <Header />
            <Home />
        </div>
        <Footer/>
    </div>
  );
}

export default App;
