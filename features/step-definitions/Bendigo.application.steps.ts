import { Given, When, Then } from '@wdio/cucumber-framework';
import BendigoApplcaiton from '../pageobjects/Bendigo.applcaiton';
import loginPage from '../pageobjects/Bendigo.applcaiton';

import LoginPage from '../pageobjects/Bendigo.applcaiton';

const pages = {
    login: LoginPage
}

/*
            The below step will call first and open the browser and maximise the window 
    */

Given(/^Launch the Bendigo Bank application URL/, async () => {
    loginPage.open()
    await browser.maximizeWindow()
    //await browser.pause(6000)
});

When(/^After Launch I can see the Bendigo Bank URL Launched/, async () => {
    //  await LoginPage.login()
});

Then(/^Submit the form with all details/, async () => {

    await loginPage.clickOnBanking_Button_ClickOn_Credit_Cards();    


    /*
            The below code will launch the child window and do operations on that
    */

   await browser.url('https://www.bendigobank.com.au/personal/credit-cards/check-my-eligibility/?ccproduct=bright')
    // get the Session id of the Parent
    var parentGUID = await browser.getWindowHandle();
    // click the button to open new window
    await browser.$("//*[@id=\"Button-237631\"]").click()

    //await browser.pause(2000);
    // get the All the session id of the browsers
    var allGUID = await browser.getWindowHandles();
    // pint the title of th epage
    console.log("Page title before Switching : " + await browser.getTitle());
    console.log("Total Windows : " + (allGUID).length);
    // iterate the values in the set
    for (var i = 0; i < (allGUID).length; i++) {
        // one enter into if block if the GUID is not equal to parent window's GUID
        if (allGUID[i] != parentGUID) {
            // switch to the guid
            await browser.switchToWindow(allGUID[i]);
            //await browser.pause(10000);
            // break the loop
            const Text = browser.$("//*[@id=\"loanDetailsStep\"]/div/div[1]/a/div/div/div/div/h2").getText();

            // expect(Text).toEqual("Getting Started"); 
            // console.log("Text Displayed-------------------"+Text);
            //break;

/*
            The below methods will call from loginPage one by one.
    */

            await loginPage.productDetails("10000");
            await loginPage.applicationDetails();
            await loginPage.time_Elegibility();
            await loginPage.branch_Details();
            await loginPage.financial_Details("20000");
            await loginPage.expenses("6000");
            await loginPage.cancel_application_yes();

        }
               }
         // switch back to the parent window
		//await browser.switchToWindow(parentGUID);
		// print the title
		console.log("Page title after switching back to Parent: " + await browser.getTitle());
     
});

