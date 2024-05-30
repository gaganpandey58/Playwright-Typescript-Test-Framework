import { Given} from '@cucumber/cucumber';
import { getDataValue, platform, saveDataValue } from '../hooks/GlobalData';
import { generateEmail } from '../helpers/RandomDataGenerator';

Given('user validates login page', async function () {
  await platform.validateLoginScreen()
})

Given('user navigates to registration page', async function () {
  await platform.navigateToRegisterAccount()
})

Given('user enters {string} on email entry field', async function (email: string) {
  await platform.enterEmailAddress(getDataValue(email))
})

Given('user enters {string} on password entry field', async function (password: string) {
  await platform.enterPassword(getDataValue(password))
})

Given('user clicks on login button', async function () {
  await platform.clickLoginButton()
})

Given('user validates error message of password field with {string}', async function (expectedText: string) {
  await platform.validatesErrorMessageOfPasswordField(getDataValue(expectedText))
})

Given('user signs up with {string} and {string}', async function (email: string, password: string) {
  await platform.enterEmailAddress(saveDataValue(email, generateEmail()))
  await platform.enterPassword(getDataValue(password))
  await platform.clickPrivacyPolicyCheckBox()
  await platform.clickNextButton()
})

