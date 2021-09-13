const { query } = require('express');
const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express();
const db = mysql.createConnection({
        host : 'localhost',
        user : 'donor',
        password : 'RajuRaja@1234',
        database : 'donors'

});
//rec=[];
app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*'); //http://localhost:3000,
	res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT,PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers','*');
	res.setHeader('Access-Control-Allow-Credentials','true');
	next();
});
db.connect((err)=>{
        if(err) throw err;
        console.log('Mysql connected....');
});

app.get('/',(req,res)=>{
    res.send('Hari OM');
});

app.get('/api/add',async (req,res)=>{
    const password = req.query.password;    
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    let users={       
        "name":req.query.name,       
        "email":req.query.email,       
        "password":encryptedPassword,
        "date":'2021-07-13'
    }        
    db.query('INSERT INTO donorinfo SET ?',users, function (error, results, fields) {      
            if (error) {        
                res.send({          
                    "code":400,          
                    "failed":"error occurred",          
                    "error" : error
                })      
            } else {        
                res.send({          
                    "code":200,          
                    "success":"user registered sucessfully"            
                });        
            }    
    });  


});
app.get('/api/user',(req,res)=>{
    //let pd=mysql.password(req.query.password);
    let sql = `select name,password,email from donorinfo where email=?`;
    let qry = db.query(sql,[req.query.email], async (err,results,fields)=>{
        if(err) throw err;
        //console.log(results);
        //const comparison = await bcrypt.compare(req.body.password, results[0].password);
        //if(true){
            //rec=[];
            Object.keys(results).forEach(async function(key){
                //console.log('fghfhf'+key);
                //if(key=='password'){
                //console.log(req.query.password);
                const comp=await bcrypt.compare(req.query.password, results[key].password);
                console.log('comp is:'+comp);
                if(comp){
                    //rec.push(results[key]);
                    res.send(JSON.parse(JSON.stringify(results)));
                }
                //}

                
            });
        //}
        console.log(JSON.parse(JSON.stringify(results)));
        //res.send(JSON.parse(JSON.stringify(results)));
        //res.send('not found');
    });
    
});
const port=process.env.PORT||3000;
app.listen(port,"0.0.0.0",()=>console.log(`started at port ${port} `));