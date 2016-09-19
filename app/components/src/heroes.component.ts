import { Component, Input, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';


// entities loads
import { Hero } from '../../entities/hero';

// importing services
import { HeroService } from '../../services/hero.services';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/components/templates/views/heroes.component.html',
  styleUrls:['app/components/templates/styles/app.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(
        heroes => this.heroes = heroes
      );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
