import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry, shareReplay } from 'rxjs';
import { SvocData } from '../models/svoc-data';
import { environment } from 'src/environments/environment';

const dummyData: SvocData[] =[
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk1',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk2',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk3',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk4',
    super_EID: '23456fdrgthyfgt',
    systemIdNumber: 234565,
    prefered_BP: '567tyu'
  },
  {
    enterpriseid: '234567890hjk5',
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

  constructor(private http: HttpClient) {}

  getSvocDataByEId(E_id: string): Observable<SvocData[]> {
    return this.http.get<SvocData[]>(`${this.baseUrl}eids?enterprise_id=${E_id}`).pipe(retry(1), shareReplay());
  }

  getSvocDataByBpId(bp_id: string): Observable<SvocData[]>{
    return this.http.get<SvocData[]>(`${this.baseUrl}sysids?system_id_number=${bp_id}`).pipe(retry(1), shareReplay());
  }

  getDummyData(){
    return dummyData;
  }

}
