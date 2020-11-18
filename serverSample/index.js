var express = require('express')

var app =express()



app.get('/page1',(req,res) =>{
    console.log(req.path);
    var data={
        'data1':'1',
        'data2':'2',
        'data3':'3',
    }
    data.value ="Hello"
    res.send(data)
})

app.get('/pages/page1',(req,res)=>{

    console.log(req.url);
    var data1={'message': 'You are in /pages/page1'}
    res.send(data1)

})

app.get('/pages/page2',(req,res)=>{
    console.log(req.url);
    res.send('<html><body style="background-color:wheat">\
    <h2 style="color:blue;width:100%;text-align:center;padding-top:80px;">\
    You are in /pages/page2 \
    </h2>\
    </body></html>')

})



app.listen(5000,() => {
    console.log('Server Started\n=============================\nRunning At Port 5000\n=============================');
})