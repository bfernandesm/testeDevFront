import React from 'react'
import Logo from '../assets/image/icon.svg'
import { Link } from 'react-router-dom'

function footer() {
  return (
    <footer className="bg-white">
      <div className="!mx-auto !max-w-screen-xl !space-y-8 !px-4 !py-16 !sm:px-6 !lg:space-y-16 !lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className='footer-content'>
            <div className="f-logo text-teal-600">
              <img src={Logo} alt="Logo" className="!h-10 !w-auto !mr-[1rem]" />
              <span>Loja Fake</span>
            </div>

            <p className="f-descricao mt-4 max-w-xs text-gray-500">
              Loja com conteudo falso, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
              molestias.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
            <div>
              <p className="f-title font-medium text-gray-900">Categorias</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link to="/category/masculino" className="text-gray-700 transition hover:opacity-75">Masculino</Link>
                </li>

                <li>
                  <Link to="/category/feminino" className="text-gray-700 transition hover:opacity-75">Feminino</Link>
                </li>

                <li>
                  <Link to="/category/joias" className="text-gray-700 transition hover:opacity-75">Joias</Link>
                </li>

                <li>
                  <Link to="/category/eletronicos" className="text-gray-700 transition hover:opacity-75">Eletrônicos</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="f-title font-medium text-gray-900">Loja</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="/" className="text-gray-700 transition hover:opacity-75"> Sobre nós </a>
                </li>

                <li>
                  <a href="/" className="text-gray-700 transition hover:opacity-75"> Nossas lojas </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">&copy; 2025. Loja fake, ela não existe.</p>
      </div>
    </footer>
  )
}

export default footer
