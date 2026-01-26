import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";
import Video from "./assets/money.mp4";
function App() {
return (
<div>

  <video autoPlay muted loop className="bg-video">
    <source src={Video} type="video/mp4"/>
  </video>
  <div className="video-overlay"></div>
<Navbar />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />

          {/* This route matches any unknown URL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
);
}

export default App;