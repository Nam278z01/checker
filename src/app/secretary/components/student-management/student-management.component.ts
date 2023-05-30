
import { Component, OnInit } from '@angular/core';
import { Student } from '../../api/student';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { StudentService } from '../../service/student.service';

@Component({
    templateUrl: './student-management.component.html',
    providers: [MessageService, StudentService]
})

export class StudentManagementComponent implements OnInit {

    dialog: boolean = false;

    deleteDialog: boolean = false;

    deleteSelectedDialog: boolean = false;

    dataSources: Student[] = [];

    model: Student = {};

    selected: Student[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    departments: any[] = [
        { label: 'Công nghệ phần mềm', value: 'Công nghệ phần mềm' },
        { label: 'Khoa học máy tính', value: 'Khoa học máy tính' }
    ];

    classes: any[] = [
        { label: '101191A', value: '101191A' },
        { label: '2139312', value: '2139312' }
    ];

    majors: any[] = [
        { label: 'Công nghệ phần mềm', value: 'Công nghệ phần mềm' },
        { label: 'Khoa học máy tính', value: 'Khoa học máy tính' }
    ];

    date: any;

    constructor(private studentService: StudentService, private messageService: MessageService) { }

    ngOnInit() {
        this.studentService.getStudents().then(data => this.dataSources = data);

        this.cols = [
            { field: 'student_id', header: 'Mã sinh viên' },
            { field: 'student_name', header: 'Tên sinh viên' },
            { field: 'birthday', header: 'Ngày sinh' },
            { field: 'phone_number', header: 'Số điện thoại' },
            { field: 'email', header: 'Email' },
            { field: 'class_id', header: 'Lớp học' },
            { field: 'major', header: 'Chuyên ngành' }
        ];
    }

    openNew() {
        this.model = {};
        this.submitted = false;
        this.dialog = true;
    }

    deleteSelected() {
        this.deleteSelectedDialog = true;
    }

    edit(model: Student) {
        this.model = { ...model };
        this.dialog = true;
    }

    delete(model: Student) {
        this.deleteDialog = true;
        this.model = { ...model };
    }

    confirmDeleteSelected() {
        this.deleteSelectedDialog = false;
        this.dataSources = this.dataSources.filter(val => !this.selected.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Student Deleted', life: 3000 });
        this.selected = [];
    }

    confirmDelete() {
        this.deleteDialog = false;
        this.dataSources = this.dataSources.filter(val => val.student_id !== this.model.student_id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Student Deleted', life: 3000 });
        this.model = {};
    }

    hideDialog() {
        this.dialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.model.student_name?.trim()) {
            if (this.model.student_id) {
                this.dataSources[this.findIndexById(this.model.student_id)] = this.model;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Student Updated', life: 3000 });
            } else {
                this.model.student_id = this.createId();
                this.dataSources.push(this.model);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Student Created', life: 3000 });
            }

            this.dataSources = [...this.dataSources];
            this.dialog = false;
            this.model = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.dataSources.length; i++) {
            if (this.dataSources[i].student_id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
