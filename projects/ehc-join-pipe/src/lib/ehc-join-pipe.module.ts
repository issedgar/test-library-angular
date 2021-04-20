import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EhcJoinPipe } from './ehc-join.pipe';

@NgModule({
    declarations: [EhcJoinPipe],
    imports: [
        CommonModule
    ],
    exports: [EhcJoinPipe]
})
export class EhcJoinPipeModule { }
