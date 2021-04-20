import { Component, OnInit } from '@angular/core';
import { EhcSpinnerService } from 'ehc-spinner';

@Component({
    selector: 'app-ehc-spinner',
    templateUrl: './ehc-spinner.component.html',
    styleUrls: ['./ehc-spinner.component.css']
})
export class EhcSpinnerComponent implements OnInit {

    public embedded: boolean = false;

    constructor(
        private ehcSpinnerService: EhcSpinnerService
    ) { }

    ngOnInit(): void {
    }

    activarSpinner() {
        this.ehcSpinnerService.showSpinner();

        setTimeout(() => {
            this.ehcSpinnerService.hideSpinner();
        }, 5000);
    }

    cambiarModo() {
        this.embedded = !this.embedded;
    }

}
