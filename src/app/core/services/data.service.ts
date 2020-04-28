import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

    constructor(private _http: HttpClient) { }

    getGroups(): Observable<any> {
        return this._http.get('assets/json/groups.json');
    }

}