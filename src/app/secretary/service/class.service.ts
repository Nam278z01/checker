import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Class } from '../api/class';

@Injectable()
export class ClassService {

    constructor(private http: HttpClient) { }

    getClasses() {
        return this.http.get<any>('assets/demo/data/classes.json')
            .toPromise()
            .then(res => res.data as Class[])
            .then(data => data);
    }
}
