import { Routes } from '@angular/router';
import { ProductList } from './products/components/product-list/product-list';
import { ProductDetail } from './products/components/product-detail/product-detail';
import { EditProduct } from './products/components/edit-product/edit-product';
import { AddProduct } from './products/components/add-product/add-product';
import { Home } from './shared/components/home/home';
import { PageNotFound } from './shared/components/page-not-found/page-not-found';
import { Login } from './auth/components/login/login';
import { Registration } from './auth/components/registration/registration';
import { AuthGuard } from './shared/services/guards/auth-guard';

export const routes: Routes = [
    {
        path: 'products',
        canActivate: [AuthGuard],
        children: [
            { path: '', component: ProductList },
            { path: 'view/:id', component: ProductDetail },
            // { path: 'edit/:id', component: EditProduct },
            { path: 'edit', component: EditProduct },
            { path: 'add', component: AddProduct }
        ]
    },
    { path: 'login', component: Login },
    { path: 'register', component: Registration },
    { path: 'home', component: Home },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFound }
];
