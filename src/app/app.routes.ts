import { Routes } from '@angular/router';
import { ListCustomers } from './pages/customers/list-customers/list-customers';
import { ListOrders } from './pages/orders/list-orders/list-orders';
import { ListProducts } from './pages/products/list-products/list-products';

export const routes: Routes = [
    { path:'', 'redirectTo':'/customers', pathMatch:'full' },
    { path:'customers', component: ListCustomers},
    { path:'orders', component:  ListOrders},
    { path:'products', component:ListProducts }
];
