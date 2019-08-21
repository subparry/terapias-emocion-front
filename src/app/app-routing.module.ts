import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { NmgComponent } from './components/nmg/nmg.component';
import { BiomagnetismoComponent } from './components/biomagnetismo/biomagnetismo.component';
import { MiTerapiaComponent } from './components/mi-terapia/mi-terapia.component';
import { FloresComponent } from './components/flores/flores.component';

const routes: Routes = [
  {path: 'sobre_mi', component: SobreMiComponent},
  {path: 'nmg', component: NmgComponent},
  {path: 'biomagnetismo', component: BiomagnetismoComponent},
  {path: 'mi_terapia', component: MiTerapiaComponent},
  {path: 'flores', component: FloresComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
