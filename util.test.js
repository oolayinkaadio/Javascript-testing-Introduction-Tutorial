// Node.js Import Syntax:
const {generateText} = require('./util');

// Note, Since this file has the word 'test' in its name, the jest library will
// automatically Identify it and run the test codes in it

/**
 Test syntax:
 test('specific test description', () => {
    test code to be executed
});

// Note the test description is followed by an anonymous function that contains 
the test code to be tested/executed
 */

// checking for only 1 thing in a unit test::
test('should output name and age', () => {
    const text = generateText('OlaYinKa', 50);
    expect(text).toBe('OlaYinKa (50 years old)');
});

// Checking more than 1 thing in a unit test::
test('should output name and age', () => {
    const text = generateText('Yinka', 30);
    expect(text).toBe('Yinka (30 years old)');
    const text2 = generateText('Musa', 28);
    expect(text2).toBe('Musa (28 years old)');
});

// checking for empty or data-less input in a unit test::
test('should output data-less text',() => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)')
})