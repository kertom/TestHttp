import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _http: HTTP,
    private filePicker: IOSFilePicker,
    private file:File,
    private fileTransfer: FileTransfer,
    private httpClient:HttpClient
  ) {}
  
//here we choose a file from the file picker
chooseFile(){
  this.filePicker.pickFile()
  .then(uri =>{
    console.log("uri= "+uri);
    var ending=uri.substring(
      uri.length-3,3);
    console.log("ending= "+ending);
    //if it is a pdf file ,then we download it
    if(ending =='pdf'){
      //this.downloadAndOpenPdf();
      console.log("ending2= ");

    }else{
      this.downloadPdf(uri);
    }
  })
  .catch(err => console.log('Error0=', err));
  console.log('hei5');
}
//here we download the chosen pdf file.
downloadPdf(currentUrl) { 
  let downloadUrl =currentUrl;//'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
  let path = this.file.dataDirectory;
  const transfer = this.fileTransfer.create();
  var url = encodeURI(currentUrl);
  this._http.downloadFile(currentUrl, {}, {},path + 'myfile.pdf').
  then(
    response => {
    // prints 200
    console.log('success block...', response);
 }).catch(err => {
     // prints 403
     console.log('error block ... ', err.status);
     // prints Permission denied
     console.log('error block ... ', err.error);
 });
}
}
