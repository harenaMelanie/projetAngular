import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LivreComponent } from './livre/livre.component';

const routes: Routes = [
  { path: 'About',component:AboutComponent},
  { path:'',component:HomeComponent},
  { path:'Livre',component:LivreComponent},
  { path:'Blog',component:BlogComponent},
  { path:'Contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
