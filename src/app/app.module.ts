import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IgxGridModule } from 'igniteui-angular';
import { GridSortingSampleComponent } from './grid-sorting-sample/grid-sorting-sample.component';
import { DataService } from './data.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, IgxGridModule ],
  declarations: [ AppComponent, HelloComponent, GridSortingSampleComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
