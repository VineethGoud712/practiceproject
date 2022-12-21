export class Utill {

    public static  onlyNumbersAreAllowed1(event:any){
        console.log(event);
        
      console.log("event which" + event.which);
      
        const charCode = (event.which)?event.which : event.keyCode;
    
        if(charCode >  31 && (charCode < 48 || charCode > 57 )){
          if(charCode == 32){
           // this.toast.warning(' Space  are Restricted','WARNING');
            return false;
          }else{
            console.log("CharCode Restricted " + charCode);
            // this.toast.warning('Only Numbers are Allowed','WARNING');
            return false;
          }
         
        }
        return true;
      }


    public static  onlyCharacterAreAllowed(event:any){
        console.log(event);
      console.log("event which" + event.which);
      
        const charCode = (event.which)?event.which : event.keyCode;
    
        if((charCode >  64 && charCode < 91 ) ||  (charCode > 96 && charCode < 124 )){
          return true;
        }else{
        if(charCode == 32){
          //this.toast.warning('Space is Restricted','WARNING');
          return false;
        }else{
    
          //this.toast.warning('Only Charcters are Allowed','WARNING');
    
          return false;
        }
      }
       
      }


     public static onlyNumbersAndCharacterAreAllowed(event:any){
        console.log(event);
        
      console.log("event which" + event.which);
      
        const charCode = (event.which)?event.which : event.keyCode;
    
        if((charCode > 31 && charCode < 48) || (charCode >  122 && charCode < 126 ) ||  (charCode > 90 && charCode < 97 ) || (charCode > 57 && charCode < 65)){
          if(charCode === '32'){
            //this.toast.warning('Space Restricted','WARNING');
            return false;
          }else{
            //this.toast.warning('Specials Character are Restricted','WARNING');
          return false;
          }
          
        }
        
    
        return true;
      }

}
