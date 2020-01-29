//The reading list
let books=[{
    title:"One Hundred Years of Solitude",
    author:"Gabriel García Márquez ",
    alreadyRead:true
},
{
    title:"The Devil and Miss Prym",
    author:"Paulo Coelho",
    alreadyRead:false
},
{
    title:"A Passage to India",
    author:"E.M. Forster",
    alreadyRead:true
}
];
for(let  x of books){
 console.log(`${x.title} by ${x.author}`);
}
//Loop through the array of books.
//   for (let i =0;i<=books.length;i++){
//      for(let item in books[i]){
//         //  console.log(item +" : "+ books[i][item]);
      
//      }

for(let x=0;x<books.length;x++){
    if(books[x].alreadyRead===true){
        console.log("You already read"+books[x].title);
    }else{
        console.log("You still need to read"+books[x].title);
    }
}



