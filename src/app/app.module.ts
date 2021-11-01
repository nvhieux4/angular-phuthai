import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/Footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ListProductComponent } from './component/list-product/list-product.component';
import { NewsComponent } from './component/news/news.component';
import { ProductNewComponent } from './component/product-new/product-new.component';
import { SliderComponent } from './component/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListProductComponent,
    NewsComponent,
    FooterComponent,
    ProductNewComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
