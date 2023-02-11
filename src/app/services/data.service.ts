import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry, shareReplay } from 'rxjs';
import { SvocData } from '../models/svoc-data';
import { environment } from 'src/environments/environment';

const dummyData: SvocData[] =[
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseId: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
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
  private rows = 5000;

  constructor(private http: HttpClient) {}

  getAllSvocDta(): Observable<SvocData[]> 
  {
    return this.http.get<SvocData[]>(`${this.baseUrl}?pageNumber=0&pageSize=${this.rows}`, {headers: this.headers}).pipe(retry(1), shareReplay());
  }

  getSvocDataByEId(E_id: string): Observable<SvocData[]> {
    return this.http.get<SvocData[]>(`${this.baseUrl}/eids?enterprise_id=${E_id}`, {headers: this.headers}).pipe(retry(1), shareReplay());
  }

  getSvocDataByBpId(bp_id: string): Observable<SvocData[]>{
    return this.http.get<SvocData[]>(`${this.baseUrl}/sysids?system_id_number=${bp_id}`, {headers: this.headers}).pipe(retry(1), shareReplay());
  }

  getDummyData(){
    return dummyData;
  }

}
