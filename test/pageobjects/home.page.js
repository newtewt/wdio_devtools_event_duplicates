const Page = require('./page');
class HomePage extends Page {
    get searchBox () { return $('.form-control .input-sm') }
}

module.exports = new HomePage();
