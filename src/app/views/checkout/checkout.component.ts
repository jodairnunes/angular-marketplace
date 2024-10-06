import { Component, OnInit } from '@angular/core';
import { Film } from '../list-films/film.model';
import { CheckoutService } from '../service/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{

  listSelectedFilms: Film[] = [];
  totalPrice!: number;
  disabled: boolean = false;
  hide: boolean = true;
  form: any;
  client: any = [];

  constructor(private readonly checkoutSevice: CheckoutService, private readonly route: Router) {}


  ngOnInit(): void {
    this.form = document.querySelector('#form');
    this.form.addEventListener('click', (event: any) => {
      event.default();
    })
    this.totalPrice = this.checkoutSevice.priceTotal;
    this.listSelectedFilms = this.checkoutSevice.listSelectFilms;
    this.toggleButton();
  }

  toggleButton() {
    if(this.listSelectedFilms.length == 0) {
      this.disabled = true;
    }
  }


  exclude(film: Film): void{
    this.totalPrice -= film.price;
    this.checkoutSevice.setFilm(film);
    this.checkoutSevice.unselectFilm();
    if(this.totalPrice <= 0) {
      this.excludeAll();
    }
  }

  excludeAll(){
    this.checkoutSevice.priceTotal = 0;
    this.totalPrice = 0;
    this.checkoutSevice.listSelectFilms = [];
    this.listSelectedFilms = [];
    this.toggleButton();
  }

  payment(): void{
    if(
      this.client.address === undefined || 
      this.client.name === undefined || 
      this.client.password === undefined 
    ) {
      this.checkoutSevice.showMessage('Please neter a valid data', false);
    } else {
      this.checkoutSevice.showMessage(`Payment is sucessfully, good choice! Confirmed order: to ${this.client.address} by ${this.client.name}`, true);
      this.route.navigate(['../list-films']);
    }
    // this.checkoutSevice.showMessage("Payment!", true);
  }
  
  cancel(): void{
    this.route.navigate(['../list-films'])
  }

}
