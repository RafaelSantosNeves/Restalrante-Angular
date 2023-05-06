import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SobreMimComponent } from './componentes/sobre-mim/sobre-mim.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';

const routes: Routes = [
  { path: '', component: SobreMimComponent },
  { path: 'tecnologias', component: TecnologiasComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}