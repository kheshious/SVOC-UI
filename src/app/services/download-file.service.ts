import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor() { }

  downloadReport(data: any) {
    const csvData = this.generateCsvData(data);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    const fileName = 'report.csv';
    FileSaver.saveAs(blob, fileName);
  }
  
  generateCsvData(data: any) {
    const rows = data.nativeElement.rows;
    let csvData = '';
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].cells;
      let row = '';
      for (let j = 0; j < cells.length; j++) {
        row += cells[j].innerText.trim() + ',';
      }
      csvData += row.slice(0, -1) + '\n';
    }
    return csvData;
  }
}
