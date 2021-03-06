import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/user/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { DetailsComponent } from './components/user/details/details.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { TransactionListComponent } from './components/admin/transaction-list/transaction-list.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { AuthGuard} from './guards/auth.guard';
import { Role} from './model/role';

 
const routes: Routes = [
  //main page
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  //user page
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN, Role.USER]}
},
  {path: 'detail', component: DetailsComponent},
  {path: 'detail/:id', component: DetailsComponent},

  //admin panel
  {path: 'dashboard', component: DashboardComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
},
  {path: 'user-list', component: UserListComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
},
  {path: 'product-list', component: ProductListComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
},
  {path: 'transaction-list', component: TransactionListComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
},

  //error pages
  {path: '404', component: NotFoundComponent},
  {path: '401', component: UnauthorizedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  constructor(private router:Router){
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
}
