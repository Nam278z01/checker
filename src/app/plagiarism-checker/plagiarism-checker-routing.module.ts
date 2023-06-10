import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckerComponent } from './components/checker/checker.component';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'checker', component: CheckerComponent },
        { path: 'upload', component: UploadComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PlagiarismCheckerRoutingModule { }
