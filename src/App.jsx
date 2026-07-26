// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";
// import HomePage from "./pages/Home";
// import AboutPage from "./pages/About";
// import BlogPage from "./pages/Blog";
// import ContactPage from "./pages/Contact";
// import MyNavbar from "./components/Navbar";

// import { Routes, Route, BrowserRouter } from "react-router-dom";

// function App() {
//   return (
//     <>
 
//       <MyNavbar />

//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/blog" element={<BlogPage /> } />
//           <Route path="/contact" element={<ContactPage />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;


import "./App.css";


import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;