import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfAuthenticatedDirective } from './core/authentication/ifAuthenticated.directive';
import { CoreModule } from './core/core.module';
import { LoginModule } from './features/login/login.module';

@NgModule({
  declarations: [AppComponent, IfAuthenticatedDirective],
  imports: [BrowserModule, AppRoutingModule, CoreModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
