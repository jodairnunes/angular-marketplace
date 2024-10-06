import { Component } from '@angular/core';
import { CheckoutService } from '../../../views/service/checkout.service';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.css',
})
export class SelectButtonComponent {
  disabled: boolean = false;

  constructor(private checkoutService: CheckoutService) {}

  selectFilm() {
    this.disabled = true;
    this.checkoutService.selectFilm();
  }

  unselectFilm() {
    this.disabled = false;
    this.checkoutService.unselectFilm();
  }
}
