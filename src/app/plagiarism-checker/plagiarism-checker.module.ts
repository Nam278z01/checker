import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from "primeng/calendar";
import { BadgeModule } from 'primeng/badge';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

import { PlagiarismCheckerRoutingModule } from './plagiarism-checker-routing.module';
import { PlagiarismCheckerComponent } from './plagiarism-checker.component';
import { CheckerComponent } from './components/checker/checker.component';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
    imports: [
        CommonModule,
        PlagiarismCheckerRoutingModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        CalendarModule,
        MessageModule,
        MessagesModule,
        ToastModule,
        BadgeModule,
    ],
    declarations: [PlagiarismCheckerComponent, CheckerComponent, UploadComponent]
})
export class PlagiarismCheckerModule {}
