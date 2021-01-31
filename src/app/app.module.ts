import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NouisliderModule } from '../ng2-nouisliders/ng2api';
import { V5IntegrateComponent } from './v5-integrate/v5-integrate.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NouisliderModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    V5IntegrateComponent,
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [V5IntegrateComponent]
})
export class AppModule {}