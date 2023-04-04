
before('login', async () => {
    browser.url('https://www.saucedemo.com/')
    await $('#user-name').setValue('standard_user')
    await $('#password').setValue('secret_sauce')
    await $('#login-button').click()
});

after('log out', async () => {
    await $('#react-burger-menu-btn').click()
    await $('#logout_sidebar_link').click()
});

