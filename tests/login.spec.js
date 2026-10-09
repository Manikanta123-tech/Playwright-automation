const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const USERNAME = 'testuser2026a';
const PASSWORD = 'Test@123';


test.describe('ParaBank - Login Tests', () => {

    // TC01
    test('TC01 - Verify Login Page', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await expect(page).toHaveURL(
            /parabank\.parasoft\.com\/parabank\/index\.htm/
        );

        await expect(loginPage.username).toBeVisible();
        await expect(loginPage.password).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();
    });


    // TC02
    test('TC02 - Verify Invalid Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            'wronguser12345',
            'wrongpassword12345'
        );

        await expect(
            page.getByText(/could not be verified|invalid/i)
        ).toBeVisible();
    });


    // TC03
    test('TC03 - Verify Successful Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(USERNAME, PASSWORD);

        await expect(page).toHaveURL(
            /overview\.htm/
        );

        await expect(
            page.getByRole('heading',{name:'Accounts Overview'})
        ).toBeVisible();
    });


    // TC04
    test('TC04 - Verify Logout', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(USERNAME, PASSWORD);

        await page.getByText('Log Out').click();

        await expect(loginPage.username).toBeVisible();
        await expect(loginPage.password).toBeVisible();
    });


    // TC05
    test('TC05 - Verify Forgot Login Information Page', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.forgotLoginLink.click();

        await expect(page).toHaveURL(
            /lookup\.htm/
        );
    });


    // TC06
    test('TC06 - Verify Register Page', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.registerLink.click();

        await expect(page).toHaveURL(
            /register\.htm/
        );
    });


    // // TC07
    // test('TC07 - Verify Login Form Controls', async ({ page }) => {

    //     const loginPage = new LoginPage(page);

    //     await loginPage.open();

    //     await expect(loginPage.username)
    //         .toBeVisible()

    //          await expect(loginPage.username)
    //         .toHaveAttribute('name', 'username')
          
    //            await expect(loginPage.username)
    //         .toHaveAttribute('type', 'text')

    //           await expect(loginPage.password)
    //         .toBeVisible()

    //          await expect(loginPage.password)
    //         .toHaveAttribute('name', 'password')
          
    //            await expect(loginPage.password)
    //         .toHaveAttribute('type', 'password')
            

    //     await expect(loginPage.loginButton)
    //         .toBeVisible()
    //         .toHaveAttribute('type', 'submit')
    //         .toHaveAttribute('value', 'Log In');

    //     await expect(loginPage.registerLink)
    //         .toBeVisible()
    //         .toHaveText('Register');

    //     await expect(loginPage.forgotLoginLink)
    //         .toBeVisible()
    //         .toHaveText('Forgot login info?');
    // });
});