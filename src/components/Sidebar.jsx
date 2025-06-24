import { Link } from "react-router-dom";

export default function Sidebar({ onTalla, onColor, onMaterial, nombre, precio, foto }, index) {
  const tallas = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];
  const colores = ["Negro", "Azul", "Café", "Gris", "Rojo"];
  const materiales = ["Cuero", "Nubuck"];

  return (
    <aside className="w-64 p-4 border-r">
      <h2 className="text-xl font-bold mb-4">CALZADO</h2>
    
    <Link to={`/producto/${index}`} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition">
      <img src={`/img/${foto}`} 
            alt={nombre} 
            className="h-28 w-full object-contain mb-2 mx-auto" />
      <p className="text-sm text-gray-700">{nombre}</p>
      <p className="text-pink-600 font-semibold">${precio}</p>
    </Link>

      <p className="font-semibold">COLOR</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {colores.map(c => (
          <button
            key={c}
            onClick={() => onColor(c)}
            className="border text-sm px-2 py-1 hover:bg-black hover:text-white"
          >
            {c}
          </button>
        ))}
      </div>
      <p className="font-semibold">TALLA</p>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {tallas.map(t => (
          <button
            key={t}
            onClick={() => onTalla(t)}
            className="border text-sm px-2 py-1 hover:bg-black hover:text-white"
          >
            {t}
          </button>
        ))}
      </div>

      <p className="font-semibold"></p>
      <a href="#" className="font-semibold">GUÍA DE TALLAS</a>
    </aside>
  );
}