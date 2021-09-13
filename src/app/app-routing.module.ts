import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
//import { ResponsiveService } from './shared/services/responsive.service';

const routess: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: PageComponent,data:{page:'about'}},
  {path:'about', component: PageComponent, data:{page:'home'}},
  {path:'contact', component: PageComponent, data:{page:'contact'}},
  {path:'mentors', component: PageComponent,data:{page:'mentors'}},
  {path:'login', component: PageComponent, data:{page:'login'}},
  {path:'donate', component: PageComponent, data:{page:'donate'}},
  {path:'details', component: PageComponent, data:{page:'details'}},
  {path:'video', component: PageComponent, data:{page:'video'}},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routess)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}
