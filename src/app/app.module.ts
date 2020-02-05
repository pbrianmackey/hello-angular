import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HerosService } from './heros.service';
import { HttpClientModule } from '@angular/common/http';
import { FeatureToggleDirective } from './feature-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BindingComponent,
    HeroListComponent,
    FeatureToggleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HerosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
