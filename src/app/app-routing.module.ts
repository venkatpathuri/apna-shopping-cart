import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ItemsDashboardComponent } from './items-dashboard/items-dashboard.component';

const routes: Routes = [
  { path: '', component: ItemsDashboardComponent },
  { path: 'items', component: ItemsDashboardComponent },
  { path: 'cart', component: CartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
