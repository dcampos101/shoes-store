import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductoCard';
import FiltersSidebar from '../components/FiltersSidebar';

export default function Hombre() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/zapato.json')
      .then(res => res.json())
      .then(data => {
        const filtrados = data.filter(p => p.nombre.toLowerCase().includes("hombre"));
        setProductos(filtrados);
      });
  }, []);

  return (
      <div className="p-6 md:flex md:gap-6">
      {/* Sidebar */}
      <FiltersSidebar />

      {/* Lista de productos */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map(prod => (
          <ProductCard key={prod.id} producto={prod} />
        ))}
      </div>
    </div>

  );
}