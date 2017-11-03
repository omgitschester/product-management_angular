import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { LandingComponent } from './landing/landing.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full' },
    { path: 'products', component: ListComponent },
    { path: 'products/new', component: NewComponent },
    { path: 'products/edit/:id', component: EditComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);