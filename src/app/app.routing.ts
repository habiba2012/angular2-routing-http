import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserComponent} from './user/user.component';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
    {
        path: '',
    component: UserComponent
},

{
    path:'about',
    component: AboutComponent
}
    
]

export const routing = RouterModule.forRoot(appRoutes);
    
