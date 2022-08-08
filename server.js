const express = require('express')


const app = express()
app.get('/',(request,response)=>{
    response.send('ok')
})
app.listen(8080,function (err) {
    if(!err) console.log('ok')
})