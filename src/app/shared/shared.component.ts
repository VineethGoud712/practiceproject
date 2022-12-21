import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit ,OnChanges{

 @Input()myInput!:String;
  checkBoxFlag: boolean = false;
  msg:String ="10:16";
  d3: any;
  constructor(private toast:ToastrService) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("On changes called.." + JSON.stringify(changes));
  }
 
  count:number = 0;
  inputval:any;
  dumyMsg:any = [] ;
  dumyMsg2:any;
  dumyMsg3:any;
  dumyMsg4:any;
  dumyMsg5:any;
  d1:any;
  d2:any;
  d4:any;
  d5:any;
  ngOnInit(): void {

    // var pp = document.createElement('iframe');
    // document.body.appendChild(pp);
    // pp.src = 'https://www.w3schools.com/';
    // pp.height = '800px';
    // pp.width = '1000px';
    // pp.focus();
    // pp.contentWindow?.print();
    this.getData();
    this.getData2();
   
  //  this.dumyMsg =  this.inputval.split(':')
  //   this.d1 = this.dumyMsg[0];
  //   this.d2 = this.dumyMsg[1];

  //   alert("11111 = " + this.d1);
  //   alert("2222 =  " + this.d2);


  //   this.dumyMsg2 =  parseInt(this.d2) + 30;
  //   alert("3333 = " + this.dumyMsg2)

  //   if(this.dumyMsg2 >= 60){
  //      this.d3 = parseInt(this.d1)+1;
  //      this.dumyMsg2 = " ";
  //      this.dumyMsg3 = "00";
  //      this.dumyMsg4 = this.d3 +":" +  this.dumyMsg3;
  //      alert("orignal time  " + this.dumyMsg4)
  //   }else{
  //       this.dumyMsg4 =    this.d1 + ":" +this.dumyMsg2;
  //       alert("original time  " + this.dumyMsg4);
  //   }
      
  }
  // @Input() product!:[] ;

  increment(){
    this.count++;
  }

  decrement(){
   this.count--;
  }

  add(){
    this.dumyMsg =  this.inputval.split(':')
    this.d1 = this.dumyMsg[0];
    this.d2 = this.dumyMsg[1];
    alert("11111 = " + this.d1);
    alert("2222 =  " + this.d2);
    this.dumyMsg2 =  parseInt(this.d2) + 30;
    alert("3333 = " + this.dumyMsg2)
    if(this.d1 == "00" || this.d1[1] <=9){
      alert("d11111  " + this.d1)
      if(this.dumyMsg2 >= 60){
         this.d3 = parseInt(this.d1)+1; 
         this.d5 = "0"+this.d3;
         alert("d35 === "+ this.d5);
         this.dumyMsg2 = " ";
         this.dumyMsg3 = parseInt(this.d2)- 30;
         alert(this.dumyMsg3)
         if(this.dumyMsg3 == 0 || this.dumyMsg3 <= 9){
          this.dumyMsg4 = "0"+this.d3 +":" + 0 + this.dumyMsg3;
          alert("ap1 " + this.dumyMsg4)
       }else {
         this.dumyMsg4 = this.d3 +":" +  this.dumyMsg3;
         alert("orignal time  " + this.dumyMsg4);
        }
      }else{ 
        this.dumyMsg4 =    this.d1 + ":" +this.dumyMsg2;
        alert("original time  " + this.dumyMsg4);
    }
    }else {

    if(this.dumyMsg2 >= 60){
       this.d3 = parseInt(this.d1)+1;
       this.dumyMsg2 = " ";
       this.dumyMsg3 = parseInt(this.d2)- 30;
       alert(this.dumyMsg3)
       if(this.dumyMsg3 == 0 || this.dumyMsg3 <= 9){
         this.dumyMsg4 = this.d3 +":" + 0 + this.dumyMsg3;
         alert("ap1 " + this.dumyMsg4)
      }else {
        this.dumyMsg4 = this.d3 +":" +  this.dumyMsg3;
        alert("orignal time  " + this.dumyMsg4);
       }
    }else{ 
        this.dumyMsg4 =    this.d1 + ":" +this.dumyMsg2;
        alert("original time  " + this.dumyMsg4);
    }
  }
  }

  createIframe(){
          var prtContent:any = document.getElementById("div") || '';
          var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
           WinPrint?.document.write(prtContent.innerHTML);
           WinPrint?.document.close();
           WinPrint?.focus();
          WinPrint?.print();
          WinPrint?.close();
          prtContent.style.display = 'none';
  }
box:any;
data:any;
  getData(){
    this.data= [
      {id:1,name : 'vineeth' ,class:'A',checked : false},
      {id:2,name : 'Deepak' ,class:'B',checked : false},
      {id:3,name : 'karthik' ,class:'A',checked : false},
      {id:4,name : 'sunny' ,class:'C',checked : false},
      {id:5,name : 'Pavan' ,class:'F',checked : false},
    ]
  }

data2:any;
  getData2(){
    this.data2= [
      {id:1,name : 'vineeth' ,class:'A',checked : false},
      {id:2,name : 'Deepak' ,class:'B',checked : false},
      {id:3,name : 'karthik' ,class:'A',checked : false},
      {id:4,name : 'sunny' ,class:'C',checked : true},
      {id:5,name : 'Pavan' ,class:'F',checked : false},
    ]
  }

  checkAllBoxs(event:any){
    console.log(event);
      if(event.target.checked == true){
        alert("true")
         this.box = true;
      }else{
        alert("false")
        this.box = false;
         
      }
  }


  checkAllCheckBox(ev: any) { 
		this.data.forEach((x:any) => x.checked = ev.target.checked)
	}

	 isAllCheckBoxChecked() {
		return this.data.every((p:any) => p.checked );
   
    
	}

  onlyCheckedvalues:any = [];
  submit(){
    this.onlyCheckedvalues = [];
    let count =0;
    this.data.forEach( (x:any) => {
      if(x.checked == true){
        this.onlyCheckedvalues.push(x);
        count++;
      }
    });
    if(count == 0){
      this.toast.warning('Please check aleast one Row','WARNING')
    }
  }

  uncheckOther(chk:any, event:any) {
    if (event) {
      //uncheck all
      this.data2.forEach((x:any) => {
        if (x.checked == true)
          x.checked = false;
      })
      //check the selected
      if (chk.checked == true) {
        alert(chk.checked)
        chk.checked = false;
      } else {
        alert(chk.checked)
        chk.checked = true;
      }
    }
    }



    
}


