import { Component } from '@angular/core';
import { PopularCardComponent } from "./popular-card/popular-card.component";

@Component({
  selector: 'app-popular',
  imports: [PopularCardComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {
 items=[
    {
      imageSrc: 'assets/images/popular/1.png',
      title: 'Burgers & Fast food',
      count:"21 Restaurants"
    },
      {
      imageSrc: 'assets/images/popular/2.png',
      title: 'Salads',
      count:"32 Restaurants"},
      {
      imageSrc: 'assets/images/popular/3.png',
      title: 'Pasta & Casuals',
      count:"4 Restaurants"
      },{
      imageSrc: 'assets/images/popular/4.png',
      title: 'Pizza',
      count:"32 Restaurants"
      },{
      imageSrc: 'assets/images/popular/5.png',
      title: 'Breakfast',
      count:"4 Restaurants"
      },{
      imageSrc: 'assets/images/popular/6.png',
      title: 'Soups',
      count:"32 Restaurants"
      }

  ]

}
