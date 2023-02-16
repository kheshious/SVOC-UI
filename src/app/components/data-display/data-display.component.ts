import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SvocData } from 'src/app/models/svoc-data';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';


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
  reload: boolean = false;
  searchId: string = '';
  searchForm = this.formBuilder.group({
    ID: '',
  });
  noRecords: boolean = false;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getSvocData();
    // this.tableData = this.dataService.getDummyData();
  }

  reloadTheWindow() {window.location.reload();}

  onSubmit(){
    let id = this.searchForm.value.ID + ',';
    if(id?.indexOf(',')){
      id = id.substring(0, id.indexOf(","));
    }

    if(id?.length === 30){
      this.idType = 'Enterprise_ID';
       this.getDataByEId(this.searchForm.value.ID);
      // this.tableData = this.dataService.dummyError();
    }
    else if(id?.length === 10 || id?.length === 9){
      this.idType = 'Business_partner_ID';
      this.getDataByBPId(this.searchForm.value.ID);
      // this.tableData = this.dataService.dummyError();
    }
    else{
      this.idType = 'Invalid ID';
      this.noRecordsFound();
      this.updateProperties();
    }
  }

  getSvocData(){
    this.dataService.getAllSvocDta().subscribe((data: SvocData[]) => {
      this.tableData = data;
      this.reload = true;
    },(error: HttpErrorResponse) => {
      if(error.status == null){
          this.errorAlert(error.message, `Try reloading the browser`, 'error');
      }
      else{
        this.errorAlert(error.statusText, `Status: ${error.status}`, 'error');
      }
  });
  }

  getDataByEId(id: any){
    this.dataService.getSvocDataByEId(id).subscribe((data: SvocData[]) => {
      this.tableData = data;
      // this.reload = true;
      this.updateProperties()
    },(error:HttpErrorResponse)=>{
      this.noRecordsFound();
    });
  }

  getDataByBPId(id: any){
    this.dataService.getSvocDataByBpId(id).subscribe((data: SvocData[]) => {
      this.tableData = data;
      // this.reload = true;
      this.updateProperties()
    },(error:HttpErrorResponse)=>{
      this.noRecordsFound();
    });
  } 

  onTableDataChange(event: any) {
    this.page = event;
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  errorAlert(title: string, text: string, icon: string){
    Swal.fire({
      title: title,
      text: text,
      icon: 'error'
    }).then((result) => {
      this.reloadTheWindow();
    });
  }

  noRecordsFound(){
    this.tableData = [];
    this.reload = true;
    this.noRecords = true;
  }

  updateProperties(){
    // this.reload = true;
    this.noRecords = false;
  }

  clearIdType(){
    this.idType = '';
  }

}
