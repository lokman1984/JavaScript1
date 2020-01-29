                    //Remove the comma
 let myString = "hello,this,is,a,difficult,to,read,sentence";

 
 console.log(myString.length)            //Log the length myString
 myString.replace(/,/g," ");
 console.log(myString.replace(/,/g," "));

 //The regular expression with g ensures that all of the commas are found and replaced.

