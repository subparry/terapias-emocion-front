import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: []
})
export class CarouselComponent implements OnInit {
  imagesPath:string = "../../../../../assets/images/carousel/";
  photos:any[] = [
    {file: `${this.imagesPath}1.jpg`, index: 0, title: 'Colegio Santa Marta', desc: 'Charla profesores Curicó', class: 'active'},
    {file: `${this.imagesPath}2.jpg`, index: 1, title: 'Colegio Santa Marta', desc: 'Charla profesores Curicó', class: ''},
    {file: `${this.imagesPath}3.jpg`, index: 2, title: 'Formación terapéutica', desc: 'Talleres de formación terapéutica en Santiago', class: ''},
    {file: `${this.imagesPath}4.jpg`, index: 3, title: 'Jornada de Matronas - Clínica Las Condes', desc: 'Charla sobre proyecto sentido y transgeneracional', class: ''},
    {file: `${this.imagesPath}5.jpg`, index: 4, title: 'Jornada de Matronas - Clínica Las Condes', desc: 'Charla sobre proyecto sentido y transgeneracional', class: ''},
    {file: `${this.imagesPath}7.png`, index: 5, title: 'Taller terapéutico ENAP', desc: 'Taller dirigido al área de RRHH de ENAP', class: ''}
  ];

  constructor() { }

  ngOnInit() {
  }

}
