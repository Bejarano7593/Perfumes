import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'products', component: ProductosComponent },
{ path: 'contact', component: ContactsComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
