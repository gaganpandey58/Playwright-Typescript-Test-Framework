import { expect } from '@playwright/test';
import LoginPage from '../pageObjects/LoginPage';
import AssertionFailedException from '../exceptions/AssertionFailedException';
import UnknownErrorException from '../exceptions/UnknownErrorException';
import { IAuthenticationModule } from './interfaces/IAuthenticationModule';

export abstract class AuthenticationModule implements IAuthenticationModule{

  async validateLoginScreen() : Promise<void> {
    try {
      await expect(LoginPage.getLoginPageHeaderText()).toBeVisible({timeout: 5000, visible: true})
    } catch (e) {
      throw new AssertionFailedException("Failed to validate login page", e as Error)
    }
  }

  async navigateToRegisterAccount() : Promise<void> {
    try {
      await expect(LoginPage.getRegisterNewAccountLInk()).toBeVisible({timeout: 5000, visible: true})
      await LoginPage.getRegisterNewAccountLInk().click()
    } catch (e) {
      throw new UnknownErrorException("Failed to validate login page", e as Error)
    }
  }

  async enterEmailAddress(email: string) : Promise<void> {
    try {
      await expect(LoginPage.getEmailEntryInputField()).toBeVisible({timeout: 2000, visible: true})
      await LoginPage.getEmailEntryInputField().fill(email)
    } catch (e) {
      throw new UnknownErrorException("Failed to enter email address in login page", e as Error)
    }
  }

  async enterPassword(password:string) : Promise<void> {
    try {
      await expect(LoginPage.getPasswordEntryInputField()).toBeVisible({timeout: 2000, visible: true})
      await LoginPage.getPasswordEntryInputField().fill(password)
    } catch (e) {
      throw new UnknownErrorException("Failed to enter password in login page", e as Error)
    }
  }

  async clickLoginButton() : Promise<void> {
    try {
      await expect(LoginPage.getLoginButton()).toBeVisible({timeout: 2000, visible: true})
      await LoginPage.getLoginButton().click()
    } catch (e) {
      throw new UnknownErrorException("Failed to click Login Button in login page", e as Error)
    }
  }

  async clickNextButton() : Promise<void> {
    try {
      await expect(LoginPage.getNextButton()).toBeVisible({timeout: 2000, visible: true})
      await LoginPage.getNextButton().click()
    } catch (e) {
      throw new UnknownErrorException("Failed to click Next Button in login page", e as Error)
    }
  }

  async clickPrivacyPolicyCheckBox() : Promise<void> {
    try {
      await expect(LoginPage.getPrivacyPolicyCheckBox()).toBeVisible({timeout: 2000, visible: true})
      await LoginPage.getPrivacyPolicyCheckBox().click()
    } catch (e) {
      throw new UnknownErrorException("Failed to accept privacy policy", e as Error)
    }
  }

  async validatesErrorMessageOfPasswordField(expectedText: string): Promise<void> {
    try {
      await expect(LoginPage.getErrorMessageOfPasswordField()).toBeVisible({timeout: 10000, visible: true})
      await expect(LoginPage.getErrorMessageOfPasswordField()).toHaveText(expectedText)
    } catch (e) {
      throw new AssertionFailedException("Failed to validate error message of Password field", e as Error)
    }
  }
}