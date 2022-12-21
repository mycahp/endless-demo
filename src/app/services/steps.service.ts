import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StepsService {

  constructor(private http: HttpClient) { }

  getSteps(): Observable<any> {
    return this.http.get('https://tntrhl7mm0.execute-api.us-east-1.amazonaws.com/Prod/steps');
  }
}
