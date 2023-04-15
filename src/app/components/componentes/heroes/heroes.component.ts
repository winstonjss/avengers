import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from '../../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent { 

  heroes:Heroe[]=[];
  constructor (private _heroesService:HeroesService){    
  }
  ngOnInit(): void{
    this.heroes=this._heroesService.getHeroes();
    console.log(this.heroes);
  }
}
