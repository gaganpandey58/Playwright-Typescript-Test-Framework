import {Locator} from "playwright";
import { browserDetails } from '../hooks/GlobalData';

export default class LoginPage {

    static getLoginPageHeaderText(): Locator { return browserDetails.page.getByTestId("text-log-in-to-continue") }

    static getRegisterNewAccountLInk(): Locator { return browserDetails.page.getByTestId("link-register") }

    static getEmailEntryInputField() : Locator { return browserDetails.page.getByTestId("input-email-address"); }

    static getPasswordEntryInputField() : Locator { return browserDetails.page.getByTestId("input-password"); }

    static getLoginButton() : Locator { return browserDetails.page.getByTestId("login_form_submit"); }

    static getNextButton() : Locator { return browserDetails.page.getByTestId("btn-next"); }

    static getErrorMessageOfPasswordField(): Locator { return browserDetails.page.getByTestId("error-wrong-password") }

    static getPrivacyPolicyCheckBox(): Locator { return browserDetails.page.locator("#checkbox-agreement") }
}
