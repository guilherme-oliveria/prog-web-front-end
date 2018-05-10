import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser/src/browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';

import { ProductService } from './product.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    ProductViewComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    RouterModule,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  providers: [
    ProductService
  ],
})
export class ProductModule { }
