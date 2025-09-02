import React from 'react'

const InterceptedProduct = async({params} : {params: {product: string}}) => {
    const {product} = await params;
    const prodcuts = [
        {
      id: 1,
      name: "Essence",
      price: 9.99,
      image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp"
    },
    {
        id: 2,
        name: "Essence Mascara ",
        price: 9.99,
        image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    },
    {
        id: 3,
        name: "Essence Mascara Lash Princess",
        price: 9.99,
        image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
        },
    ]
    const findProduct = prodcuts.find((p) => p.id === +product);
    
  return (
    <div>
        <h1 className='bg-blue-600 text-3xl font-bold'>InterceptedProduct</h1>
        <div className='fixed inset-0 flex items-center justify-center bg-black/80 z-50'>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
            <h1 className="text-3xl mb-[1rem]">{findProduct?.name}</h1>
            <img className="w-[20rem]" src={findProduct?.image} alt={findProduct?.name}/>
            <p className="text-2xl mt-[1rem]">${findProduct?.price}</p>
        </div>
    </div>
    </div>
  )
}

export default InterceptedProduct