import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-sidebar-guest',
  templateUrl: './guest.component.html',
  styles: []
})
export class GuestComponent implements OnInit {

  constructor(private navigation:NavigationService) { }

  ngOnInit() {
  }

}
