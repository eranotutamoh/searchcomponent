import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SearchAsYouTypeComponent } from './modules/search-as-you-type/search-as-you-type.component';
import { SearchResultsComponent } from './modules/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAsYouTypeComponent,
    SearchResultsComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
