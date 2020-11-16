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
downloadAndOpenPdf(currentUrl) { 
  console.log('download pdf1');
  let downloadUrl =currentUrl;//'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
  let path = this.file.dataDirectory;
  const transfer = this.fileTransfer.create();
  //const filePath = this.file.dataDirectory + fileName; 
  //currentUrl=currentUrl.replace("/private","file://");
  var url = encodeURI(currentUrl);
  console.log('this._http= '+this._http);
  this._http.downloadFile(currentUrl, {}, path + 'myfile.pdf', 
  ''+function(entry) {
  entry.file(function (file) {
  var reader = new FileReader();
  reader.onloadend = function() {
  console.log('this= '+this);
  console.log("Successful file read: " + this.result);
  var blob = new Blob(new Uint8Array(reader.result), 
  { type: "application/pdf" });
  };
  console.log('hei1');
  reader.readAsArrayBuffer(file);
  }, function(err) {
  console.log(err);
  })});
}
}
