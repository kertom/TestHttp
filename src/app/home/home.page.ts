import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
declare var Buffer;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sURL: string = 
  'https://dl.dropboxusercontent.com/s/iaxtm7efi73arud/dummy.pdf?dl=0'     // Normal dropbox.com domain would give CORS error
  oRequest = new XMLHttpRequest();
  silentDownload: Boolean = false;                         // silentDownload hides link and clicks without user input
  saveMode: Boolean = true;                                // toggles between save and read functions
  blob: Blob;
  blobText: string;
  //console.clear();
  //console.log('Running...');
  
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
      console.log('uri original= '+uri);
      //this.downloadAndRead(uri);
      this.downloadAndRead(uri);
    }
  })
  .catch(err => console.log('Error0=', err));
  console.log('hei5');
}

//2nd approach
/*downloadAndOpenPdf(uri) {
  console.log('IN SAVE MODE. Creating blob link...');
  this.oRequest.open('GET', this.sURL);                                   // Creates the HTTP request
  this.oRequest.responseType = 'blob';
  var _this = this;
  this.oRequest.onload = function() {
    console.log('hei4');
    _this.blob = this.response;                                       // Save response to blob object
    _this.readBlob();                                                 // Read the blob if we like
    console.log('rb2');
    /*const link = document.createElement('a');
    link.href = URL.createObjectURL(_this.blob);                      // Creates a blob link
    console.log('rb3');
    if (!_this.silentDownload) link.innerHTML = 'Download the file';
    link.download = 'my-dummy-file.pdf';                        // Gives the file a name
    console.log('rb4');
    document.body.appendChild(link);
    console.log('hei5');
    
    if (_this.silentDownload){
      console.log('Silently downloading the file...');
      link.click();                                             // Automatically triggers the link
    }/  
  }
  //console.log('rb6');

  this.oRequest.send();                                              // Initiates the HTTP request
}*/
/*downloadAndRead(uri) {
  console.log('IN READ MODE. Reading file');
  this.oRequest.open('GET', this.sURL, false);
  var _this = this;
  this.oRequest.onreadystatechange = function(oEvent){  
    if (_this.oRequest.readyState === 4) {
      if (_this.oRequest.status === 200) {
        console.log(_this.oRequest.responseText);           // This is the document contents
      } else {
        console.log('Error', _this.oRequest.statusText);    // e.g. if document is not found
      }
    }
  }

  //    oRequest.setRequestHeader('User-Agent',navigator.userAgent); 
  try {
    this.oRequest.send(null);
  } catch (err) {
    console.error(err);
  }
}
readBlob(){
  console.log('Reading the blob...')
  const reader = new FileReader();
  var _this = this;
  reader.addEventListener('loadend', () => {
    console.log('rb1');
    _this.blobText = ''+reader.result;
    console.log(this.blobText);
  });
  //reader.readAsText(_this.blob);
}*/

//2nd approach
downloadAndRead(dropBoxUrl:string) {
    console.log('IN READ MODE. Reading file');
    dropBoxUrl = dropBoxUrl.replace("/private","file:///private");
    console.log('dropboxurl=',dropBoxUrl);
    this.file.resolveLocalFilesystemUrl(dropBoxUrl).then(
      (files) => {
        console.log('pdf file found: ', files.toURL());
        this.readPdfFile(files);
        //this.readBlob();
        /*var reader = new FileReader();
        console.log('pdf file found2');
        var _this = this;
        console.log('pdf file found3');
        reader.addEventListener('loadend', () => {
          console.log('pdf file found4');
          _this.blobText = ''+reader.result;
          console.log('this.blobText: ',this.blobText);
        });*/
        //reader.readAsText(_this.blob);
        
      }
      ).catch(
      (err) => {
          console.log('pdf file not found', err);
      });
}
private readPdfFile(file: any) {
  const reader = new FileReader();
  reader.onloadend = () => {
      const pdfBlob = new Blob([reader.result], {type: file.type});
      console.log('pdfBlob: ',pdfBlob);
  };
  reader.readAsArrayBuffer(file);
}

readBlob(){
  console.log('Reading the blob...')
  const reader = new FileReader();
  var _this = this;
  reader.addEventListener('loadend', () => {
    _this.blobText = ''+reader.result;
    console.log(this.blobText);
  });
  //reader.readAsText(_this.blob);
}


}
