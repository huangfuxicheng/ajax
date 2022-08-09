//引入express
const express = require('express')
const cors = require('cors')
const {response} = require("express");
//创建app实例对象
const app = express();
//暴露静态资源
app.use(express.static(__dirname+'/src'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.get('/test_get',(req, res)=>{
    res.send('hello world')
})
//响应get请求
//urlencoded
app.get('/test_get1',(req, res)=>{
    res.send('hello world')
    console.log(req.query)
})

app.get('/test_get2/:name/:age',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342')//*
    res.setHeader('Access-Control-Expose-Headers','*')//全部响应头返回前端
    res.send('hello world')

    console.log(req.params)
})
app.get('/get_person',(req, res)=>{
    const person = {name:'zs',age: 18, sex: '女'}
    res.send(JSON.stringify(person))
})
app.get('/get_person1_delay',(req, res)=>{
    const person = {name:'zs',age: 18, sex: '女'}
    setTimeout(()=>{
            res.send(JSON.stringify(person))
        },3000)
})
app.post('/test_post',(req, res)=>{
    res.send('hello world')
    console.log(req.body)
})

app.post('/test_jquery_post',(req, res)=>{
    const car = {name:'马自达1',price: "18w"}
    res.send(JSON.stringify(car))
})
app.get('/test_jquery_get',(req, res)=>{
    const car = {name:'马自达1',price: "18w"}
    res.send(JSON.stringify(car))
})
app.get('/test_jsonp',(request,response)=>{
    const {callback} = request.query
    // console.log(request)
    // response.send('alert(1)')
    // response.send('demo(1)')
    const person = {name:'tom',age:18}
    response.send(`${callback}(${JSON.stringify((person))})`)
})

app.options('/test_put',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Expose-Headers','*')
    response.setHeader('Access-Control-Allow-Methods','*')
    response.send() })
app.put('/test_put',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Expose-Headers','*')
    response.send('hello_test_put')
})

//监听
app.listen(8080,(err)=>{
    if(!err) console.log('ok')
    console.log('http://127.0.0.1:8080/1_ajax小试牛刀.html')
})
