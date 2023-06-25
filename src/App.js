import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import News from "./pages/News";
import Footer from "./Components/Footer";
import NewsPage from "./Components/NewsPage";

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
          <Route path="/news/:id" element={<NewsPage />} />
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
