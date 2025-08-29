import { NextRequest } from 'next/server'
import {products} from './db'

// export async function GET() {
//     // return new Response('hello world')
//     return Response.json(products)
// }

export async function POST(req: Request) {
    let product = await req.json() 
    // console.log('-----', product)
    const newProduct = {...product}
    products.push(newProduct)
    return new Response(JSON.stringify(newProduct))
}  

export async function GET(request: NextRequest) {
    const searchParam = request.nextUrl.searchParams;
    const query = searchParam.get("query")
    console.log(query)
    const filterProdcut = query?products.filter((each) => each.category.toLowerCase().includes(query)) : products
    console.log(filterProdcut)
    return new Response(JSON.stringify(filterProdcut))

}