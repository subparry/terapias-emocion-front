import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(private scripts:ScriptService) { }

  ngOnInit() {
    this.scripts.load('bootstrapTheme').then( data => {
      console.log('script loaded', data);
    }).catch(error => console.log(error));
  }

}
