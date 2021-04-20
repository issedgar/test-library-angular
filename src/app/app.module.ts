import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { EhcJoinPipeModule } from 'ehc-join-pipe';
import { EhcSpinnerModule } from 'ehc-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EhcJoinPipeComponent } from './showcase/ehc-join-pipe/ehc-join-pipe.component';
import { EhcSpinnerComponent } from './showcase/ehc-spinner/ehc-spinner.component';

@NgModule({
    declarations: [
        AppComponent,
        EhcJoinPipeComponent,
        EhcSpinnerComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        EhcJoinPipeModule,
        EhcSpinnerModule
    ],
    providers: [ ],
    bootstrap: [AppComponent],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
