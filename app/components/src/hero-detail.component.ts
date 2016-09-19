import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// loading services
import { HeroService } from '../../services/hero.services';

// entities loads
import { Hero } from '../../entities/hero';



@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/components/templates/views/hero-detail.component.html',
  styleUrls:['app/components/templates/styles/hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit{
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) 
    {

    }
    @Input()
    hero: Hero;

    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.findHero(id)
        .then(hero => this.hero = hero);
      });
    };

    goBack(): void {
      window.history.back();
    }

};
