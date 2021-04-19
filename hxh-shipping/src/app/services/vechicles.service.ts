import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IVechicle } from '../shared/models/common.interface';

@Injectable({
  providedIn: 'root'
})
export class VechicleService {

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public fetchVechicles(): Observable<Array<IVechicle> | never> {
    return this.httpClient.get(`${ this.REST_API_SERVER }/vechicles`).pipe(
      map(resp => (resp as Array<IVechicle>))
    );
  }
}
