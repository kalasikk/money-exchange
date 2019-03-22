// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    coins=[50,25,10,5,1];
    such={
        50:"H",
        25:"Q",
        10:"D",
        5:"N",
        1:"P"
    };
    var y;
    var a={};
    if(currency<=0){
        return a;
    }
    else if(currency>10000){
        a.error="You are rich, my friend! We don't have so much coins for exchange";
        return a;
    }
    else{
    for (let i = 0; i < coins.length; i++) {
        y=Math.floor(currency/coins[i])
        if(y) {
            a[such[coins[i]]]=y;
            currency=currency%coins[i];
        }
        
    }
}
return a;
}
