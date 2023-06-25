import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import News from "./pages/News";
import Footer from "./Components/Footer";
import News1 from "./pages/News1";
import News2 from "./pages/News2";
import News3 from "./pages/News3";
import News4 from "./pages/News4";
import News5 from "./pages/News5";

function App() {
  return (
    <div className="container-fluid text-bg-dark">
      <header className="header">
        <Header />
      </header>
      <hr />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/1" element={<News1 />} />
          <Route path="/news/2" element={<News2 />} />
          <Route path="/news/3" element={<News3 />} />
          <Route path="/news/4" element={<News4 />} />
          <Route path="/news/2" element={<News5 />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <hr />
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
