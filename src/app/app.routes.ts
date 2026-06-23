import { Routes } from '@angular/router';
import { ListCustomers } from './pages/customers/list-customers/list-customers';
import { ListOrders } from './pages/orders/list-orders/list-orders';
import { ListProducts } from './pages/products/list-products/list-products';
import { CreateCustomer } from './pages/customers/create-customer/create-customer';

export const routes: Routes = [
    { path: '', 'redirectTo': '/customers', pathMatch: 'full' },
    { path: 'customers', component: ListCustomers },
    { path: 'customers/create', component: CreateCustomer },
    { path: 'orders', component: ListOrders },
    { path: 'products', component: ListProducts }
];
