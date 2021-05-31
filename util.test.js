const puppeteer = require('puppeteer')

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


// End To End test [E2E]:
// Note: The checkAndGenerate() depends on other functions [i.e dependencies] to run
test('should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false, //to run a browser with a UI
        slowMo: 80, //slowing down the automated operation
        args: ['--window-size=1920,1080']  //to show the window size:  of the launcher and to test if certain features are working as expected
    });
    const page = await browser.newPage();
    await page.goto(
        'C://Users/oolay/Downloads/js-testing-introduction-starting-setup/index.html'
        // 'http://127.0.0.1:5500/index.html'
    );
    await page.click('input#name'); //clicking on the input element with the id of 'name'
    await page.type('input#name', 'Anna'); //Typing 'Anna' into the input element with the id of 'name'
    await page.click('input#age');  //clicking on the input element with the id of 'age'
    await page.type('input#age', '28'); //Typing 28 into the input element with the id of 'age'
    await page.click('#btnAddUser'); //clicking on the button element with the id of 'btnAddUser' in order to submit the form
    const finalText = await page.$eval('.user-item', el => el.textContent) //select the element with the className of '.user-item' and get its text-content
    expect(finalText).toBe('Anna (28 years old)')
}, 10000)