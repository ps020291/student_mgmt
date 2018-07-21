var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var bodyParser = require('body-parser');
var items = require("./items");
var features = require('./features/index');
var mongoDBConnect = require('./mdb').mongoDBConnect;
var mountApiRoutes = require("./api/api-routes");

// initilizing the express and storing it in app variable.
var app = express();
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

mongoDBConnect();

app.use(bodyParser.json());

mountApiRoutes(app);

// serving static resources like css, images
app.use("/", express.static(path.join(__dirname, 'public')));
app.use("/assets", express.static(path.join(__dirname, 'assets')));


// middleware : url logger

app.use((req,res,next)=>{
    console.log(req.url);
   // res.send('done');
   next();
});

// Defining routes
app.get("/", (request, response) => {
    response.render('index.html', {
        appname: "Express App",
        list: ['Grreen', 'Blue']
    });
});



app.get("/about", (request, response) => {
    response.render('about.html',{description:'Test content'});
});

/**
 * Search by query params
 */
app.get("/search", (request, response) => {

    var term = request.query.term;
    let filtered = items.filter(item => item.includes(term));
    response.render('search.html', {
        result: filtered,
        term: term
    });
});

/**
 * filter by params variables
 */
app.get("/filter/:keyword", (request, response) => {

    var term = request.params.keyword;
    let filtered = items.filter(item => item.includes(term));
    response.render('search.html', {
        result: filtered,
        term: term
    });
});

app.get("/api", (request, response) => {
    console.log(request.url);
    response.json({
        status: true,
        data: 'This is data',
        list: ['Grreen', 'Blue']
    });
});


// mounting features routes

features.bindFeatureRoutes(app);

// no routing after this endpoint
app.get("*", (req, res) => {
    res.send("Page not found!")
});
// Listining on port 3000
app.listen(3000, () => {
    console.log("Express server running at port 3000");
})