import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/image/icon.svg'

function header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur bg-white/70 border-b border-gray-200 z-50">
      <div className="max-w-screen-xl !mx-auto !px-4 py-4 flex !items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="sr-only">Home</span>
          <img src={Logo} alt="Logo" className="!h-10 !w-auto !mr-[1rem]" />
          <span>Loja Fake</span>
        </a>

        <div className="flex h-16 items-center justify-between">

          <div className="hidden md:block">
            <nav aria-label="Menu principal">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link to="/ofertas" className="text-gray-700 hover:text-blue-600 transition">Ofertas</Link>
                </li>
                <li>
                  <Link to="/category/masculino" className="text-gray-700 hover:text-blue-600 transition">Masculino</Link>
                </li>
                <li>
                  <Link to="/category/feminino" className="text-gray-700 hover:text-blue-600 transition">Feminino</Link>
                </li>
                <li>
                  <Link to="/category/joias" className="text-gray-700 hover:text-blue-600 transition">Joias</Link>
                </li>
                <li>
                  <Link to="/category/eletronicos" className="text-gray-700 hover:text-blue-600 transition">Eletrônicos</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="block md:hidden">
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="rounded bg-gray-100 p-2 text-gray-600 hover:text-gray-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuAberto ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuAberto && (
        <div
          className="!fixed !inset-0 !z-40 !bg-black/60 !flex"
          onClick={() => setMenuAberto(false)}
        >
          <div
            className="!bg-white !w-3/4 !sm:w-1/2 !h-screen !p-6 !transition-transform !duration-300 !ease-in-out !translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Links mobile */}
            <nav className="flex flex-col gap-5 text-lg font-medium">
              <Link to="/ofertas" onClick={() => setMenuAberto(false)}>Ofertas</Link>
              <Link to="/category/masculino" onClick={() => setMenuAberto(false)}>Masculino</Link>
              <Link to="/category/feminino" onClick={() => setMenuAberto(false)}>Feminino</Link>
              <Link to="/category/joias" onClick={() => setMenuAberto(false)}>Joias</Link>
              <Link to="/category/eletronicos" onClick={() => setMenuAberto(false)}>Eletrônicos</Link>
            </nav>
          </div>
        </div>
      )}
      </div>
    </header>
  )
}

export default header
