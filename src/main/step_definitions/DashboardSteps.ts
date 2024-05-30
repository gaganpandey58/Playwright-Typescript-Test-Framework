import { Then  } from '@cucumber/cucumber';
import { platform } from '../hooks/GlobalData';

import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000);

Then('user validates dashboard', async function () {
    await platform.validateDashboard()
});

Then('user validates profile collection screen', async function() {
    await platform.validateProfileCollectionScreen()
})
