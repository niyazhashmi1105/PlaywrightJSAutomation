const {test, expect} =  require('@playwright/test')

test('Page Title test',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

    const pageTitle = page.title()
    console.log(pageTitle)
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    await page.close()


})