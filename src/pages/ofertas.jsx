import React, {useEffect, useState } from "react";
import ProdItem from '../blocos/singleProd'
import Bcategoria from '../assets/image/categoria.jpg'

function ofertas() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data)
    })
    .catch((error) => {
      console.error("Não foi posivel exibir os produtos", error)
    })
  }, []);

  return (

    <div>
      <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <img src={Bcategoria} alt="Banner topo" className="!w-full !h-full !object-cover"/>
      </div>
      <div className="category !max-w-[1300px] !mx-auto !px-4 !py-10">
      
      <h1 className="c-title text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">Ofertas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtos.map((produto) => (
            <ProdItem key={produto.id} produtoS={produto} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ofertas
