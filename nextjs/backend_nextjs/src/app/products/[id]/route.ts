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