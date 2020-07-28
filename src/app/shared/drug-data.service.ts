import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Drug } from '../shared/drug-data.model';

@Injectable({
    providedIn: 'root',
})

export class DrugDataService {
    // host and port will be replace by tekton pipelines
    host = 'DPD_SERVER_HOSTNAME'; 
    port = 80;

    constructor(private http: HttpClient) {
        this.http = http;
    }

    getDrugByBrandName(serachText: string) : Observable<Drug[]> {
        // return an Observable for a list of drugs by brand name
        return this.http.get<Drug[]>('http://' + this.host + ':' + this.port + '/api/drugs/brand_name/' + serachText)
    }
  
}


