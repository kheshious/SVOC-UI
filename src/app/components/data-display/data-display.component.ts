import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SvocData } from 'src/app/models/svoc-data';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { DownloadFileService } from 'src/app/services/download-file.service';


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
  IDSelect: string='';
  fileID: string='';
  fileName: string = '';
  searchForm: FormGroup;
  noRecords: boolean = false;
  private f_id: string = '';
  lastIdSearched: string = '';
  fileText: string = "";
  fileDifference: string="";
  @ViewChild('table') table: any;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private downloadReportService: DownloadFileService
  ) {

    this.searchForm = this.formBuilder.group({
      ID: '',
    });
    
  }

  ngOnInit(): void {
    if(this.reload === true && this.tableData.length === 0 && this.searchForm.value.ID.length === 0){
      this.reload = false
    }
  }

  reloadTheWindow() {window.location.reload();}

  

  getDataByBusiness_partner_ID(){
    let id = this.searchForm.value.ID + ',';
    this.lastIdSearched = this.searchForm.value.ID;
    if(id?.indexOf(',')){
      id = id.substring(0, id.indexOf(","));
    }

    if(id?.length === 10 || id?.length === 9){
      this.idType = 'Business_partner_ID';
      this.getDataByBPId(this.searchForm.value.ID);
    }
    else{
      this.idType = 'Invalid Business_partner_ID';
      this.noRecordsFound();
      this.updateProperties();
    }
  }

  getDataByEnterprise_ID(){
    let id = this.searchForm.value.ID + ',';
    this.lastIdSearched = this.searchForm.value.ID;
    if(id?.indexOf(',')){
      id = id.substring(0, id.indexOf(","));
    }

    if(id?.length === 30){
      this.idType = 'Enterprise_ID';
       this.getDataByEId(this.searchForm.value.ID);
    }
    else if(id?.length === 25){
      this.idType = 'Super-EID';
      this.fileDifference='file-SEID';
       this.getDataByEId(this.searchForm.value.ID);
    }
    else{
      this.idType = 'Invalid Enterprise_ID';
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

  getSvocDataByFileBPID($event: any){
    const file = $event.target.files.item(0);
    this.dataService.getSvocDataByFileBPID(file).subscribe(res => {
      console.log(res);
      this.tableData= res;
      this.idType='Business_partner_ID';
      this.lastIdSearched = "....."
    },(Error:HttpErrorResponse)=>{
      this.noRecordsFound();
    });
  }

  getSvocDataByFileEID($event: any){
    const file = $event.target.files.item(0);
    this.dataService.getSvocDataByFileEID(file).subscribe(res => {
      this.tableData= res;
      this.idType = 'Enterprise_ID';
      this.fileDifference='fileEid';
      this.lastIdSearched = "....."
    },(Error:HttpErrorResponse)=>{
      this.noRecordsFound();
    });
  }

  getDataByEId(id: any){
    this.dataService.getSvocDataByEId(id).subscribe((data: SvocData[]) => {
      this.tableData = data;
      this.updateProperties()
    },(error:HttpErrorResponse)=>{
      this.noRecordsFound();
    });
  }

  getDataByBPId(id: any){
    this.dataService.getSvocDataByBpId(id).subscribe((data: SvocData[]) => {
      this.tableData = data;
      this.reload = true;
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
    this.reload = true;
    this.noRecords = false;
  }

  clearIdType(){
    this.idType = '';
  }

  dropDownOptions : string[] =
  [
    "EID file",
    "BPID file",
    "Enterprise-ID",
    "Business partner-ID"
  ];

  updateIDs(dropDown: any){
    this.searchForm.value.ID="";
    this.lastIdSearched = '';
    this.tableData = [];
    this.reload = false;
    this.idType = "";
    this.searchForm.get('ID')?.reset();
    this.IDSelect = dropDown.target.value;
  };

  downloadReport() {
   this.downloadReportService.downloadReport(this.table);
  }

}
