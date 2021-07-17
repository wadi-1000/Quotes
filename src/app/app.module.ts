import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteStructureComponent } from './quote-structure/quote-structure.component';
import { PublishDatePipe } from './publish-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteStructureComponent,
    PublishDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
