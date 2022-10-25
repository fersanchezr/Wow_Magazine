
export const greeting=()=>{
let date = new Date(); 
let hours = date.getHours();
  
    if(hours >= 0 && hours < 12) return "Buenos dias";

    if(hours  >= 12 && hours < 19) return "Buenas tardes";
  
    if(hours  >= 19 && hours < 24) return "Buenas noches";  
  }
  