class BankingPage {

    constructor(page) {
        this.page = page;

        this.accountsOverview = page.getByRole('link', { name: 'Accounts Overview' })
        this.openNewAccount = page.getByText('Open New Account');
        this.transferFunds = page.getByText('Transfer Funds');
        this.billPay = page.getByText('Bill Pay');
        this.findTransactions = page.getByText('Find Transactions');
        this.updateContact = page.getByRole('link', { name: 'Update Contact Info' })
        this.requestLoan = page.getByText('Request Loan');
        this.logOut = page.getByText('Log Out');
        this.contactUs = page.getByText('Contact Us');
        this.aboutUs = page.getByText('About Us');
    }


    async openAccountsOverview() {
        await this.accountsOverview.click();
    }

    async openNewAccountPage() {
        await this.openNewAccount.click();
    }

    async openTransferFunds() {
        await this.transferFunds.click();
    }

    async openBillPay() {
        await this.billPay.click();
    }

    async openFindTransactions() {
        await this.findTransactions.click();
    }

    async openUpdateContact() {
        await this.updateContact.click();
    }

    async openRequestLoan() {
        await this.requestLoan.click();
    }

    async logout() {
        await this.logOut.click();
    }

    async openContactUs() {
        await this.contactUs.click();
    }

    async openAboutUs() {
        await this.aboutUs.click();
    }
}

module.exports = { BankingPage };
