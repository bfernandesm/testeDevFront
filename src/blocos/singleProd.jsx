import React from 'react'

function singleProd({produtoS}) {
  return (
    <div className="product-vt !bg-white !rounded-xl !shadow !hover:shadow-lg !p-4 !flex !flex-col !h-full">
      <img src={produtoS.image} alt={produtoS.title} loading="lazy" className="image-vt !h-40 !w-full !object-contain !mb-4" />
      <h2 className="title-vt text-lg font-semibold line-clamp-2">{produtoS.title}</h2>
      <p className="text-vt text-sm text-gray-500 mt-1 line-clamp-2">{produtoS.description}</p>
      <div className="buy-vt mt-3 flex justify-between items-center">
        <span className="price-vt text-xl font-bold text-blue-600">
          {produtoS.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
        <button className="btn-buy-vt bg-blue-500 text-white px-3 py-1 !rounded !hover:opacity-80 !transition">
          Comprar
        </button>
      </div>
    </div>
  )
}

export default singleProd
