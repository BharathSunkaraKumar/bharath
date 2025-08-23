let id:number = 5
let company: string = 'sbk'
let isPublished: boolean = false
let x: any = 'bharath'
console.log(id)

//data types = strings, number, boolean, any, object, array, tuple
//special types = void, null, undefined, never
//arrays

let ar: any[] = ['bharath', 48, true]
let ar2: number[] = [1,5,8]

//tuple
//must be in order
let person: [number, string, boolean] = [1, "bharath", false]

//tuple array
let employee: [number, string][]

employee = [
    [1, "virat"],
    [2, "shreyas iyer"],
    [3, "shubman gill"],
]

//union

let pid: string | number = 22
pid = "bharath"
console.log(pid)

// object

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "bharath"
}

type Admin = {
    name: string,
    id: number
}

const admin: Admin = {
    name: "admin",
    id: 1
}

const apple: {color: string, price: number} = {
    color: "red",
    price: 120
}

apple.color = "green"
console.log(apple.color)
console.log('hi')

//array

let cities: string[] | number = ['tirupati', 'hyderabad', 'bangalore'] // shrothand notation
cities[0]= "mangalam"

//generic type notation
let countries: Array<string | number | any> = ['india', 'uk', 45687, ["sbk"], {id: 456, name: "bharath"}] 
console.log(countries)

//tuples
let tuple1: [string, number, boolean] = ["sbk", 48, true]

// void: That function does not return anything is called void
 
const userName = (a:number, b:number) => {
    return a+b
}
console.log(userName(1, 1))

//null
let noting:null

//undefined
let unfind:undefined

//never

let dburl: boolean = false

const failedConnection = (): never => {
     throw new Error(("db connetion failed"));  
}

const dbconnection = () => {
    try {
        if(dburl){
            console.log("db connected successfully")
        }
    } catch (error) {
        failedConnection()
    }
}
// dbconnection()

//funcitons

const addingString = (a: number, b: string) => {
    return a+b
}
// console.log(addingString(1,"sbk"))

const addingString1 = (a:number, b:number):number => {
    return a+b
}
console.log(addingString1(18,6))

//optional parameters

const product = (title: string, price: number, discount?: boolean) => {
    return `this product is ${title} and price is ${price}`
}
console.log(product("redmi k20 pro", 25000, true))

//interface

interface Mobile {
    model: string,
    barnd: string,
    battery: number,
    display?: number
}
interface FoldMobile extends Mobile {
    fold_count: number
}
const redmi: Mobile = {
    model: "k20 pro",
    barnd: "redmi",
    battery: 4100
}
const iphone: Mobile = {
    model: "17 pro max",
    battery: 4500,
    barnd: "iphone",
    display: 6.5
}
const samsung_Fold: FoldMobile = {
    model: "galaxy z fold 7",
    barnd: "samsung",
    battery: 4400,
    fold_count: 1
}
console.log(samsung_Fold)

//type aliases

type datatype = string | number

interface Product {
    name: datatype,
    desc: datatype,
    price: datatype,
    discount: datatype | boolean
}

const prod: Product = {
    name: "apple",
    desc: "An apple is the round, edible fruit of an apple tree.",
    price: 50,
    discount: false
}
console.log(prod)



