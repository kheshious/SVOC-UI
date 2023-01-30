import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {

  sampleData: any[]=[
    {
      E_id: '234567890hjk1',
      S_id: '23456fdrgthyfgt',
      bp_number: 234565,
      preffered_bp: '567tyu'
    },
    {
      E_id: '234567890hjk2',
      S_id: '23456fdrgthyfgt',
      bp_number: 234565,
      preffered_bp: '567tyu'
    },
    {
      E_id: '234567890hjk3',
      S_id: '23456fdrgthyfgt',
      bp_number: 234565,
      preffered_bp: '567tyu'
    },
    {
      E_id: '234567890hjk4',
      S_id: '23456fdrgthyfgt',
      bp_number: 234565,
      preffered_bp: '567tyu'
    },
    {
      E_id: '234567890hjk5',
      S_id: '23456fdrgthyfgt',
      bp_number: 234565,
      preffered_bp: '567tyu'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
