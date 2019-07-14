const express = require ('express')
const app = express()

app.use(date = (req, res, next) => {
    let date = new Date();
    let time = date.getHours();
    if (time > 17 || time <8){
        res.send('Our office is not open now')
    } else {next()}

})


app.get('/home', (req ,res) => {
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/ourservices', (req, res) => {
    res.sendFile(__dirname + '/public/ourservices.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
})

app.listen(3000, (err) =>{
    if (err) console.log('server is not running')
    else console.log('server is running on port 3000')
})
