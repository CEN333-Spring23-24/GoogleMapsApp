import { Routes } from '@angular/router';
import { Feature1Component } from './features/feature1/feature1.component';
import { Feature2Component } from './features/feature2/feature2.component';
import { Feature3Component } from './features/feature3/feature3.component';
import { Feature4Component } from './features/feature4/feature4.component';
import { HomeComponent } from './features/home/home.component';
import { DetailsComponent } from './features/details/details.component';
import { Feature5Component } from './features/feature5/feature5.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'feature1', component:Feature1Component},
    {path:'feature2', component:Feature2Component},
    {path:'feature3', component:Feature3Component},
    {path:'feature4', component:Feature4Component},
    {path:'feature5', component:Feature5Component},
    {path:'details', component:DetailsComponent},
];
