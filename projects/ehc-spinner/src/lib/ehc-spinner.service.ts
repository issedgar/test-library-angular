import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EhcSpinnerService {

    private _show: boolean = false;

    public get show(): boolean {
        return this._show;
    }
    public set show(value: boolean) {
        this._show = value;
    }


    constructor() { }

    hideSpinner() {
        this.show = false;
    }

    showSpinner() {
        this.show = true;
    }


}
