import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: HomeComponent,
    },
    {
        path: 'about',
        title: 'App about Page',
        component: AboutComponent,
    },
    {
        path: 'product/:id',
        title: 'App product Page',
        component: ProductComponent,
    },
];
