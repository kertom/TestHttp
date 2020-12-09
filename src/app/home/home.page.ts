import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { HttpClient } from '@angular/common/http';
import { File, Entry } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
declare var Buffer;
//import * as Blob from "blob";
declare var require: any;

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

// here we choose a file from the file picker
chooseFile(){
  this.filePicker.pickFile()
  .then(uri =>{
    console.log("uri= "+uri);
    let ending=uri.substring(
      uri.length-3,3);
    console.log("ending= "+ending);
    //if it is a pdf file ,then we download it
    if(ending =='pdf'){
      //this.downloadAndOpenPdf();
      console.log("ending2= ");

    }else{
      console.log('uri original= ', uri);
      // this.downloadAndRead(uri);
      this.downloadAndRead(uri);
    }
  })
  .catch(err => console.log('Error0=', err));
  console.log('hei5');
}

// 2nd approach
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

// 2nd approach
downloadAndRead(dropBoxUrl: string) {
    console.log('IN READ MODE. Reading file');
    dropBoxUrl = dropBoxUrl.replace("/private","file:///private");
    console.log('dropboxurl=',dropBoxUrl);
    this.file.resolveLocalFilesystemUrl(dropBoxUrl).then((entry: any)=>{
      entry.file(function (file) {
        let reader = new FileReader();
        console.log('hei1');
        reader.onloadend = function (encodedFile: any) {
          console.log('hei2 reader.result=  ', reader.result);
          // let src = encodedFile.target.result;
          // console.log('src1= ', src);
          // src = src.split('base64,');
          // console.log('src2= ', src);
          // const contentAsBase64EncodedString = src[1];
          // console.log('contentAsBase64EncodedString= ', 
          // contentAsBase64EncodedString);

        };
        console.log('hei3');
        reader.readAsBinaryString(file);
        console.log('hei4');

      })
    }).catch((error)=>{
      console.log(error);
    })
}
private readPdfFile(file: any, event) {
  const reader = new FileReader();
  console.log('reader is ',reader);
  reader.onloadend = () => {
    // const imgBlob = new Blob([reader.result], {type: file.type});
    console.log('reader2 is ', reader);
    
  };
  console.log('reader3 is ', reader);
  // var blob = new Blob(<BlobPart[]><unknown>new Uint8Array(<ArrayBuffer>
    // file.files[0]), 
    // { type: "application/pdf" });
    // };
    // console.log('new blob is ', file.blob());
    // const Blob = require('blob');
    // let b = new Blob(file);
    // console.log('b= ',b);  
    // reader.readAsDataURL(file); //files[0]
  console.log('event.target.result is ', event.target.result);
  

  /*reader.onloadend = () => {
      const pdfBlob = new Blob([reader.result], {type: file.type});
      console.log('pdfBlob: ',pdfBlob);
  };
  console.log('file.files= ',file.files);
  console.log('file.files[0]= ',file.files[0]);
  
  reader.readAsArrayBuffer(file.files[0]);*/
}

readBlob(){
  console.log('Reading the blob...')
  const reader = new FileReader();
  var _this = this;
  reader.addEventListener('loadend', () => {
    _this.blobText = ''+reader.result;
    console.log('reader7');
    console.log(this.blobText);
  });
  
  //reader.readAsText(_this.blob);
}


}
