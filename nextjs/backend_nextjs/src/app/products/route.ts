import {products} from './db'

export async function GET() {
    // return new Response('hello world')
    return Response.json(products)
}

export async function POST(req: Request) {
    let product = await req.json()
    // console.log('-----', product)
    const newProduct = {...product}
    products.push(newProduct)
    return new Response(JSON.stringify(newProduct))
}  