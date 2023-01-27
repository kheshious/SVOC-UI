import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  
  {path: 'sign-in', component: SignInComponent},
  {path:'navigation', component: NavigationBarComponent},
  {path : '',pathMatch:'full',component: SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
