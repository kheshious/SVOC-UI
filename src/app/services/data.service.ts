import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry, shareReplay } from 'rxjs';
import {catchError, timeout} from 'rxjs/operators'
import { SvocData } from '../models/svoc-data';
import { environment } from 'src/environments/environment';

const dummyData: SvocData[] =[
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    superEid: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = environment.svocBaseUrl;
  private aKey = environment.key;
  private headers = new HttpHeaders({'Ocp-Apim-Subscription-Key': this.aKey});
  private rows = 10000;

  constructor(private http: HttpClient) {}

  getAllSvocDta()
  {
    return this.http.get<SvocData[]>(`${this.baseUrl}?pageNumber=0&pageSize=${this.rows}`, {headers: this.headers}).pipe(
      retry(0), shareReplay(), timeout(60000)
      );
  }

  getSvocDataByEId(E_id: string): Observable<SvocData[]> {
    return this.http.get<SvocData[]>(`${this.baseUrl}/eids?enterprise_id=${E_id}`, {headers: this.headers}).pipe(retry(0), shareReplay());
  }

  getSvocDataByBpId(bp_id: string): Observable<SvocData[]>{
    return this.http.get<SvocData[]>(`${this.baseUrl}/sysids?system_id_number=${bp_id}`, {headers: this.headers}).pipe(retry(0), shareReplay());
  }
  getSvocDataByFileBPID(file: any): Observable<any>
  {
    const uploadedFile = new FormData();
    // uploadedFile.append( 'file', file, file.name);
    uploadedFile.append( 'file', new Blob([file], { type: 'text/csv' }), file.name);
    return this.http.post<SvocData[]>(`${this.baseUrl}/upload-sysId-file`, uploadedFile, {headers: this.headers}).pipe(retry(0), shareReplay());
  }
  getSvocDataByFileEID(file: any): Observable<any>
  {
    const uploadedFile = new FormData();
    // uploadedFile.append( 'file', file, file.name);
    uploadedFile.append( 'file', new Blob([file], { type: 'text/csv' }), file.name);
    return this.http.post<SvocData[]>(`${this.baseUrl}/upload-enterpriseId-file`, uploadedFile, {headers: this.headers}).pipe(retry(0), shareReplay());
  }

  getDummyData(){
    return dummyData;
  }

  dummyError(){
    return [];
    ;
    
  }

  returntoken(){
    return this.headers;
  }

}
