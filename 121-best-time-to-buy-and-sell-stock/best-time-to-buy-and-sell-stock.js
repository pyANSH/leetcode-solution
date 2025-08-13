/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (price) {
    if (price.length === 0) return 0
    let minPrice = price[0]
    let maxProfit = 0
    for (let i = 1; i < price.length; i++) {
        if (price[i] < minPrice) {
            minPrice = price[i]
        }
        let currentProfit = price[i] - minPrice

        if (currentProfit > maxProfit) {
            maxProfit = currentProfit
        }
    }
    return maxProfit
};