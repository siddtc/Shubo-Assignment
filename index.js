//init code
const express = require("express");
const app = express();
const axios = require("axios")
const payments = require('./sample')



//middleware
app.use(express.static('public'))
app.set('view engine','ejs');
const payment = axios.create({
    baseURL: 'https://dev.onebanc.ai/assignment.asmx/'
  });


app.get("/",(req,res)=>{
    // payment.get('GetTransactionHistory',{
    //     userId:1,
    //     recipientId:2
    // })
    // .then((pres)=>{
    //     console.log(pres)
    //     //  res.render(payment,{pdetails:pres})   //resposnse is filtered out and sent to the front end
    // })
    // .catch(e=>{
    //     console.log(e)
    // })
    res.render('payments',{payments:payments})
     
})



app.listen("3000",()=>{
    console.log("Server started at http://localhost:3000")
})