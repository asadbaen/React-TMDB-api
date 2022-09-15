import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavbarPagination from "./components/Navbar/NavbarPagination";
import DetailMovie from "./pages/DetailMovie";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarPagination />
        <div className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:movieId" element={<DetailMovie />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
