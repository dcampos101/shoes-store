import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/zapato.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === id);
        setProducto(found);
      });
  }, [id]);

  if (!producto) return <div className="p-6">Cargando...</div>;

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <img src={`/img/${producto.imagen}`} alt={producto.nombre} className="w-full max-w-md mx-auto" />

      <div>
        <h1 className="text-2xl font-semibold">{producto.nombre}</h1>
        <p className="text-pink-800 font-bold text-xl mb-2">${producto.precio}</p>

        <div className="mb-4">
          <h2 className="font-semibold mb-1">Tallas:</h2>
          <div className="grid grid-cols-5 gap-2">
            {producto.tallas.map(t => (
              <button key={t} className="border rounded py-1 hover:bg-gray-100">{t}</button>
            ))}
          </div>
        </div>

        <button className="mt-4 bg-red-900 text-white px-4 py-2 rounded hover:bg-red-800" onClick={addToCart}>
          Añadir al carrito
        </button>

        <hr className="my-6" />
        <h3 className="font-bold">DETALLES DE PRODUCTO</h3>
        <p>{producto.detalles}</p>

        <h3 className="font-bold mt-4">TECNOLOGÍAS</h3>
        <p>{producto.tecnologia}</p>
      </div>
    </div>
  );
}