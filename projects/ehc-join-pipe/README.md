# EhcJoinPipe

Pipe to show in a string from an array.

## Installation

Using npm:

`npm install ehc-join-pipe`

## Usage

In module:

```ts

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { EhcJoinPipeModule } from 'ehc-join-pipe';

@NgModule({
  declarations: [
    AppComponent,
    SampleDdrJoinPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EhcJoinPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
In your ts:

```ts
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-ehc-join-pipe',
    templateUrl: './ehc-join-pipe.component.html',
    styleUrls: ['./ehc-join-pipe.component.css']
})
export class EhcJoinPipeComponent implements OnInit {

    public valoresNulo: any = null;
    public valores: string [] = [
        'valor 1',
        'valor 2',
        'valor 3',
        'valor 4',
        'valor 5'
    ];

    constructor() { }

    ngOnInit(): void {
    }

}

```

In your html:

```html
{{valores | join}}
```


