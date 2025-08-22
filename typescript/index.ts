let id:number = 5
let company: string = 'sbk'
let isPublished: boolean = false
let x: any = 'bharath'
console.log(id)

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
let countries: Array<string | number | any> = ['india', 'uk', 45687, ["sbk"], {id: 456, name: "bharath"}] //generic type notation
console.log(countries)