import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { InventoryPageComponent } from './Components/inventory-page/inventory-page.component';
import { MarketplacePageComponent } from './Components/marketplace-page/marketplace-page.component';
import { ContactUsPageComponent } from './Components/contact-us-page/contact-us-page.component';


const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'inventory-page', component: InventoryPageComponent },
  { path: 'marketplace-page', component: MarketplacePageComponent },
  { path: 'contact-us-page', component: ContactUsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
