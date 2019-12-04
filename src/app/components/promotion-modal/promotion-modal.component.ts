import { Component, OnInit } from "@angular/core";
import { $ } from "protractor";

@Component({
  selector: "app-promotion-modal",
  templateUrl: "./promotion-modal.component.html",
  styles: []
})
export class PromotionModalComponent implements OnInit {
  displayModal: boolean = true;

  constructor() {}

  ngOnInit() {
    // this.showModal();
  }

  showModal() {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.text = `$('#promotionModal').modal('show')`;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}
