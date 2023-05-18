import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassListComponent } from './class-list/class-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'class-list', component: ClassListComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class TeacherRoutingModule { }
