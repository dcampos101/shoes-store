export default function FiltersSidebar() {
  return (
    <aside className="w-full md:w-64 border p-4 text-sm space-y-6">
      <div className="text-xs text-gray-500 uppercase">HUSHPUPPIESCO / Calzado</div>
      <h2 className="text-2xl font-bold mb-1">CALZADO</h2>
      <p className="text-gray-500 text-sm">TODOS (151)</p>

      {/* TALLA */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">TALLA</h3>
        <div className="grid grid-cols-4 gap-2">
          {["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5"].map(talla => (
            <button key={talla} className="border px-2 py-1 text-sm hover:bg-gray-200">
              {talla}
            </button>
          ))}
        </div>
      </div>

      {/* PRECIO */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">PRECIO</h3>
        <ul className="space-y-1">
          <li>$150.000 - $300.000 (10)</li>
          <li>$300.000 - $450.000 (24)</li>
        </ul>
      </div>

      {/* MATERIAL */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">MATERIAL</h3>
        <ul className="space-y-1">
          <li>Cuero (18)</li>
          <li>Nubuck (8)</li>
        </ul>
      </div>

      {/* COLOR */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">COLOR</h3>
        <ul className="space-y-1">
          <li>NEGRO (12)</li>
          <li>AZUL (12)</li>
          <li>CAFE (12)</li>
          <li>ORO (12)</li>
        </ul>
      </div>

      {/* TECNOLOGÍA */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">TECNOLOGÍA</h3>
        <ul className="space-y-1">
          <li>HPO2Flex (5)</li>
          <li>BioBevel (1)</li>
          <li>flexGroove (3)</li>
        </ul>
      </div>
    </aside>
  );
}