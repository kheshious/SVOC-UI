import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DataDisplayComponent} from './components/data-display/data-display.component'
const routes: Routes = [
  
  {path: 'sign-in', component: SignInComponent},
  {path:'navigations', component: NavigationBarComponent},
  {path: 'data-display', component: DataDisplayComponent},
  {path : '',pathMatch:'full',component: NavigationBarComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
