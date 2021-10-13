import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


// Importing the heroes and HEROES
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // New getHeroes using Obeservable
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() { }
}
