import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/zapato.json')
      .then(res => res.json())
      .then(setProductos);
  }, []);

  return (
    
	<main className="p-6">
     <div className="relative">
      <img
        src="/banner.jpg"
        alt="Hombre"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-4xl md:text-6xl font-bold text-white drop-shadow">
           
        </h3>
        <p> </p>
        <Link
          to="/hombre"
          className="mt-112 inline-block bg-red-900 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700"
        >
          Ver colección
        </Link>
      </div>
    </div>

    </main>
  );
}