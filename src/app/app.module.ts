import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { IonicModule } from '@ionic/angular';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

import { TabsComponent } from './tabs/tabs.component';

import { PublicacionFeedComponent } from './publicacion-feed/publicacion-feed.component';
import { PublicacionComponent } from './publicacion/publicacion.component';


import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PerfilComponent,
    TabsComponent,
    PublicacionComponent,
    PublicacionesComponent,
    PublicacionFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  exports: [RoutesModule]
})
export class AppModule { }
