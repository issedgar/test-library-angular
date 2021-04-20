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
