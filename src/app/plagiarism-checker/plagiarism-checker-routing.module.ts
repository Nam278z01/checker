import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckerComponent } from './components/checker/checker.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'checker', component: CheckerComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PlagiarismCheckerRoutingModule { }
