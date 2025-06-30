var maxProfit = function(prices) {
    let minStockPrice = prices[0] || 0;  // 
    let profit = 0; // 0
    for(var i=1; i<prices.length; i++) { //1<6 t 2<6 t 3<6 t 4<6 t 5<6 t
        if(prices[i] < minStockPrice) { // 1 < 7 t  5 < 1  f 3 < 1 f  6<7 f 4<7 f
            minStockPrice = prices[i] // 1 5 3 6
        }
        profit = Math.max(profit, prices[i]-minStockPrice) // 0,1-1 => 0 | 0,5-1 => 4 | 4,3-1 => 4 | 4,6-1=5 => 5 | 5,4-1=5 => 5
        // console.log('minp', minStockPrice)
        // console.log('profit', profit)
    }
    return profit
};
console.log(maxProfit([7,1,5,3,6,4]))

// console.log(Math.max(0,1-1))