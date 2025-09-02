import Link from 'next/link'
import React from 'react'

const Ecommerce = () => {
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
  return (
    <div>
        <section className='m-[4rem]'>
            <div>
                <h1 className='text-3xl mb-3'>Ecommerce</h1>
            </div>
            <section className='flex gap-3'>
                {
                    prodcuts.map((prodcut) => (
                        <div className='w-[200px] border' key={prodcut.id}>
                            <Link href={`/intercepting/ecomerce/${prodcut.id}`}>
                            <img src={prodcut.image} alt={prodcut.name}/>
                            <h2>{prodcut.name}</h2>
                            <p>{prodcut.price}</p>
                            </Link>
                        </div>
                    ))
                }
            </section>
        </section>
        <section className='border'>
            <div className='p-5'>
                <Link href={`/intercepting/ecomerce/login`}>
                    <button className='bg-black text-white px-4 py-2 rounded-sm'>login</button>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Ecommerce
