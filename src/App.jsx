import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Shop from './pages/Shop';
import NossoTime from './pages/NossoTime';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Categorias />} />
        <Route path="/produtos/camisetas" element={<Shop category="camisetas" />} />
        <Route path="/produtos/canecas" element={<Shop category="canecas" />} />
        <Route path="/produtos/moletons" element={<Shop category="moletons" />} />
        <Route path="/produtos/broches" element={<Shop category="broches" />} />
        <Route path="/produtos/loja" element={<Shop category="camisetas" />} />
        <Route path="/nossa-equipe" element={<NossoTime/>} />

      </Routes>
    </Router>
  );
};

export default App;
