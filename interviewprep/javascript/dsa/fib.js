// const fib = (n) => {
//     let arr = [0,1]
//     for (let i = 2; i <= n; i++) { // 2<5 t 3<=5 4<=5 5<=5
//         arr.push(arr[i-1] + arr[i-2]) 
//         // arr[2-1]=1 + arr[2-2]=0  == 1+0  [0,1,1] 
//         //arr[3-1] = 2 + arr[3-2]=1 == 1+1  [0,1,1,2]
//         //arr[4-1] = 3 + arr[4-2]=2 == 2+1  [0,1,1,2,3]
//         //arr[5-1] = 4 + arr[5-2]=3 == 3+2  [0,1,1,2,3,5]
//     }
//     return arr[n]
//     // console.log(arr)
// }

const fib = (n) => (n <= 1 ? n : fib(n-1) + fib(n-2))
console.log(fib(5))

