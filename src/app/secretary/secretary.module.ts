import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from "primeng/calendar";

import { SecretaryRoutingModule } from './secretary-routing.module';
import { SecretaryComponent } from './secretary.component';
import { TeacherManagementComponent } from './components/teacher-management/teacher-management.component';
import { ClassManagementComponent } from './components/class-management/class-management.component';
import { StudentManagementComponent } from './components/student-management/student-management.component';
import { SubjectManagementComponent } from './components/subject-management/subject-management.component';

@NgModule({
    imports: [
        CommonModule,
        SecretaryRoutingModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        CalendarModule
    ],
    declarations: [SecretaryComponent, TeacherManagementComponent, ClassManagementComponent, StudentManagementComponent, SubjectManagementComponent]
})
export class SecretaryModule { }
