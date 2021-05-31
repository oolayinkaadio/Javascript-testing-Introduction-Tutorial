// Node.js Import Syntax:
const {checkAndGenerate} = require('./util');

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


// Integration test:
// Note: The checkAndGenerate() depends on other functions [i.e dependencies] to run
test('should generate a valid text output', () => {
    const text = checkAndGenerate('Yinka', 29);
    expect(text).toBe('Yinka (29 years old)')
})