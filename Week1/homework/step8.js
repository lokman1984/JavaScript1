"use strict";
let string1 = "Amsterdam";
let string2 = "Eindhoven";
let Object1 = {
    province:"North Brabant",
    country:"Ntherland"
};
let object2 = {
    province:"North Holland",
    country:"Ntherland" 
};
if(typeof string1===typeof string2){
  console.log("string1 same string2 ");
}else{
  console.log("string1 DIFFERENT string2 ");
};

if(typeof Object1 === typeof object2){
  console.log("Object1 same Object2 ");
}else{
  console.log("Object1 DIFFERENT Object1 ");
};

if(typeof string1 === typeof Object1){
  console.log("string1 same Object1");
}else{
  console.log("string1 different Object1");
};
if(typeof string2 === typeof object2){
confirm.log("string2 same object2");
}else{
  console.log("string2 different object2");
};
if(typeof string1 === typeof object2){
  console.log("string1 same object2");
}else{
  console.log("string1 different object2");
};
if(typeof string2 === typeof Object1){
  console.log("string2 same Object1")
}else{
  console.log("string2 different Object1")
}
