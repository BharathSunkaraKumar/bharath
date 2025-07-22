const rotateK = (str, k) => {
    k = k % str.length;
    // return str.slice(k) + str.slice(0, k) //left rotate
    return str.slice(-k) + str.slice(0, -k) //right rotate
}
console.log(rotateK('bharath', 2))