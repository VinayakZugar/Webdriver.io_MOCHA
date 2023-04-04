const loginPage = require('../pageobjects/login');
describe('LoginTest', async () => {
  beforeEach(async () => {
    browser.url('https://www.saucedemo.com/')
  });
  it('TC_01_Verifying_Page', async () => {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
  });
  it('TC_02_Login_with_Valid_Credentails', async () => {
    await loginPage.usernamevalue('standard_user')
    await loginPage.passwordValue('secret_sauce')
    await loginPage.btn()
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  });
  it('TC_03_Login_with_InValid_Credentails', async () => {
    await loginPage.usernamevalue('7845')
    await loginPage.passwordValue('#4545')
    await loginPage.btn()
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
  });
  it('TC_04_Login_with_Empty_Credentails', async () => {
    await loginPage.usernamevalue('')
    await loginPage.passwordValue('')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
  });
  it('TC_05_Login_with_UsernameOnly', async () => {
    await loginPage.usernamevalue('7845')
    await loginPage.btn()
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
  });
  it('TC_06_Login_with_PasswordOnly', async () => {
    await loginPage.passwordValue('#4545')
    await loginPage.btn()
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
  });

});