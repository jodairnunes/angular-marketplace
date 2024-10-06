import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../list-films/film.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  public baseUrl: string = 'http://localhost:3001';
  public listFilms: Film[] = [];
  public priceTotal: number = 0;
  public listSelectFilms: Film[] = [];
  private _priceHandler: number = 0;
  private _filmHandler!: Film;

  constructor(private readonly httpClient: HttpClient, private readonly snackBar: MatSnackBar) {}

  getPrice(): number {
    return this._priceHandler;
  }

  setPrice(value: number) {
    this._priceHandler = value;
  }

  getFilm(): Film {
    return this._filmHandler;
  }

  setFilm(value: Film) {
    this._filmHandler = value;
  }

  getListFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(`${this.baseUrl}/films`);
  }

  selectFilm() {
    setTimeout(() => {
      this.priceTotal += this.getPrice();
      this.listSelectFilms.push(this.getFilm());
    }, 1);

    console.log(this.listSelectFilms);
  }

  unselectFilm() {
    this.priceTotal -= this.getPrice();
    if (this.priceTotal < 0) {
      this.priceTotal = 0;
    }

    let index = this.listSelectFilms.indexOf(this.getFilm());
    if (index > -1 || index === this.listSelectFilms.indexOf(this.getFilm())) {
      this.listSelectFilms.splice(index, 1);
    }
    console.log(this.listSelectFilms);
  }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, "close", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['success'] : ['error'],
    })
  }
}
