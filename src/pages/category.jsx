import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProdItem from '../blocos/singleProd'
import Bcategoria from '../assets/image/categoria.jpg'

const categorias = {
  'masculino': "men's clothing",
  'feminino': "women's clothing",
  'joias': 'jewelery',
  'eletronicos': 'electronics',
}

function category() {

  const { nome } = useParams()
  const categoriaApi = categorias[nome]
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)


  console.log('ver nome', categoriaApi)
  useEffect(() => {
    if (!categoriaApi) return

    fetch(`https://fakestoreapi.com/products/category/${categoriaApi}`)
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data)
        setLoading(false)
      })
      .catch((err) => console.error('Erro ao carregar categoria:', err))
  }, [categoriaApi])

  if (!categoriaApi) {
    return <p className="text-center mt-10 text-red-500">Categoria inválida.</p>
  }

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Carregando produtos...</p>
  }


  return (
    <div>
      <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <img src={Bcategoria} alt="Banner topo" className="!w-full !h-full !object-cover"/>
      </div>
      <div className="category !max-w-[1300px] !mx-auto !px-4 !py-10">
      
      <h1 className="c-title text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">Categoria: {nome}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtos.map((produto) => (
            <ProdItem key={produto.id} produtoS={produto} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default category
