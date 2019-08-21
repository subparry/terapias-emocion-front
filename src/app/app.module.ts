import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { GuestComponent } from './components/shared/sidebar/guest/guest.component';
import { AdminComponent } from './components/shared/sidebar/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { NmgComponent } from './components/nmg/nmg.component';
import { BiomagnetismoComponent } from './components/biomagnetismo/biomagnetismo.component';
import { FloresComponent } from './components/flores/flores.component';
import { MiTerapiaComponent } from './components/mi-terapia/mi-terapia.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    GuestComponent,
    AdminComponent,
    HomeComponent,
    SobreMiComponent,
    NmgComponent,
    BiomagnetismoComponent,
    FloresComponent,
    MiTerapiaComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
