
var fs=require('fs');

console.log('start');


fs.readFile('sample.txt','utf8', function(e,data){
console.log(data);
// data.forEach(element => {
//     console.log(element);
// });
// console.log(e);
fs.readFile('sample1.txt','utf8', function(e,data){
    
    // setTimeout(function(){
        console.log(data);
    // },5000);
    // data.forEach(element => {
    //     console.log(element);
    // });
    // console.log(e);
    });
fs.readFile('sample2.txt','utf8', function(e,data){
    console.log(data);
    // data.forEach(element => {
    //     console.log(element);
    // });
    // console.log(e);
    });

});
console.log('end');