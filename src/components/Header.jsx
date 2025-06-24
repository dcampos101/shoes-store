import { useState } from "react";
import { useCart } from '../context/CartContext';

export default function Header() {
   const [menuAbierto, setMenuAbierto] = useState(false);
   const { carrito } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      {/* Barra superior */}
      <div className="flex justify-end items-center px-6 py-1 text-xs text-gray-600 space-x-4">
        <a href="#" className="hover:underline">DIRECTORIO DE TIENDAS</a>
        <a href="#" className="hover:underline">SERVICIO AL CLIENTE</a>
        <a href="#" className="hover:underline">MI CUENTA</a>
      </div>

      {/* Logo, búsqueda, info derecha */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center px-6 py-4 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/">
          <img src="/logo-2.png" alt="Hush Puppies" className="h-12" /></a>
          <span className="text-xl font-semibold text-gray-800"></span>
        </div>

        {/* Búsqueda */}
        <div className="flex-grow max-w-md relative">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full border border-gray-300 rounded-full px-4 py-1 text-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-sm">
            ➤
          </button>
        </div>

        {/* Info derecha */}
        <div className="text-right text-xs flex flex-col items-end">
          <p className="text-pink-800 font-medium">
            ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000
          </p>
          <a href="#" className="text-gray-700 flex items-center gap-1 mt-1">
            <span>🛒</span> CARRITO <span className="ml-1">{carrito}</span>
          </a>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className="flex justify-center gap-12 uppercase text-sm font-semibold text-gray-700 tracking-wide py-3">
        <a href="/hombre" className="hover:text-black transition">HOMBRE</a>
        <a href="#" className="hover:text-black transition">MUJER</a>
        <a href="#" className="hover:text-black transition">BLOG</a>
        <a href="#" className="hover:text-black transition">HISTORIA</a>
        <a href="#" className="hover:text-black transition">TIENDAS</a>
    </nav>
    </header>
  );
}