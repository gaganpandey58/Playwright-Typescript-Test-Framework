import { Given, Then} from '@cucumber/cucumber';
import { getDataValue, platform } from '../hooks/GlobalData';

Given('tripcare user validates login page', async function () {
  await platform.validateTripcareLoginScreen();
})

Given('tripcare user enters {string} on email entry field', async function (email: string) {
  await platform.enterTripcareEmailAddress(getDataValue(email))
})

Given('tripcare user enters {string} on password entry field', async function (password: string) {
  await platform.enterTripcarePassword(getDataValue(password))
})

Given('tripcare user clicks on login button', async function () {
  await platform.clickTripcareLoginButton()
})

Given('tripcare user validates error message of password field with {string}', async function (expectedText: string) {
  await platform.validatesTripcareErrorMessageOfPasswordField(getDataValue(expectedText))
})

Then('tripcare user validates dashboard', async function () {
    await platform.validateTripcareDashboard()
});