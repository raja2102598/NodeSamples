var express = require("express");
var body_parser =require('body-parser')

var app =express()

//json object
app.use(body_parser.json())

app.post('/page',(req,res) =>{
  
  console.log(req.body)
  var reqData=req.body
  var data = {
    "data1": "1",
    "data2": "2",
    "data3": "3",
    "name":reqData.name,
    "year":reqData.year,
    "city":reqData.city,
  };
  data.value = "Hello";
  res.send(data);
})

//Url
app.use(body_parser.urlencoded({extended:true}))

app.post('/pages/page1',(req,res)=>{   
    
    console.log(req.url);
    console.log(req.body.hello);
    var data1={'message': 'You are in /pages/page1'}
    res.send(data1);

  })

//html page 
app.get('/pages/page2',(req,res)=>{

  console.log(req.url);
  res.send(
      '<html><body style="background-color:wheat">\
    <h2 style="color:blue;width:100%;text-align:center;padding-top:80px;">\
    You are in /pages/page2 \
    </h2>\
    </body></html>'
    );

})

//raw text
app.use(body_parser.raw({ type: 'text' }));

app.post('/pages/page3',(req,res)=>{

  console.log((req.body).toString());
  res.send('hello')

})

app.listen(5000, () => {
  console.log(
    "Server Started\n=============================\nRunning At Port 5000\n============================="
  );
});