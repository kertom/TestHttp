import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _http: HTTP,
    private filePicker: IOSFilePicker,
    private httpClient:HttpClient
    ) {}

ngOnInit(){
  
}
getTextOfFile(currentUrl:any){
  //currentUrl=currentUrl.replace("/private","file://");
  console.log('currentUrl= '+currentUrl);
  let path = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
  let file = currentUrl.substring(currentUrl.lastIndexOf('/')+1,
   currentUrl.length);
 console.log('hei1 currentUrl= '+currentUrl);
 console.log('hei3 path= '+path);
 this.httpClient.get(currentUrl)
           .subscribe(data => {
             console.log('my data: ', data);
           },
           error => console.log('oops= ', JSON.stringify(error)));
           
 
 /*this._http.downloadFile(
  'https://google.com/',
  { id: '12', message: 'test' },
  { Authorization: 'OAuth2: token' },
  'file:///somepicture.jpg'
)
  .then(response => {
    // prints 200
    console.log('response status correct= '+response.status);
  })
  .catch(response => {
    // prints 403
    console.log('response status error= '+response.status);
    // prints Permission denied
    console.log('response error= '+response.error);
  });
 //this._http.get(currentUrl,
//'file:///var/mobile/Containers/Data/Application/56E4D9F6-EC77-421E-9D7B-4AA2C969C3A3/tmp/DysEditor-Inbox/testdoc2.rtf',
/*this._http.sendRequest(currentUrl,
{
method: 'post',
data: { id: 12, message: 'test' },
headers: { Authorization: 'OAuth2: token' },
timeout: 5000
}
)
.then(response => {
// prints 200
console.log(response.status);
})
.catch(response => {
// prints 403
console.log(response.status);

// prints Permission denied
console.log(response.error);
});*/   

console.log('hei4');

  
}      
chooseFile(){
  this.filePicker.pickFile()
  .then(uri =>{
    console.log("uri= "+uri);
    var ending=uri.substring(
      uri.length-3,3);
    console.log("ending= "+ending);
    if(ending =='pdf'){
      //this.downloadAndOpenPdf();
      console.log("ending2= ");

    }else{
      this.getTextOfFile(uri);
    }
  })
  .catch(err => console.log('Error0=', err));
  console.log('hei5');
}
}
