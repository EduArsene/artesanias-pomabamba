// src/App.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';
import artesaniaPomabamba from './assets/img/pbba.png';
import mountains from './assets/img/montaña.jpg';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = {
    home: <Home />,
    productos: <Productos />,
    contacto: <Contacto />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-yellow-50 font-sans ">
      {/* Encabezado con navegación separada */}
      <header class="bg-gradient-to-b from-red-900 to-red-700 text-white px-6 py-4 shadow-md flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-[#00000] text-3xl font-[Comics Sans] italic mb-2 md:mb-0 escribir">ARTESANÍAS POMABAMBA</h1>
        <nav className="space-x-4">
          <button
            onClick={() => setActiveTab('home')}
            className="outline-offset-4 bg-orange-700 px-4 py-2 rounded-md hover:bg-black transition animate-bounce"
          >
            Inicio
          </button>
          <button
            onClick={() => setActiveTab('productos')}
            className="shadow-xl0 bg-orange-700 duration-700 x-4 py-2 rounded-md hover:bg-black transition animate-bounce"
          >
            Artículos
          </button>

          <button
            onClick={() => setActiveTab('contacto')}
            className=" px-4 py-2 bg-orange-700 rounded-md hover:bg-black transition animate-bounce"
          >
            Contáctanos
          </button>
        </nav>
      </header>

      {/* Contenido principal con imagen y sección dinámica */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagen decorativa o representativa */}
        <div className="rounded-lg overflow-hidden shadow-lg scale-90 hover:scale-100 transition-transform duration-300 ">
          <img
            src={artesaniaPomabamba}
            alt="Artesanía"
            className="w-full  object-cover backdrop-brightness-150 border-double "
          />

        </div>


        {/* Contenido dinámico con animación */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {tabs[activeTab]}
        </motion.div>
      </main>
    </div>

  );
}
/*animaciones */
function Home() {
  return (
    <section className="text-center">
      <motion.h2
        className="text-4xl font-bold text-red-700 font-mono"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        Bienvenido a nuestra tienda artesanal
      </motion.h2>
      <p className="mt-12 text-lg text-gray-800 font-mono">
        Descubre la riqueza cultural de Pomabamba a través de nuestras artesanías hechas a mano.
      </p>
      <div
        className="backdrop-blur-sm mt-12 h-64 bg-cover bg-center mask-[url('/src/assets/img/scribble.png')] mask-b-from-20% mask-b-to-80% border-double transition-opacity duration-300 hover:opacity-85 hover:blur-sm translate-8 "
        style={{ backgroundImage: `url(${mountains})` }}
      >
      
      </div>
    </section>
  );
}

function Productos() {
  const items = [
    { id: 1, nombre: 'Chal', descripcion: 'Tejido a mano con lana de alpaca.', precio: 'S/ 45' },
    { id: 2, nombre: 'Bolso típico', descripcion: 'Bordado a mano.', precio: 'S/ 60' },
    { id: 3, nombre: 'Pulsera artesanal', descripcion: 'Accesorio único de hilo trenzado.', precio: 'S/ 10' },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      {items.map(item => (
        <motion.div
          key={item.id}
          className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-amber-600">{item.nombre}</h3>
          <p className="text-gray-700 mt-2">{item.descripcion}</p>
          <p className="mt-2 font-bold">{item.precio}</p>
        </motion.div>
      ))}
    </div>
  );
}

function Contacto() {
  return (
    <div className="shadow-xl max-w-md mx-auto mt-6 bg-white p-6 rounded-lg  scheme-light-dark font-mono bg-clip-text">
      <h2 className="text-2xl font-bold text-amber-600 mb-4">Contáctanos</h2>
      <p className="text-gray-700 mb-4 " >¿Tienes alguna consulta o pedido especial? Escríbenos:</p>
      <form className="space-y-4">
        <input type="text" placeholder="Tu nombre" className="w-full p-2 border rounded shadow-red-500" />
        <input type="email" placeholder="Tu correo@" className="w-full p-2  caret-red-500" />
        <input type="email" placeholder="Tu correo@" className="w-full p-2 scheme-light-dark" />
        <button class=" group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-red-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline 
        hover:underline-offset-4  origin-left hover:decoration-2 hover:text-orange-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-red-50 text-base font-bold rounded-lg  
        overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-red-500 before:rounded-full before:blur-lg  
        after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
          Enviar
        </button>

        <button class="text-white px-4 py-2 hover:bg-red-600 rounded fill-current bg-cyan-500 shadow-lg shadow-cyan-500 ...">Subscribe</button>
        

        <div class="mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] mask-b-from-20% mask-b-to-80%">

        </div>
      </form>
    </div>
  );
}

export default App;
