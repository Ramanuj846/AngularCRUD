import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './Home/home/home.component';
import { MensDataComponent } from './MensData/mens-data/mens-data.component';
import { ServiceGivenComponent } from './Servic/service-given/service-given.component';
import {RoutessGuardGuard} from './routess-guard.guard'
const routes: Routes = [
{path:'',component:HomeComponent},
{path:'Service-Given',component:ServiceGivenComponent},
{path:"mens-data",component:MensDataComponent,canActivate:[RoutessGuardGuard]},
{path:"Pipe-transformation",component:PipeComponent},

{path:'home',redirectTo:'',pathMatch:'full'},
{ path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
