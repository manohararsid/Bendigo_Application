/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    static waitForNavigation(): any {
        throw new Error('Method not implemented.');
    }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    * The below Url will launch when we call open method
    */
    public open () {
        browser.url(`https://www.bendigobank.com.au/`)
    }
}
