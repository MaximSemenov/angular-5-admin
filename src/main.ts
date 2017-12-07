import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AdminModule } from './app/admin/admin.module';
import { environment } from './environments/environment';

declare var $: any;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AdminModule)
  .catch(err => console.log(err));


// $(function () {
//   $('.knob').knob();
// });
