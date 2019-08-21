import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: []
})
export class CarouselComponent implements OnInit {
  imagesPath:string = "/src/assets/images/carousel/";
  photos:any[] = [
    {file: `${this.imagesPath}1.jpg`, index: 0, title: '', desc: '', class: 'active'},
    {file: `${this.imagesPath}2.jpg`, index: 1, title: '', desc: '', class: ''},
    {file: `${this.imagesPath}3.jpg`, index: 2, title: '', desc: '', class: ''},
    {file: `${this.imagesPath}4.jpg`, index: 3, title: '', desc: '', class: ''},
    {file: `${this.imagesPath}5.jpg`, index: 4, title: '', desc: '', class: ''},
    {file: `${this.imagesPath}6.jpg`, index: 5, title: '', desc: '', class: ''},
    {file: `${this.imagesPath}7.jpg`, index: 6, title: '', desc: '', class: ''}
  ];

  constructor() { }

  ngOnInit() {
  }

}
