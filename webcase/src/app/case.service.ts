import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable }  from '@angular/core';

@Injectable()
export class CaseService{
    base_url: string = "localhost:4069/"
    url: string = "http://"+this.base_url+"api/"

    constructor (private http: HttpClient){}

    request(object: any, path: string) :Observable<any> {
        let body = JSON.stringify(object)

        return this.http.post(this.url + path, 
            body, {headers: this.header()})
    }

    header(): HttpHeaders {
        let headers = new HttpHeaders({'Content-Type': 'application/json'})

        return headers
    }

z

    get_request(path) :Observable<any>{
        return this.http.get(this.url + path)
    }
}
