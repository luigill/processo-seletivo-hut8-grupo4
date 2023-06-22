import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Shop from "./pages/Shop";



const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/produtos" element={<Categorias/>} />
      <Route path="produtos/loja" element={<Shop/>} />

      </Routes>
    </Router>
  );
};

export default App;