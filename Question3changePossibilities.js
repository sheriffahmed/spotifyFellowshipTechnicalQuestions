// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found 
// out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given an amount of money and an array of coin denominations, computes the number 
// of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 
// 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢


function changePossibilities(amount, denominations) {
    // in cases where the amount or denominations are falsy values
    if(!amount || denominations.length < 1) return 'Please designate an amount with the denominations to be checked.'
    
    let possibilities = []
    for (let i = 1; i <= amount; i++) {
        possibilities[i] = 0;
    }
    // if there is no remainder left, 
    possibilities[0] = 1;

    denominations.forEach((coin) => {
        // checks to see how many integers that the denominations can make up in given amount
        for (let int = coin; int <= amount; int++) {    
            let remainder = int - coin;

            // if the remainder is a integer that can be brought to 0, the remainder's possibilities gets
            // added to possibilities[int]
            possibilities[int] += possibilities[remainder];
        }
    })
    return possibilities[amount]
}

changePossibilities(4, [1, 2, 3])
