import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { File } from "@ionic-native/file/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { ItenraryService } from "src/app/itenrary.service";
import { Itenrary } from "src/app/itenrary.model";
import { Platform } from "@ionic/angular";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FacebookService, InitParams,UIParams, UIResponse } from 'ngx-facebook';
import { ToastController } from '@ionic/angular';

declare let window: any;
declare var FB: any;
var fileName = "myPdfFile.pdf";

var options = {
    documentSize: 'A4',
    type: 'base64'
};

var pdfhtml = '<html><body style="font-size:120%">This is the pdf content</body></html>';
var pdf:any;
function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
  }

var blob = new Blob(byteArrays, {type: contentType});
return blob;
}


function savebase64AsPDF(folderpath,filename,content,contentType){
// Convert the base64 string in a Blob
var DataBlob = b64toBlob(content,contentType,512);

console.log("Starting to write the file :3");

window.resolveLocalFileSystemURL(folderpath, function(dir) {
  console.log("Access to the directory granted succesfully");
  dir.getFile(filename, {create:true}, function(file) {
      console.log("File created succesfully.");
      file.createWriter(function(fileWriter) {
          console.log("Writing content to file");
          fileWriter.write(DataBlob);
      }, function(){
          alert('Unable to save file in path '+ folderpath);
      });
  });
});
}
@Component({
  selector: "app-decide",
  templateUrl: "./decide.page.html",
  styleUrls: ["./decide.page.scss"]
})
export class DecidePage implements OnInit {
  iten_id: number;
  pdfObj = null;
  iten: Itenrary;
  stops: any[];
  text:string="check it out";

  constructor(
    private route: ActivatedRoute,
    private plt: Platform,
    private file: File,
    private fileOpener: FileOpener,
    private itenService: ItenraryService,
    private fb: FacebookService,
    private socialSharing:SocialSharing,
    public toastController:ToastController
  ) {
    let initParams: InitParams = {
      appId: '338213237103473',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.iten_id = +params["id1"];
    });
    this.iten = this.itenService.getItenrary(this.iten_id);
    console.log(this.iten)
    this.stops = this.iten.paths;
  }


   async share(){
     const toast = await this.toastController.create({
       message:'The PDF was sent to your email',
       duration:3000,
       animated:true,
       position:'top'
     });
     return await toast.present();
    // pdf.fromData(pdfhtml , options)
    // .then(function(base64){
    //     // To define the type of the Blob
    //     var contentType = "application/pdf";

    //     // if cordova.file is not available use instead :
    //     // var folderpath = "file:///storage/emulated/0/Download/";
    //     var folderpath = cordova.file.externalRootDirectory + "Download/"; //you can select other folders
    //     savebase64AsPDF(folderpath, fileName, base64, contentType);
    // })
    // .catch((err)=>console.error(err));

    //  const linkSource = 'data:application/pdf;base64,' + 'JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4+DQplbmRvYmoNCg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoNCg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIgNiAwIFIgXSANCj4+DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Qcm9jU2V0IDggMCBSDQo+Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQovQ29udGVudHMgNSAwIFINCj4+DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBUag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4+DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAwXQ0KL0NvbnRlbnRzIDcgMCBSDQo+Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGggNjc2ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2UgMS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3JlIHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQgL0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4+DQplbmRvYmoNCg0KMTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20vcmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAwMDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBuDQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAwMDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFpbGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4+DQoNCnN0YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg==\n';
    //     const downloadLink = document.createElement("a");
    //     const fileName = "sample.pdf";

    //     downloadLink.href = linkSource;
    //     downloadLink.download = fileName;
    //     downloadLink.click();
  // downloadPdf() {
  //   var docDefinition = {
  //     content: [
  //       { text: "My Itenrary", style: "header" },
  //       { text: "Departure Date", style: "subheader" },
  //       { text: this.iten.departure_date },
  //       { text: "Arrival Date", style: "subheader" },
  //       { text: this.iten.arrival_date },

  //       { text: "Title", style: "subheader" },
  //       { text: this.iten.title },

  //       { text: "Destination", style: "subheader" },
  //       this.iten.dest,

  //       { text: this.iten.description, style: "story", margin: [0, 20, 0, 20] },
  //       { text: "Stops", style: "subheader" },
  //       this.table(this.stops, [
  //         "origin",
  //         "departure_date",
  //         "arrival_date",
  //         "dest"
  //       ]),
  //       {

  //       }
  //     ],
  //     styles: {
  //       header: {
  //         fontSize: 18,
  //         bold: true
  //       },
  //       subheader: {
  //         fontSize: 14,
  //         bold: true,
  //         margin: [0, 15, 0, 0]
  //       },
  //       story: {
  //         italic: true,
  //         alignment: "center",
  //         width: "50%"
  //       }
  //     }
  //   };
  //   this.pdfObj = pdfMake.createPdf(docDefinition);
  //   if (this.plt.is("cordova")) {
  //     this.pdfObj.getBuffer(buffer => {
  //       var blob = new Blob([buffer], { type: "application/pdf" });

  //       // Save the PDF to the data Directory of our App
  //       this.file
  //         .writeFile(this.file.dataDirectory, "myletter.pdf", blob, {
  //           replace: true
  //         })
  //         .then(fileEntry => {
  //           // Open the PDf with the correct OS tools
  //           this.fileOpener.open(
  //             this.file.dataDirectory + "myletter.pdf",
  //             "application/pdf"
  //           );
  //         });
  //     });
  //   } else {
  //     // On a browser simply use download!
  //     this.pdfObj.download();
  //   }
  // }
  // buildTableBody(data, columns) {
  //   var body = [];

  //   body.push(columns);

  //   data.forEach(row => {
  //     var dataRow = [];

  //     columns.forEach(column => {
  //       if (row[column]) {
  //         dataRow.push(row[column]);
  //       } else {
  //         dataRow.push("");
  //       }
  //     });

  //     body.push(dataRow);
  //   });

  //   return body;
  // }

  // table(data, columns) {
  //   return {
  //     table: {
  //       headerRows: 1,
  //       body: this.buildTableBody(data, columns)
  //     }
  //   };
  // }
  // shareFacebook(){
  //   this.socialSharing.shareViaFacebook(this.text).then(()=>{

  //   }).catch(e=>{

  //   })
  // }
  // share(url: string) {

  //   let params: UIParams = {
  //     href: 'https://github.com/zyra/ngx-facebook',
  //     method: 'share'
  //   };

  //   this.fb.ui(params)
  //     .then((res: UIResponse) => console.log(res))
  //     .catch((e: any) => console.error(e));

  // }
   }
}
