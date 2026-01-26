import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ProjectDetail from "./pages/ProjectDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="proyecto/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
