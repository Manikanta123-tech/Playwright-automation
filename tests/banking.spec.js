const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { BankingPage } = require('../pages/BankingPage');

const USERNAME = 'testuser2026a';
const PASSWORD = 'Test@123';


async function login(page) {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(USERNAME, PASSWORD);

    await expect(
        page.getByRole('heading', { name: 'Accounts Overview' })
    ).toBeVisible();
}


test.describe('ParaBank - Banking Tests', () => {


    // TC07
    test('TC07 - Verify Accounts Overview', async ({ page }) => {

        const bankingPage = new BankingPage(page);

        await login(page);

        await bankingPage.openAccountsOverview();

        await expect(page).toHaveURL(
            /overview\.htm/
        );

        await expect(
            page.getByRole('heading', { name: 'Accounts Overview' })
        ).toBeVisible();
    });


    // TC08
    test('TC08 - Verify Open New Account Page', async ({ page }) => {

        const bankingPage = new BankingPage(page);

        await login(page);

        await bankingPage.openNewAccountPage();

        await expect(page).toHaveURL(
            /openaccount\.htm/
        );

        await expect(
            page.getByRole('heading', { name: 'Open New Account' })
        ).toBeVisible();
    });


    // TC09
    test('TC09 - Verify Transfer Funds Page', async ({ page }) => {

        const bankingPage = new BankingPage(page);

        await login(page);

        await bankingPage.openTransferFunds();

        await expect(page).toHaveURL(
            /transfer\.htm/
        );

        await expect(
            page.getByRole('heading', { name: 'Transfer Funds' })
        ).toBeVisible();
    });


    // TC10
    test('TC10 - Verify Bill Pay Page', async ({ page }) => {

        const bankingPage = new BankingPage(page);

        await login(page);

        await bankingPage.openBillPay();

        await expect(page).toHaveURL(
            /billpay\.htm/
        );

        await expect(
            page.getByRole('heading', { name: /Bill Payment/i })
        ).toBeVisible();

    });


    // TC11
    test('TC11 - Verify Find Transactions Page', async ({ page }) => {

        const bankingPage = new BankingPage(page);

        await login(page);

        await bankingPage.openFindTransactions();

        await expect(page).toHaveURL(
            /findtrans\.htm/
        );

        await expect(
            page.getByRole('heading', { name: /Find Transactions/i })
        ).toBeVisible();
    });


    // TC12
    test('TC12 - Verify Update Contact Information Page', async ({ page }) => {

        const bankingPage = new BankingPage(page);

        await login(page);

        await bankingPage.openUpdateContact();

        await expect(page).toHaveURL(
            /updateprofile\.htm/
        );


        await expect(
            page.getByRole('heading', { name: 'Update Profile' })
        ).toBeVisible();
    });


    // TC13
    test('TC13 - Verify Request Loan Page', async ({ page }) => {

        const bankingPage = new BankingPage(page);

        await login(page);

        await bankingPage.openRequestLoan();

        await expect(page).toHaveURL(
            /requestloan\.htm/
        );


        await expect(
            page.getByText('Apply for a Loan', { exact: true })
        ).toBeVisible();
    });


    // TC14
    test('TC14 - Verify Customer Care Page', async ({ page }) => {

        const bankingPage = new BankingPage(page);


        await page.goto('/parabank/contact.htm');

        await expect(page).toHaveURL(
            /contact\.htm/
        );

        await expect(
            page.locator('h1.title')
        ).toHaveText('Customer Care');

        await expect(
            page.locator('input[name="name"]')
        ).toBeVisible();

        await expect(
            page.locator('input[name="email"]')
        ).toBeVisible();

        await expect(
            page.locator('input[name="phone"]')
        ).toBeVisible();
    });


    // TC15
    test('TC15 - Verify About Us Page', async ({ page }) => {

        const bankingPage = new BankingPage(page);

        await page.goto('/parabank/about.htm');

        await expect(page).toHaveURL(
            /about\.htm/
        );

        await expect(
            page.getByText(/ParaBank is a demo site/i)
        ).toBeVisible();
    });

});

