import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDishComponent } from './components/add-product/add-dish.component';
import { CartComponent } from './components/cart/cart.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PlacedordersComponent } from './components/placedorders/placedorders.component';
import { RegisterComponent } from './components/register/register.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { RouterGuardService } from './service/router-guard-service';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'nav',component:NavbarComponent},
  {path:'formals',component:HomeComponent},
  {path:'sneakers',component:HomeComponent},
  {path:'casuals',component:HomeComponent},
  {path:'boots',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'add-shoe',component:AddDishComponent},
  {path:'add-dish/:id',component:AddDishComponent},
  {path:'register',component:RegisterComponent},
  { path: 'home', component: HomeComponent },
  { path: 'payment', component:PaymentComponent },
  { path: 'orders', component:PlacedordersComponent },
  { path: 'logout', component:LogoutComponent},
  { path: 'login', component:LoginComponent},
  { path: 'wallet', component:WalletComponent},
  { path: 'help', component:HelpComponent}

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
