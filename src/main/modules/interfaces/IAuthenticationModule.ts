export interface IAuthenticationModule {

  navigateToRegisterAccount(): Promise<void>

  validateLoginScreen(): Promise<void>

  enterEmailAddress(email: string): Promise<void>

  enterPassword(password: string): Promise<void>

  clickLoginButton(): Promise<void>

  clickNextButton(): Promise<void>

  clickPrivacyPolicyCheckBox(): Promise<void>

  validatesErrorMessageOfPasswordField(expectedText: string): Promise<void>

}