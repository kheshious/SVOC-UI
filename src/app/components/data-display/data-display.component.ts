import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SvocData } from 'src/app/models/svoc-data';
// import {NgxPaginationModule} from 'ngx-pagination';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {

  sercheVal: any
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  tableData: SvocData[] = [];
  idType: string = '';
  searchId: string = '';
  searchForm = this.formBuilder.group({
    ID: ' ',
  });

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.searchForm.value);
    let id = this.searchForm.value.ID;

    if(id!.length > 20){
      this.idType = 'Enteprice_ID';
       //this.getDataByEId(id);
      this.tableData = this.dataService.getDummyData();
    }
    else{
      this.idType = 'Business_partner_ID';
      //this.getDataByBPId(id);
      this.tableData = this.dataService.getDummyData();
    }
    console.log("ID_type", this.idType);
  }

  getDataByEId(id: any){
    this.dataService.getSvocDataByEId(id).subscribe((data: SvocData[]) => {
      this.tableData = data;
    });
  }

  getDataByBPId(id: any){
    this.dataService.getSvocDataByBpId(id).subscribe((data: SvocData[]) => {
      this.tableData = data;
    });
  } 

  onTableDataChange(event: any) {
    this.page = event;
    // this.getData();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    // this.getData();
  }

}
