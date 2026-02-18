import { Routes } from '@angular/router';
import { CartComponentV2 } from './components/cart.component-v2/cart.component-v2';

export const routes: Routes = [
    {path: '', redirectTo: '/catalog', pathMatch: 'full'},
    {path: 'cart', component: CartComponentV2},
    {path: 'catalog', loadComponent: () => import('./components/catalogo-v2/catalogo-v2').then(m => m.CatalogoV2)},
];
