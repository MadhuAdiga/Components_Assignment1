import { NgModule }      from '@angular/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ChildComponent }  from './child.component'; //Import the globally available service
import { AppServices }  from './app.services'; //Import the globally available service


@NgModule({
  imports:      [ BrowserModule, Ng2Bs3ModalModule ],
  declarations: [ AppComponent,ChildComponent],
  providers:    [ AppServices ], // Register the service as a provider with the AppModule which will make the service available to all the components in the application
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
