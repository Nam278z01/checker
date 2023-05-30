
import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../api/teacher';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { TeacherService } from '../../service/teacher.service';

@Component({
    templateUrl: './teacher-management.component.html',
    providers: [MessageService, TeacherService]
})

export class TeacherManagementComponent implements OnInit {

    dialog: boolean = false;

    deleteDialog: boolean = false;

    deleteSelectedDialog: boolean = false;

    dataSources: Teacher[] = [];

    model: Teacher = {};

    selected: Teacher[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    departments: any[] = [
        { label: 'Công nghệ phần mềm', value: 'Công nghệ phần mềm' },
        { label: 'Khoa học máy tính', value: 'Khoa học máy tính' }
    ];

    date: any;

    constructor(private teacherService: TeacherService, private messageService: MessageService) { }

    ngOnInit() {
        this.teacherService.getTeachers().then(data => this.dataSources = data);

        this.cols = [
            { field: 'teacher_id', header: 'Mã giảng viên' },
            { field: 'teacher_name', header: 'Tên giảng viên' },
            { field: 'birthday', header: 'Ngày sinh' },
            { field: 'phone_number', header: 'Số điện thoại' },
            { field: 'department', header: 'Bộ môn' }
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

    edit(model: Teacher) {
        this.model = { ...model };
        this.dialog = true;
    }

    delete(model: Teacher) {
        this.deleteDialog = true;
        this.model = { ...model };
    }

    confirmDeleteSelected() {
        this.deleteSelectedDialog = false;
        this.dataSources = this.dataSources.filter(val => !this.selected.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Teacher Deleted', life: 3000 });
        this.selected = [];
    }

    confirmDelete() {
        this.deleteDialog = false;
        this.dataSources = this.dataSources.filter(val => val.teacher_id !== this.model.teacher_id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Teacher Deleted', life: 3000 });
        this.model = {};
    }

    hideDialog() {
        this.dialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.model.teacher_name?.trim()) {
            if (this.model.teacher_id) {
                this.dataSources[this.findIndexById(this.model.teacher_id)] = this.model;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Teacher Updated', life: 3000 });
            } else {
                this.model.teacher_id = this.createId();
                this.dataSources.push(this.model);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Teacher Created', life: 3000 });
            }

            this.dataSources = [...this.dataSources];
            this.dialog = false;
            this.model = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.dataSources.length; i++) {
            if (this.dataSources[i].teacher_id === id) {
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
