import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Drug } from '../shared/drug-data.model';

@Injectable({
    providedIn: 'root',
})

export class DrugDataService {
    // for docke-compose demo
    host = '192.168.206.130';
    port = 8080;
    
    // for minikube demo
    //host = '192.168.99.107';
    //port = 31408;

    // for minishift demo
    //host = 'dpd-server-ts-myproject.192.168.99.100.nip.io';  // take the route of the dpd-server
    //port = 80;
    
    // for openshift test
    //host = '...starter-us-east-1.openshiftapps.com';  // take the public url of dpd-server from openshift 
    //port = 80;

    constructor(private http: HttpClient) {
        this.http = http;
    }

    getDrugByBrandName(serachText: string) : Observable<Drug[]> {
        // return an Observable for a list of drugs by brand name
        return this.http.get<Drug[]>('http://' + this.host + ':' + this.port + '/api/drugs/brand_name/' + serachText)
    }
  
}


