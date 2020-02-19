const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mysql = require('mysql');


const myconection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'Rohit555@',
database : 'director'

});

myconection.connect(function(err){
if(err)
console.log(err);
else
console.log("sucess full connection");

});

const port = process.env.port || 8080;




const myapp = express()
.use(cors())
.use(bodyparser.json())


myapp.listen(port, ()=>{
console.log("port listening proprliy" + port);
});





    let mydata = "insert into G_diector(D_Name,D_Dejection,D_Salary)values(?,?,?)";
   let mydata1=['abc','rrwrw','89000'];
    myconection.query(mydata,mydata1,(err1,rows,fields)=>{
        if(!err1){
            console.log("INSERTED");
            myapp.get('/mydata',(req,res)=>{
                console.log("YES");
            var salry='33,000';
            
                myconection.query('select * from G_diector',[salry],(err,rows,fields)=>{
            if(!err)
            res.send(rows);
            else
            console.log(err);
            
                });
            });
        }
        
        else
        console.log(err1);
    });


