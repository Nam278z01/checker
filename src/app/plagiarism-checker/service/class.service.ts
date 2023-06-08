import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckerService {

    constructor(private http: HttpClient) { }

    download() {
        return this.http.get('download.docx', { headers: new HttpHeaders({
            'Content-Type': 'application/octet-stream',
            }), responseType: 'blob'})
    }
}
