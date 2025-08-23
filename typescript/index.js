var id = 5;
var company = 'sbk';
var isPublished = false;
var x = 'bharath';
console.log(id);
//data types = strings, number, boolean, any, object, array, tuple
//special types = void, null, undefined, never
//arrays
var ar = ['bharath', 48, true];
var ar2 = [1, 5, 8];
//tuple
//must be in order
var person = [1, "bharath", false];
//tuple array
var employee;
employee = [
    [1, "virat"],
    [2, "shreyas iyer"],
    [3, "shubman gill"],
];
//union
var pid = 22;
pid = "bharath";
console.log(pid);
var user = {
    id: 1,
    name: "bharath"
};
var admin = {
    name: "admin",
    id: 1
};
var apple = {
    color: "red",
    price: 120
};
apple.color = "green";
console.log(apple.color);
console.log('hi');
//array
var cities = ['tirupati', 'hyderabad', 'bangalore']; // shrothand notation
cities[0] = "mangalam";
//generic type notation
var countries = ['india', 'uk', 45687, ["sbk"], { id: 456, name: "bharath" }];
console.log(countries);
//tuples
var tuple1 = ["sbk", 48, true];
// void: That function does not return anything is called void
var userName = function (a, b) {
    return a + b;
};
console.log(userName(1, 1));
//null
var noting;
//undefined
var unfind;
//never
var dburl = false;
var failedConnection = function () {
    throw new Error(("db connetion failed"));
};
var dbconnection = function () {
    try {
        if (dburl) {
            console.log("db connected successfully");
        }
    }
    catch (error) {
        failedConnection();
    }
};
// dbconnection()
//funcitons
var addingString = function (a, b) {
    return a + b;
};
// console.log(addingString(1,"sbk"))
var addingString1 = function (a, b) {
    return a + b;
};
console.log(addingString1(18, 6));
//optional parameters
var product = function (title, price, discount) {
    return "this product is ".concat(title, " and price is ").concat(price);
};
console.log(product("redmi k20 pro", 25000, true));
var redmi = {
    model: "k20 pro",
    barnd: "redmi",
    battery: 4100
};
var iphone = {
    model: "17 pro max",
    battery: 4500,
    barnd: "iphone",
    display: 6.5
};
var samsung_Fold = {
    model: "galaxy z fold 7",
    barnd: "samsung",
    battery: 4400,
    fold_count: 1
};
console.log(samsung_Fold);
var prod = {
    name: "apple",
    desc: "An apple is the round, edible fruit of an apple tree.",
    price: 50,
    discount: false
};
console.log(prod);
