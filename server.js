const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.use((req,res,next) =>{
    res.render('middeware.hbs');

});


app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) =>{
//  res.send('<h1>Hello Express!</h1>');
//    res.send({
//        name: "Oleg",
//        likes: [
//           "Apple",
//            "Cola"
//        ]
//   });
res.render('index.hbs',{
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome to nodeJS lerning page'
});

});

app.get('/about', (req, res)=>{
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
     
    });
});

app.get('/bad', (req,res)=>{
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(3000, ()=>{
    console.log('Server is up on port 3000');

});