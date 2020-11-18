
var fs=require('fs');
console.log('start');
fs.readFile('sample.txt','utf8', function(e,data){
    console.log(data);
    fs.readFile('sample1.txt','utf8', function(e,data){
        console.log(data);
        fs.readFile('sample2.txt','utf8', function(e,data){
            console.log(data);
        });
    });
    
});
console.log('end');