import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DrugSearchTwComponent } from './drug-search-tw/drug-search-tw.component';

import { DrugDataService } from './shared/drug-data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { DrugDetailsTwComponent } from './drug-details-tw/drug-details-tw.component';

@NgModule({
  declarations: [
    AppComponent,
    DrugSearchTwComponent,
    DrugDetailsTwComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    DrugDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
