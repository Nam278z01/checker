import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../api/teacher';

@Injectable()
export class TeacherService {

    constructor(private http: HttpClient) { }

    getTeachers() {
        return this.http.get<any>('assets/demo/data/teachers.json')
            .toPromise()
            .then(res => res.data as Teacher[])
            .then(data => data);
    }
}
