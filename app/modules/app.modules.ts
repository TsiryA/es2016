import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from '../services/in-memory-data.service';

// local components
import { AppComponent }         from '../components/src/app.component';
import { HeroDetailComponent }  from '../components/src/hero-detail.component';
import { HeroesComponent }      from '../components/src/heroes.component';
import { DashboardComponent }   from '../components/src/dashboard.component';

// loading services
import { HeroService } from '../services/hero.services';

// load routings
import { AppRouting } from '../app.routing';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService),
                  AppRouting ],
  declarations: [ AppComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  DashboardComponent ],
  providers:    [
                  HeroService
                ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
