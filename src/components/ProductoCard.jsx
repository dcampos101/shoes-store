import { Link } from 'react-router-dom';

export default function ProductCard({ producto }) {
  return (
    <div className="border rounded-lg p-4 text-center shadow hover:shadow-lg">
      <Link to={`/producto/${producto.id}`}>

        <div className="max-h-24 max-w-24 mx-auto flex items-center justify-center">
            <img
            src={`/img/${producto.imagen}`}
            alt={producto.nombre}
            className="h-full w-full object-contain"
            />
        </div>
        <h2 className="font-medium mt-2">{producto.nombre}</h2>
        <p className="text-pink-800 font-bold mt-1">${producto.precio}</p>
      </Link>
    </div>
  );
}