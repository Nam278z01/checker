import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeacherManagementComponent } from './components/teacher-management/teacher-management.component';
import { ClassManagementComponent } from './components/class-management/class-management.component';
import { StudentManagementComponent } from './components/student-management/student-management.component';
import { SubjectManagementComponent } from './components/subject-management/subject-management.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'teacher-management', component: TeacherManagementComponent },
        { path: 'class-management', component: ClassManagementComponent },
        { path: 'student-management', component: StudentManagementComponent },
        { path: 'subject-management', component: SubjectManagementComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class SecretaryRoutingModule { }
