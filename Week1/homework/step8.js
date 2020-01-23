"use strict";
let firstNumber = 123;
let secondString = "123";
let thirdObjects = [1,2,3,];
let fourArray = {a:1,b:2,c:3};
if(typeof firstNumber===typeof secondString){
  console.log("firstNumber same secondString ");
}else{
  console.log("firstNumber DIFFERENT secondString ");
};
if(typeof thirdObjects === typeof fourArray){
  console.log("thirdObjects same fourArray ");
}else{
  console.log("thirdObjects DIFFERENT fourArray ");
};
if(typeof firstNumber === typeof thirdObjects){
  console.log("firstNumber same thirdObjects");
}else{
  console.log("firstNumber different thirdObjects");
};
if(typeof secondString === typeof fourArray){
confirm.log("secondString same fourArray");
}else{
  console.log("secondString different fourArray");
};
if(typeof firstNumber === typeof fourArray){
  console.log("firstnumber same fourarray");
}else{
  console.log("firstnumber different fourarray");
};
if(typeof secondString === typeof thirdObjects){
  console.log("secondstring same thirdobject")
}else{
  console.log("secondstring different thirdobject")
}

