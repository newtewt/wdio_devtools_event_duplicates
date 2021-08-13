const HomePage = require('../pageobjects/home.page');

describe('Github Page', () => {
    it('Should see the search button', async () => {
        await HomePage.searchBox.waitForDisplayed();
    });
});


