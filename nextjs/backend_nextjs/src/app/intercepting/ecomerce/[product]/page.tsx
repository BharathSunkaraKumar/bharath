
const Product = async({params}: {params: {product: string}}) => {
    const {product} = await params
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
    // console.log(findProduct)
  return (
    <div className="m-[4rem]">
        <h1 className="text-3xl mb-[1rem]">{findProduct?.name}</h1>
        <img className="w-[20rem]" src={findProduct?.image} alt={findProduct?.name}/>
        <p className="text-2xl mt-[1rem]">${findProduct?.price}</p>
    </div>
  )
}

export default Product