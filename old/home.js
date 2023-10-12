/*jslint browser: true*/
/*global $ */





  function toggleDiv(divid){
  
  x = document.getElementById(divid).style;
      
      
    if(x.display == 'none' || x.display == ''){
      x.display = 'block';     
    }else{
      x.display = 'none';
    }
    
  }

