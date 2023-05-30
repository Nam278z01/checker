import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../api/student';

@Injectable()
export class StudentService {

    constructor(private http: HttpClient) { }

    getStudents() {
        return this.http.get<any>('assets/demo/data/students.json')
            .toPromise()
            .then(res => res.data as Student[])
            .then(data => data);
    }
}
