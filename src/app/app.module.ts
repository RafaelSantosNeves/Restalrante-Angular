import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreMimComponent } from './componentes/sobre-mim/sobre-mim.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreMimComponent,
    TecnologiasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
