import React, {useEffect, useState } from "react";
import Carousel from '../blocos/carousel'

function vitrine() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data)
        setLoading(false)
    })
    .catch((error) => {
      console.error("Não foi posivel exibir os produtos", error)
      loading(false)
    })
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Carregando produtos...</p>
  }

  // fiz um filtro de vitrines só para ter exibições diferentes de produtos
  // a primeira vitrine é para produtos abaixo de R$100
  // a segunda vitrine é para categoria masculina
  // a terceira vitrine é para categoria eletronicos

  const vPromocao = produtos.filter((p) => p.price <= 100)
  const vCategMen = produtos.filter((p) => p.category === "men's clothing")
  const vCategEletron = produtos.filter((p) => p.category === "electronics")


  return (
    <div className="content">
      <div className="v-content !max-w-[1300px] !mx-auto !px-4 !sm:px-6 !lg:px-8" >
        <section className="vitrine">
          <h2 className="text-center title-vitrine !pb-1 !px-2">Ofertas da semana</h2>
          <Carousel listProd={vPromocao}/>
        </section>

        <section className="vitrine">
          <h2 className="text-center title-vitrine !pb-1 !px-2">Moda Masculina</h2>
          <Carousel listProd={vCategMen}/>
        </section>

      <section className="vitrine">
        <h2 className="text-center title-vitrine !pb-1 !px-2">Eletronicos</h2>
        <Carousel listProd={vCategEletron}/>
      </section>

      </div>
    </div>
  )
}

export default vitrine
