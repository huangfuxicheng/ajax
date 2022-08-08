const express = require('express')
const {response} = require("express");
const app = express();
app.use(express.static(__dirname+'/src'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.get('/test_get',(req, res)=>{
    res.send('hello world')
})
app.get('/test_get1',(req, res)=>{
    res.send('hello world')
    console.log(req.query)
})
app.get('/test_get2/:name/:age',(req, res)=>{
    res.send('hello world')
    console.log(req.params)
})
app.get('/get_person',(req, res)=>{
    const person = {name:'zs',age: 18, sex: '女'}
    res.send(JSON.stringify(person))
})
app.get('/get_person1',(req, res)=>{
    const person = {name:'zs',age: 18, sex: '女'}
    setTimeout(()=>{
            res.send(JSON.stringify(person))
        },3000
    )
})
app.post('/test_post',(req, res)=>{
    res.send('hello world')
    console.log(req.body)
})
app.listen(8080,(err)=>{
    if(!err) console.log('错误')
    console.log('http://127.0.0.1:8080/ajax小试牛刀.html')
})
