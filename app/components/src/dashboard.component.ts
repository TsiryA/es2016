import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// loading services
import { HeroService } from '../../services/hero.services';

// entities loads
import { Hero } from '../../entities/hero';

@Component({
  selector:     'my-dashboard',
  templateUrl:  'app/components/templates/views/dashboard.component.html',
  styleUrls:    ['app/components/templates/styles/dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  
  heroes: Hero[] = [];

  constructor(
  private router: Router,
  private heroService: HeroService) {
}

  ngOnInit(): void {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}

