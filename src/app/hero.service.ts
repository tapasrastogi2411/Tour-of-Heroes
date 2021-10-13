import { Injectable } from '@angular/core';

// Importing the heroes and HEROES
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Adding a getHero method to return the mock objects
  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }
}
