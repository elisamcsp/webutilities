import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTE } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EncodeComponent } from './pages/encode/encode.component';
import { DecodeComponent } from './pages/decode/decode.component';

// Shared
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';

import { FormsModule } from '@angular/forms';
import { EncodefileComponent } from './pages/encodefile/encodefile.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    EncodeComponent,
    DecodeComponent,
    EncodefileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, APP_ROUTE],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
