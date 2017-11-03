import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductService } from './product.service';
import { routing } from './routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { LandingComponent } from './landing/landing.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    LandingComponent,
    ListComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
