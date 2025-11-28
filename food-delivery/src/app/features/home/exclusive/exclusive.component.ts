import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-exclusive',
  imports: [TabsModule, RouterLink],
  templateUrl: './exclusive.component.html',
  styleUrl: './exclusive.component.css'
})
export class ExclusiveComponent {

  tabs=[
    {label:'Vegan ',icon:'pi pi-fw pi-star',route:'/vegan'},
    {label:'Sushi ',icon:'pi pi-fw pi-thumbs-up',route:'/sushi'},
    {label:'Pizza & Fast food',icon:'pi pi-fw pi-shopping-cart',route:'/pizza-fastfood'},
    {label:'others',icon:'pi pi-fw pi-heart',route:'/others'},

  ];
}

