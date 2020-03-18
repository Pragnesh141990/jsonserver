import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { pragneshPipe } from './mypipe';
import { PragneshPipe1 } from './pipemulti';
import { MydirectriveDirective } from './mydirectrive.directive';
import { ContactusComponent } from './contactus/contactus.component';
import { from } from 'rxjs';
import { TestComponent } from './test/test.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CryptoService } from './crypto.service';
import { UpdattimeService } from './updattime.service';
import { GetpostservicesService } from './getpostservices.service';
import { IntrorxjsComponent } from './introrxjs/introrxjs.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    pragneshPipe,
    PragneshPipe1,
    MydirectriveDirective,
    ContactusComponent,
    TestComponent,
    ReactiveformComponent,
    IntrorxjsComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [GetpostservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
