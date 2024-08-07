import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './administration/layout/header/header.component';
import { FooterComponent } from './administration/layout/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './administration/contact-us/contact-us.component';
import { ProductsComponent } from './administration/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './administration/product-detail/product-detail.component';
import { NavBarComponent } from './administration/layout/nav-bar/nav-bar.component';
import { AdminComponent } from './administration/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './administration/not-found/not-found.component';
import { AdminpracComponent } from './administration/adminprac/adminprac.component';
import { CartCountService } from './service/cart-count/cart-count.service';
import { SnackbarComponent } from './administration/snackbar/snackbar.component';
import { PopularcategoriesComponent } from './administration/popularcategories/popularcategories.component';
import { NewarrivalsComponent } from './administration/newarrivals/newarrivals.component';
import { CartComponent } from './administration/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ContactUsComponent,
    ProductsComponent,
    ProductDetailComponent,
    NavBarComponent,
    AdminComponent,
    NotFoundComponent,
    AdminpracComponent,
    SnackbarComponent,
    PopularcategoriesComponent,
    NewarrivalsComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
