import { Component, OnInit } from '@angular/core';
import { Film } from './film.model';
import { CheckoutService } from '../service/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrl: './list-films.component.css'
})
export class ListFilmsComponent implements OnInit{

  listFilmes: Film[] = [];
  listSelectedFilms!: number;
  hidden: boolean = false;

  constructor(private readonly checkoutService: CheckoutService, private readonly route: Router){}

  ngOnInit(): void {
    this.checkoutService.priceTotal = 0;
    this.checkoutService.listSelectFilms = [];
    this.checkoutService.getListFilms().subscribe(films => {
      this.listFilmes = films;
    })
  }

  toggleCount() {
    this.listSelectedFilms = this.checkoutService.listSelectFilms.length;
    return this.listSelectedFilms;
  }

  toggleBadgeVisibility(){
    this.hidden = !this.hidden;
  }

  toCheckout(): void {
    this.route.navigate(['../checkout'])
  }
}
