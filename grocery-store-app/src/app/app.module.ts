import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MenuNavBarComponent } from './Components/menu-nav-bar/menu-nav-bar.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderSectionComponent } from './Components/header-section/header-section.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { AppFooterSectionComponent } from './Components/app-footer-section/app-footer-section.component';
import { MarketplacePageComponent } from './Components/marketplace-page/marketplace-page.component';
import { ContactUsPageComponent } from './Components/contact-us-page/contact-us-page.component';
import { InventoryPageComponent } from './Components/inventory-page/inventory-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuNavBarComponent,
    HeaderSectionComponent,
    MainPageComponent,
    AppFooterSectionComponent,
    MarketplacePageComponent,
    ContactUsPageComponent,
    InventoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatRadioModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
