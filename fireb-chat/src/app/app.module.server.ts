import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
