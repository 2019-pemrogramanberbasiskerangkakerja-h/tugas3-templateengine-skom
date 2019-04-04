var express = require ('express');
var nunjucks  = require('nunjucks');

var app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'njk');
var env = nunjucks.configure(['views/'], { 
    autoescape: true, 
    express: app 
});

env.addFilter('myFilter', function(obj, arg1, arg2) {
    console.log('myFilter', obj, arg1, arg2);
 
    return obj;   
});
env.addGlobal('myFunc', function(obj, arg1) { 
    console.log('myFunc', obj, arg1);

    return obj; 
});

app.get('/', function(req, res){
    res.render('index.njk', {title: 'Main page'});    
});

app.listen(4000, function() {
    console.log('listening on port 4000 !');
});