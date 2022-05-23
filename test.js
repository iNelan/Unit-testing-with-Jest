// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
///////////////////////////////////////////////////////////////////////
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')


    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected1 = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected1); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

////////////////////////////////////////////////////

test("One euro should be 127.9 Yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected2 = 3.5 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(expected2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


////////////////////////////////////////////////////

test("One Yen should be 0.8 Pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected3 = 3.5 * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(expected3); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})