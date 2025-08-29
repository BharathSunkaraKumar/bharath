import { products } from "../db"


export async function GET(_req:Request, {params}: {params: {id: string}}) {
    const {id} = await params
    console.log(id)
    const product = products.find((each: any) => each.id == +id)
    console.log(product)
    return product
        ? new Response(JSON.stringify(product))
        : new Response("product not found", {status:404})
}

export async function PATCH(req: Request, {params}: {params: {id: string}}) {
    const {id} = params;
    const productID = +id;
    const product = products.find((each) => each.id == productID);
    if(!product) {
        return new Response(JSON.stringify({error: "Product not fount"}),{
            status: 404
        })
    }
    try {
        const updateProduct = await req.json();
        const index = products.findIndex((product) => product.id == productID);
        if(!product) {
            return new Response(JSON.stringify({error: "Product not fount"}),{
                status: 404
            })
        }
        products[index] = {...product, ...updateProduct}
        return new Response(JSON.stringify(products[index]) ,{status: 200})
    } catch (error) {
        return new Response(JSON.stringify({error: "failed to parse json"}),{
            status: 400
        })
    }
}

export async function DELETE(req:Request, {params}: {params: {id: string}}) {
    const {id} = params;
    const productID = +id;
    const index = products.findIndex((each) => each.id == productID);
    if(index === -1) {
        return new Response(JSON.stringify({error: "Product not fount"}),{
            status: 404
        })
    }
    products.splice(index, 1)
    return new Response(JSON.stringify({message: "produt deleted succeessfully"}) ,{status: 200})

}