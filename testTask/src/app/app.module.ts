import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page/main-page.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCW7qvE3wUAlpM7m0nB-ouq5M3ZsM9q1JU'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
