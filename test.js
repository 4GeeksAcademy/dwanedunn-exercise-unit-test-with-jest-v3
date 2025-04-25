// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// Second test
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


// Third Test - USD => JPY (Dollar To Yen)
test("One Dollar should be 142.535 Yen", function(){
    const { fromDollarToYen} = require('./app.js');

    // Use the function
    const dollars = fromDollarToYen(5);

    // IF One dollar is 142.535 Yen, then 5 dollars should be 5 * 142.535 = 712.675 Yen.
    const expected = 5 * 142.535;

    // Comparison for the unit test.
    expect(fromDollarToYen(5)).toBe(712.675); // 1 dollar usd = 142.535 Jpy.
})


// Fourth Test - JPY => GBP (Yen to Pound)
test("One Yen should be 0.0059 GBP", function(){
    const {fromYenToPound} = require('./app.js');

    //Use the function
    const Pounds = fromYenToPound(1000);

    //If one Yen is 0.0053 Gbp, then 1000 yen should be 1 * 0.0053 = 0.0053 Gbp
    const expected = 5 * 0.005259; // 0.0265
    
    // comparison for unit test.
    expect(fromYenToPound(5)).toBe(0.026295); // 1 Jpy = 0.005259 Gbp.
})
