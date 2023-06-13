import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CheckerService } from '../../service/class.service';

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.scss'],
  providers: [MessageService, CheckerService]
})
export class CheckerComponent {
    uploadFiles: any[] = [];
    value = 0;
    showWaitingUpload = false;
    showPlagiarismChecker = false;
    showResult = false;
    interval: any;

    percent = 49;

    constructor(private messageService: MessageService, private checkerService: CheckerService) {}

    ngOnInit() {
        this.interval = setInterval(() => {
            // this.percent = this.percent + Math.floor(Math.random() * 10) + 1;

            if (this.percent >= 23) {
                // this.percent = 23;
                clearInterval(this.interval);
                this.showWaitingUpload = false;
            }
        }, 300);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    onUpload(event: any) {
        if (this.uploadFiles.length > 0) return false;
        this.showWaitingUpload = true;
        if(event.target.files.length > 0) {
            this.uploadFiles.push(event.target.files[0]);
        }
        console.log(this.uploadFiles);

        this.interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 0;
                clearInterval(this.interval);
                this.showWaitingUpload = false;
            }
        }, 200);

        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'File Uploaded', life: 3000 });
        return true;
    }

    onPlagiarismChecker() {
        this.showPlagiarismChecker = true;
        this.interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 0;
                clearInterval(this.interval);
                this.showPlagiarismChecker = false;
                this.showResult = true;
            }
        }, 200);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Class Deleted', life: 3000 });

    }

    deleteFile(index: number) {
        this.uploadFiles.splice(index, 1)
    }

    download() {

        var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "mon_hoc.docx");
    }
}
