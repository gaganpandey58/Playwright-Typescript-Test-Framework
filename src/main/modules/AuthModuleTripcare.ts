import { expect } from '@playwright/test';
import AuthPageTripcare from '../pageObjects/AuthPageTripcare';
import AssertionFailedException from '../exceptions/AssertionFailedException';
import UnknownErrorException from '../exceptions/UnknownErrorException';
import { IAuthModuleTripcare } from "./interfaces/IAuthModuleTripcare";

export abstract class AuthModuleTripcare implements IAuthModuleTripcare {
    async validateTripcareLoginScreen(): Promise<void> {
        try {
            await expect(AuthPageTripcare.getLoginPageHeaderText()).toBeVisible({timeout: 5000, visible: true})
          } catch (e) {
            throw new AssertionFailedException("Failed to validate login page", e as Error)
          }
    }
    async enterTripcareEmailAddress(email: string): Promise<void> {
        try {
            await expect(AuthPageTripcare.getEmailEntryInputField()).toBeVisible({timeout: 2000, visible: true})
            await AuthPageTripcare.getEmailEntryInputField().fill(email)
          } catch (e) {
            throw new UnknownErrorException("Failed to enter email address in login page", e as Error)
          }
    }
    async enterTripcarePassword(password: string): Promise<void> {
        try {
            await expect(AuthPageTripcare.getPasswordEntryInputField()).toBeVisible({timeout: 2000, visible: true})
            await AuthPageTripcare.getPasswordEntryInputField().fill(password)
          } catch (e) {
            throw new UnknownErrorException("Failed to enter password in login page", e as Error)
          }
    }
    async clickTripcareLoginButton(): Promise<void> {
        try {
            await expect(AuthPageTripcare.getLoginButton()).toBeVisible({timeout: 2000, visible: true})
            await AuthPageTripcare.getLoginButton().click()
          } catch (e) {
            throw new UnknownErrorException("Failed to click Login Button in login page", e as Error)
          }
    }
    async getTripcareRememberMeCheckBox(): Promise<void> {
        try {
            await expect(AuthPageTripcare.getRememberMeCheckBox()).toBeVisible({timeout: 2000, visible: true})
            await AuthPageTripcare.getRememberMeCheckBox().click()
          } catch (e) {
            throw new UnknownErrorException("Failed to accept remember me checkbox", e as Error)
          }
    }
    async validatesTripcareErrorMessageOfPasswordField(expectedText: string): Promise<void> {
        try {
            await expect(AuthPageTripcare.getErrorMessageOfPasswordField()).toBeVisible({timeout: 10000, visible: true})
            await expect(AuthPageTripcare.getErrorMessageOfPasswordField()).toHaveText(expectedText)
          } catch (e) {
            throw new AssertionFailedException("Failed to validate error message of Password field", e as Error)
          }
    }

    async validateTripcareDashboard(): Promise<void> {
      try {
        await expect(AuthPageTripcare.getDashboardHeader()).toBeVisible({timeout: 20000, visible: true})
      } catch (e) {
        throw new AssertionFailedException("Failed to validate dashboard" , e as Error)
      }
    }
}