import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { EhcSpinnerService } from '../ehc-spinner.service';

@Component({
    selector: 'ehc-spinner',
    templateUrl: './ehc-spinner.component.html',
    styleUrls: ['./ehc-spinner.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class EhcSpinnerComponent implements OnInit {

    @Input() embedded: boolean = false;

    constructor(
        public ehcSpinnerService: EhcSpinnerService
    ) { }

    ngOnInit(): void { }

}
