import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
//import ManPage from './pages/ManPage';
import Hombre from './pages/ManPage';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hombre" element={<Hombre />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
    </div>
    
  );
}