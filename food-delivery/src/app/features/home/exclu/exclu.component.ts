import { Component } from '@angular/core';

@Component({
  selector: 'app-exclu',
  imports: [],
  templateUrl: './exclu.component.html',
  styleUrl: './exclu.component.css'
})
export class ExcluComponent {

title='Resturant'
cards=[
  {describtion:'Chef Burgers London', image:'assets/images/exc/1.svg',discount:'-40% ' },
  {describtion:'Grand Ai Cafe London', image:'assets/images/exc/2.svg',discount:'-20% ' },
  {describtion:'Sushi Platter', image:'assets/images/exc/3.svg',discount:'-17% ' },

]
}

