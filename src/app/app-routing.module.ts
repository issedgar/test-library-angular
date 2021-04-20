import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EhcJoinPipeComponent } from './showcase/ehc-join-pipe/ehc-join-pipe.component';
import { EhcSpinnerComponent } from './showcase/ehc-spinner/ehc-spinner.component';

const routes: Routes = [
    { path: 'ehc-join-pipe', component: EhcJoinPipeComponent},
    { path: 'ehc-spinner', component: EhcSpinnerComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
