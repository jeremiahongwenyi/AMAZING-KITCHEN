import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ContactUsComponent } from './administration/contact-us/contact-us.component';
import { ProductsComponent } from './administration/products/products.component';
import { AdminComponent } from './administration/admin/admin.component';
import { NotFoundComponent } from './administration/not-found/not-found.component';
import { ProductDetailComponent } from './administration/product-detail/product-detail.component';
import { AdminpracComponent } from './administration/adminprac/adminprac.component';

const routes: Routes = [
  {path:"",component:ProductsComponent,pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'product', component:ProductsComponent},
  {path:'product/:subcategory', component:ProductsComponent},
  {path:'product-details',component:ProductDetailComponent},
  {path:'admin', component:AdminpracComponent},
  {path:"**", component:NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
