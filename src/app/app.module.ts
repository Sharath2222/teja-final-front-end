import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { AddDishComponent } from './components/add-product/add-dish.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PlacedordersComponent } from './components/placedorders/placedorders.component';
import { LogoutComponent } from './components/logout/logout.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { WalletmoneyComponent } from './components/walletmoney/walletmoney.component';
import { HelpComponent } from './components/help/help.component';
import { OffersComponent } from './components/offers/offers.component';




@NgModule({
  declarations: [
   
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    CartComponent,
    AddDishComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    PlacedordersComponent,
    LogoutComponent,
    WalletComponent,
    WalletmoneyComponent,
    HelpComponent,
    OffersComponent,
   

  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,
    FormsModule,HttpClientModule
   
    
   
    
   
    
  ],
  providers: [
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
