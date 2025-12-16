import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenueComponent } from './features/menue/menue.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Home',
    // children: [
    //   {
    //     path: '',
    //     loadComponent: () => import('./features/home/exclu/exclu.component').then(m => m.ExcluComponent)
    //   },
    //   {
    //     path: 'vegan',
    //     loadComponent: () => import('./features/home/exclu/vegan/vegan.component').then(m => m.VeganComponent)
    //   },
    //   {
    //     path: 'sushi',
    //     loadComponent: () => import('./features/home/exclu/suchi/suchi.component').then(m => m.SuchiComponent)
    //   },
    //   {
    //     path: 'pizza',
    //     loadComponent: () => import('./features/home/exclu/pizza/pizza.component').then(m => m.PizzaComponent)
    //   },
    //   {
    //     path: 'others',
    //     loadComponent: () => import('./features/home/exclu/other/other.component').then(m => m.OtherComponent)
    //   }
    // ]















  },
  {
    path: 'menu',
    loadComponent: () => import('./features/menue/menue.component').then(m => m.MenueComponent),
    title: 'Menu'
  },
  {
    path: 'offers',
    loadComponent: () => import('./features/offers/offers.component').then(m => m.OffersComponent),
    title: 'Offers'
  },
  {
     path: 'restaurants',
    loadComponent: () => import('./features/resturant/resturant.component').then(m => m.ResturantComponent),
    title: 'restaurants'
  },
  {
     path: 'order',
    loadComponent: () => import('./features/orders/orders.component').then(m => m.OrdersComponent),
    title: 'order'
  }
];
