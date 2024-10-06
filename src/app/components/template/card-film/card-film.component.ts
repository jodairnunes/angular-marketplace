import { Component, OnInit } from '@angular/core';
import { Film } from '../../../views/list-films/film.model';
import { CheckoutService } from '../../../views/service/checkout.service';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrl: './card-film.component.css'
})
export class CardFilmComponent implements OnInit{

  listFilms: Film[] = [];


  constructor(private checkoutService: CheckoutService){}

  ngOnInit(): void {
    this.checkoutService.getListFilms().subscribe(films => {
      this.listFilms = films;
    })
  }

  selectFilm(film: Film): void {
    this.checkoutService.setFilm(film);
    this.checkoutService.setPrice(film.price);
  }

}
