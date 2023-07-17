import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
       /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async clickOnBanking_Button_ClickOn_Credit_Cards() {
        //await browser.pause(5000)
        await browser.$("//*[@id=\"BendigoBankHeaderConfig-16378-re-mega-menu-desc-menu-row-menu-item-banking\"]").click();
        //await browser.pause(5000)
        await browser.$("//*[@id=\"BendigoBankHeaderConfig-16378-re-mega-menu-desc-mega-menu-row-title-1-credit-cards\"]").waitForClickable();
        await browser.$("//*[@id=\"BendigoBankHeaderConfig-16378-re-mega-menu-desc-mega-menu-row-title-1-credit-cards\"]").click();
        //await browser.pause(3000)
        await expect(browser).toHaveUrl("https://www.bendigobank.com.au/personal/credit-cards/");
        //await browser.pause(3000)
        await browser.$("//*[@id=\"Button-232952\"]").scrollIntoView();
       // await browser.$("//*[@id=\"Button-232952\"]").waitForClickable();
        
        await browser.$("//*[@id=\"Button-232952\"]").click();
        //await browser.pause(5000)
        await expect(browser).toHaveUrl("https://www.bendigobank.com.au/personal/credit-cards/check-my-eligibility/?ccproduct=bright")
        var pagetitle = await browser.getTitle();
        console.log("pagetitle========"+pagetitle);
        if(pagetitle=="Check my credit card eligibility | Bendigo Bank"){
            console.log("We are in Check my credit card eligibility | Bendigo Bank screen")
        }
        //await browser.pause(2000)
        // await browser.$("//*[@id=\"Button-237631\"]").click()
        // await browser.$("//*[@id=\"Button-237631\"]").click()
        // browser.pause(2000)
    }


    public async productDetails(credit_limit:string) {
        var pagetitle = await browser.getTitle();
        console.log("pagetitle========"+pagetitle);
        if(pagetitle=="Product Details | Bendigo Bank Apply Online Credit Card"){
            console.log("We are in Product Details | Bendigo Bank screen")
        }

        await browser.$("//*[@id=\"creditLimitAmountInput\"]").click()
        await browser.$("//*[@id=\"creditLimitAmountInput\"]").setValue(credit_limit)
        await browser.$("//*[@name=\"creditCardUsage\"][contains(text(),'General purpose')]").click()
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").click()
       // await browser.pause(6000)
    }

    public async applicationDetails() {
        var pagetitle = await browser.getTitle();
        console.log("pagetitle========"+pagetitle);
        if(pagetitle=="Application Details | Bendigo Bank Apply Online Credit Card"){
            console.log("We are in Application Details | Bendigo Bank screen")
        }
        const drp = await browser.$("//*[@name=\"maritalStatus\"]")
        drp.selectByIndex(1);
        //await browser.pause(1000)
        await browser.$("//*[@name=\"isPrimaryApplicantExistingCustomer\"][contains(text(),'No')]").click();
        //await browser.pause(1000)
        await browser.$("//*[@name=\"hasPromoCode\"][@ng-model=\"model.hasPromoCode\"][2]").click();
        //await browser.pause(1000)
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").scrollIntoView()
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").click()

        //await browser.pause(6000)
    }

    public async time_Elegibility() {
        var pagetitle = await browser.getTitle();
        console.log("pagetitle========"+pagetitle);
        if(pagetitle=="Time & Eligibility | Bendigo Bank Apply Online Credit Card"){
            console.log("We are in Time & Eligibility Details | Bendigo Bank screen")
        }
        await browser.$("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]").scrollIntoView();
       // await browser.$("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]").scrollIntoView();
        await browser.$("//*[@name=\"hasApplicantConformToEligibilityCriteria\"][contains(text(),'Yes')]").click()
        //await browser.pause(2000)
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").scrollIntoView();
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").waitForClickable()
        //browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").waitUntil
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").click();
        //await browser.pause(2000)
    }
    public async branch_Details() {
        var pagetitle = await browser.getTitle();
        console.log("pagetitle========"+pagetitle);
        if(pagetitle=="Branch Details | Bendigo Bank Apply Online Credit Card"){
            console.log("We are in Branch Details | Bendigo Bank screen")
        }
        //await browser.pause(6000)
       await browser.$("//*[@placeholder=\"Enter a location\"]").setValue("Melbourne")
        //await browser.pause(6000)
        await browser.$("//*[@id=\"branchSearch\"]/span").click();
        //await browser.pause(6000)
        await browser.$("//*[@ng-click=\"selectBranch(branch)\"][contains(text(),'Clifton Hill')]").click()
        //await browser.pause(6000)
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").scrollIntoView()
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").click()
        //await browser.pause(6000)
    }

    public async financial_Details(amount:string) {
        var pagetitle = await browser.getTitle();
        console.log("pagetitle========"+pagetitle);
        if(pagetitle=="Income Details | Bendigo Bank Apply Online Credit Card"){
            console.log("We are in Income Details | Bendigo Bank screen")
        }
        await browser.$("//*[@name=\"employmentStatus\"]").waitForClickable()
        const drp_emp_status = await browser.$("//*[@name=\"employmentStatus\"]")
        drp_emp_status.selectByIndex(5);
        //await browser.pause(6000)
        //await browser.$("//*[@name=\"occupationSearch\"]").waitForClickable()
        //await browser.$("//*[@name=\"occupationSearch\"]").addValue("Social Professionals (general)");
        await browser.$("//*[@name=\"occupationSearch\"]").scrollIntoView();
        await browser.$("//*[@name=\"occupationSearch\"]").setValue("Professional");
        await browser.$("//*[@id=\"typeahead-830-1994-option-1\"]/a/strong").click();
        //await browser.pause(6000)
        await browser.$("//*[@name=\"incomeAmount\"]").setValue(amount)
        //await browser.pause(6000)
        const drp_incomeFrequency = await browser.$("//*[@name=\"incomeFrequency\"]")
        drp_incomeFrequency.selectByIndex(4);
        //await browser.pause(6000)
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").scrollIntoView()
        await browser.$("//*[@name=\"contBtn\"][contains(text(),'Continue')]").click()
        //await browser.pause(6000)
    }


    public async expenses(expenses_amount:string) {
        var pagetitle = await browser.getTitle();
        console.log("pagetitle========"+pagetitle);
        if(pagetitle=="Commitments | Bendigo Bank Apply Online Credit Card"){
            console.log("We are in Income Details | Bendigo Bank screen")
        }
        await browser.$("//*[@name=\"expenseAmount\"]").setValue(expenses_amount)
        //await browser.pause(6000)
        const drp_expense_frequency = await browser.$("//*[@ng-model=\"expense.frequency\"]")
        drp_expense_frequency.selectByIndex(3);
        //await browser.pause(6000)
    }

    public async cancel_application_yes() {
        await browser.$("//*[@name=\"cancelBtn\"][contains(text(),'Cancel')]").click()
        //await browser.pause(6000)
        await browser.$("//*[@type=\"button\"][contains(text(),'Yes')]").click();
        //await browser.pause(6000)
                   //var appNumber = await browser.$("//*[@id=\"appNumber\"]).getText();
               //  console.log("Your application" + appNumber + "has been cancelled");  
    }
    /**
     * 
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open();
    }
}

export default new LoginPage();
