import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { NotificationModalComponent } from './notification-modal/notification-modal.component';
import { HomeComponent } from './home/home.component';
import { AjaxWaitComponent } from './ajax-wait';


@NgModule({
  declarations: [
    NotificationComponent, NotificationModalComponent, HomeComponent, AjaxWaitComponent,
  ],
  exports: [
    NotificationComponent, NotificationModalComponent, HomeComponent, AjaxWaitComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule {
  constructor( @Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule has already been loaded.
        Import MainModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
