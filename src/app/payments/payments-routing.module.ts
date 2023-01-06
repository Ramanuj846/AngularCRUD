import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments.component';
import { SucessComponent } from './Sucess/sucess/sucess.component';

const routes: Routes = [{ path: '', component: PaymentsComponent },
                        {path:'sucess',component:SucessComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
