import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/categorias" element={<Categorias/>} />

      </Routes>
    </Router>
  );
};

export default App;