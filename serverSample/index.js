var express = require("express");
var body_parser =require('body-parser')
var testts = require("./test")

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

var test = (async () => {
  // Pick one for your environment
  // npm install node-seal
  // yarn add node-seal
  //
  // ES6 or CommonJS
  // import SEAL from 'node-seal'
  const SEAL = require("node-seal")

  // Wait for the web assembly to fully initialize
  const seal = await SEAL()

  ////////////////////////
  // Encryption Parameters
  ////////////////////////

  // Create a new EncryptionParameters
  const schemeType = seal.SchemeType.BFV
  const securityLevel = seal.SecurityLevel.tc128
  const polyModulusDegree = 4096
  const bitSizes = [36, 36, 37]
  const bitSize = 20

  const encParms = seal.EncryptionParameters(schemeType)

  // Assign Poly Modulus Degree
  encParms.setPolyModulusDegree(polyModulusDegree)

  // Create a suitable set of CoeffModulus primes
  encParms.setCoeffModulus(
    seal.CoeffModulus.Create(polyModulusDegree, Int32Array.from(bitSizes))
  )

  // Assign a PlainModulus (only for BFV scheme type)
  encParms.setPlainModulus(
    seal.PlainModulus.Batching(polyModulusDegree, bitSize)
  )

  ////////////////////////
  // Context
  ////////////////////////

  // Create a new Context
  const context = seal.Context(encParms, true, securityLevel)

  // Helper to check if the Context was created successfully
  if (!context.parametersSet()) {
    throw new Error(
      "Could not set the parameters in the given context. Please try different encryption parameters."
    )
  }

  ////////////////////////
  // Keys
  ////////////////////////

  // Create a new KeyGenerator (use uploaded keys if applicable)
  const keyGenerator = seal.KeyGenerator(context)

  ////////////////////////
  // Variables
  ////////////////////////

  ////////////////////////
  // Instances
  ////////////////////////

  // Create an Evaluator
  const evaluator = seal.Evaluator(context)

  // Create a BatchEncoder (only BFV SchemeType)
  const batchEncoder = seal.BatchEncoder(context)

  ////////////////////////
  // Homomorphic Functions
  ////////////////////////

  // Encrypt a PlainText
  encryptor.encrypt(Qpw14xEC, Qpw14xEC)
})()


app.listen(5000, () => {
  console.log(
    "Server Started\n=============================\nRunning At Port 5000\n============================="
  );
  for (let i = 0; i < 1; i++) {
    // testts.testq
    console.log("test")
    test()
  }
});