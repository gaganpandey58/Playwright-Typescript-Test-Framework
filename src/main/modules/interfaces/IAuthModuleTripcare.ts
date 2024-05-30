export interface IAuthModuleTripcare {
  
    validateTripcareLoginScreen(): Promise<void>
  
    enterTripcareEmailAddress(email: string): Promise<void>
  
    enterTripcarePassword(password: string): Promise<void>
  
    clickTripcareLoginButton(): Promise<void>
    
    getTripcareRememberMeCheckBox(): Promise<void>
  
    validatesTripcareErrorMessageOfPasswordField(expectedText: string): Promise<void>

  }