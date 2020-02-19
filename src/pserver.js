const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser') ;
const mysql = require('mysql');

const mycontect = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Rohit555@',
    database : 'director'

});

mycontect.connect(function(err1){
 if(err1)
 console.log(err1);
 else
 console.log('sucess full connecct');

});

const port = process.env.port || 8081;


const mydata = express()
.use(cors())
.use(bodyparser.json)

mydata.listen(port, ()=>{
    console.log("port listening proparly" + port);
});
mydata.get('/mydata',(req,res)=>{
    var salry='33,000';
    
        myconection.query('select * from G_diector where D_salary=?',[salry],(err,rows,fields)=>{
    if(!err)
    res.send(rows);
    else
    console.log(err);
    
        });
    });
mydata.get('/mydata1',(req,res)=>{
    console.log("working fine");

    let mydata = "insert into G_diector(D_Name,D_Dejection,D_Salary)values(?,?,?)";
    let mydata1=['prateek','programmer','89000'];
    mycontect.query(mydata,mydata1,(err1,rows,fields)=>{
        if(!err1)
        console.log("INSERTED");
        else
        console.log("err1");
    });

});
