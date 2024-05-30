import {Locator} from "playwright";
import { browserDetails } from '../hooks/GlobalData';

export default class DashboardPage {

    static getDashboardSummaryTile(): Locator { return browserDetails.page.getByTestId("home-summary-tile") }

    static getProfileCollectionScreen(): Locator { return browserDetails.page.getByTestId("text-profile") }

}