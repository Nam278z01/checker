
import { Component, OnInit } from '@angular/core';
import { Class } from '../../api/class';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ClassService } from '../../service/class.service';

@Component({
    templateUrl: './class-management.component.html',
    providers: [MessageService, ClassService]
})

export class ClassManagementComponent implements OnInit {

    dialog: boolean = false;

    deleteDialog: boolean = false;

    deleteSelectedDialog: boolean = false;

    dataSources: Class[] = [];

    model: Class = {};

    selected: Class[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    departments: any[] = [
        { label: 'Công nghệ phần mềm', value: 'Công nghệ phần mềm' },
        { label: 'Khoa học máy tính', value: 'Khoa học máy tính' }
    ];

    date: any;

    constructor(private classService: ClassService, private messageService: MessageService) { }

    ngOnInit() {
        this.classService.getClasses().then(data => this.dataSources = data);

        this.cols = [
            { field: 'class_id', header: 'Mã lớp' },
            { field: 'class_name', header: 'Tên lớp' },
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

    edit(model: Class) {
        this.model = { ...model };
        this.dialog = true;
    }

    delete(model: Class) {
        this.deleteDialog = true;
        this.model = { ...model };
    }

    confirmDeleteSelected() {
        this.deleteSelectedDialog = false;
        this.dataSources = this.dataSources.filter(val => !this.selected.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Class Deleted', life: 3000 });
        this.selected = [];
    }

    confirmDelete() {
        this.deleteDialog = false;
        this.dataSources = this.dataSources.filter(val => val.class_id !== this.model.class_id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Class Deleted', life: 3000 });
        this.model = {};
    }

    hideDialog() {
        this.dialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.model.class_name?.trim()) {
            if (this.model.class_id) {
                this.dataSources[this.findIndexById(this.model.class_id)] = this.model;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Class Updated', life: 3000 });
            } else {
                this.model.class_id = this.createId();
                this.dataSources.push(this.model);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Class Created', life: 3000 });
            }

            this.dataSources = [...this.dataSources];
            this.dialog = false;
            this.model = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.dataSources.length; i++) {
            if (this.dataSources[i].class_id === id) {
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
