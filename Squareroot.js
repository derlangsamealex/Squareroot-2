var tA,btn;
var bool=false;
var result=[0];
window.onload=function() {
  tA=document.getElementsByTagName("textarea")[0]; 
  btn=document.getElementsByTagName("button")[0]; 
  tA.value="Wurzel(2)=";
  btn.onclick=function() {
    if(bool) {
      bool=false;      
    }
    else {
      bool=true;
      calc(2);
    }
  }      
}
function calc(number) {
  while(product(result)[0]**2<number) {
    result[result.length-1]++;
  }
  result[result.length-1]--;
  result.push(0);
  result.length==2?tA.value+=result[result.length-2]+",":tA.value+=result[result.length-2];
  bool?setTimeout(calc,50,number):void(0);    
  tA.scrollTop=tA.scrollHeight;
}
function product(arr) {
  output=new Array(arr.length*2-1);
  output[-1]=0;
  output.fill(0);
  arr.reverse().forEach(function(num1,idx1) {
    arr.forEach(function(num2,idx2) {
      let idx12=output.length-idx1-idx2-1;
      let num12=output[idx12]+num1*num2;
      output[idx12-1]+=Math.floor(num12/10);
      output[idx12]=num12%10;
    });
  });   
  arr.reverse();
  return output;
}