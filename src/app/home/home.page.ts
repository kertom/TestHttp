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
      this.downloadAndRead(uri);
    }
  })
  .catch(err => console.log('Error0=', err));
  console.log('hei5');
}

//1st approach
downloadAndRead(currentUrl) { 
  ////var/mobile/Containers/Data/Application
  //currentUrl=currentUrl.
  //replace("/private","file://");//file://
  
  console.log('download pdf1 currentUrl= '+currentUrl);
  //currentUrl='file:///var/containers/bundle/Applications/var/mobile/Containers/Data/Application/'+
  //'B7C41B3B-759E-477F-997B-CA0BE4A41D1C/AppData/tmp/DysEditor-Inbox/'+
  //'myfile.pdf';
  //currentUrl=this.sURL;
  let downloadUrl =currentUrl;//'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
  let path = this.file.dataDirectory;
  
  console.log('path2= '+path);
  const transfer = this.fileTransfer.create();
  //const filePath = this.file.dataDirectory + fileName; 
  //currentUrl=currentUrl.replace("/private","file://");
  var url = encodeURI(currentUrl);
  console.log('this._http= '+this._http);
  this.downloadAndRead2(downloadUrl);
  
}
downloadAndRead2(dropBoxUrl:string) {
    console.log('IN READ MODE. Reading file');
    dropBoxUrl = dropBoxUrl.replace("/private","file:///private");
    console.log('dropboxurl=',dropBoxUrl);
    this.file.resolveLocalFilesystemUrl(dropBoxUrl).then(
      (files) => {
        console.log('pdf file found: ', files.toURL());
        let reader = new FileReader();
        //let blobText=null;
        reader.addEventListener('loadend', () => {
          //blobText = reader.result;
          console.log('blobText=', reader.result);
        });
        /*reader.onloadend = function() {
          //console.log('this= '+this);
          console.log("Successful file read: " + this.result);
          var blob = new Blob(<BlobPart[]><unknown> new Uint8Array(<ArrayBuffer>
          reader.result),{ type: "application/pdf" });
          //reader.readAsArrayBuffer(<any>files);
          console.log('blob:', blob);
        };*/
      //console.log('blob= '+files);
      }
      ).catch(
      (err) => {
          console.log('pdf file not found');
      });
    }
  }



    /*this.oRequest.open('GET', dropBoxUrl, false);//this.sURL
    var _this = this;
    this.oRequest.onreadystatechange = function(oEvent){  
      console.log('request status= '+_this.oRequest.readyState);
      if (_this.oRequest.readyState === 4) {
        console.log('_this.oRequest.status= '+_this.oRequest.status);
        if (_this.oRequest.status === 200) {
          console.log('Success= '+_this.oRequest.responseText);           // This is the document contents
        } else {
          console.log('Error= '+ _this.oRequest.statusText);    
          // e.g. if document is not found
        }
      }
    }  
    
    //    oRequest.setRequestHeader('User-Agent',navigator.userAgent); 
    try {
      console.log('hei5');
      this.oRequest.send(null);
    } catch (err) {
      console.error('err2= '+err);
    }*/
    
    //setTimeout(() => {
     //dropBoxUrl='/var/mobile/Containers/Data/Application/67EF7B71-CEB8-4788-B98B-191D92BD1430/tmp/TestHttp-Inbox/myfile.pdf';
      //let path = this.file.dataDirectory;
    //this._http.downloadFile(dropBoxUrl, {},{}, path + 'myfile2.pdf'
    //).then(
    
    
    /*function(entry) {
      entry.file(function (file) {
      var reader = new FileReader();
      reader.onloadend = function() {
      console.log('this= '+this);
      console.log("Successful file read: " + this.result);
      var blob = new Blob(<BlobPart[]><unknown>new Uint8Array(<ArrayBuffer>
      reader.result), 
      { type: "application/pdf" });
      };
      console.log('hei1');
      reader.readAsArrayBuffer(file);
      }, function(err) {
      console.log('err2= '+err);
      });
    };
    }, 500);*/
    


//}
/*this._http.downloadFile(currentUrl, {},{}, path + 'myfile2.pdf'
  ).then(
  function(entry) {
  entry.file(function (file) {
  var reader = new FileReader();
  reader.onloadend = function() {
  console.log('this= '+this);
  console.log("Successful file read: " + this.result);
  var blob = new Blob(<BlobPart[]><unknown>new Uint8Array(<ArrayBuffer>
  reader.result), 
  { type: "application/pdf" });
  };
  console.log('hei1');
  reader.readAsArrayBuffer(file);
  }, function(err) {
  console.log(err);
  });
  }
  ).catch(err => {
  // prints 403
  console.log('new error block ... ', err.status);
  // prints Permission denied
  console.log('new error block ... ', err.error);
  });*/