import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../entities/hero';

import { HEROES } from '../datas/locals';

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes'; // URL to web api

  constructor(private http: Http){}

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  };
  
  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => this.getHeroes());
  };

  findHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }

}